import { Link } from "react-router";
import LinkedIn from "../assets/LinkedIn.svg";

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
      {/*<p
        xmlns:cc="http://creativecommons.org/ns#"
        xmlns:dct="http://purl.org/dc/terms/"
        className="inline"
      >
        <a
          property="dct:title"
          rel="cc:attributionURL"
          href="http://Mapmyrealm.com"
        >
          Mapmyrealm.com
        </a>
        by
        <span property="cc:attributionName">Daren Jones</span>
        is licensed under
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
          target="_blank"
          rel="license noopener noreferrer"
          className="inline"
        >
          CC BY-NC-SA 4.0
          <img
            className="h-6 ml-1 align-text-bottom"
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
            alt=""
          />
          <img
            className="h-6 ml-1 align-text-bottom"
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
            alt=""
          />
          <img
            className="h-6 ml-1 align-text-bottom"
            src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
            alt=""
          />
          <img
            className="h-6 ml-1 align-text-bottom"
            src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"
            alt=""
          />
        </a>
      </p>*/}

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
