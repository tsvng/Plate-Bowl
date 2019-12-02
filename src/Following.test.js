import { shallow } from "enzyme";
import { configure } from "enzyme";
import React from "react";
import Following from "./Following.js";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("test Following.js", () => {
  it('should render Following component', function() {
    var wrapper = shallow(<Following />);
  });
  it('should render initial layout', function() {
    var wrapper = shallow(<Following />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});


