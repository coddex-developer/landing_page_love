import { useEffect } from "react";
import Parallax from "../Parallax";
import Section from "../Section";
import "./hero.min.css";
import Footer from "../Footer";

function HeroSection() {
    const nomeA = "Jhon Doe";
    const nomeB = "Mariana Doe";

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
            <Parallax image="https://imgs.search.brave.com/mpKHyqvC3mGiNySPH_JYCY1sCCC4C2-qFQuMIrdtaUA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vcVJQOGlC/VEdXRzNldkFWdk1P/SnZmeGI3VktsM3hW/azJaNV9KX1QwNTZC/QS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/YldjdS9abkpsWlhC/cGF5NWpiMjB2L1pt/OTBiM010Y0hKbGJX/bDEvYlM5cGJXRm5a/VzB0WkdVdC9kVzB0/WTJGellXd3RZWEJo/L2FYaHZibUZrYjE4/NU5EUXgvTWpndE1U/STVNekl1YW5Cbi9Q/M05sYlhROVlXbHpY/Mmg1L1luSnBaQQ">
                <div className="heroTexts">
                    <h1>Nosso <span className="spn">Amor</span> em Celebração</h1>
                    <p>{nomeA} e {nomeB}</p>
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
                    <h2 className="secondTitle">Onde Nossos Corações se Encontraram</h2>
                    <video className="videosMp4" src="/videos/love.mp4" autoPlay playsInline muted></video>
                </div>
                <p className="intro-paragraph">
                    Cada momento ao seu lado é uma página de uma história que eu quero escrever para sempre.
                    Uma jornada que começou com um olhar e floresceu no mais puro amor.
                </p>
            </Section>

            <Parallax image="https://imgs.search.brave.com/jr0yAOUlZwuAA2TlaNVLuJnGbEmXxxyHvlycph3p3xY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vNG5wUU1x/UXc2ekZTalIxd0sw/OEJySzZNZGpxcmgt/OGU3d18zNTdxd1FG/US9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/YldjdS9abkpsWlhC/cGF5NWpiMjB2L1pt/OTBiM010Y0hKbGJX/bDEvYlM5MWJTMWpZ/WE5oYkMxaC9jR0Zw/ZUc5dVlXUnZMV1Js/L1ltRnBlRzh0WkdV/dGRXMWgvTFdGeWRt/OXlaUzF3WlhKMC9i/eTFrWVMxd2NtRnBZ/UzFqL2IyMHRieTF3/YjNJdFpHOHQvYzI5/c0xXRnZMV1oxYm1S/di9YelV6TXpnME9T/MDVORGt1L2FuQm5Q/M05sYlhROVlXbHov/WDJoNVluSnBaQ1oz/UFRjMC9NQQ">
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

            <Parallax image="https://imgs.search.brave.com/6KMFss5TpJJ6BAVogsbSTww349XN1i0slX8u_D1rOMc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vOGRPY1Jo/ZzZpV05pS2YtWjM5/VVFGMThWZ0pMSU5B/SC1Id2p1RTV1QXFC/dy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/WVd4cy9jR0Z3WlhK/ekxtTnZiUzlwL2JX/Rm5aWE12YUdRdlky/OTEvY0d4bGN5MW9k/V2RuYVc1bi9MWEJw/WTNSMWNtVnpMWGx0/L1kyMXpibWMzYlcx/cVlqZHcvTlhJdWFu/Qm4">
                <div className="heroTexts">
                    <h1>Nosso Futuro</h1>
                    <p>Sonho com um futuro onde cada dia é uma nova oportunidade de amar você ainda mais.</p>
                </div>
            </Parallax>
            <Footer />
        </>
    );
};

export default HeroSection;