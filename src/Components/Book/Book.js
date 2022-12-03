import * as React from "react";
import * as Styled from "./Book.styled.js";

export function Book({ Content, href }) {
  return <Styled.Book href={href}>{Content}</Styled.Book>;
}
