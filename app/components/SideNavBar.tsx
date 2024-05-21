import React, { useState } from 'react';
import Link from 'next/link';
import { HiOutlineServer } from 'react-icons/hi2';
import { useTheme } from '@mui/material';
import { tokens } from '../../theme';

const SideNavBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedServer, setSelectedServer] = useState(null);
  const handleClick = (id: any) => {
    setSelectedServer(id);
  };

  const Links = [
    { to: '/server01', serverNumber: '01', id: 1 },
    { to: '/server02', serverNumber: '02', id: 2 },
    { to: '/server03', serverNumber: '03', id: 3 },
    { to: '/server04', serverNumber: '04', id: 4 },
    { to: '/server05', serverNumber: '05', id: 5 },
  ];

  return (
    <div className='flex flex-col items-center justify-start gap-4 h-full py-9'>
      <h1>Logo</h1>
      <nav className='flex flex-col gap-4'>
        <Link href='/'>Overview</Link>
        {Links.map(({ to, serverNumber, id }) => {
          return (
            <Link
              key={id}
              href={to}
              className='flex flex-row items-center justify-center gap-2'
            >
              <HiOutlineServer style={{ color: colors.colorPop }} />
              {serverNumber}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default SideNavBar;
