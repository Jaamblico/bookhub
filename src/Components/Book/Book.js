import * as React from 'react'
import * as Styled from './Book.styled.js'

export function Book({Content}) {
  return (
      <Styled.Book >
        {Content}
      </Styled.Book>
  )
}
