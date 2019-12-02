import { shallow } from "enzyme";
import { configure } from "enzyme";
import React from "react";
import BucketList from "./BucketList.js";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("test BucketList.js", () => {
  it('should render BucketList component', function() {
    var wrapper = shallow(<BucketList />);
  });
  it('should render initial layout', function() {
    var wrapper = shallow(<BucketList />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});


