import React from 'react';
import Link from 'next/link';

const Header = () => {
	return (
		<header className='header'>
			<div className='header-nagivator'>
				<Link href='/'>Home</Link>
				<Link href='/about'>About</Link>
				<Link href='/works'>Works</Link>
				<Link href='/blogs'>Blogs</Link>
				<Link href='/contact'>Contact</Link>
			</div>
			<div className='header-functions'>
				<button className='header-functions-darkmode'>Dark Mode</button>
				<button className='header-functions-language'>Language</button>
			</div>
		</header>
	);
};

export default Header;