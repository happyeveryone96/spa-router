import styled from "styled-components";
import { Container } from "./Container";

interface LayoutProp {
  currentPage: string;
  targetPage: string;
  onClick: () => void;
}

function Layout(props: LayoutProp) {
  const { currentPage, targetPage, onClick } = props;

  return (
    <Container>
      {currentPage}
      <Button onClick={onClick}>{targetPage}</Button>
    </Container>
  );
}

const Button = styled.button`
  cursor: pointer;
  background-color: black;
  font-size: 20px;
  margin: 30px;
  border: 0;
  color: white;
  width: 100px;
  height: 40px;
`;

export default Layout;
