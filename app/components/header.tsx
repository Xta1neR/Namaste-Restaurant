"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faPhone } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='flex flex-row items-center justify-between bg-transparent shadow-md p-4 fixed top-0 left-0 w-full z-50 text-white'>
        
        {/* ----------- LAPTOP NAVIGATION BAR ----------- */} 
        <div className='hidden md:flex flex-row items-center justify-between w-4/5 mx-auto'>
            <div>
                <Image src="/horigental_logo.png" alt="logo" width={200} height={200} />
            </div>
            <ul className='flex flex-row gap-8 text-md font-semibold tracking-wide'>
                <li className='hover:text-orange-200/80 uppercase'><a href="./">Home</a></li>
                <li className='hover:text-orange-200/80 uppercase'><a href="#aboutus">About</a></li>
                <li className='hover:text-orange-200/80 uppercase'><a href="./Menu">Menu</a></li>
                <li className='hover:text-orange-200/80 uppercase'><a href="./Gallery">Gallery</a></li>
                <li className='hover:text-orange-200/80 uppercase'><a href="./Contact">Contact</a></li>
            </ul>
            <div>
                <a className='flex flex-row m-4 gap-2' href="tel:+17784895044">
                    <FontAwesomeIcon className='size-4 m-1' icon={faPhone} /> +1 778-489-5044
                </a>
            </div>
        </div>

        {/* ----------- MOBILE NAVIGATION BAR ----------- */}
        <div className='md:hidden flex flex-row items-center justify-between w-full'>
            <div>
                <Image src="/horigental_logo.png" alt="logo" width={200} height={200} />
            </div>
            <div onClick={toggleMobileMenu} className='cursor-pointer'>
                <FontAwesomeIcon icon={faList} className='size-4 m-1' />
            </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <div className='md:hidden absolute top-24 left-0 w-full bg-black rounded-b-2xl p-8 shadow-lg'>
                <ul className='flex flex-col gap-4 text-md font-semibold'>
                    <li className='hover:text-orange-200/80 uppercase pt-1'><a href="./">Home</a></li>
                    <li className='hover:text-orange-200/80 uppercase pt-1'><a href="#aboutus">About</a></li>
                    <li className='hover:text-orange-200/80 uppercase pt-1'><a href="./Menu">Menu</a></li>
                    <li className='hover:text-orange-200/80 uppercase pt-1'><a href="./Gallery">Gallery</a></li>
                    <li className='hover:text-orange-200/80 uppercase pt-1'><a href="./Contact">Contact</a></li>
                </ul>
                <div className='mt-4'>
                    <a className='flex flex-row gap-2 pt-2 text-2xl' href="tel:+17784895044">
                        <FontAwesomeIcon className='size-4 m-1' icon={faPhone} /> +1 778-489-5044
                    </a>
                </div>
            </div>
        )}
    </nav>
  );
}

export default Header;