import React from 'react';
import { NavLink } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';
import { BorderBeam } from '../magicui/border-beam'; // Adjust the import path as needed
import { ShieldPlus } from 'lucide-react';

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
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-[8vh] flex justify-between items-center shadow-md bg-white dark:bg-gray-900 border-b-2 border-primary dark:border-primary transition-all duration-300 z-50">
      {/* BorderBeam component */}
      <BorderBeam
        className="absolute inset-0"
        size={300} // Adjust size if needed
        duration={15}
        anchor={90}
        borderWidth={2} // Adjust borderWidth if needed
        colorFrom="#ffaa40"
        colorTo="#9c40ff"
        delay={0}
      />

      <div className="flex items-center pl-4">
        <div className="text-primary font-bold text-2xl dark:text-white">LifePlus</div>
        <ShieldPlus className="ml-2 text-primary dark:text-white" />
      </div>

      <div className="flex items-center space-x-6 pr-4">
        <ul className="flex space-x-8">
          {NavLinks.map((links, index) => (
            <li key={index} className="list-none">
              <NavLink 
                to={links.path}
                className="text-gray-700 dark:text-gray-300 font-bold transition-all duration-300 ease-in-out hover:tracking-wider hover:text-primary"
                activeClassName="underline decoration-primary dark:decoration-primary"
                style={{ textDecoration: 'none' }}
              >
                {links.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
