import React from "react";
import { shallow } from "enzyme";

import  AddNewContactButton  from "./add-new-contact-button";

describe("<AddNewContactButton />", () => {
  it("Renders without crashing", () => {
    shallow(<AddNewContactButton />);
  });
})