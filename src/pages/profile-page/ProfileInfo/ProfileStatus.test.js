import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in state", () => {
    const component = create(<ProfileStatus status="status" />);
    const instance = component.root;
    expect(instance.props.status).toBe("status");
  });

  test("span status should be corrected", () => {
    const component = create(<ProfileStatus status="status" />);
    const instance = component.root;
    // eslint-disable-next-line testing-library/await-async-query
    const span = instance.findByType("span");
    expect(span.props.children).toBe("status");
  });

  test("span should be displayed after component mounting", () => {
    const component = create(<ProfileStatus status="status" />);
    const instance = component.root;
    // eslint-disable-next-line testing-library/await-async-query
    const span = instance.findByType("span");
    expect(span).not.toBeNull();
  });

});
