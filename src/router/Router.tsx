import { useEffect, useState } from "react";
import NotFound from "../pages/NotFound";

interface RouterProp {
  children: JSX.Element[];
}

function Router({ children }: RouterProp) {
  const path = window.location.pathname;
  const currentRoute = children.filter((child) => child.props.path === path)[0];

  const [_, setCurrentPath] = useState(path);
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  if (currentRoute === undefined) return <NotFound />;
  else return currentRoute;
}

export default Router;
