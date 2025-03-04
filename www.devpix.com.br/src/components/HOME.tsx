import Image from 'next/image';

export default function Homepage() {
    return (
        <main>
            <div className="relative flex justify-center bg-white px-10 py-16 ">
                {/* Contêiner de fundo */}
                <div className="absolute inset-0 flex">
                    {/* SVG Cinza */}
                    <div className="w-2/3 relative z-10 ">
                        <Image
                            src="/vector1.svg"
                            alt="Fundo Cinza"
                            width={500}
                            height={300}
                            className="w-full  h-[450px]"
                        />
                    </div>
                    {/* Contêiner azul ao fundo responsivo */}
                    <div className="w-1/2 bg-blue-900 absolute right-0 top-0 z-0 h-[450px] md:h-[350px] sm:h-[250px]"></div>
                </div>

                {/* Texto e botões */}
                <div className="relative z-10 max-w-lg">
                    <h1 className="text-4xl font-bold mt-16 text-gray-900 leading-tight">
                        O <span className="text-blue-800">visual</span> da sua empresa vai impactar na escolha do seu cliente
                    </h1>
                    <p className="text-gray-700 mt-4">
                        Comece com custo R$0 e cancele quando quiser.
                    </p>

                    {/* Botões */}
                    <div className="mt-6 flex gap-4">
                        <button className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold">
                            Descubra o Devpix &rarr;
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

            <div class="flex flex-col items-center">
                <div class="flex justify-center gap-36">

                    <div class="flex flex-col items-center bg-[url('/background1.svg')] bg-no-repeat bg-center bg-cover w-40 h-40 pt-5">
                        <img src="/icon-visibilidade.svg" alt="" className="mb-3" />
                        <h1 className='text-blue-800 font-bold text-2xl leading-tight'>+ Visibilidade</h1>
                        <p className="text-center max-w-lg">Maior exposição para sua empresa</p>
                    </div>

                    <div class="flex flex-col items-center bg-[url('/background1.svg')] bg-no-repeat bg-center bg-cover w-40 h-40 pt-5">
                        <img src="/icon-metricas.svg" alt="" class="mb-3" />
                        <h1 class='text-blue-800 font-bold text-2xl leading-tight'>Métricas</h1>
                        <p class="text-center max-w-lg">Monitore o trafego</p>
                    </div>

                    <div class="flex flex-col items-center bg-[url('/background1.svg')] bg-no-repeat bg-center bg-cover w-40 h-40 pt-5">
                        <img src="/icon-fidelizacao.svg" alt="" class="mb-3" />
                        <h1 class='text-blue-800 font-bold text-2xl leading-tight'>Fidelidade</h1>
                        <p class="text-center max-w-lg">Maior busca pela sua marca</p>
                    </div>
                </div>

                <div class="flex items-center justify-center h-20">
                    <p class="text-center max-w-lg">
                        Precisando de mais provas? <span className="text-blue-800">Solicite um contato</span> e descubra como impulsionar o seu negócio com a equipe de desenvolvimento da Devpix.
                    </p>
                </div>
            </div>


            <div class="flex justify-center items-start w-4/5 mx-auto mt-20 gap-4">
                <div class="flex justify-center items-center w-1/2">
                    <img src="/mulher_de_ti.png" alt="Mulher de TI" class="w-96" />
                </div>
                <div class="w-1/2 flex flex-col items-start">
                    <h1 class="text-4xl font-bold text-gray-900 leading-tight">
                    A <span class="text-blue-800">solução digital</span> para o seu negócio.
                    </h1>
                    <p class="text-gray-700 mt-4 text-justify">
                        Destaque-se com um site profissional feito sob medida para sua marca! A primeira impressão é decisiva, especialmente na internet. Sua empresa merece um site moderno, rápido e que transmita confiança desde o primeiro clique. Na DevPix, transformamos ideias em experiências digitais excepcionais, utilizando design limpo, funcional e totalmente personalizado.
                    </p>

                    <div class="mt-6 flex gap-4">
                        <button class="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold">
                            Descubra o Devpix &rarr;
                        </button>
                        <button class="border-2 border-blue-900 px-6 py-3 rounded-md font-semibold">
                            Solicitar contato &rarr;
                        </button>
                    </div>
                </div>
            </div>




        </main>
    );
}
