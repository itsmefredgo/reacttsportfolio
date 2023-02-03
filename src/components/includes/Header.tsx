import React from 'react';
import Link from 'next/link';

const Header = () => {
	return (
		<header className="header">
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			<Link href="/works">Works</Link>
			<Link href="/blogs">Blogs</Link>
			<Link href="/contact">Contact</Link>
		</header>
	);
};

export default Header;