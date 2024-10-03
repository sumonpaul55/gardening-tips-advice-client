import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaLeaf } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 mt-5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-between">
                    {/* Column 1: Logo & Description */}
                    <div className="w-full md:w-1/3 mb-6">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                            <FaLeaf className="mr-2 text-green-500" /> NextLeaf
                        </h2>
                        <p className="text-gray-400">
                            Join the conversation, share your insights, and help others grow. NextLeaf is a platform where your vote matters!
                        </p>
                    </div>

                    {/* Column 2: Explore Links */}
                    <div className="w-full md:w-1/3 mb-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Explore</h3>
                        <ul className="space-y-2">
                            <li><a href="/posts" className="hover:text-white">Top Posts</a></li>
                            <li><a href="/about" className="hover:text-white">About Us</a></li>
                            <li><a href="/contact" className="hover:text-white">Contact Support</a></li>
                            <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Social Media & Community */}
                    <div className="w-full md:w-1/3">
                        <h3 className="text-xl font-semibold text-white mb-4">Connect with Us</h3>
                        <div className="flex space-x-4 mb-6">
                            <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                                <FaFacebookF size={24} />
                            </a>
                            <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                                <FaLinkedinIn size={24} />
                            </a>
                        </div>
                        <p className="text-gray-400">
                            Stay updated with our community, follow us on social media and share your voice!
                        </p>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-700 pt-6 text-center">
                    <p className="text-gray-500">
                        &copy; {new Date().getFullYear()} NextLeaf. Where your opinions matter. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
