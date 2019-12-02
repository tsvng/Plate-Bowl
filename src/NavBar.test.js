import { shallow } from "enzyme";
import { configure } from "enzyme";
import React from "react";
import NavBar from "./NavBar.js";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("test NavBar.js", () => {
  it('should render NavBar component', function() {
    var wrapper = shallow(<NavBar />);
  });
  it('should render initial layout', function() {
    var wrapper = shallow(<NavBar />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});


