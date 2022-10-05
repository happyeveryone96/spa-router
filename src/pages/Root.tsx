import useRouter from "../hooks/useRouter";
import Layout from "../components/Layout";

function Root() {
  const { push } = useRouter();
  const moveToAbout = () => {
    push("/about");
  };

  return <Layout currentPage="root" targetPage="about" onClick={moveToAbout} />;
}

export default Root;
