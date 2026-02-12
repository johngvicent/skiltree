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
                    name: "CTFs",
                    children: [
                        { name: "HackTheBox", url: "https://www.hackthebox.com" },
                        { name: "TryHackMe", url: "https://tryhackme.com" },
                        { name: "PicoCTF", url: "https://picoctf.org" },
                        { name: "Root Me", url: "https://www.root-me.org" }
                    ]
                },
                {
                    name: "Cursos",
                    children: [
                        { name: "Cybrary", url: "https://www.cybrary.it" },
                        { name: "OWASP", url: "https://owasp.org" },
                        { name: "PortSwigger Academy", url: "https://portswigger.net/web-security" }
                    ]
                },
                {
                    name: "Herramientas",
                    children: [
                        { name: "Kali Linux", url: "https://www.kali.org" },
                        { name: "Metasploit", url: "https://www.metasploit.com" },
                        { name: "Wireshark", url: "https://www.wireshark.org" }
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
                        { name: "Khan Academy", url: "https://www.khanacademy.org/math" },
                        { name: "Brilliant", url: "https://brilliant.org" },
                        { name: "3Blue1Brown", url: "https://www.3blue1brown.com" },
                        { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu/courses/mathematics" }
                    ]
                },
                {
                    name: "Física",
                    children: [
                        { name: "Physics Classroom", url: "https://www.physicsclassroom.com" },
                        { name: "HyperPhysics", url: "http://hyperphysics.phy-astr.gsu.edu" },
                        { name: "Feynman Lectures", url: "https://www.feynmanlectures.caltech.edu" }
                    ]
                },
                {
                    name: "Psicología",
                    children: [
                        { name: "Simply Psychology", url: "https://www.simplypsychology.org" },
                        { name: "Psychology Today", url: "https://www.psychologytoday.com" },
                        { name: "Coursera Psychology", url: "https://www.coursera.org/browse/social-sciences/psychology" }
                    ]
                }
            ]
        },
        {
            name: "Hardware",
            children: [
                {
                    name: "Arduino",
                    children: [
                        { name: "Arduino Docs", url: "https://docs.arduino.cc" },
                        { name: "Arduino Project Hub", url: "https://create.arduino.cc/projecthub" },
                        { name: "Adafruit Learn", url: "https://learn.adafruit.com" }
                    ]
                },
                {
                    name: "Electrónica",
                    children: [
                        { name: "All About Circuits", url: "https://www.allaboutcircuits.com" },
                        { name: "Electronics Tutorials", url: "https://www.electronics-tutorials.ws" },
                        { name: "SparkFun Tutorials", url: "https://learn.sparkfun.com" }
                    ]
                },
                {
                    name: "Raspberry Pi",
                    children: [
                        { name: "Raspberry Pi Docs", url: "https://www.raspberrypi.org/documentation" },
                        { name: "MagPi Magazine", url: "https://magpi.raspberrypi.org" },
                        { name: "Pi My Life Up", url: "https://pimylifeup.com" }
                    ]
                }
            ]
        }
    ]
};
