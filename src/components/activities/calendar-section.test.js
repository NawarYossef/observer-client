import React from "react";
import { shallow } from "enzyme";

import { CalendarSection } from "./calendar-section";

describe("<CalendarSection />", () => {
  it("Renders without crashing", () => {
    shallow(<CalendarSection />);
  });
})