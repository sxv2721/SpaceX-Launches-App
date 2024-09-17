import React from "react";
import { shallow } from "../../enzyme";
import {
    //getLaunches,
    fetchLaunches,
    receiveLaunches,
    addFavorite,
    removeFavorite,
} from "../DateInput/actions";

describe("Redux Actions", () => {
    const testPayload = "testPayload";
    const testStartDate = "2013-09-25";
    const testEndDate = "2014-09-25";

    describe("Get Launches", () => {
        it("should return launch data", () => {
            //const testReturn = getLaunches(testStartDate, testEndDate);
            //console.log(testReturn);
        });
    });

    describe("Fetch Launches", () => {
        const fetchLaunchesValue = fetchLaunches(testPayload);
        it("should return CHANGE_DATES and Payload", () => {
            expect(fetchLaunchesValue).toEqual({
                type: "CHANGE_DATES",
                payload: testPayload,
            });
        });
    });
    describe("Receive Launces", () => {
        const receiveLaunchesValue = receiveLaunches(testPayload);
        it("should return RECEIVE_LAUNCHES and Payload", () => {
            expect(receiveLaunchesValue).toEqual({
                type: "RECEIVE_LAUNCHES",
                payload: testPayload,
            });
        });
    });
    describe("Add Favorite", () => {
        const addFavoriteValue = addFavorite(testPayload);
        it("should return ADD_FAVORITE and Payload", () => {
            expect(addFavoriteValue).toEqual({
                type: "ADD_FAVORITE",
                payload: testPayload,
            });
        });
    });
    describe("Remove Favortie", () => {
        const removeFavoriteValue = removeFavorite(testPayload);
        it("should return REMOVE_FAVORITE and Payload", () => {
            expect(removeFavoriteValue).toEqual({
                type: "REMOVE_FAVORITE",
                payload: testPayload,
            });
        });
    });
});
