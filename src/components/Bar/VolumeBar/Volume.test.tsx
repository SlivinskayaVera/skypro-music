import renderer from "react-test-renderer";
import { VolumeBar } from "./VolumeBar";

describe("Volume bar", () => {
  test("correct display", () => {
    const component = renderer.create(<VolumeBar audioRef={null} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
