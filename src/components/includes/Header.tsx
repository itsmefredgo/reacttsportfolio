import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentPage } from '../../assets/slices/pageSlice'
import type { RootState } from '<redux>/assets/store/store';

const Header = (props:any) => {
	const page = useSelector((state: RootState) => state.pageChanger.currentPage)
	const dispatch = useDispatch();

	const pages = ['Home', 'About', 'Works', 'Blogs', 'Contact']

	return (
		<header className='header'>
			<div className='header-nagivator'>
				{pages.map((page) => {
					return (
						<Link 
							href={"/" + page.toLowerCase()} 
							onClick={() => dispatch(changeCurrentPage(page.toLowerCase()))}
							key={page.toLowerCase()} 
						>
							{ page }
						</Link>
					)
				})}
			</div>
			<div className='header-functions'>
				<button className='header-functions-darkmode' onClick={props.themeToggler}>Dark Mode</button>
				<button className='header-functions-language'>Language</button>
			</div>
			<div>
				current page is { page }
			</div>
		</header>
	);
};

export default Header;