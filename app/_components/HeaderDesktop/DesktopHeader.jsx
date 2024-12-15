import HeaderOne from "./HeaderOne/HeaderOne";
import HeaderThree from "./HeaderThree/HeaderThree";
import HeaderTwo from "./HeaderTwo/HeaderTwo";

export default function DesktopHeader() {
  return (
    <div className="w-full">
      <HeaderOne />
      <HeaderTwo />
      <HeaderThree />
    </div>
  );
}
