'use client' 
import {Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@heroui/dropdown";
import { FaBars } from "react-icons/fa6";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};
const Navigation = () => {
	const NavData = [
		{
			title: 'Home',
			link: '/',
			external: false
		},
		{
			title: 'Services',
			link: '#Services',
			external: false
		},
		{
			title: 'About',
			link: '#About',
			external: false
		},
		{
			title: 'Projects',
			link: '#Projects',
			external: false
		},
		{
			title: 'Contact Us',
			link: '#Contact',
			external: false
		},
		// {
		// 	title: 'Get This Design',
		// 	external: true,
		// 	link: 'https://www.blueprintwebdev.com/webpackages'
		// }
	];

	const MenuDropdown = () => {
		return (
			<Dropdown>
				<DropdownTrigger>
					<FaBars size={24} />
				</DropdownTrigger>
				<DropdownMenu aria-label="Link Actions">
					{NavData.map(({ title, link, external }) => (
						<DropdownItem key={title} href={`/${link}`} isExternal={external}>
							{title}
						</DropdownItem>
					))}
				</DropdownMenu>
			</Dropdown>
		)
	}
	return (
		<Navbar className="bg-primary py-6">
			<NavbarBrand>
				<div className="text-center ">
					<p className="font-bold text-inherit">Your Construction</p>
					<p>Business</p>
				</div>
			</NavbarBrand>

			<NavbarContent justify="end"  className="hidden md:flex">
				{NavData.map(({ title, link, external }) => (
					<NavbarItem key={title}>
						<Link color="foreground" isExternal={external} href={link} isBlock className="uppercase text-sm font-semibold p-2">
							{title}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>

			<NavbarContent justify="end" className="flex md:hidden">
				<MenuDropdown />
			</NavbarContent>
		</Navbar>
	);
}

export default Navigation;
