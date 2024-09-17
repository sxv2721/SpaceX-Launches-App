import React from "react";
import { mount } from "../../enzyme";
import { MemoryRouter } from "react-router-dom";
import { RoutedMission } from "../RoutedMission/index";
import mockData from "./mocks/data.mock.json";
import noDetails from "./mocks/noDetails.mock.json";

describe("<RoutedMission />", () => {
    let favorites = [];

    const addFavorite = (fav) => {
        favorites.push(fav);
    };
    const removeFavorite = (fav) => {
        let index = favorites.indexOf(fav);
        favorites.splice(index, 1);
    };
    const getMissionMock = jest.fn(() => {});
    const createWrapper = (id) => {
        RoutedMission.prototype.getMission = getMissionMock;
        return mount(
            <MemoryRouter>
                <RoutedMission
                    match={{ params: { missionId: id } }}
                    favorites={[]}
                    addFavorite={addFavorite}
                    removeFavorite={removeFavorite}
                />
            </MemoryRouter>
        );
    };
    describe("on mount", () => {
        const wrapper = createWrapper(0);
        const routedMissionWrapper = wrapper.find("RoutedMission");
        it("should call get missions", () => {
            expect(getMissionMock).toBeCalledWith(0);
        });
        it("should not be favorited on the missions route", () => {
            expect(routedMissionWrapper.state().isFavorited).toEqual(false);
        });
    });
    describe("on favorite", () => {
        const wrapper = createWrapper(0);
        const routedMissionWrapper = wrapper.find("RoutedMission");
        it("should be unfavorited before and favorited after onFavorite is run", () => {
            expect(routedMissionWrapper.state().isFavorited).toEqual(false);
            routedMissionWrapper.instance().onFavorite(null);
            expect(routedMissionWrapper.state().isFavorited).toEqual(true);
        });
    });
    describe("renders", () => {
        const wrapper = createWrapper(0);
        const routedMissionWrapper = wrapper.find("RoutedMission");
        const setMissionData = (data) => {
            routedMissionWrapper.setState({
                missionData: data,
            });
            wrapper.update();
        };
        it("should render a routedMission div", () => {
            setMissionData(mockData);
            expect(
                routedMissionWrapper.find(".routedMission").exists()
            ).toEqual(true);
        });
        describe("NavLinks", () => {
            setMissionData(mockData);
            it("should render a link home", () => {
                expect(routedMissionWrapper.find(".linkHome").exists()).toEqual(
                    true
                );
            });

            it("should render a link to or away from the favorites route", () => {
                expect(
                    routedMissionWrapper.find(".favoriteButton").exists()
                ).toEqual(true);
            });
        });
        describe("images", () => {
            setMissionData(mockData);
            it("should render the mission patch", () => {
                expect(
                    routedMissionWrapper.find(".launchImg").exists()
                ).toEqual(true);
            });
            it("should render the flickr images", () => {
                const flickr = routedMissionWrapper.find(".flickr");
                expect(flickr.exists()).toEqual(true);
                expect(flickr.text()).not.toEqual("No Images");
            });
        });
        describe("description", () => {
            setMissionData(mockData);
            it("should render the details section", () => {
                const desc = routedMissionWrapper.find(".launchDesc");
                expect(desc.exists()).toEqual(true);
                expect(desc.text()).toEqual("testDetails");
            });
        });
    });
    describe("no input", () => {
        const wrapper = createWrapper(0);
        const routedMissionWrapper = wrapper.find("RoutedMission");
        routedMissionWrapper.setState({
            missionData: noDetails,
        });
        wrapper.update();
        wrapper.instance().forceUpdate();
        it("should render no images when there aren't any flickr images", () => {
            expect(routedMissionWrapper.find(".flickr").text()).toEqual(
                "No Images"
            );
        });
        it("should render no details when there is no details input", () => {
            expect(routedMissionWrapper.find(".launchDesc").text()).toEqual(
                "No Details"
            );
        });
    });
});
