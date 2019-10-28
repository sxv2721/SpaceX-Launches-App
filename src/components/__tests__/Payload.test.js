import React from "react";
import { shallow } from "../../enzyme";

import { Payload } from "../Launch/components/Payload";

describe("Payloads Render", () => {
    it("should render payload data", () => {
        const payload = [
            {
                payload_id: "testPayload",
                nationality: "testCountry",
                payload_type: "testType",
            },
        ];

        const wrapper = shallow(<Payload payloads={payload} />);
        expect(wrapper.find(".payloadTitle").exists()).toEqual(false);
        expect(wrapper.find(".payloadDesc").exists()).toEqual(false);
        wrapper.find(".payloadButton").simulate("click");
        expect(
            wrapper.contains(
                <dd className="payloadDesc">{payload[0].payload_id}</dd>
            )
        ).toEqual(true);
        expect(
            wrapper.contains(
                <dd className="payloadDesc">{payload[0].payload_type}</dd>
            )
        ).toEqual(true);
        expect(
            wrapper.contains(
                <dd className="payloadDesc">{payload[0].nationality}</dd>
            )
        ).toEqual(true);
    });
});
