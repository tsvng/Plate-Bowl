import { shallow } from "enzyme";
import { configure } from "enzyme";
import React from "react";
import Leaderboard from "./Leaderboard.js";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("test Leaderboard.js", () => {
  it('should render Leaderboard component', function() {
    var wrapper = shallow(<Leaderboard />);
  });
  it('should render initial layout', function() {
    var wrapper = shallow(<Leaderboard />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});


