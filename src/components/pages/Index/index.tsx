import { useEffect } from "react";
import Parallax from "../Parallax";
import Section from "../Section";
import "./hero.min.css";
import Footer from "../Footer";
import Gallery from "../Gallery";

function HeroSection() {
    const nomeA = "Juliana Rocha da Silva";
    const nomeB = "Rafael da Luz Silva";

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
                    <h1>Nosso <span className="spn">Amor</span> em Celebração</h1>
                    <p>{nomeA}</p>
                    <p>e</p>
                    <p>{nomeB}</p>
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
                    <h2 className="secondTitle">Nossa Linha do Tempo</h2>
                </div>
                <Gallery />
                <p className="intro-paragraph">
                    Cada momento ao seu lado é uma página de uma história que eu quero escrever para sempre.
                    Uma jornada que começou com um olhar e floresceu no mais puro amor.
                </p>
            </Section>

            <Parallax image="/images/parallaxImages/bg-02.jpg">
                <div className="heroTexts">
                    <h1>Nosso Encontro</h1>
                    <p>Foi como se o universo conspirasse para nos unir, e desde então, cada dia é uma nova aventura ao seu lado.</p>
                </div>
            </Parallax>

            <Section>
                <ul className="list-hero">
                    <li><i className="bi bi-heart-fill"></i> Nosso primeiro olhar foi como um raio de luz, iluminando meu coração.</li>
                    <li><i className="bi bi-heart-fill"></i> O dia em que nos conhecemos foi o início de uma história que eu nunca imaginei viver.</li>
                    <li><i className="bi bi-heart-fill"></i> Cada risada compartilhada é uma nota na melodia do nosso amor.</li>
                    <li><i className="bi bi-heart-fill"></i> Você é a razão pela qual eu acredito em contos de fadas modernos.</li>
                    <li><i className="bi bi-heart-fill"></i> Nosso amor é a prova de que as melhores histórias começam com um simples "olá".</li>
                </ul>
            </Section>

            <Parallax image="/images/parallaxImages/bg-03.jpg">
                <div className="heroTexts">
                    <h1>Nosso Futuro</h1>
                    <p>Sonho com um futuro onde cada dia é uma nova oportunidade de amar você ainda mais.</p>
                </div>
            </Parallax>
            <Section>
                <ul className="list-hero">
                    <li><i className="bi bi-heart-fill"></i> Juntos, construiremos um futuro repleto de amor e felicidade.</li>
                    <li><i className="bi bi-heart-fill"></i> Cada dia ao seu lado é uma promessa de um amanhã melhor.</li>
                    <li><i className="bi bi-heart-fill"></i> Sonho com um futuro onde cada dia é uma nova oportunidade de amar você ainda mais.</li>
                    <li><i className="bi bi-heart-fill"></i> Nosso amor é a base sólida sobre a qual construiremos nossos sonhos.</li>
                    <li><i className="bi bi-heart-fill"></i> Com você, o futuro é um livro em branco, e eu mal posso esperar para escrever cada página juntos.</li>
                </ul>
            </Section>
            <Parallax image="/images/parallaxImages/bg-04.jpg">
                <div className="heroTexts">
                    <h1>Nosso Amor</h1>
                    <p>É a força que nos une, a luz que nos guia e a razão pela qual sorrimos todos os dias.</p>
                </div>
            </Parallax>
            <Section>
                <ul className="list-hero">
                    <li><i className="bi bi-heart-fill"></i> Nosso amor é a força que nos une, a luz que nos guia e a razão pela qual sorrimos todos os dias.</li>
                    <li><i className="bi bi-heart-fill"></i> Cada momento ao seu lado é um presente que eu valorizo profundamente.</li>
                    <li><i className="bi bi-heart-fill"></i> Você é a razão pela qual eu acredito que o amor verdadeiro existe.</li>
                    <li><i className="bi bi-heart-fill"></i> Nosso amor é uma jornada que eu quero explorar para sempre.</li>
                    <li><i className="bi bi-heart-fill"></i> Com você, cada dia é uma nova oportunidade de amar e ser amado.</li>
                </ul>
            </Section>
            <Parallax image="/images/parallaxImages/bg-05.jpg">
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