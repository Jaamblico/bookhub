import * as React from "react";
import * as Styled from "./Bookshelf.styled.js";

export function Bookshelf({ className, children }) {
  return <Styled.Bookshelf className={className}>{children}</Styled.Bookshelf>;
}
