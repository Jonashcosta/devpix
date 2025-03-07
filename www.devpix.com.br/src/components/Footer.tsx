export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-6">
            <div className="container max-w-[70%] mx-auto px-6 lg:px-16">
                <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                    {/* Logo */}
                    <div className="justify-center items-center mr-2">
                        <h2 className="text-4xl font-bold">DEVPIX</h2>
                    </div>

                    {/* Links */}
                    <div className="justify-center items-center w-full ml-28">
                        <div className="flex flex-wrap gap-10 text-sm">
                            <div>
                                <h3 className="font-semibold mb-2">Devpix</h3>
                                <ul className="space-y-1">
                                    <li><a href="#" className="hover:underline">Soluções</a></li>
                                    <li><a href="#" className="hover:underline">Por que a Devpix</a></li>
                                    <li><a href="#" className="hover:underline">Plataforma</a></li>
                                    <li><a href="#" className="hover:underline">Como funciona</a></li>
                                    <li><a href="#" className="hover:underline">Preços</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2">Recursos</h3>
                                <ul className="space-y-1">
                                    <li><a href="#" className="hover:underline">Centro de conhecimento</a></li>
                                    <li><a href="#" className="hover:underline">Documentação</a></li>
                                    <li><a href="#" className="hover:underline">Helpdesk</a></li>
                                    <li><a href="#" className="hover:underline">Blog</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2">Company</h3>
                                <ul className="space-y-1">
                                    <li><a href="#" className="hover:underline">Sobre nós</a></li>
                                    <li><a href="#" className="hover:underline">Carreira</a></li>
                                    <li><a href="#" className="hover:underline">Responsabilidade social</a></li>
                                    <li><a href="#" className="hover:underline">Entre em contato conosco</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Linha divisória */}
                <div className="border-t border-gray-600 my-4"></div>

                <div className="flex flex-row justify-center items-center text-xs text-gray-300">
                    <div className="mr-2">

                        <p>© 2025 Devpix. Todos os direitos reservados.</p>
                    </div>
                    <div className=" flex  space-x-4 mt-2 md:mt-0">
                        <a href="#" className="hover:underline">Declaração de Cookies </a>
                        <a href="#" className="hover:underline">Termos e condições</a>
                        <a href="#" className="hover:underline">Política de Privacidade
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}