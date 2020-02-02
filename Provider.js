import React from 'react'
import ThemeProvider  from 'mdx-deck/dist/Provider'

const Provider = ({ children, ...rest }) => (
  <ThemeProvider {...rest}>
    <p>HELLO!</p>
    {children}
  </ThemeProvider>
)
