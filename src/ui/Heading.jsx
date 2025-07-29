import styled from "styled-components";

const test = `text-align: center`;

const Header = styled.h1`
  font-size: 20px;
  font-weight: 600;
  background-color: yellow;
  ${test}
`;

function Heading() {
  return <div></div>;
}

export default Heading;
