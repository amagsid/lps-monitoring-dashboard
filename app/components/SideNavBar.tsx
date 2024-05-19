import React from 'react';
import Link from 'next/link';

const SideNavBar = () => {
  return (
    <div>
      <Link href='/'>
        <div>home</div>
      </Link>
      <Link href='/server01'>
        <div>server1</div>{' '}
      </Link>
      <Link href='/server02'>
        <div>server2</div>
      </Link>
      <Link href='/server03'>
        <div>server3</div>
      </Link>
      <Link href='/server04'>
        <div>server4</div>
      </Link>
      <Link href='/server05'>
        <div>server5</div>
      </Link>
    </div>
  );
};

export default SideNavBar;
