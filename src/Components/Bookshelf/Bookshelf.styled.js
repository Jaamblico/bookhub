import styled from "styled-components";

export const BookshelfInner = styled.div`
  transform-style: preserve-3d;
  display: flex;
  flex-wrap: wrap;
  flex-basis: auto;
  align-items: center;
  align-content: space-evenly;
  justify-content: center;
  transition: transform 0.8s;
  will-change: transform;
  width: 90%;
`;

export const BookshelfTitle = styled.h2`
  font-size: 200%;
`;

// width: 100%;
// flex: 0 0 auto;
// flex-direction: row;
// flex-wrap: wrap;
// align-content: space-evenly;
// align-items: center;
// -webkit-backface-visibility: hidden;
// backface-visibility: hidden;

export const BookshelfFront = styled.div`
  width: 100%;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: space-evenly;
  backface-visibility: hidden;
`;

export const BookshelfBack = styled.div`
  width: 100%;
  transform: rotateY(180deg);
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-evenly;
  flex-basis: auto;
  flex-shrink: 3;
  justify-content: center;
  margin-left: -100%;
  row-gap: 0.5em;
  backface-visibility: hidden;
`;

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
  padding: 1em;
  &:active ${BookshelfInner} {
    transform: rotateY(180deg);
  }
`;
