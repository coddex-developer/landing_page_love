import { useEffect } from "react";
import Parallax from "../Parallax";
import Section from "../Section";
import "./hero.min.css";
import Footer from "../Footer";
import Gallery from "../Gallery";
import CardEffect from "../CardEffect";

function HeroSection() {

    const nomeA = "Juliana";
    const nomeB = "Rafael";

    useEffect(() => {

        const classElements = document.querySelectorAll(".sectionPrimary, li, .videosMp4, .heroTexts, .secondTitle");
        const intersectionObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            })
        });
        classElements.forEach(event => intersectionObserver.observe(event));
    }, []);

    return (
        <>

            <Parallax image="/images/parallaxImages/bg-01.jpg">
                <div className="heroTexts">
                    <h1 style={{ color: "#e5e5e5" }}>{nomeA} e {nomeB}</h1>
                    <p style={{ color: "#e5e5e5" }}>19/04/2018</p>
                </div>
                <div className="hearts-effect">
                    <ul>
                        <li>
                            <i className="bi bi-heart-fill heart heart-1"></i>
                        </li>
                        <li>
                            <i className="bi bi-heart-fill heart heart-2"></i>
                        </li>
                        <li>
                            <i className="bi bi-heart-fill heart heart-3"></i>
                        </li>
                    </ul>
                </div>
            </Parallax>

            <Section className="sectionPrimary">
                <div className="containerSection">
                    <h2 className="secondTitle"><i className="bi bi-film"></i> Nossa Linha do Tempo</h2>
                </div>
                <Gallery />
                <p className="intro-paragraph">
                    Cada momento ao seu lado é uma página de uma história que eu quero escrever para sempre.
                    <br />
                    Uma jornada que começou com um olhar e floresceu no mais puro amor.
                </p>
            </Section>

            <Parallax image="/images/parallaxImages/bg-02.jpg">
                <div className="heroTexts">
                    <h1>Nosso Casamento</h1>
                    <p>Foi como se o universo conspirasse para nos unir, e desde então, cada dia é uma nova aventura ao seu lado.</p>
                </div>
            </Parallax>

            <Section>
                <ul className="list-hero">
                    <li><i className="bi bi-heart-fill"></i> O dia em que nos conhecemos foi o início de uma história que eu nunca imaginei viver.</li>
                    <li><i className="bi bi-heart-fill"></i> Cada risada compartilhada é uma nota na melodia do nosso amor.</li>
                    <li><i className="bi bi-heart-fill"></i> Você é a razão pela qual eu acredito em contos de fadas modernos.</li>
                    <li><i className="bi bi-heart-fill"></i> Nosso amor é a prova de que as melhores histórias começam com um simples olhar.</li>
                </ul>
            </Section>

            <Parallax image="/images/parallaxImages/bg-03.jpg">
                <div className="heroTexts">
                    <h1>Nosso Futuro</h1>
                    <p>Sempre imaginei um futuro onde cada dia fosse uma nova oportunidade, no dia em que te conheci vi que realmente Deus planeja muito mais do que esperamos.</p>
                </div>
            </Parallax>
            <Section>
                <ul className="list-hero">
                    <li><i className="bi bi-heart-fill"></i> Cada dia ao seu lado é uma certeza de um amanhã melhor.</li>
                    <li><i className="bi bi-heart-fill"></i> Sonho com um futuro onde cada dia é uma nova oportunidade de amar você ainda mais.</li>
                    <li><i className="bi bi-heart-fill"></i> Nosso amor é a base sólida sobre a qual construiremos nossos sonhos.</li>
                    <li><i className="bi bi-heart-fill"></i> Com você, o futuro é um livro em branco, e eu estou muito feliz para escrever cada página com voçê ao meu lado.</li>
                </ul>
            </Section>
            <Parallax image="/images/parallaxImages/bg-04.jpg">
                <div className="heroTexts">
                    <h1>Nosso Amor</h1>
                    <p>É a força que nos une, a luz que nos guia e a razão pela qual sorrimos todos os dias.</p>
                </div>
            </Parallax>
            <Section>
                <h1 className="titulo-mural-do-tempo">Momentos Eternizaedos</h1>
                <div className="card-hover">
                    <CardEffect
                        image="/images/memoriesImages/three/1d3.jpg"
                        description="Mensagem 1"
                    />
                    <CardEffect
                        image="/images/memoriesImages/three/2d3.jpg"
                        description="Mensagem 2"
                    />
                    <CardEffect
                        image="/images/memoriesImages/three/3d3.jpg"
                        description="Mensagem 3"
                    />
                    <CardEffect
                        image="/images/memoriesImages/three/4d3.jpg"
                        description="Mensagem 4"
                    />                    
                    <CardEffect
                        image="/images/memoriesImages/three/9d3.jpg"
                        description="Mensagem 5"
                    />
                    <CardEffect
                        image="/images/memoriesImages/three/10d3.jpg"
                        description="Mensagem 6"
                    />
                    <CardEffect
                        image="/images/memoriesImages/three/11d3.jpg"
                        description="Mensagem 7"
                    />
                    <CardEffect
                        image="/images/memoriesImages/three/12d3.jpg"
                        description="Mensagem 8"
                    />
                    <CardEffect
                        image="/images/memoriesImages/three/8d3.jpg"
                        description="Mensagem 9"
                    />
                    <CardEffect
                        image="/images/memoriesImages/three/6d3.jpg"
                        description="Mensagem 10"
                    />
                    <CardEffect
                        image="/images/memoriesImages/three/7d3.jpg"
                        description="Mensagem 11"
                    />
                    <CardEffect
                        image="/images/memoriesImages/three/5d3.jpg"
                        description="Mensagem 12"
                    />
                </div>
            </Section>
            <Parallax image="/images/memoriesImages/three/6d3.jpg">
                <div className="heroTexts">
                    <h1>Nosso Compromisso</h1>
                    <p>É amar, respeitar e apoiar um ao outro em todas as circunstâncias.</p>
                </div>
            </Parallax>
            <Footer />
        </>
    );
};

export default HeroSection;