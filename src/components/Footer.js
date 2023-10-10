import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
     <div className="footer">
                <div className="bound">
                    <div className="social-icon">
                        <Link href="https://www.facebook.com/arenesslaw" target="_blank"><FacebookIcon /></Link>
                        <Link href="https://twitter.com/Arenesslaw" target="_blank"><TwitterIcon /></Link>
                        <Link href="https://www.linkedin.com/company/areness" target="_blank"><LinkedInIcon /></Link>
                        <Link href="https://www.instagram.com/areness_law/" target="_blank"><InstagramIcon /></Link>
                    </div>
                    <div className="copyright">© 2023 Areness Law, All Rights Reserved</div>
                </div>
            </div>
    </>
  )
}

export default Footer