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
                    name: "Front End",
                    children: [
                        {
                            name: "Temario",
                            children: [
                                { name: "Lenguaje de Marcado", url: "https://jorgesanchez.net/lmsgi" },
                                { name: "Despliegue de aplicaciones web", url: "https://despliegue.codeandcoke.com" },
                                { name: "Desarrollo Web en Entorno Servidor", url: "https://servidor.codeandcoke.com" },
                                { name: "Diseño de interfaces Web", url: "https://logongas.es/doku.php?id=clase:daw:diw:start" }
                            ]
                        },
                        {
                            name: "Lenguajes Front",
                            children: [
                                {
                                    name: "Marcado",
                                    children: [
                                        {
                                            name: "HTML",
                                            children: [
                                                { name: "Lenguaje HTML", url: "https://lenguajehtml.com/" },
                                                { name: "Falcon Webs", url: "https://www.youtube.com/@FalconMasters" }
                                            ]
                                        },
                                        {
                                            name: "CSS",
                                            children: [
                                                { name: "Falcon Webs", url: "https://web.dev/learn/css?hl=es" },
                                                { name: "Hola Mundo CSS", url: "https://www.youtube.com/watch?v=wZniZEbPAzk&t=365s" }
                                            ]
                                        },
                                        {
                                            name: "Tailwind",
                                            children: [
                                                { name: "Web Oficial", url: "https://tailwindcss.com/" },
                                                { name: "Tailgrids", url: "https://tailgrids.com/" },
                                                { name: "Midudev", url: "https://www.youtube.com/watch?v=R5EXap3vNDA&t=10s" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Script",
                                    children: [
                                        {
                                            name: "Javascript",
                                            children: [
                                                { name: "Javascript Info", url: "https://es.javascript.info/" },
                                                { name: "Soy Dalto", url: "https://youtube.com/playlist?list=PLE8uP447fYpiBqMVF1hdWl9uFeVEeXRTm&si=qB0hLHUelYXcP5GN" },
                                                { name: "Codier", url: "https://codier.io/" }
                                            ]
                                        },
                                        {
                                            name: "Typescript",
                                            children: [
                                                { name: "Manual Oficial", url: "https://www.typescriptlang.org/es/docs/handbook/" },
                                                { name: "Miudev Typescript", url: "https://youtu.be/xtp_DuPxo9Q?si=UHo82xlW_m-AbUjl" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Arquitecturas",
                                    children: [
                                        {
                                            name: "Astro",
                                            children: [
                                                { name: "Astro Docs", url: "https://docs.astro.build/es/getting-started/" },
                                                { name: "Temas de Astro", url: "https://astro.build/themes/" },
                                                { name: "Gentleman Programming", url: "https://www.youtube.com/watch?v=xi5PFNj90Mk" }
                                            ]
                                        },
                                        {
                                            name: "React",
                                            children: [
                                                {
                                                    name: "Vite",
                                                    children: [
                                                        { name: "React Learn", url: "https://es.react.dev/learn" },
                                                        { name: "Vite Guide", url: "https://es.vitejs.dev/guide/" },
                                                        { name: "Hola Mundo | Aprende React", url: "https://www.youtube.com/watch?v=yIr_1CasXkM" }
                                                    ]
                                                },
                                                {
                                                    name: "Next.js",
                                                    children: [
                                                        { name: "Next Learn", url: "https://nextjs.org/learn" },
                                                        { name: "Vercel", url: "https://www.youtube.com/watch?v=sxcKVwURuhk" },
                                                        { name: "Leonidas Esteban Tutoriales", url: "https://www.youtube.com/watch?v=_sTUmUqyGAI" }
                                                    ]
                                                },
                                                {
                                                    name: "Native",
                                                    children: [
                                                        { name: "React Native Express", url: "https://www.reactnative.express/" },
                                                        { name: "Expo Documentación", url: "https://docs.expo.dev/" },
                                                        { name: "Midulive | React Native", url: "https://www.youtube.com/watch?v=U23lNFm_J70" }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Angular",
                                            children: [
                                                { name: "Documentación", url: "https://docs.angular.lat/overview" },
                                                { name: "Angular University", url: "https://blog.angular-university.io/" },
                                                { name: "Dominicode", url: "https://youtube.com/playlist?list=PL_9MDdjVuFjG0D_DE7INriK-vdI_Rm4n6&si=E_cxayA9b5CedCXk" }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Recursos",
                            children: [
                                { name: "Vercel", url: "https://vercel.com/" },
                                { name: "Netlify", url: "https://www.netlify.com/" }
                            ]
                        }
                    ]
                },
                {
                    name: "Back End",
                    children: [
                        {
                            name: "Temario",
                            children: [
                                {
                                    name: "Bases de datos",
                                    children: [
                                        { name: "Javier Gutierrez Apuntes", url: "https://javiergutierrez.trade/apuntes-de-bases-de-datos/" },
                                        { name: "Code and Coke | Bases", url: "https://bbdd.codeandcoke.com/" },
                                        { name: "Aitor Medrano", url: "https://aitor-medrano.github.io/bd/" }
                                    ]
                                },
                                {
                                    name: "Acceso a datos",
                                    children: [
                                        { name: "Code and Coke | Accesos", url: "https://datos.codeandcoke.com/" }
                                    ]
                                },
                                {
                                    name: "Prog. de servicios y procesos",
                                    children: [
                                        { name: "Code and Coke | PSP", url: "https://psp.codeandcoke.com/" }
                                    ]
                                },
                                {
                                    name: "Entornos de Desarrollo",
                                    children: [
                                        { name: "Code and Coke | Entornos", url: "https://entornos-desarrollo.codeandcoke.com/" }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Lenguajes Back",
                            children: [
                                {
                                    name: "Java",
                                    children: [
                                        { name: "Open Webinars", url: "https://openwebinars.net/temas/java/" },
                                        { name: "Java Ya", url: "https://www.tutorialesprogramacionya.com/javaya/" },
                                        { name: "TodoCode", url: "https://youtube.com/playlist?list=PLQxX2eiEaqbwxYrMUJ6gRz82mLzUeeJy9&si=uEY5az_qgyStoh40" }
                                    ]
                                },
                                {
                                    name: "Entorno C",
                                    children: [
                                        {
                                            name: "C",
                                            children: [
                                                { name: "Learn C", url: "https://www.learn-c.org/es/" },
                                                { name: "C Ya", url: "https://www.tutorialesprogramacionya.com/cya/" },
                                                { name: "Programacion ATS | C", url: "https://youtube.com/playlist?list=PLWtYZ2ejMVJmUTNE2QVaCd1y_6GslOeZ6&si=EG2WrVaNZBXzSokK" }
                                            ]
                                        },
                                        {
                                            name: "C#",
                                            children: [
                                                { name: "Microsoft Learn C#", url: "https://learn.microsoft.com/es-es/dotnet/csharp/" },
                                                { name: "C# Station", url: "https://csharp-station.com/Tutorial" },
                                                { name: "Hdeleon Tutorial", url: "https://www.youtube.com/watch?v=j8sxDnr7nPY" }
                                            ]
                                        },
                                        {
                                            name: "C++",
                                            children: [
                                                { name: "Con Clase C++", url: "https://conclase.net/c" },
                                                { name: "Luis Llamas C++", url: "https://www.luisllamas.es/curso-cpp/" },
                                                { name: "Programación ATS | C++", url: "https://youtube.com/playlist?list=PLWtYZ2ejMVJlUu1rEHLC0i_oibctkl0Vh&si=fh4i15yZSmN2dqK_" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Python",
                                    children: [
                                        { name: "Documentacion Oficial", url: "https://docs.python.org/es/3/tutorial/index.html" },
                                        { name: "Luis Llamas | Python", url: "https://www.luisllamas.es/curso-python/" },
                                        { name: "Hola Mundo | Python desde 0", url: "https://www.youtube.com/watch?v=tQZy0U8s9LY&t=47s" }
                                    ]
                                },
                                {
                                    name: "Kotlin",
                                    children: [
                                        { name: "Kotlin Ya", url: "https://www.tutorialesprogramacionya.com/kotlinya/" },
                                        { name: "Curso Kotlin Para Android", url: "https://cursokotlin.com/" },
                                        { name: "Mouredev | Kotlin", url: "https://www.youtube.com/watch?v=T3ugOYTRF7c" }
                                    ]
                                },
                                {
                                    name: "SQL",
                                    children: [
                                        {
                                            name: "SQL",
                                            children: [
                                                { name: "Khan Academy | SQL", url: "https://es.khanacademy.org/computing/computer-programming/sql" },
                                                { name: "Soy Dalto Curso SQL", url: "https://www.youtube.com/watch?v=DFg1V-rO6Pg" },
                                                { name: "W3Schools | SQL", url: "https://www.w3schools.com/sql/" }
                                            ]
                                        },
                                        {
                                            name: "MySQL",
                                            children: [
                                                { name: "MySQL Tutorial", url: "https://www.mysqltutorial.org/" },
                                                { name: "My Sql Ya", url: "https://www.tutorialesprogramacionya.com/mysqlya/" },
                                                { name: "Hola Mundo | My SQL", url: "https://www.youtube.com/watch?v=uUdKAYl-F7g" }
                                            ]
                                        },
                                        {
                                            name: "T-SQL",
                                            children: [
                                                { name: "Microsoft Learn SQL", url: "https://learn.microsoft.com/es-es/training/paths/get-started-querying-with-transact-sql/" },
                                                { name: "SQL Ya", url: "https://www.tutorialesprogramacionya.com/sqlserverya/" },
                                                { name: "Informaticonfig", url: "https://youtube.com/playlist?list=PL2Z95CSZ1N4EW0PvNhd4ySZisgBrJjSW2&si=5EcmCrfSLjO4QjNg" }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Git",
                                    children: [
                                        { name: "Pro Git Book", url: "https://git-scm.com/book/es/v2" },
                                        { name: "Git Branch", url: "https://learngitbranching.js.org/?locale=es_ES" },
                                        { name: "Pildoras Informaticas", url: "https://youtube.com/playlist?list=PLU8oAlHdN5BlyaPFiNQcV0xDqy0eR35aU&si=TmpEOoGoEUIo0OAs" }
                                    ]
                                },
                                {
                                    name: "Docker",
                                    children: [
                                        { name: "Luis Llamas | Docker", url: "https://www.luisllamas.es/curso-docker/" },
                                        { name: "Play With Docker", url: "https://labs.play-with-docker.com/" },
                                        { name: "Hola Mundo | Aprende Docker", url: "https://youtu.be/4Dko5W96WHg?si=4IQdVEqKPPoOGul6" }
                                    ]
                                },
                                {
                                    name: "Node.js",
                                    children: [
                                        { name: "Luis Llamas | Node", url: "https://www.luisllamas.es/curso-nodejs/" },
                                        { name: "Documentacion Oficial", url: "https://nodejs.org/es/learn/getting-started/introduction-to-nodejs" },
                                        { name: "Miudev | Node", url: "https://youtube.com/playlist?list=PLUofhDIg_38qm2oPOV-IRTTEKyrVBBaU7&si=bPAN93093IL-wL-u" }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Recursos",
                            children: [
                                { name: "Grow with Google", url: "https://grow.google/intl/es/courses-and-tools/?category=career&topic=coding-development" },
                                { name: "Moocs Gratuitos", url: "https://mooc.es/" }
                            ]
                        }
                    ]
                },
                {
                    name: "DevOps",
                    children: [
                        { name: "Docker Docs", url: "https://docs.docker.com" },
                        { name: "Kubernetes", url: "https://kubernetes.io/docs" },
                        { name: "GitHub Actions", url: "https://docs.github.com/actions" }
                    ]
                },
                {
                    name: "Herramientas",
                    children: [
                        {
                            name: "NotebookLM",
                            children: [
                                { name: "Notebook Page", url: "https://notebooklm.google.com/" },
                                { name: "UDIA", url: "https://www.youtube.com/watch?v=Xv5ZrnzA2DA" },
                                { name: "Alejavi Rivera | NotebookLM", url: "https://www.youtube.com/watch?v=0xg49Hw-g4A" }
                            ]
                        },
                        {
                            name: "VS Code",
                            children: [
                                { name: "Documentacion Oficial", url: "https://code.visualstudio.com/docs" },
                                { name: "Keep Coding", url: "https://keepcoding.io/blog/tutorial-de-visual-studio-code-para-iniciar/" },
                                { name: "Mouredev | VS Code", url: "https://www.youtube.com/watch?v=CxF3ykWP1H4" }
                            ]
                        },
                        {
                            name: "Antigravity",
                            children: [
                                { name: "Portal Oficial", url: "https://antigravity.google/" },
                                { name: "Victor Perez | Antigravity", url: "https://youtu.be/XvncJbEQHOc?si=BS_cY0_ybxeiuOVx" },
                                { name: "Google Cloud Tech", url: "https://www.youtube.com/@googlecloudtech" }
                            ]
                        }
                    ]
                },
                {
                    name: "Inteligencia Artificial",
                    children: [
                        {
                            name: "ChatGPT (OpenAI)",
                            children: [
                                { name: "Chatgpt", url: "https://chatgpt.com/" },
                                { name: "Ingenieria de Prompts", url: "https://learnprompting.org/es/docs/introduction" },
                                { name: "Code Interpreter", url: "https://developers.openai.com/api/docs/guides/tools-code-interpreter/" },
                                { name: "Dot CSV | Testeos en IA", url: "https://youtube.com/playlist?list=PL-Ogd76BhmcB8J_IR_xOfTDt0zoyp-ntt&si=9i7vgvLXmqdatUos" }
                            ]
                        },
                        {
                            name: "Gemini (Google)",
                            children: [
                                { name: "Gemini", url: "https://gemini.google.com/" },
                                { name: "Google AI Studio", url: "https://aistudio.google.com/" },
                                { name: "Integrar Api de Gemini", url: "https://www.youtube.com/watch?v=M0zabpjp-Ew" }
                            ]
                        },
                        {
                            name: "Claude (Anthropic)",
                            children: [
                                { name: "Claude", url: "https://claude.ai/" },
                                { name: "Platzi | Claude", url: "https://www.youtube.com/watch?v=A6oW7SnNq2g" },
                                { name: "MoureDev Vibe Coding", url: "https://www.youtube.com/watch?v=BWIhNQ-DvqY" }
                            ]
                        },
                        {
                            name: "Grok (xAI)",
                            children: [
                                { name: "xAI", url: "https://x.ai/" },
                                { name: "Documentación", url: "https://docs.x.ai/overview" },
                                { name: "Debates de buen uso", url: "https://www.youtube.com/watch?v=e6aYRoxnEjg" }
                            ]
                        },
                        {
                            name: "GitHub Copilot",
                            children: [
                                { name: "Documentación oficial", url: "https://docs.github.com/es/copilot" },
                                { name: "Github Skills", url: "https://learn.github.com/skills" },
                                { name: "Mouredev | Vibe con Github Copilot", url: "https://www.youtube.com/watch?v=XpQ7uUXuPHg" }
                            ]
                        }
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
