"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Homepage() {
    const sectionRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        sectionRefs.current.forEach((section, index) => {
            gsap.fromTo(section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        });
    }, []);

    return (
        <main className='bg-white'>
            <div className="relative flex justify-center px-10 py-8"
                ref={el => {
                    if (el) sectionRefs.current[0] = el; 
                }}>
                <div className="absolute inset-0 flex">
                    <div className="w-2/3 relative z-10">
                        <Image
                            src="/vector1.svg"
                            alt="Fundo Cinza"
                            width={500}
                            height={300}
                            className="w-full h-[450px]"
                        />
                    </div>
                    <div className="w-1/2 bg-blue-900 absolute right-0 top-0 z-0 h-[450px] md:h-[350px] sm:h-[250px]"></div>
                </div>
                <div className="relative z-10 flex justify-between items-center max-w-[1000px] w-full">
                    <div className="max-w-lg">
                        <h1 className="text-4xl font-bold mt-4 text-gray-900 leading-tight">
                            O <span className="text-blue-800">visual</span> da sua empresa vai impactar na escolha do seu cliente
                        </h1>
                        <p className="text-gray-700 mt-4">
                            Comece com custo R$0 e cancele quando quiser.
                        </p>
                        <div className="mt-6 flex gap-4">
                            <button className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold">
                                Descubra o Devpix &rarr;
                            </button>
                            <button className="border-2 border-blue-900 px-6 py-3 rounded-md font-semibold">
                                Solicitar contato &rarr;
                            </button>
                        </div>
                    </div>
                    <Image
                        src="/home-header-employee-communication-alerting-ena-640-x-640.png"
                        alt="Homem sorrindo com celular"
                        width={400}
                        height={500}
                        className="relative z-10"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center mt-20"
                ref={el => {
                    if (el) sectionRefs.current[1] = el;
                }}>
                <div className="flex justify-center gap-36">
                    <div className="flex flex-col items-center bg-[url('/background1.svg')] bg-no-repeat bg-center bg-cover w-40 h-40 pt-5">
                        <Image
                            src="/icon-visibilidade.svg"
                            alt=""
                            width={40}
                            height={40}
                            className="mb-3"
                        />
                        <h1 className='text-blue-800 font-bold text-2xl leading-tight'>+ Visibilidade</h1>
                        <p className="text-center max-w-lg">Maior exposição para sua empresa</p>
                    </div>
                    <div className="flex flex-col items-center bg-[url('/background1.svg')] bg-no-repeat bg-center bg-cover w-40 h-40 pt-5">
                        <Image
                            src="/icon-metricas.svg"
                            alt=""
                            width={40}
                            height={40}
                            className="mb-3"
                        />
                        <h1 className='text-blue-800 font-bold text-2xl leading-tight'>Métricas</h1>
                        <p className="text-center max-w-lg">Monitore o trafego</p>
                    </div>
                    <div className="flex flex-col items-center bg-[url('/background1.svg')] bg-no-repeat bg-center bg-cover w-40 h-40 pt-5">
                        <Image
                            src="/icon-fidelizacao.svg"
                            alt=""
                            width={40}
                            height={40}
                            className="mb-3"
                        />
                        <h1 className='text-blue-800 font-bold text-2xl leading-tight'>Fidelidade</h1>
                        <p className="text-center max-w-lg">Maior busca pela sua marca</p>
                    </div>
                </div>
                <div className="flex items-center justify-center h-20">
                    <p className="text-center max-w-lg">
                        Precisando de mais provas? <span className="text-blue-800">Solicite um contato</span> e descubra como impulsionar o seu negócio com a equipe de desenvolvimento da Devpix.
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto mt-20 mb-0 gap-4 max-w-[1300px] w-full px-10"
                ref={el => {
                    if (el) sectionRefs.current[2] = el; 
                }}>
                <div className="flex justify-center items-start gap-4 w-full">
                    <div className="flex justify-center items-center w-1/4">
                        <Image
                            src="/mulher_de_ti.png"
                            alt="Mulher de TI"
                            width={600}
                            height={600}
                            className="max-w-full h-auto"
                        />
                    </div>
                    <div className="w-2/5 flex flex-col items-start">
                        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                            A <span className="text-blue-800">solução digital</span> para o seu negócio.
                        </h1>
                        <p className="text-gray-700 mt-4 text-justify">
                            Destaque-se com um site profissional feito sob medida para sua marca! A primeira impressão é decisiva, especialmente na internet. Sua empresa merece um site moderno, rápido e que transmita confiança desde o primeiro clique. Na DevPix, transformamos ideias em experiências digitais excepcionais, utilizando design limpo, funcional e totalmente personalizado.
                        </p>
                        <div className="mt-6 flex gap-4">
                            <button className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold">
                                Descubra o Devpix &rarr;
                            </button>
                            <button className="border-2 border-blue-900 px-6 py-3 rounded-md font-semibold">
                                Solicitar contato &rarr;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-0 mb-0' ref={el => {
                if (el) sectionRefs.current[3] = el; 
            }}>
                <Image
                    src="/component-12-x.svg"
                    alt="Profissional de TI"
                    width={80}
                    height={80}
                    className="w-40 mx-auto max-w-full h-auto"
                />
            </div>
            <div className="flex flex-col justify-center items-center max-w-[1300px] w-full mx-auto mt-0 gap-12 px-10"
                ref={el => {
                    if (el) sectionRefs.current[4] = el;
                }}>
                <div className="flex justify-center items-start gap-12 w-full">
                    <div className="w-2/3 ml-12 flex flex-col items-start">
                        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                            Consultoria e outsourcing de <span className="text-blue-800"> TI.</span>
                        </h1>
                        <p className="text-gray-700 mt-4 text-justify">
                            Conte com soluções completas em consultoria e outsourcing de TI para impulsionar sua empresa ao próximo nível. Oferecemos alocação de profissionais especializados, garantindo qualidade e desempenho excepcionais para o seu negócio.</p>
                        <ol className=" text-gray-700 flex flex-col list-inside list-disc mt-4 gap-2">
                            <li>Consultoria estratégica: Identificamos e implementamos as melhores soluções tecnológicas para seu sucesso.</li>
                            <li>Outsourcing de TI: Terceirize sua TI e concentre-se no que realmente importa para seu negócio.</li>
                            <li>Locação e Serviço Profissional: Profissionais qualificados e soluções personalizadas de acordo com suas necessidades específicas.</li>
                        </ol>
                        <div className="mt-6 flex gap-4">
                            <button className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold">
                                Descubra o Devpix &rarr;
                            </button>
                            <button className="border-2 border-blue-900 px-6 py-3 rounded-md font-semibold">
                                Solicitar contato &rarr;
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-1/3">
                        <Image
                            src="/profissional_de_ti.png"
                            alt="Mulher de TI"
                            width={400}
                            height={400}
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>
            </div>
            <div className='bg-blue-100 flex flex-col justify-center items-center w-full mt-20 p-10'
                ref={el => {
                    if (el) sectionRefs.current[5] = el;
                }}>
                <div className='text-center'>
                    <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                        Tenha mais <span className="text-blue-800">vantagens</span>
                    </h1>
                    <p className="text-gray-700 mt-4 text-justify">
                        Inicie com custo R$0,00 e cancele quando quiser com segurança e comodidade.
                    </p>
                </div>
                <div className="flex justify-center items-center gap-8">
                    <div className='bg-white w-40 p-2 h-40 mt-8 flex flex-col border-blue-900 border-2 rounded-xl justify-center items-center'>
                        <Image
                            src="/corporate-0.svg"
                            alt="Mulher de TI"
                            width={60}
                            height={60}
                            className="max-w-full h-auto"
                        />
                        <h1 className='text-black text-center'>
                            Transforme visitante em clients
                        </h1>
                    </div>
                    <div className='bg-white w-40 p-2 h-40 mt-8 flex flex-col border-blue-900 border-2 rounded-xl justify-center items-center'>
                        <Image
                            src="/component-2.svg"
                            alt="Mulher de TI"
                            width={60}
                            height={60}
                            className="max-w-full h-auto"
                        />
                        <h1 className='text-black text-center'>
                            Site responsivo
                        </h1>
                    </div>
                    <div className='bg-white w-40 p-2 h-40 mt-8 flex flex-col border-blue-900 border-2 rounded-xl justify-center items-center'>
                        <Image
                            src="/component-1.svg"
                            alt="Mulher de TI"
                            width={60}
                            height={60}
                            className="max-w-full h-auto"
                        />
                        <h1 className='text-black text-center'>
                            Edição ilimitada
                        </h1>
                    </div>
                    <div className='bg-white w-40 p-2 h-40 mt-8 flex flex-col border-blue-900 border-2 rounded-xl justify-center items-center'>
                        <Image
                            src="/corporate-3.svg"
                            alt="Mulher de TI"
                            width={60}
                            height={60}
                            className="max-w-full h-auto"
                        />
                        <h1 className='text-black text-center'>
                            Segurança SSL
                        </h1>
                    </div>
                    <div className='bg-white w-40 p-2 h-40 mt-8 flex flex-col border-blue-900 border-2 rounded-xl justify-center items-center'>
                        <Image
                            src="/component-4.svg"
                            alt="Mulher de TI"
                            width={60}
                            height={60}
                            className="max-w-full h-auto"
                        />
                        <h1 className='text-black text-center'>
                            Cancele quando quiser
                        </h1>
                    </div>
                </div>
            </div>
            <div className='px-10 py-10' ref={el => {
                if (el) sectionRefs.current[6] = el; 
            }}>
                <div className="flex flex-col justify-center items-center">
                    <h1 className='text-3xl font-bold mt-16 text-gray-900 leading-tight'>
                        Pronto para criar o site que a sua empresa merece?
                    </h1>
                    <p className="text-gray-700 text-center mt-4 w-7/10 mx-auto">
                        Soluções desenvolvida sob medida para sua empresa com sites que otimiza a experiência dos usuários ajudando você a atrair mais clientes para o seu negócio alavancando sua receita.
                    </p>
                </div>
                <div className='flex justify-center'>
                    <div className="flex justify-center items-start mx-auto mt-6 mb-7 gap-4">
                        <button className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold">
                            Descubra o Devpix &rarr;
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
