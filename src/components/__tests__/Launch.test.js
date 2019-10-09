import React from 'react';
import { shallow } from '../../enzyme';
import Moment from 'Moment';

import { Launch } from '../Launch/';
import data from './mocks/data.mock.json';
import noDetails from './mocks/noDetails.mock.json';
/*
            links
            mission_name
            launch_date_utc
            details
            rocket.second_stage.payloads
            flight_number
        */



describe("<Launch />", () => {
    let favorites = [];

    const addFavorite = (fav) => {
        favorites.push(fav);
    }
    const removeFavorite = (fav) => {
        let index = favorites.indexOf(fav);
        favorites.splice(index, 1);
    }
    const getWrapper = (props) => {
        return shallow(<Launch {...props} />);
    }
    describe("renders a", () => {
        const wrapper = getWrapper({ data });

        describe('title and date', () => {

            //const instance = wrapper.instance();
            //expect(wrapper.props()).toEqual(data);
            it('renders properly', () => {
                const launchTitle = wrapper.find('.launchTitle').text();
                const launchDate = wrapper.find('.launchDate').text();
                expect(launchTitle).toEqual(data.mission_name);
                expect(launchDate).toEqual(Moment(data.launch_date_utc).format('MMMM Do YYYY, h:mm:ss a'));

            });
        });


        describe("description", () => {

            it('opens description when clicked', () => {
                expect(wrapper.find(".launchDesc").exists()).toEqual(false);
                wrapper.find('.descButton').simulate('click');
                expect(wrapper.find('.launchDesc').text()).toEqual(data.details);
            })

            it("shouldn't render details button without details data", () => {
                const noDetailsWrapper = getWrapper({ data: noDetails });

                expect(noDetailsWrapper.find(".descButton").exists()).toEqual(false);
                expect(noDetailsWrapper.find(".launchDesc").exists()).toEqual(false);
            });
        })
        describe("Payload", () => {
            it("should render", () => {
                const payload = wrapper.find("Payload");
                expect(payload.exists()).toEqual(true);
            })
        });

    });

    describe("when you click", () => {
        describe("the favorites button", () => {
            it("should add a favorite", () => {
                const wrapper = getWrapper({ data, addFavorite, removeFavorite, heart: false })
                wrapper.find('.favoriteButton').simulate('click');
                expect(favorites[favorites.length - 1]).toEqual(data);
            })
            it("should remove the favorite", () => {

                const wrapper = getWrapper({ data, addFavorite, removeFavorite, heart: true })
                const length = favorites.length;
                wrapper.find('.favoriteButton').simulate('click');
                expect(favorites.length).toEqual(length - 1);
            })

        })
        describe("the launch card", () => {
            const wrapper = getWrapper({data});
            it("should open the description", () => {
                wrapper.simulate("click");
                
            })
        });
    });

})