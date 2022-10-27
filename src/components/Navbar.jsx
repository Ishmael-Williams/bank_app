import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants'; //array containing list of objects that have ID and title

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    // desktop view of navbar, using tailwind code for styling
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='hoobank' className='w-[124px] h-[32px]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {/* return list item with dynamic block of code
            for each list item, it gets the formatting below
            note the ${} to dynamically render 
            the last item to not have right margin */}
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins
            font-normal
            cursor-pointer
            text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white mr-10`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      {/* Mobile view of navbar */}
      <div className='sm:hidden flex flex-1
      justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px]object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />
        {/* another div for setting view on opening menu on mobile */}
        <div
          className={`${toggle ? 'flex' : 'hidden'}
              p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 
              min-w-[140px] rounded-xl sidebar`}>
          {/* Mostly reused code from desktop view for the <ul> */}
          <ul className='list-none flex justify-end items-center flex-1 flex-col'>

            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins
            font-normal
            cursor-pointer
            text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white `}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar