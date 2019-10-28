import React from "react";
import { shallow } from "../../enzyme";
import { Launches } from "../Launches";
import LaunchesData from "./mocks/launchesData.mock.json";

describe("<Launches />", () => {
    describe("renders", () => {
        const wrapper = shallow(
            <Launches
                launchesData={LaunchesData.LaunchesArray}
                favorites={[]}
            />
        );
        it("launch cards", () => {
            expect(wrapper.find(".launches").exists()).toEqual(true);
            expect(wrapper.find(".launches").children().length).toEqual(6);
        });
    });
    describe("Helper Functions", () => {
        const realFavorite = { flight_number: 0 };
        const fakeFavorite = { flight_number: 1 };
        const wrapper = shallow(
            <Launches
                launchesData={LaunchesData.LaunchesArray}
                favorites={[realFavorite]}
            />
        );

        describe("check favorites", () => {
            it("should return true if the data is in the favorites list", () => {
                expect(wrapper.instance().checkFavorites(realFavorite)).toEqual(
                    true
                );
            });
            it("should return false if the data is not in the favorites list", () => {
                expect(wrapper.instance().checkFavorites(fakeFavorite)).toEqual(
                    false
                );
            });
        });
    });
});
