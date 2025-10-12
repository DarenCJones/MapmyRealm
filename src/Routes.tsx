import { useRoutes } from "react-router";

import Home from 'routes/Home';
import About from "routes/About";
import Contact from "routes/Contact";
import Tutorial from "routes/Tutorial";
import TutorialDetail from "routes/Tutorial/Detail";
import Project from 'routes/Project'
import ProjectDetail from 'routes/Project/Detail'

export default function Routes() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: '/tutorial',
      children: [
        { index: true, element: <Tutorial />},
        { path: ':idTutorial', element: <TutorialDetail /> }
      ]
    },
    {
      path: '/project',
      children: [
        { index: true, element: <Project />},
        { path: ':idProject', element: <ProjectDetail /> }
      ]
    }
  ]);

  return <div className='page'>{routes}</div>;
}
