import React from "react";
import { shallow } from "enzyme";

import { HeaderNavbar } from "./header-navbar";

describe("<HeaderNavbar />", () => {
  it("Renders without crashing", () => {
    shallow(<HeaderNavbar />);
  });
})