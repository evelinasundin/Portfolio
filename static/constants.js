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
      id: 3,
      title: 'Trickle',
      employer: 'Oh My',
      link: 'https://www.wearetrickle.com/',
      text: '<p>Website made for content distrubution agency Trickle.</p>',
      techniques: [
        'Javascript', 'PHP', 'Wordpress', 'SASS', 'Bodymovin', 'etc'
      ],
      client: 'Trickle',
      image: require("@/assets/images/trickle.jpg?webp")
    },
    {
      id: 4,
      title: 'Brite',
      employer: 'Oh My',
      link: 'https://britepaymentgroup.com/',
      text: '<p>Website made for Brite Payment Group.</p>',
      techniques: [
        'Javascript', 'PHP', 'Wordpress', 'SASS', 'etc'
      ],
      client: 'Brite Payment Group',
      image: require("@/assets/images/brite.jpg?webp")
    },
    {
      id: 5,
      title: 'Cupole - Handbook',
      employer: 'Oh My',
      link: 'https://life.cupole.se/',
      text: '<p>Handbook as website made for Management Consultants agancy Cupole</p>',
      techniques: [
        'Javascript', 'PHP', 'Wordpress', 'SASS', 'etc'
      ],
      client: 'Cupole',
      image: require("@/assets/images/cupole.jpg?webp")
    },
    {
      id: 6,
      title: 'Cultur',
      employer: 'Oh My',
      link: 'https://www.culturbar.se/',
      text: '<p>Website made for restaurant Cultur in Gamla Stan</p>',
      techniques: [
        'Javascript', 'PHP', 'Wordpress', 'SASS', 'etc'
      ],
      client: 'Cultur',
      image: require("@/assets/images/cultur.jpg?webp")
    },
    {
      id: 7,
      title: 'Carmona',
      employer: 'Oh My',
      link: 'https://www2.carmona.se/',
      text: '<p>Website made for the science platform partner Carmona</p>',
      techniques: [
        'Javascript', 'PHP', 'Wordpress', 'Tailwind', 'SASS', 'etc'
      ],
      client: 'Carmona',
      image: require("@/assets/images/carmona.jpg?webp")
    },
    {
      id: 8,
      title: 'COTF - Framtidsföretagen',
      employer: 'Oh My',
      link: 'https://www.cotf.se/framtidsforetagen',
      text: '<p>Multisite solution for Universum, for their different sites that research abouts the most popular companys in Sweden</p>',
      techniques: [
        'PHP', 'Multisite', 'Javascript', 'Wordpress', 'SASS', 'etc'
      ],
      client: 'Universum',
      image: require("@/assets/images/universum.jpg?webp")
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
    title: 'Tech',
    set: ['Wordpress', 'PHP', 'Javascript - ES6', 'Vue', 'Nuxt', 'CSS', 'SCSS', 'Tailwind', 'React (novice)']
  },
  {
    id: 3,
    title: 'Tools',
    set: ['Figma','Sketch', 'Miro', 'VS Code', 'Terminal', 'Google Analytics', 'Photoshop (novice)', 'Illustrator(novice)']
  },
];


export const EXPERIENCES = [
  {
    id: 1,
    cat: 'Work',
    year: '2013 - 2014',
    title: 'Telia - First Line Technical Support',
    desc: false,
  },
  {
    id: 2,
    cat: 'Education',
    year: '2014',
    title: 'Berghs School of Communication - Graphic design course',
    desc: false,
  },
  {
    id: 3,
    cat: 'Education',
    year: '2015',
    title: 'Blekinge Tekniska Högskola - PHP CSS HTMl course',
    desc: false,
  },
  {
    id: 4,
    cat: 'Education',
    year: '2015',
    title: 'Södetörn Högskola - Typography course',
    desc: false,
  },
  {
    id: 5,
    cat: 'Education',
    year: '2015-2016',
    title: 'Stockholms Universitet - Digital Media 60hp',
    desc: false,
  },
  {
    id: 7,
    cat: 'Education',
    year: '2016-2018',
    title: 'Nackademin Vocational Eduction - Frontend Development',
    desc: false,
  },
  {
    id: 8,
    cat: 'Work',
    year: 'Oct 2017 - Dec 2017',
    title: 'The Generation - Frontend internship',
    desc: false,
  },
  {
    id: 9,
    cat: 'Education',
    year: 'Dec 2020 - May 2021',
    title: 'Brobygrafiska - UX / UI course',
    desc: false,
  },
  {
    id: 10,
    cat: 'Work',
    year: 'March 2018 - Present',
    title: 'Oh My - Developer, UX / UI designer, Project management',
    desc: false,
  },
];
