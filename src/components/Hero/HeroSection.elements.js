import styled from "styled-components";
import img1 from "../../img/word-image.jpeg";

export const Img1 = styled.div`
  background-image: url(${img1});
  width: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
`;
export const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2); */
`;
