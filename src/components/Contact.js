import { FaLinkedin, FaTelegramPlane, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { PiMapPinFill } from "react-icons/pi";

const ContactSection = () => {
    return (
        <section className="w-full min-h-screen flex flex-col justify-center px-6 md:px-12 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}
                className="flex flex-col gap-8"
            >
                <h3 className="text-red-400 text-[32px] md:text-[40px] font-[Firas-Bold] uppercase tracking-widest mb-4">
                    Contact
                </h3>

                <div className="flex items-center text-gray-400 gap-1 text-sm">
                    <PiMapPinFill size={24} />
                    <span className="font-[Firas-Medium] text-[30px] md:text-[40px] tracking-widest">Davao City, Philippines</span>
                </div>

                <h2 className="text-white text-[30px] md:text-[35px] font-[Firas-Bold] uppercase tracking-widest leading-tight">
                    Connect with me
                </h2>

                <p className="text-gray-400 text-[18px] md:text-[20px] font-[Firas-Medium] leading-relaxed">
                    Open to opportunities, collaborations, or a quick hello — feel free to connect!
                </p>

                <div className="flex flex-wrap gap-3 md:gap-4 mt-4">
                    <a href="https://www.linkedin.com/in/mark-nisnea-2102b9198/" target="_blank" rel="noopener noreferrer" className="border border-gray-700 p-3 rounded-md hover:bg-gray-800 hover:scale-110 transition">
                        <FaLinkedin className="text-gray-300" size={22} />
                    </a>
                    <a href="mailto:marknisnea23@gmail.com" className="border border-gray-700 p-3 rounded-md hover:bg-gray-800 hover:scale-110 transition">
                        <MdEmail className="text-gray-300" size={22} />
                    </a>
                    <a href="https://t.me/antxnnnn" target="_blank" rel="noopener noreferrer" className="border border-gray-700 p-3 rounded-md hover:bg-gray-800 hover:scale-110 transition">
                        <FaTelegramPlane className="text-gray-300" size={22} />
                    </a>
                    <a href="https://github.com/markyyyuic" target="_blank" rel="noopener noreferrer" className="border border-gray-700 p-3 rounded-md hover:bg-gray-800 hover:scale-110 transition">
                        <FaGithub className="text-gray-300" size={22} />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactSection;
