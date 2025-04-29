import { Link } from "react-router";
import LinkedIn from "assets/LinkedIn.svg";

export default function Footer() {
  return (
    <div className="fixed w-screen bottom-0 h-6 flex flex-row justify-center space-x-6 bg-black text-grey-400">
      <span>
        <Link to="/">Mapmyrealm.com</Link>
        <span>{" by Daren Jones is licensed under "}</span>
        <Link to="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1">
          CC BY-NC-SA 4.0
        </Link>
        <span className="inline-flex ml-2 align-text-top">
          <img
            className="h-5"
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
            alt=""
          />
          <img
            className="h-5"
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
            alt=""
          />
          <img
            className="h-5"
            src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
            alt=""
          />
          <img
            className="h-5"
            src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"
            alt=""
          />
        </span>
      </span>
      <Link
        className="flex flex-row"
        to="https://www.linkedin.com/in/darencjones/"
      >
        <img className="mr-1 my-1" src={LinkedIn} alt="LinkedIn logo" />
        <span>LinkedIn</span>
      </Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}
