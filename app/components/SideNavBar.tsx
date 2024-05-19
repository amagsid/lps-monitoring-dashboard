import React, { useState } from 'react';
import Link from 'next/link';

const SideNavBar = () => {
  const [selectedServer, setSelectedServer] = useState(null);
  const handleClick = (id: any) => {
    setSelectedServer(id);
  };

  const Links = [
    { to: '/', page: 'home', id: 1 },
    { to: '/server01', page: 'server01', id: 2 },
    { to: '/server02', page: 'server02', id: 3 },
    { to: '/server03', page: 'server03', id: 4 },
    { to: '/server04', page: 'server04', id: 5 },
    { to: '/server05', page: 'server05', id: 6 },
  ];

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      {Links.map(({ to, page, id }) => {
        return (
          <Link key={id} href={to}>
            <div
              onClick={() => handleClick(id)}
              style={{
                borderColor: selectedServer == id ? 'red' : 'transparent',
              }}
            >
              {page}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SideNavBar;
