import React from 'react';
import { shallow } from '../../enzyme';
import Moment from 'Moment';
import { DateInput } from '../DateInput/index';

let testBool = false;
let start = null;
let end = null;
const getLaunches = jest.fn((start, end) => {
        testBool = !testBool;
})
const mockStartChange = jest.fn((e) => {
    start = e.target.value
    console.log(start);
});
const mockEndChange = jest.fn((e) => {
    end = e.target.value;
    console.log(end);
})
describe("<DateInput />", () => {
    const wrapper = shallow(<DateInput getLaunches={getLaunches} />);
    describe("renders", () => {
        it("should render the input form", () => {
            expect(wrapper.find(".dateLabel").length).toEqual(2);
            expect(wrapper.find(".dateSubmit").exists()).toEqual(true);
        })
    });

    describe("submits", () => {
        wrapper.find(".dateSubmit").simulate("click", {
            preventDefault: () => {
            }
           });
        it("should submit new dates on click", () => {
            expect(testBool).toEqual(true);
        })
    })
})