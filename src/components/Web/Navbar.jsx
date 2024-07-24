import React from 'react'
import { NavLink } from 'react-router-dom'
import { ModeToggle } from '../mode-toggle'

const Navbar = () => {
    const NavLinks = [
        {
          title: "Home",
          path: "/"
        },
        {
          title: "Login",
          path: "/login"
        },
        {
          title: "Register",
          path: "/register"
        }
      ]
  return (
    <div className='w-full h-[8vh] flex flex-row justify-center items-center border-b-2 border-primary'>
        <div className='h-full w-1/4 flex flex-row justify-center items-center text-2xl font-bold text-primary'>
            Logo
        </div>
        <div className='h-full w-3/4 flex flex-row justify-center items-center  text-primary gap-10'>
        {
          NavLinks.map((links, index) => (
            <li key={index} className='list-none'>
              <NavLink to={links.path}>
                {links.title}
              </NavLink>
            </li>
          ))
        }
        <ModeToggle />
        </div>
    </div>
  )
}

export default Navbar