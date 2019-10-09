import React from 'react';
import { shallow } from '../../enzyme';
import { Launches } from '../Launches';
import LaunchesData from './mocks/launchesData.mock.json';

describe("<Launches />", () => {

    describe("renders", ()=> {
        const wrapper = shallow(<Launches launchesData={LaunchesData.LaunchesArray} favorites = {[]}/>);
        //console.log(LaunchesData.LaunchesArray);
        it("launch cards", () => {
            expect(wrapper.find("Launch").exists()).toEqual(true);
        })

    })
})