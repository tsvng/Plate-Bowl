import { shallow } from "enzyme";
import { configure } from "enzyme";
import React from "react";
import Home from "./Home.js";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("test Home.js", () => {
  it('should render Home component', function() {
    var wrapper = shallow(<Home />);
  });
  it('should render initial layout', function() {
    var wrapper = shallow(<Home />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});


