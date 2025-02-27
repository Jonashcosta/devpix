export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-6">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="flex justify-center items-center">
                    {/* Logo */}
                    <div className=" justify-center items-center mr-2">
                        <h2 className=" text-4xl font-bold">DEVPIX</h2>
                    </div>
                    <div className="justify-center items-cente">

                        {/* Links organizados com menos espaço */}
                        <div className="flex flex-wrap gap-10 text-sm">
                            <div>
                                <h3 className="font-semibold mb-2">Netpresenter</h3>
                                <ul className="space-y-1">
                                    <li><a href="#" className="hover:underline">Solutions</a></li>
                                    <li><a href="#" className="hover:underline">Why Netpresenter</a></li>
                                    <li><a href="#" className="hover:underline">Platform</a></li>
                                    <li><a href="#" className="hover:underline">How it works</a></li>
                                    <li><a href="#" className="hover:underline">Pricing</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2">Resources</h3>
                                <ul className="space-y-1">
                                    <li><a href="#" className="hover:underline">Knowledge center</a></li>
                                    <li><a href="#" className="hover:underline">Documentation</a></li>
                                    <li><a href="#" className="hover:underline">Helpdesk</a></li>
                                    <li><a href="#" className="hover:underline">Blog</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2">Company</h3>
                                <ul className="space-y-1">
                                    <li><a href="#" className="hover:underline">About us</a></li>
                                    <li><a href="#" className="hover:underline">Partners</a></li>
                                    <li><a href="#" className="hover:underline">Customer stories</a></li>
                                    <li><a href="#" className="hover:underline">Careers</a></li>
                                    <li><a href="#" className="hover:underline">Social Responsibility</a></li>
                                    <li><a href="#" className="hover:underline">Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Linha divisória */}
                <div className="border-t border-gray-600 my-4"></div>

                {/* Footer Bottom */}
                <div className="flex flex-row justify-center items-center text-xs text-gray-300">
                    <div className="mr-2">

                        <p>© 2025 Netpresentera</p>
                    </div>
                    <div className=" flex  space-x-4 mt-2 md:mt-0">
                        <a href="#" className="hover:underline">Cookie Declaration</a>
                        <a href="#" className="hover:underline">Terms and Conditions</a>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
