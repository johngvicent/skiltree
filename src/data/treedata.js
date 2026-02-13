/**
 * Estructura jerárquica de recursos de aprendizaje
 * Este archivo contiene todos los datos del árbol de visualización
 * organizados por categorías principales: Ciberseguridad, Desarrollo, Diseño, Ciencias y Hardware
 */

export const treeData = {
    name: "Recursos de Aprendizaje",
    children: [
        {
            name: "Ciberseguridad",
            children: [
                {
                    name: "Fundamentos y Redes",
                    children: [
                        { name: "Cisco Networking Academy", url: "https://www.cisco.com/site/es/es/learn/index.html" },
                        { name: "Contando Bits - Curso de Redes", url: "https://www.youtube.com/watch?v=OLSKCWjI778" },
                        { name: "INCIBE (Formación Sectorial)", url: "https://www.incibe.es/formacion" },
                        { name: "Roadmap.sh - Cyber Security", url: "https://roadmap.sh/cyber-security" },
                        { name: "Profesor Wolf (Linux y Redes)", url: "https://www.youtube.com/c/ProfesorWolf" }
                    ]
                },
                {
                    name: "Hacking Ético (Red Team)",
                    children: [
                        { name: "Hack The Box (HTB)", url: "https://www.hackthebox.com/" },
                        { name: "TryHackMe", url: "https://tryhackme.com/" },
                        { name: "Metasploit Unleashed (OffSec)", url: "https://www.offsec.com/metasploit-unleashed/" },
                        { name: "VulnHub", url: "https://www.vulnhub.com/" },
                        { name: "HackThisSite", url: "https://www.hackthissite.org/" }
                    ]
                },
                {
                    name: "Defensa Digital (Blue Team)",
                    children: [
                        { name: "PortSwigger Web Security Academy", url: "https://portswigger.net/web-security" },
                        { name: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" },
                        { name: "OWASP Juice Shop", url: "https://owasp.org/www-project-juice-shop/" },
                        { name: "DVWA (Damn Vulnerable Web App)", url: "https://dvwa.co.uk/" },
                        { name: "Google Gruyere", url: "https://google-gruyere.appspot.com/" }
                    ]
                },
                {
                    name: "Forense y Malware",
                    children: [
                        { name: "Autopsy Digital Forensics", url: "https://www.autopsy.com/support/training/" },
                        { name: "Malware Traffic Analysis", url: "https://www.malware-traffic-analysis.net/" },
                        { name: "Ghidra (NSA)", url: "https://ghidra-sre.org/" },
                        { name: "CFReDS", url: "https://cfreds.nist.gov/" },
                        { name: "Curso de Análisis Forense (DragonJAR)", url: "https://www.dragonjar.org/curso-gratuito-de-anlisis-forense-basico.xhtml" }
                    ]
                }
            ]
        },
        {
            name: "Desarrollo",
            children: [
                {
                    name: "Frontend",
                    children: [
                        { name: "freeCodeCamp", url: "https://www.freecodecamp.org" },
                        { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
                        { name: "CSS-Tricks", url: "https://css-tricks.com" },
                        { name: "JavaScript.info", url: "https://javascript.info" }
                    ]
                },
                {
                    name: "Backend",
                    children: [
                        { name: "Node.js Docs", url: "https://nodejs.org/docs" },
                        { name: "Django Tutorial", url: "https://docs.djangoproject.com" },
                        { name: "Spring Guides", url: "https://spring.io/guides" },
                        { name: "FastAPI", url: "https://fastapi.tiangolo.com" }
                    ]
                },
                {
                    name: "DevOps",
                    children: [
                        { name: "Docker Docs", url: "https://docs.docker.com" },
                        { name: "Kubernetes", url: "https://kubernetes.io/docs" },
                        { name: "GitHub Actions", url: "https://docs.github.com/actions" }
                    ]
                }
            ]
        },
        {
            name: "Diseño",
            children: [
                {
                    name: "UI-UX",
                    children: [
                        {
                            name: "Figma",
                            children: [
                                { name: "Figma Learn", url: "https://help.figma.com/hc/en-us" },
                                { name: "Espacio UX", url: "https://youtube.com/playlist?list=PLMln30SKTZi2tDNYrwgV9hRI19V-Ke9yx&si=-o3r8ModKLuaEZtL" },
                                { name: "Edutin Academy", url: "https://edutin.com/curso-de-figma" },
                                { name: "Figma Sitio", url: "https://www.figma.com/" }
                            ]
                        },
                        {
                            name: "Canva",
                            children: [
                                { name: "Eduardo Garduño", url: "https://www.youtube.com/watch?v=JwuWe0KcV7s" },
                                { name: "Canva Design School", url: "https://www.canva.com/design-school" },
                                { name: "Canva Sitio", url: "https://www.canva.com/" }
                            ]
                        },
                        {
                            name: "Indesign",
                            children: [
                                { name: "Scribus", url: "https://wiki.scribus.net/canvas/Primeros_pasos_con_Scribus" },
                                { name: "Adriana Gastaldi", url: "https://www.youtube.com/watch?v=P5PPc0Ryu9g" }
                            ]
                        }
                    ]
                },
                {
                    name: "Teoría del Diseño",
                    children: [
                        {
                            name: "Composición Visual",
                            children: [
                                { name: "Encarna Pascual", url: "https://prezi.com/cwfjnbmpntma/composicion-visual/" },
                                { name: "Teoría del color", url: "https://www.youtube.com/watch?v=cGglJKvpCEs" },
                                { name: "Tipografía", url: "https://youtu.be/EbV3-AJQElQ?si=mqChe1yEJJHvaTTB"}
                            ]
                        },
                        {
                            name: "Branding",
                            children: [
                                { name: "Edutin Academy", url: "https://edutin.com/curso-de-branding" },
                                { name: "Manual de Identidad", url: "https://www.youtube.com/watch?v=YPtSbdLy8RM" }
                            ]
                        }
                    ]
                },
                {
                    name: "Imagen",
                    children: [
                        { name: "Photoshop", url: "https://www.udemy.com/es/topic/photoshop/free/" },
                        { name: "GIMP", url: "https://youtu.be/X61yReOfU0k?si=Jw_PbYPgkKKmlcJS" },
                        { name: "Photopea", url: "https://youtu.be/gjvCc0OYs30?si=jtHm27w2DKU6ylrg" }
                    ]
                },
                {
                    name: "Recursos",
                    children: [
                        { name: "Pexels", url: "https://www.pexels.com/es-es/" },
                        { name: "Unsplash", url: "https://unsplash.com/es" },
                        { name: "Pixabay", url: "https://pixabay.com/" },
                        { name: "Freepik", url: "https://www.freepik.es/app" },
                        { name: "Vecteezy", url: "https://es.vecteezy.com/" },
                        { name: "Google Fonts", url: "https://fonts.google.com/" },
                        { name: "Flat Icons", url: "https://www.flaticon.com/" },
                        { name: "Coolors", url: "https://coolors.co/" },
                        { name: "Adobe Colors", url: "https://color.adobe.com/es/create/color-wheel" }
                    ]
                }
            ]
        },
        {
            name: "Ciencias",
            children: [
                {
                    name: "Matemáticas",
                    children: [
                        { name: "Khan Academy", url: "https://es.khanacademy.org/" },
                        { name: "OpenStax", url: "https://openstax.org/subjects/matematicas" },
                        { name: "Unicoos (David Calle)", url: "https://www.youtube.com/@unicoos" },
                        { name: "Derivando", url: "https://www.youtube.com/@Derivando" }
                    ]
                },
                {
                    name: "Física",
                    children: [
                        { name: "FisicaLab", url: "https://www.fisicalab.com/" },
                        { name: "Virtual", url: "https://www.youtube.com/@Vitual" },
                        { name: "PhET Interactive Simulations", url: "https://phet.colorado.edu/es/" }
                    ]
                },
                {
                    name: "Química",
                    children: [
                        { name: "Khan Academy (Química)", url: "https://es.khanacademy.org/science/chemistry" },
                        { name: "Quimtube", url: "https://www.quimitube.com/" },
                        { name: "Ptable (Tabla Periódica Interactiva)", url: "https://ptable.com/?lang=es#Propiedades" }
                    ]
                },
                {
                    name: "Biología y Psicología",
                    children: [
                        { name: "Khan Academy (Biología)", url: "https://es.khanacademy.org/science/biology" },
                        { name: "PhET (Biología)", url: "https://phet.colorado.edu/es/simulations/filter?subjects=biology" },
                        { name: "Amoeba Sisters (con subtítulos en español)", url: "https://www.youtube.com/@AmoebaSisters" },
                        { name: "Psicología y Mente", url: "https://psicologiaymente.com/" },
                        { name: "Antroporama", url: "https://youtube.com/@antroporamadivulgacion?si=iTZvZ0Ez2Rni01kt" }
                    ]
                },
                {
                    name: "Tierra y Medio Ambiente",
                    children: [
                        { name: "Instituto Geográfico Nacional (IGN) - España", url: "https://www.ign.es/web/ign/portal/recursos-educativos" },
                        { name: "Google Earth Engine", url: "https://earthengine.google.com/timelapse/" },
                        { name: "Earth Nullschool", url: "https://earth.nullschool.net/es/#current/wind/surface/level/orthographic=-1.86,7.64,368" },
                        { name: "EcologiaVerde", url: "https://www.youtube.com/@EcologiaVerde" },
                        { name: "Ciencias de la Tierra", url: "https://youtube.com/playlist?list=PLXR757nNWDE0Zms-tuAIqieEkG5z08dLG&si=nnpFbLhwxLC_BCe2" }
                    ]
                }
            ]
        },
        {
            name: "Hardware",
            children: [
                {
                    name: "Conocimientos Básicos",
                    children: [
                        { name: "Fundamentos de Hardware", url: "https://logongas.es/doku.php?id=clase:asir:fhw:start" },
                        { name: "Vista en 3D", url: "https://www.viewhardware.com/" },
                        { name: "Simulador montaje de PC", url: "https://pcpartpicker.com/list/" },
                        { name: "Montaje y mantenimiento de equipos informáticos", url: "https://es.wikibooks.org/wiki/Mantenimiento_y_Montaje_de_Equipos_Inform%C3%A1ticos" },
                        { name: "Reparaciones de Hardware", url: "https://es.ifixit.com" }
                    ]
                },
                {
                    name: "Electrónica",
                    children: [
                        { name: "Electricidad", url: "https://www.luisllamas.es/curso-electricidad/" },
                        { name: "Electrónica", url: "https://www.luisllamas.es/curso-electronica/" },
                        { name: "Diseño de PCB", url: "https://www.luisllamas.es/curso-pcb/" },
                        { name: "Ingeniería Eléctrica", url: "https://www.khanacademy.org/science/electrical-engineering" },
                        { name: "Circuitos electrónicos", url: "https://www.allaboutcircuits.com/textbook" }
                    ]
                },
                {
                    name: "Raspberry",
                    children: [
                        { name: "Documentación Raspberry", url: "https://www.raspberrypi.com/documentation" },
                        { name: "Curso en profundidad sobre Raspberry Pi", url: "https://www.luisllamas.es/curso-raspberry-pi/" },
                        { name: "Tutoriales con Raspberry Pi", url: "https://geekytheory.com/tutorial-raspberry-pi-1-el-primer-encendido/" },
                        { name: "Web de Ideas de proyecto Raspberry Pi", url: "https://www.instructables.com/circuits/raspberry-pi/projects/" }
                    ]
                },
                {
                    name: "Arduino",
                    children: [
                        { name: "Documentación Arduino", url: "https://docs.arduino.cc" },
                        { name: "Project Hub con ideas de proyectos", url: "https://projecthub.arduino.cc" },
                        { name: "Curso de introducción a arduino", url: "https://www.luisllamas.es/curso-arduino-iniciacion/" },
                        { name: "Curso en profundidad sobre Arduino", url: "https://www.luisllamas.es/curso-arduino-avanzado/" },
                        { name: "Simulador de arduino", url: "https://www.tinkercad.com/circuits" },
                        { name: "Simuladores varios", url: "https://wokwi.com" }
                    ]
                }
            ]
        }
    ]
};
