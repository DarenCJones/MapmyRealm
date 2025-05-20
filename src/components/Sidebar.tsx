import { Link } from "react-router";

export default function Sidebar() {
  return (
    <div className="absolute h-[calc(100vh-24px)] w-[72px] top-0 bg-red-100">
      <ul className="m-2">
        <Link to="/">About</Link>
      </ul>
      <ul className="m-2 mt-4">
        <Link to="/contact">Contact</Link>
      </ul>
      <ul className="m-2 mt-4">
        <Link to="/tutorial">Tutorial</Link>
      </ul>
    </div>
  );
}
