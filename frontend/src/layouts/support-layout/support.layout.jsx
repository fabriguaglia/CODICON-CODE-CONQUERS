import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./support.layout.css";
import Swal from "sweetalert2";
import Logo from "../../assets/principal-image.png";
import TermsConditions from "./terms.conditions";
import Politics from "./politics";
import Tutorial from "./tutorial";
import FAQ from "./FAQ";

const SupportLayout = () => {
    const [support, setSupport] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [lineStyle, setLineStyle] = useState("w-[100%] h-[1.5px] md:w-[1.5px] md:min-h-[100vh] bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% transition-colors duration-200");

    const [borderStyles, setBorderStyles] = useState("p-6 bg-white/15 rounded-lg shadow-md border border-y-cyan-400 border-x-indigo-400  border-gradient-to-b transition-colors duration-200");

    const [openTerm, setOpenTerm] = useState(false);
    const [openPolitics, setOpenPolitics] = useState(false);
    const [openAyuda, setOpenAyuda] = useState(false);
    const [openFAQ, setOpenFAQ] = useState(false); // Estado para controlar la apertura del componente FAQ

    const handleOpenTerm = () => {
        setOpenTerm(true);
    };

    const handleOpenPolitics = () => {
        setOpenPolitics(true);
    };

    const handleOpenTutorial = () => {
        setOpenAyuda(true);
    };

    const handleOpenFAQ = () => {
        setOpenFAQ(true);
    };

    const handleChange = (event) => {
        setSupport({
            ...support,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3002/support", support);
            console.log(response.data);
            if (response.data) {
                Swal.fire({
                    icon: "success",
                    title: "Message sent successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            })
        }
    };

    const styles = {
        main: "w-full min-h-screen ",
        container: "w-full flex flex-col items-center justify-around min-h-screen py-2 bg-[#224743]",
        logo: "h[560px] w-[560px]",
        form: "p-6 bg-white/15 rounded-lg shadow-md border border-gray-700",
        divs: "flex flex-col py-6 px-8",
        div2: "flex flex-col md:flex-row w-full items-center justify-evenly h-full",
        div_form: "flex flex-col items-center justify-center py-10 w-1/2",
        label: "block mb-2 text-lg font-medium text-white",
        input: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5",
        textarea: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 h-32 mb-4",
        button: "text-white underline underline-offset-4 bg-[#224743] hover:bg-[#224743]/70 focus:ring-4 focus:outline-none focus:ring-bg-indigo-500 font-medium rounded-lg text-lg sm:w-auto px-5 py-2.5 text-center",
        line: "w-[100%] h-[8px] md:w-[8px] md:min-h-[100vh] bg-[#2247]/20",
        term: "flex flex-col items-center justify-center gap-10 md:h-[100vh] w-1/2"
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setLineStyle("w-[100%] h-[4.5px] md:w-[4.5px] md:min-h-[100vh] bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% transition-colors duration-1000");
                setBorderStyles("p-6 bg-white/15 rounded-lg shadow-md border border-y-cyan-600 border-x-indigo-600 border-gradient-to-b transition-colors duration-1000");
            } else if (window.scrollY > 90) {
                setLineStyle("w-[100%] h-[4px] md:w-[4px] md:min-h-[100vh] bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% transition-colors duration-750");
                setBorderStyles("p-6 bg-white/15 rounded-lg shadow-md border border-x-cyan-600 border-y-indigo-600 border-gradient-to-b transition-colors transition-colors duration-750");
            } else if (window.scrollY > 100) {
                setLineStyle("w-[100%] h-[3.5px] md:w-[3.5px] md:min-h-[100vh] bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% transition-colors duration-500");
                setBorderStyles("p-6 bg-white/15 rounded-lg shadow-md border border-y-cyan-500 border-x-indigo-500 border-gradient-to-b transition-colors transition-colors duration-500");
            } else {
                setLineStyle("w-[100%] h-[2px] md:w-[2px] md:min-h-[100vh] bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% transition-colors duration-300");
                setBorderStyles("p-6 bg-white/15 rounded-lg shadow-md border border-x-cyan-500 border-y-indigo-500  border-gradient-to-b transition-colors transition-colors duration-300");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header>
                <Header />
            </header>
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.divs}>
                        <img className={styles.logo} src={Logo} alt="" />
                    </div>
                    <div className={styles.div2}>
                        <div className={styles.div_form}>
                            <form action="" className={borderStyles} onSubmit={handleSubmit}>
                                <div className={styles.divs}>
                                    <label className={styles.label} htmlFor="name" >Nombre:</label>
                                    <input
                                        className={styles.input}
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={support.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.divs}>
                                    <label className={styles.label} htmlFor="email" >Correo electrónico:</label>
                                    <input
                                        className={styles.input}
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={support.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.divs}>
                                    <label className={styles.label} htmlFor="message" >Transmite:</label>
                                    <textarea
                                        className={styles.textarea}
                                        name="message"
                                        id="message"
                                        cols="30"
                                        rows="10"
                                        value={support.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className={styles.divs}>
                                    <button className={styles.button} type="submit">Transmitir</button>
                                </div>

                            </form>
                        </div>
                        <div className={lineStyle} id="line" ></div>
                        <div className={styles.term}>
                            <button className={styles.button} onClick={handleOpenTerm}>Terminos & Condiciones</button>
                            <button className={styles.button} onClick={handleOpenPolitics}>Políticas de Privacidad</button>
                            <button className={styles.button} onClick={handleOpenTutorial}>Tutorial</button>
                            <button className={styles.button} onClick={handleOpenFAQ}>Preguntas Frecuentes</button>
                        </div>
                    </div>
                    <div>{openTerm ? <TermsConditions setOpen={setOpenTerm} /> : null}</div>
                    <div>{openPolitics ? <Politics setOpen={setOpenPolitics} /> : null}</div>
                    <div>{openAyuda ? <Tutorial setOpen={setOpenAyuda} /> : null}</div>
                    {/* Renderiza el componente FAQ si openFAQ es verdadero */}
                    {openFAQ && <FAQ setOpen={setOpenFAQ} />}
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default SupportLayout;
