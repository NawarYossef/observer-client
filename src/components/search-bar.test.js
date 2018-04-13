import React from "react";
import { shallow } from "enzyme";

import SearchBar  from "./search-bar";

describe("<SearchBar />", () => {
  it("Renders without crashing", () => {
    shallow(<SearchBar />);
  });
})