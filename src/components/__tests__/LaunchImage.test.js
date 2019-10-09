import React from 'react';
import { shallow } from '../../enzyme';

import { LaunchImage } from '../Launch/components/LaunchImage';
import { exportAllDeclaration } from '@babel/types';

describe("< LaunchImage />", () => {
    it("should render image data", () => {

        const links = {
            mission_patch: "https://images2.imgbox.com/37/c4/jRAk115c_o.png",
            flickr_images: [
                "https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg",
                "https://farm8.staticflickr.com/7619/16763151866_35a0a4d8e1_o.jpg",
                "https://farm9.staticflickr.com/8569/16169086873_4d8829832e_o.png"
            ]
        }
        const wrapper = shallow(<LaunchImage links={links} />);

        expect(wrapper.find(".launchImg").exists()).toEqual(true);
        expect(wrapper.find(".showImagesButton").exists()).toEqual(true);
        expect(wrapper.find(".flickr").exists()).toEqual(false);
        wrapper.find('.showImagesButton').simulate('click');
        expect(wrapper.find(".flickr").exists()).toEqual(true);
    });

    it("shouldn't render button", () => {//shouldn't render button when data doesn't exist

        const links = {
            mission_patch: "https://images2.imgbox.com/37/c4/jRAk115c_o.png",
            flickr_images: [
            ]
        }
        const wrapper = shallow(<LaunchImage links={links} />);

        expect(wrapper.find(".launchImg").exists()).toEqual(true);
        expect(wrapper.find(".showImagesButton").exists()).toEqual(false);
        expect(wrapper.find(".flickr").exists()).toEqual(false);
    });
})