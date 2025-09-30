import { Link } from "@heroui/link";
import { footerData } from '../../../config/footerData';

const Footer = () => {
    return (
        <footer className="w-full flex flex-col items-center justify-center">
            <div className="flex justify-center gap-4 text-2xl text-primary py-3">
                {footerData.map(({ id, link, image: Icon, color }) => (
                    <Link isExternal key={id} href={link}>
                        <Icon 
                            size={16}
                            color={color} 
                        />
                    </Link>
                ))}
            </div>
			<Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://blueprintwebdev.com"
                title="BlueprintWebDev.com homepage"
            >
				<p className='text-xs text-center bg-background uppercase'>
                &copy; {new Date().getFullYear()} Blueprint Web Dev
            </p>
			</Link>
		</footer>
    );
}

export default Footer;