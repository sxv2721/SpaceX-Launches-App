import React from "react";
import { shallow } from "../../enzyme";
import { Favorites } from "../Favorites";
import { Launch } from "../Launch";

describe("<Favorites /> ", () => {
    it("Renders Launch Data", () => {
        const data = [
            {
                links: {
                    mission_patch:
                        "https://images2.imgbox.com/37/c4/jRAk115c_o.png",
                    flickr_images: [
                        "https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg",
                        "https://farm8.staticflickr.com/7619/16763151866_35a0a4d8e1_o.jpg",
                        "https://farm9.staticflickr.com/8569/16169086873_4d8829832e_o.png",
                    ],
                },
                mission_name: "test",
                launch_date_utc: "2014-01-06T18:06:00.000Z",
                details: "testDetails",
                rocket: {
                    second_stage: {
                        payloads: [
                            {
                                payload_id: "testPayload",
                                nationality: "testCountry",
                                payload_type: "testType",
                            },
                        ],
                    },
                }, //Id type nationality
                flight_number: 0,
            },
        ];
        const wrapper = shallow(<Favorites favorites={data} />);

        //expect(wrapper.contains(<Launch data = {data[0]}/>)).toEqual(true);
        expect(wrapper.find(".favTitle").exists()).toEqual(true);
        expect(wrapper.find(".favorites").exists()).toEqual(true);
    });
    it("shouldn't render favtitle with no data", () => {
        const data = [];

        const wrapper = shallow(<Favorites favorites={data} />);

        expect(wrapper.find(".favTitle").exists()).toEqual(false);
        expect(wrapper.find(".favorites").exists()).toEqual(false);
    });
});
