import React from 'react'
import Footer from './Footer'

const lightTheme = {
  backgroundColor: '#E5E5E5',
  width: '100vw',
  height: '100vh',
}

const themes = { dark: {}, light: lightTheme }

const Layout = ({ children, hideFooter = false, theme = "dark", showWebsite = false }) => (
  <div className={`layout ${theme}`} style={themes[theme]}>
    <div className="childContainer">
      { children }
    </div>
    {!hideFooter && (
      <Footer showWebsite={showWebsite} />
    )}
  </div>
)

export default Layout
