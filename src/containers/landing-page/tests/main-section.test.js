import React from "react";

import { shallow } from "enzyme";

import MainSection from "../main-section";

describe("<MainSection />", () => {
  it("Renders without crashing", () => {
    shallow(<MainSection />);
  });
});