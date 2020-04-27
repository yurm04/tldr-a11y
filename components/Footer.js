import React from 'react'
import { Styled } from 'theme-ui'
import Bird from './TwitterBird'

const Footer = ({ showWebsite, theme = "dark" }) => (
  <footer className="footer">
    <Styled.a 
      className={`websiteLink ${!showWebsite && 'hideWebsite'}`}
      href="https://tldr-a11y.yuraima.com">
        tldr-a11y.yuraima.com
    </Styled.a>
    <div className="twitterContainer">
      <Bird theme={theme} />
      <Styled.a 
        className="twitterHandle"
        href="https://www.twitter.com/yurm04">
          @yurm04
      </Styled.a>
    </div>
  </footer>
)

export default Footer
