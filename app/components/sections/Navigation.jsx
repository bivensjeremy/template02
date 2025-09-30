'use client' 
import {Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link } from '@heroui/link';
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@heroui/dropdown";
import { FaBars } from "react-icons/fa6";
import { siteConfig } from '@/config/site';

const Navigation = () => {
	const MenuDropdown = () => {
		return (
			<Dropdown>
				<DropdownTrigger>
					<FaBars size={24} />
				</DropdownTrigger>
				<DropdownMenu aria-label="Link Actions">
					{siteConfig.NavData.map(({ title, link, external }) => (
						<DropdownItem key={title} href={`/${link}`} isExternal={external}>
							{title}
						</DropdownItem>
					))}
				</DropdownMenu>
			</Dropdown>
		)
	}
	return (
		<Navbar className="bg-primary py-6" maxWidth="xl">
			<NavbarBrand>
				<div className="">
					<p className="font-bold text-inherit uppercase leading-5">Template <br/>Website 02</p>
				</div>
			</NavbarBrand>

			<NavbarContent justify="end"  className="hidden md:flex">
				{siteConfig.NavData.map(({ title, link, external }) => (
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
