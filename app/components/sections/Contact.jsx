import SectionHeader from "../comps/SectionHeader";
import ContactForm from '../../components/comps/ContactForm';
import clsx from "clsx";
import { FaFacebook, FaTiktok, FaInstagram, FaXTwitter } from "react-icons/fa6";
import HoneyBookWidget from '../comps/HoneyBookWidget';

const Contact = () => {
    return (
        <section id="Contact">
            <SectionHeader title="Contact Us To Get Started" />

            <div className="max-w-7xl mx-auto">
                <div className="w-full">
                    {/* <ContactForm /> */}
                    <HoneyBookWidget />
                </div>

                {/* <div className="mx-auto">
                    <div className="max-w-sm">
                        <h4 className="font-bold text-2xl pb-4">Head Office</h4>
                        <p>123 Your Business St</p>
                        <p>Albany, GA 31705</p>
                        <p className='pt-4'>Tel: 123-456-7890</p>
                        <p className=''>you@yourawesomebusiness.com</p>
                        <h4 className="pt-12 font-bold text-2xl">Employment</h4>
                        <p>To apply for a job with Your Construction Business, please send a cover letter together with your C.V. to: info@mysite.com</p>
                    </div>


                    <div className={clsx('pt-12 flex flex-row justify-between gap-12 max-w-sm')}>
                        <FaFacebook className="w-5 h-5" />
                        <FaInstagram className="w-5 h-5" />
                        <FaXTwitter className="w-5 h-5" />
                        <FaTiktok className="w-5 h-5" />
                    </div>
                </div> */}
            </div>
        </section>
    );
}

export default Contact;