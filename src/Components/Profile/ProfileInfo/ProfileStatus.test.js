import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in state", () => {
    const component = create(<ProfileStatus status="status" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("status");
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
  test("input value should be equal to span value after clicking span", () => {
    const component = create(<ProfileStatus status="status" />);
    const instance = component.root;
    // eslint-disable-next-line testing-library/await-async-query
    const span = instance.findByType("span");
    span.props.onClick();
    // eslint-disable-next-line testing-library/await-async-query
    const input = instance.findByType("input");
    expect(input.props.value).toBe("status");
  });
  test("callBack should be called", () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatus status="status" updateStatus={mockCallback} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
