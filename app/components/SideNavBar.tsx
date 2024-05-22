import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { HiOutlineServer } from 'react-icons/hi2';
import { useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Image from 'next/image';
import LPSLogo from '../../public/LPS-logo.svg';
import { useRouter } from 'next/router';

const SideNavBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleSelected = (id: any) => {
    let el = document.getElementById(id);
    //feature to implement next
  };

  const Links = [
    { to: 'server01', serverNumber: '01', id: 1 },
    { to: 'server02', serverNumber: '02', id: 2 },
    { to: 'server03', serverNumber: '03', id: 3 },
    { to: 'server04', serverNumber: '04', id: 4 },
    { to: 'server05', serverNumber: '05', id: 5 },
  ];

  return (
    <div className='flex flex-col items-center justify-start gap-12 h-full py-9 font-semibold'>
      <Image src={LPSLogo} alt='logo' />

      <nav className='flex flex-col gap-4'>
        <Link onClick={handleSelected} href='/' className='tracking-widest'>
          overview
        </Link>
        {Links.map((link) => {
          return (
            <Link
              id={`${link.id}`}
              key={link.id}
              href={link.to}
              className='navlink flex flex-row items-center justify-center gap-2'
            >
              <HiOutlineServer style={{ color: colors.colorPop }} />
              {link.serverNumber}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default SideNavBar;
