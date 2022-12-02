import * as React from "react";
import * as Styled from "./Bookshelf.styled.js";

export function BookshelfInner({ children }) {
  return <Styled.BookshelfInner> {children} </Styled.BookshelfInner>;
}

export function BookshelfFront({ children }) {
  return <Styled.BookshelfFront> {children} </Styled.BookshelfFront>;
}

export function BookshelfBack({ children }) {
  return <Styled.BookshelfBack> {children} </Styled.BookshelfBack>;
}

export function BookshelfTitle({ content }) {
  return <Styled.BookshelfTitle>{content}</Styled.BookshelfTitle>;
}

export function Bookshelf({ shelfName, children }) {
  return (
    <Styled.Bookshelf>
      <Styled.BookshelfInner>
        <Styled.BookshelfFront>
          <BookshelfTitle content={shelfName} />
        </Styled.BookshelfFront>
        <Styled.BookshelfBack> {children} </Styled.BookshelfBack>
      </Styled.BookshelfInner>
    </Styled.Bookshelf>
  );
}
