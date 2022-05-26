import React from "react";
import CardList from "./CardList";
import { shallow } from "enzyme";
import beerData from "../../data/beers"

describe ("CardList tests", () => {
    let component;

    beforeEach(() => {
        const beers = beerData[0].beer
        component = shallow(<CardList beers={beers}/>);
    })

    it("should render", () => {
        expect(component).toBeTruthy();
    })
})
