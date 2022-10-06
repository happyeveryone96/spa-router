function useRouter() {
  const push = (path: string) => {
    history.pushState(null, "", path);
    const popStateEvent = new PopStateEvent("popstate");
    window.dispatchEvent(popStateEvent);
  };
  return { push };
}

export default useRouter;
