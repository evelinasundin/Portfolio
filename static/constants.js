export const WORK =
  [
    {
      id: 1,
      title: 'Pontus Rudolfson',
      employer: 'Personal project',
      link: 'https://www.rudolfson.com/',
      text: '<p>My friend <a href="https://andreasantonsson.dev/" target="_blank" rel="noopener noreferrer">Andreas</a> and I co-developed this Website for photographer Pontus Rudolfson. <br> The site won <a href="https://www.awwwards.com/sites/pontus-rudolfson" target="_blank">Awwwards</a> Mobile Site of the week and site of the day on <a href="https://www.cssdesignawards.com/sites/pontus-rudolfson/35598/" target="_blank">CSS design awards</a>. <br>  Design by <a href="https://andreasantonsson.dev/" target="_blank" rel="noopener noreferrer">Andreas</a>.<p>',
      techniques: [
        'Vue', 'Nuxt', 'GSAP', 'SASS', 'etc'
      ],
      client: 'Pontus Rudolfson',
      image: require("@/assets/images/rudolfson.jpg?webp"),
    },
    {
      id: 2,
      title: 'Highnote',
      employer: 'Exam work',
      link: 'http://highnote.herokuapp.com/',
      text: '<p>My exam work that I did at Nackademin. Sign in with Spotify and see your most listened to artist, songs and create your personal playlist.</p>',
      techniques: [
        'React', 'Spotify API', 'OAuth', 'Heroku', 'SASS', 'etc'
      ],
      client: 'Personal project',
      image: require("@/assets/images/highnote.jpg?webp")
    },
    {
      id: 9,
      title: 'Developers Bookmark',
      employer: 'Student work',
      link: 'https://build-yvhmdluhgo.now.sh/',
      text: '<p>The main focus of the task was to build an application in React that collects and stores data from an own setup database in Firebase. Demands were to be able to log in through firebase authentication system and store information about users and user data.</p>',
      techniques: [
        'React', 'Firebase', 'Javascript', 'Bootstrap', 'SASS', 'etc'
      ],
      client: 'Personal project',
      image: require("@/assets/images/dev-bookmark.jpg?webp")
    },
    {
      id: 10,
      title: 'Album Collection',
      employer: 'Student work',
      link: 'https://evelinasundin.github.io/AlbumCollection/',
      text: '<p>The task was to create an application that collects data from an open API and to show this via HTML DOM. Some of the requirements were, among other things, to collect data from an open API that serves data in form of json, to have good code structure and use of namespaces as well as error handling.</p>',
      techniques: [
        'Module Pattern', 'Ajax', 'Javascript', 'Bootstrap', 'SASS', 'etc'
      ],
      client: 'Personal project',
      image: require("@/assets/images/ac.jpg?webp")
    },
];

export const KNOWLEDGE = [
  {
    id: 1,
    title: 'Skills',
    set: ['Responsive Design', 'Design thinking', 'Cross Browser Testing', 'SEO', 'Web Perfomance Optimization', 'Design systems', 'Wireframing', 'Prototyping', 'Version Control', 'Agile development', 'UX-Writing (novice)']
  },
  {
    id: 2,
    title: 'Technologies',
    set: ['Wordpress', 'PHP', 'Javascript - ES6', 'Vue', 'Nuxt', 'CSS', 'SCSS', 'Tailwind', 'React (novice)']
  },
  {
    id: 3,
    title: 'Tools',
    set: ['Figma','Sketch', 'Miro', 'VS Code', 'Terminal', 'Google Analytics', 'Photoshop (novice)', 'Illustrator(novice)']
  },
];

export const JOBS = [
  {
    id: 1,
    year: '2013 - 2014',
    title: 'Telia - First Line Technical Support',
    desc: false,
  },
  {
    id: 2,
    year: 'Oct 2017 - Dec 2017',
    title: 'The Generation - Frontend internship',
    desc: false,
  },
  {
    id: 3,
    year: 'March 2018 - Present',
    title: 'Oh My - Developer, UX / UI designer, Project management',
    desc: 'I started my journey at Oh my as a frontend intern. While being at Oh My I have worked with a diverse array of clients and projects. My role has evolved during my time at Oh My, from being solely a developer I have gained abilities within project management and customer relationships. Last year I took a course in UX and UI design and since then I’ve also taken parts in projects as a UX and UI designer.',
  },
]

export const COURSES = [
  {
    id: 1,
    course: true,
    year: '2014',
    title: 'Berghs School of Communication - Graphic design course',
    desc: false,
  },
  {
    id: 2,
    course: true,
    year: '2015',
    title: 'Blekinge Tekniska Högskola - PHP CSS HTML course',
    desc: false,
  },
  {
    id: 3,
    course: true,
    year: '2015',
    title: 'Södetörn Högskola - Typography course',
    desc: false,
  },
]

export const EDUCATIONS = [
  {
    id: 1,
    course: false,
    year: '2015 - 2016',
    title: 'Stockholms Universitet - Digital Media 60hp',
    desc: false,
  },
  {
    id: 2,
    course: false,
    year: '2016 - 2018',
    title: 'Nackademin Vocational Eduction - Frontend Development',
    desc: false,
  },
  {
    id: 3,
    course: false,
    year: 'Dec 2020 - May 2021',
    title: 'Brobygrafiska Further Education - UX / UI design',
    desc: false,
  },
]
