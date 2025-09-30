import { siteConfig } from "@/config/site";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import clsx from "clsx";

const Hero = () => {
    return (
        <section className="min-h-screen bg-cover bg-center bg-[url('/wallpaper.jpg')]">
            <div className="min-h-screen text-center bg-black bg-opacity-40 flex flex-col pt-12 px-6">
                <h1 className={clsx('font-bold text-xl text-zinc-50')}>
                    Blueprint Web Dev Conversion Website Template
                </h1>

                <h2 className={clsx('text-5xl md:text-7xl py-8 font-bold text-zinc-50 max-w-5xl mx-auto text-shadow-sm text-shadow-white')}>
                    Build Your Business with a Solid Foundation
                </h2>

                <p className={clsx('pb-8 max-w-lg mx-auto text-zinc-50')}>
                    This template site is designed to help you launch fast, look polished, and grow with confidence. This site is modeled after a construction company but the content can be redesigned to match your brand. 
                </p>

                <div>
                    <Button
                        as={Link}
                        color="primary"
                        size="lg"
                        href={siteConfig.company.lead}
                        variant="solid"
                        radius="sm"
                        className="text-black"
                        >
                        Get Started Today
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Hero;