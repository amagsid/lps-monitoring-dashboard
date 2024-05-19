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
      <div>server4</div>
      <div>server5</div>
      <div></div>
    </div>
  );
};

export default SideNavBar;
