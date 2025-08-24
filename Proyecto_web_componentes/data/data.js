const data = {
  name: "Deiby Gorrin",
  address: "123 Main Street, New York, NY",
  email: "deibygorrin@icloud.com",
  avatar: "/assets/My-Foto.jpg",
  aboutMe:
    "Soy un profesional en transición hacia el sector tecnológico, actualmente cursando el segundo año de Desarrollo de Aplicaciones Multiplataforma (DAM) y un Máster Web Full Stack. Cuento con la certificación Oracle Database 23ai SQL Certified Associate y me encuentro en proceso de especialización en Oracle Cloud Infrastructure (OCI) y en soluciones empresariales de análisis e informes (EPM). Mi objetivo es consolidar una carrera en el ámbito tecnológico, combinando programación, gestión de datos y soluciones en la nube, para contribuir a proyectos innovadores y de alto impacto empresarial.",

  education: {
    study: [
      {
        degree: "Bachiller en Ciencias",
        university: "¨U.E.N `Antonio José de Sucre¨",
        city: "Caracas - Venezuela",
        graduationYear: 2007,
      },
      {
        degree:
          "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
        university: "The Power  FP",
        city: "Madrid - España",
        graduationYear: "En curso",
      },
    ],

    relevantCourses: [
      {
        Title: "Master Desarrollo de Aplicaciones Web",
        Institute: "The Power MBA",
        graduationYear: "En Curso",
        imgTitle: "./assets/diploma-dam.png",
        Tecnology: ["HTML5 ", "CCS3 ", "JS "],
      },
      {
        Title:
          "Curso Especialista en la creación de informes y reportes empresariales Oracle (EPM)",
        Institute: "Cas-Training",
        graduationYear: "En Curso",
        imgTitle: "./assets/oracle.png",
        Tecnology: ["Power BI", "Cloud", "Narrative Reporting", "Oracle"],
      },
      {
        Title: "Oracle Database 23ai SQL Certified Associate",
        Institute: "Oracle",
        graduationYear: 2025,
        imgTitle: "./assets/oracleSql23ai.jpg",
        Tecnology: ["SQL", "Base de Datos", "Oracle"],
      },

      {
        Title: "Introducción al Big Data e IA",
        Institute: "CEOE Ávila",
        graduationYear: 2024,
        imgTitle: "./assets/diploma-big-data.png",
        Tecnology: ["Big Data ", "IA "],
      },
      {
        Title: "Curso Desarrollador Oracle SQL-PL/SQL",
        Institute: "Cas-Training",
        graduationYear: 2025,
        imgTitle: "./assets/PLSQL.png",
        Tecnology: ["PL/SQL", "SQL", "Base de Datos", "Oracle"],
      },
    ],
  },
  workExperience: [
    {
      position: "Web Developer",
      company: "Tech Solutions Inc.",
      startDate: "2013",
      endDate: "Present",
      description:
        "As a key member of the development team, I have contributed to various projects, from creating interactive web applications to optimizing database performance.",
    },
    {
      position: "Freelance Web Developer",
      company: "Self-employed",
      startDate: "2012",
      endDate: "2013",
      description:
        "During my freelancing period, I collaborated with clients from diverse industries, delivering tailor-made websites that met their unique needs and goals.",
    },
  ],
  skills: ["HTML5", "CSS3", "JavaScript"],
  projects: [
    {
      title: "Mi Portfolio",
      description:
        "Utilizando los conocimientos adquiridos en HTML, CSS y JavaScript, he desarrollado mi propio portfolio web. Este proyecto refleja mi habilidad para crear interfaces web modernas y responsivas, estructuradas con HTML semántico, estilizadas con CSS avanzado, y enriquecidas con interactividad mediante JavaScript.",
      linkGithub: "https://github.com/deiybg/My_Repository",
      preview:
        "https://my-repository-4iw7tghvs-deibys-projects-d9b6840f.vercel.app/",
      imgProject: "./assets/img-portfolio.png",
    },
    {
      title: "Mi primer proyecto Web",
      description:
        "En este proyecto, me propuse replicar la página web de Under Armour, utilizando una combinación de Grid y Flexbox para lograr un diseño similar.",
      linkGithub: "https://github.com/deiybg/proyecto_1",
      preview: "https://proyecto-1-bay-sigma.vercel.app/",
      imgProject: "/assets/html5-ccs3.jpg",
    },
    {
      title: "Proyecto Flex",
      description:
        "Me complace compartir que he completado mi primer proyecto utilizando los conocimientos adquiridos sobre Flexbox.",
      linkGithub: "https://github.com/deiybg/entra_flexbox",
      preview:
        "https://entra-flexbox-9expr807w-deibys-projects-d9b6840f.vercel.app/",
      imgProject: "/assets/flexbox.png",
    },
    {
      title: "Proyecto Async",
      description: "Proyecto para practicar promesas asincronas",
      linkGithub:
        "https://github.com/deiybg/Proyecto-Final-Master-PROMETEO/https://github.com/DeibyGS/Proyecto-Web-As-crono/main/proyecto-final-master-prometeo",
      preview:
        "https://proyecto-web-as-crono-2jcb9g518-deibys-projects-d9b6840f.vercel.app",
      imgProject: "/assets/proyectoAsync.png",
    },
    {
      title: "Cuestionario 1er año DAM y DAW",
      description:
        "Aplicación interactiva de cuestionarios tipo test diseñada para ayudar a estudiantes de DAM y DAW en la preparación de exámenes del primer año.",
      linkGithub: "https://github.com/DeibyGS/questionnary",
      preview: "https://questionnary.vercel.app",
      imgProject: "/assets/questionnaryMain.png",
    },
    {
      title: "Proyecto Final 1er año Master",
      description:
        "Me complace compartir el primer proyecto del primer año del Master Full Stack de PROMETEO",
      linkGithub:
        "https://github.com/deiybg/Proyecto-Final-Master-PROMETEO/tree/main/proyecto-final-master-prometeo",
      preview: "https://proyecto-final-master-prometeo-kglwhzcq5.vercel.app",
      imgProject: "/assets/proyectoFinal.png",
    },
  ],
};

export default data;
