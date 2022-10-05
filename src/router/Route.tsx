interface RouteProp {
  path: string;
  component: JSX.Element;
}

function Route(props: RouteProp) {
  const { component } = props;
  return component;
}

export default Route;
