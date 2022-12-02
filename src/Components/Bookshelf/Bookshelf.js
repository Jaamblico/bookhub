import * as React from "react";
import * as Styled from "./Bookshelf.styled.js";


export function BookshelfInner({children}){
  return <Styled.BookshelfInner> {children} </Styled.BookshelfInner>
}

export function BookshelfFront({children}){
  return <Styled.BookshelfFront> {children} </Styled.BookshelfFront>
}

export function BookshelfBack({children}){
  return <Styled.BookshelfBack> {children} </Styled.BookshelfBack>
}

export function Bookshelf({ className, children }) {
  return <Styled.Bookshelf className={className}>{children}</Styled.Bookshelf>;
}
