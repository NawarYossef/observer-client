import React from "react";

import { shallow } from "enzyme";

import HeaderContent from "../header-content";

describe("<HeaderContent />", () => {
  it("Renders without crashing", () => {
    shallow(<HeaderContent />);
  });
});