import { useEffect } from "react";
import Parallax from "../Parallax";
import Section from "../Section";
import "./hero.min.css";
import Footer from "../Footer";
import Gallery from "../Gallery";
import CardEffect from "../CardEffect";
import ObserverEffect from "../../ObserverEffect/IntersectionObserver";
import PlayerMusic from "../../PlayerMusic";

function HeroSection() {
    const nomeA = "Juliana";
    const nomeB = "Rafael";

    useEffect(() => {
        const observerElements = document.querySelectorAll(".sectionPrimary, li, .videosMp4, .heroTexts, .secondTitle");
        ObserverEffect(observerElements)
    }, []);

    return (
        <>
            <PlayerMusic />
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
                    <p>No dia em que te conheci, percebi que Deus sempre planeja muito mais do que podemos sonhar.</p>
                </div>
            </Parallax>
            <Section>
                <ul className="list-hero">
                    <li><i className="bi bi-heart-fill"></i> Cada dia ao seu lado é uma certeza de um amanhã melhor.</li>
                    <li><i className="bi bi-heart-fill"></i> Nosso amor é a base sólida sobre a qual realizaremos nossos sonhos.</li>
                </ul>
            </Section>
            <Parallax image="/images/parallaxImages/bg-04.jpg">
                <div className="heroTexts">
                    <h1>Nosso Amor</h1>
                    <p>Com você, sinto como se o futuro fosse um livro em branco, e eu estou muito feliz por escrever cada página com voçê ao meu lado.</p>
                </div>
            </Parallax>
            <Section>
                <h1 className="titulo-mural-do-tempo"><i className="bi bi-calendar2-heart"></i> Melhores momentos</h1>
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
                    <h1>Nosso Compromisso de Amor</h1>
                    <p>Constrímos uma vida baseada no amor, no respeito e na cumplicidade, a cada dia reafirmamos nosso compromisso de cuidar, apoiar e caminhar juntos, sempre, em qualque circunstância.</p>
                </div>
            </Parallax>
            <Footer />
        </>
    );
};

export default HeroSection;