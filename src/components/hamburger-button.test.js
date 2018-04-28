import React from "react";
import { shallow } from "enzyme";

import HamburgerButton from "./hamburger-button";

describe("<HamburgerButton />", () => {
  it("Renders without crashing", () => {
    shallow(<HamburgerButton />);
  });
})