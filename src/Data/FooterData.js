import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPhone, FaMailBulk } from 'react-icons/fa';
import { Fa6, FaLocationDot } from 'react-icons/fa6';

export const footerData = {
  company: {
    name: 'Stravix',
    description: 'Leading digital marketing agency providing comprehensive solutions for modern businesses. We help brands grow through innovative digital strategies.',
    socialLinks: [
      { href: '#', icon: FaFacebook , label: 'Facebook' },
      { href: '#', icon: FaLinkedin, label: 'LinkedIn' },
      { href: '#', icon: FaTwitter, label: 'Twitter' },
    ],
  },
  services: [
    { to: '/service/branding', label: 'Branding' },
    { to: '/service/creative', label: 'Creative' },
     { to: '/service/pr', label: 'PR' },
    { to: '/service/socialmedia', label: 'Social Media' },
   
  ],
  companyLinks: [
    { to :'/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ],
  contactInfo: [
    { icon: FaLocationDot , text: 'Dubai,UAE' },
    { icon: FaMailBulk, text: 'marketing@stravix.media' },
  ],
  footerLinks: [

    { to: '/termsnservice', label: 'Terms of Service' },
    { to: '/privacy', label: 'Privacy Policy' }
  ],
};