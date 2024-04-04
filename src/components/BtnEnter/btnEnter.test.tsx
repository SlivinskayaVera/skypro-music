import { BtnEnter } from "./BtnEnter";
import renderer from "react-test-renderer";

describe("Login button", () => {
  test("is the button name displayed correctly", () => {
    const component = renderer.create(<BtnEnter title="React" />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
