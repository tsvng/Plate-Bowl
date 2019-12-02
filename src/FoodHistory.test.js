import { shallow } from "enzyme";
import { configure } from "enzyme";
import React from "react";
import FoodHistory from "./FoodHistory.js";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("test FoodHistory.js", () => {
  it('should render FoodHistory component', function() {
    var wrapper = shallow(<FoodHistory />);
  });
  it('should render initial layout', function() {
    var wrapper = shallow(<FoodHistory />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});


