import useRouter from "../hooks/useRouter";
import Layout from "../components/Layout";

function About() {
  const { push } = useRouter();
  const moveToMain = () => {
    push("/");
  };

  return (
    <Layout currentPage="about" targetPage="go main" onClick={moveToMain} />
  );
}

export default About;
