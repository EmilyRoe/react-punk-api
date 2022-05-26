import React from "react";
import MainPage from "./MainPage";
import { shallow } from "enzyme";

describe ("MainPage tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<MainPage />);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})
