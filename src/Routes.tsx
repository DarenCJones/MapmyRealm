import { useRoutes } from "react-router";

import About from "routes/About";
import Contact from "routes/Contact";
import Tutorial from "routes/Tutorial";

export default function Routes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/tutorial",
      element: <Tutorial />,
    },
  ]);

  return <>{routes}</>;
}
