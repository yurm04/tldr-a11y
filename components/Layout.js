import React from 'react'
import cx from 'classnames'
import Footer from './Footer'

const lightTheme = {
  backgroundColor: '#E5E5E5',
  width: '100vw',
  height: '100vh',
}

const themes = { dark: {}, light: lightTheme }

const Layout = ({ children, hideFooter = false, theme = "dark", showWebsite = false, layout }) => (
  <div className={cx('layout', theme, layout)}>
    <div className="childContainer">
      { children }
    </div>
    {!hideFooter && (
      <Footer showWebsite={showWebsite} />
    )}
  </div>
)

export default Layout
