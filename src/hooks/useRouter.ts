function useRouter() {
  const push = (path: string) => {
    history.pushState({ path }, "", path);
    const popStateEvent = new PopStateEvent("popstate");
    window.dispatchEvent(popStateEvent);
  };
  return { push };
}

export default useRouter;
