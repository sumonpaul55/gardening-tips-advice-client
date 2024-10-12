/* eslint-disable @typescript-eslint/no-explicit-any */

import ContactForm from '@/components/page/contactus/ContactForm';




const ContactUs = () => {
    // const [showPassword, setShowPassword] = useState(false);



    return (
        <section className="bg-white text-gray-800 py-16 px-6">
            <div className="container mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-600 mb-6">Contact Us</h2>
                    <p className="text-lg max-w-2xl mx-auto">
                        We&apos;d love to hear from you! Whether you have questions about our platform, need support, or just want to share feedback, feel free to get in touch.
                    </p>
                </div>

                <ContactForm />
                {/* Contact Information */}
                <div className="text-center mt-12">
                    <h3 className="text-2xl font-bold text-green-600 mb-4">Get in Touch</h3>
                    <p className="text-lg">You can also reach us at:</p>
                    <p className="text-lg">
                        <strong>Email:</strong> support@nextleaf.com
                    </p>
                    <p className="text-lg">
                        <strong>Phone:</strong> +880-1234-567890
                    </p>
                    <p className="text-lg">
                        <strong>Office Address:</strong> 123 NextLeaf Road, Dhaka, Bangladesh
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
