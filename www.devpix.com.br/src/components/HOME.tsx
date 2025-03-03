import Image from 'next/image';

export default function Homepage() {
    return (
        <main>
            <div className="relative flex justify-center bg-white px-10 py-16">
                {/* Contêiner de fundo */}
                <div className="absolute inset-0 flex">
                    {/* SVG Cinza */}
                    <div className="w-2/3 relative z-10">
                        <Image
                            src="/vector1.svg"
                            alt="Fundo Cinza"
                            width={500}
                            height={300}
                            className="w-full h-auto"
                        />
                    </div>
                    {/* Contêiner azul ao fundo responsivo */}
                    <div className="w-1/2 bg-blue-900 absolute right-0 top-0 z-0 h-[450px] md:h-[350px] sm:h-[250px]"></div>
                </div>

                {/* Texto e botões */}
                <div className="relative z-10 max-w-lg">
                    <h1 className="text-4xl font-bold mt-15 text-gray-900 leading-tight">
                        O <span className="text-purple-600">visual</span> da sua empresa vai impactar na escolha do seu cliente
                    </h1>
                    <p className="text-gray-700 mt-4">
                        Comece com custo 0 e cancele quando quiser.
                    </p>

                    {/* Botões */}
                    <div className="mt-6 flex gap-4">
                        <button className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold">
                            Descubra o DevPix &rarr;
                        </button>
                        <button className="border-2 border-blue-900 px-6 py-3 rounded-md font-semibold">
                            Solicitar contato &rarr;
                        </button>
                    </div>
                </div>

                {/* Imagem do Homem */}
                <Image
                    src="/home-header-employee-communication-alerting-ena-640-x-640.png" // Substitua pelo caminho correto
                    alt="Homem sorrindo com celular"
                    width={400}
                    height={500}
                    className="relative z-10"
                />
            </div>
        </main>
    );
}
