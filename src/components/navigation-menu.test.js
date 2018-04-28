import React from "react";
import { shallow } from "enzyme";

import NavigationMenu from "./navigation-menu";

describe("<NavigationMenu />", () => {
  it("Renders without crashing", () => {
    shallow(<NavigationMenu />);
  });
})