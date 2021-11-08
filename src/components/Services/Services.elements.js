import { Link } from "react-router-dom";
import styled from "styled-components";

export const ServicesContainter = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  font-size: 1rem;
  color: black;
`;

export const Header_ParrafoServic = styled.h1`
  color: #000000;
  margin-top: 4rem;
  text-align: center;
`;

export const CardContainter = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  color: #000;
  position: relative;
  margin: 50px 0 45px;
`;

export const Cards__item__img = styled.img`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Cards__item = styled.li`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;

  @media only screen and (min-width: 960px) {
    flex: 1;
    margin: 0 1rem;
    border-radius: 10px;
  }
`;

export const Cards__item__link = styled(Link)`
  display: flex;
  flex-flow: column;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  @media only screen and (max-width: 960px) {
    max-width: 80%;
  }
`;

export const Cards__items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const Cards__item__pic = styled.figure`
  position: relative;
  width: 100%;
  overflow: hidden;
  &::after {
    content: attr(data-category);
    position: absolute;
    bottom: 0;
    margin-left: 10px;
    padding: 6px 8px;
    max-width: calc((100%) - 60px);
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    background-color: #1f98f4;
    box-sizing: border-box;
  }
`;
