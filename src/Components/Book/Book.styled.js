import styled from "styled-components";

export const Book = styled.a`
  color: black;
  font-weight: bolder;
  padding: 0.5em;
  margin: auto;
  border-style: double;
  border-color: red;
  align-content: center;
  justify-content: space-between;
  transform: rotate(-90deg);
  font-size: 70%;
  width: 40%;
  min-width: 5em;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: flex;
  flex-shrink: 3;
  line-height: 1em;
  max-width: 10em;
  text-decoration: none;
  &:hover {
  }
`;
