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

export function BookshelfTitle({Content}){
  return <Styled.BookshelfTitle> {Content} </Styled.BookshelfTitle>
}

export function Bookshelf({Content, children }) {
  return <Styled.Bookshelf shelfName = {Content}>
     <Styled.BookshelfInner>
      <Styled.BookshelfFront><BookshelfTitle>{Content}</BookshelfTitle></Styled.BookshelfFront>
      <Styled.BookshelfBack> {children} </Styled.BookshelfBack>
      </Styled.BookshelfInner>
  </Styled.Bookshelf>;
}
