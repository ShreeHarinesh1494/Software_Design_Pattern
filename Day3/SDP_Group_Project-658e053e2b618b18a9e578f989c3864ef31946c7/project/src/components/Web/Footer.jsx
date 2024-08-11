import { Facebook, Twitter, GithubIcon, LinkedinIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-background text-primary border-t-2 border-primary/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 opacity-20 blur-sm"></div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-8 py-6 relative z-10">
        <div className="text-primary font-bold text-lg">© LifePlus.ai 2024</div>
        <div className="flex flex-col items-start text-sm mb-4 md:mb-0">
          <div className="font-bold text-lg mb-2">Links</div>
          <Link to="/help-center" className="block hover:text-stone-700 transition-colors mb-1">Help Center</Link>
          <Link to="/privacy-policy" className="block hover:text-stone-700 transition-colors mb-1">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="block hover:text-stone-700 transition-colors">Conditions</Link>
        </div>
        <div className="flex flex-col items-start text-sm">
          <div className="font-bold text-lg mb-2">Contact Us</div>
          <address className="not-italic">
            1234 Street Name<br />
            City, State, 12345<br />
            Email: <a href="mailto:contact@iamneo.ai" className="hover:text-secondary transition-colors">contact@lifeplus.ai</a><br />
            Phone: (123) 456-7890
          </address>
        </div>
        <div className='flex gap-6 mt-4 md:mt-0'>
          <a href='#' target='_blank' className='h-10 w-10 rounded-full text-primary hover:bg-primary/30 hover:text-background flex justify-center items-center transition-all transform hover:scale-110'>
            <Facebook className='h-6 w-6' />
          </a>
          <a href='#' target='_blank' className='h-10 w-10 rounded-full text-primary hover:bg-primary/30 hover:text-background flex justify-center items-center transition-all transform hover:scale-110'>
            <Twitter className='h-6 w-6' />
          </a>
          <a href='#' target='_blank' className='h-10 w-10 rounded-full text-primary hover:bg-primary/30 hover:text-background flex justify-center items-center transition-all transform hover:scale-110'>
            <GithubIcon className='h-6 w-6' />
          </a>
          <a href='#' target='_blank' className='h-10 w-10 rounded-full text-primary hover:bg-primary/30 hover:text-background flex justify-center items-center transition-all transform hover:scale-110'>
            <LinkedinIcon className='h-6 w-6' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
