const data = {
  name: "Deiby Gorrin",
  address: "123 Main Street, New York, NY",
  email: "deibygorrin@icloud.com",
  avatar: "/assets/My-Foto.jpg",
  aboutMe:
    "Un apasionado del diseño web y del desarrollo de aplicaciones multiplataforma (DAM).A mis 32 años, he decidido dar un giro significativo en mi carrera profesional y aventurarme en el fascinante mundo de la programación.Actualmente, me encuentro trabajando en el sector de la hostelería, una industria que me ha enseñado la importancia de la atención al detalle, la gestión del tiempo y el servicio al cliente. Sin embargo, mi verdadera pasión siempre ha sido la tecnología y el diseño. Esta pasión me ha llevado a iniciar estudios en Diseño Web y Desarrollo de Aplicaciones Multiplataforma, con el firme objetivo de transformar mi carrera y dedicarme a lo que realmente me apasiona.",

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
        graduationYear: "Actual",
        imgTitle: "./assets/diploma-dam.png",
        Tecnology: ["HTML5 ", "CCS3 ", "JS "],
      },

      {
        Title: "Introducción al Big Data e IA",
        Institute: "CEOE Ávila",
        graduationYear: 2024,
        imgTitle: "./assets/diploma-big-data.png",
        Tecnology: ["Big Data ", "IA "],
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
