import React from 'react';
import { shallow } from '../../enzyme';
import { Launches } from '../Launches';
import LaunchesData from './mocks/launchesData.mock.json';

describe("<Launches />", () => {

    describe("renders", ()=> {
        const wrapper = shallow(<Launches launchesData={LaunchesData.LaunchesArray} favorites = {[]}/>);
        it("launch cards", () => {
            expect(wrapper.find(".launches").exists()).toEqual(true);
            expect(wrapper.find(".launches").children().length).toEqual(6);
        })

    })
})