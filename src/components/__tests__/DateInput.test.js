import React from "react";
import { shallow, mount } from "../../enzyme";
import Moment from "Moment";
import { DateInput } from "../DateInput/index";

describe("<DateInput />", () => {
    let start = "2002-05-06";
    let end = Moment().format("YYYY-MM-DD");
    const getLaunchesMock = jest.fn((start, end) => "getting Launches");
    const mockStartChange = jest.fn((e) => {
        start = e.target.value;
        console.log(start);
    });
    const mockEndChange = jest.fn((e) => {
        end = e.target.value;
        console.log(end);
    });
    DateInput.prototype.getLaunches = getLaunchesMock;
    const wrapper = shallow(
        <DateInput fetchLaunches={jest.fn()} receiveLaunches={jest.fn()} />
    );
    wrapper.instance().getLaunches = getLaunchesMock;
    wrapper.update();

    describe("renders", () => {
        it("should render the input form", () => {
            expect(wrapper.find(".dateLabel").length).toEqual(2);
            expect(wrapper.find(".dateSubmit").exists()).toEqual(true);
        });
    });
    describe("change date inputs", () => {
        const onChangeMock = jest.fn();
        const testDate = "2013-9-25";
        const event = {
            preventDefault() {},
            target: { value: testDate },
        };
        it("should change the start date", () => {
            wrapper.find(".startDate").simulate("change", event);
            expect(wrapper.find(".startDate").props().value).toEqual(testDate);
        });
        it("should change the end date", () => {
            wrapper.find(".endDate").simulate("change", event);
            expect(wrapper.find(".endDate").props().value).toEqual(testDate);
        });
    });
    describe("submits", () => {
        wrapper.find(".dateSubmit").simulate("click", {
            preventDefault: () => {},
        });
        it("should submit new dates on click", () => {
            //expect(testBool).toEqual(true);
            expect(getLaunchesMock).toBeCalledWith(start, end);
        });
    });
});
