import React from 'react'
import { Styled } from 'theme-ui'
import Bird from './twitterBirdDark'
const Footer = ({ showWebsite }) => (
  <footer className="footer">
    <Styled.a 
      className={`websiteLink ${!showWebsite && 'hideWebsite'}`}
      href="https://tldr-a11y.yuraima.com">
        tldr-a11y.yuraima.com
    </Styled.a>
    <div className="twitterContainer">
      <Bird />
      <Styled.a 
        className="twitterHandle"
        href="https://www.twitter.com/yurm04">
          @yurm04
      </Styled.a>
    </div>
  </footer>
)

export default Footer
