import styled from "styled-components";

export const Bookshelf = styled.div`
  background-color: transparent;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  border-style: solid;
  border-width: thick;
  border-color: black;
  min-height: 10em;
  min-width: 50%;
  padding: 1em;
  &:active .bookShelf-inner {
    transform: rotateY(180deg);
  }
`;
