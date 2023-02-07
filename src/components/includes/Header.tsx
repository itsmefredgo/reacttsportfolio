import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentPage } from '../../assets/slices/pageSlice'
import type { RootState } from '<redux>/assets/store/store';
import { useTheme } from 'next-themes'

import { IoLanguage, IoMoon, IoSunny } from "react-icons/io5"
import { changeCurrentLanguage } from '<redux>/assets/slices/languageSlice';


const Header = (props:any) => {
	const currentPage:string = useSelector((state: RootState) => state.pageChanger.currentPage)
	const currentLanguage:string = useSelector((state: RootState) => state.languageChanger.currentLanguage)
	const dispatch = useDispatch();

	const pages:string[] = ['Home', 'About', 'Works', 'Blogs', 'Contact']
	const { theme, setTheme } = useTheme()
	function changeTheme(){setTheme(theme == 'light' ? 'dark' : 'light')}

	return (
		<header className='header'>
			<div className='header-navigator'>
				{pages.map((page) => {
					return (
						<Link 
							href={"/" + page.toLowerCase()} 
							onClick={() => dispatch(changeCurrentPage(page.toLowerCase()))} 
							key={page.toLowerCase()} 
							className={page.toLowerCase() == currentPage ? 'header-navigator-current' : 'header-navigator-other'}
						>
							{ page }
						</Link>
					)
				})}
			</div>
			<div className='header-functions'>
				<button 
					className='header-functions-page' 
					onClick={() => changeTheme()}
				>
					{theme == 'light' ? <IoSunny></IoSunny> : <IoMoon></IoMoon>}
				</button>
				<button 
					className='header-functions-language' 
					onClick={() => dispatch(changeCurrentLanguage(currentLanguage == 'english' ? 'korean' : 'english'))} 
				>
					<IoLanguage></IoLanguage>
				</button>
			</div>
		</header>
	);
};

export default Header;