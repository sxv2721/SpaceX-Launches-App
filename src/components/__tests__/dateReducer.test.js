import React from "react";
import { shallow } from "../../enzyme";
import { dateReducer } from "../DateInput/dateReducer";

describe("Date Reducer", () => {
    const DATE = "CHANGE_DATES";
    const RECEIVE = "RECEIVE_LAUNCHES";
    const ADD = "ADD_FAVORITE";
    const REMOVE = "REMOVE_FAVORITE";
    const defaultState = {
        startDate: null,
        endDate: null,
        isFetching: false,
        launchesData: [],
        favoritesData: ["removeTest"],
    };

    it("Should set startDate and endDate to the test values and isFetching to true", () => {
        const testAction = {
            type: DATE,
            payload: { start: "2013-09-25", end: "2014-09-25" },
        };
        let testState = dateReducer(defaultState, testAction);
        expect(testState.startDate).toEqual("2013-09-25");
        expect(testState.endDate).toEqual("2014-09-25");
        expect(testState.isFetching).toEqual(true);
    });
    it("should set launchesData equal to the payload and set isFetching to false", () => {
        const testAction = {
            type: RECEIVE,
            payload: [0, 1, 2, 3, 4, 5],
        };
        let testState = dateReducer(defaultState, testAction);
        expect(testState.launchesData.length).toEqual(6);
        expect(testState.launchesData[5]).toEqual(5);
        expect(testState.isFetching).toEqual(false);
    });
    it("should add a value to favoritesData", () => {
        const testAction = {
            type: ADD,
            payload: "addTest",
        };
        let testState = dateReducer(defaultState, testAction);
        expect(testState.favoritesData.length).toEqual(2);
        expect(testState.favoritesData[1]).toEqual("addTest");
    });
    it("should remove a value from favoritesData", () => {
        const testAction = {
            type: REMOVE,
            payload: "removeTest",
        };
        expect(defaultState.favoritesData.length).toEqual(1);
        expect(defaultState.favoritesData[0]).toEqual("removeTest");
        let testState = dateReducer(defaultState, testAction);
        expect(testState.favoritesData.length).toEqual(0);
    });
});
