const data = [
    {
      id: 1,
      question: "Who is the main character of the show Violet Evergarden",
      answers: [
        {
          text: "Claudia Hodgins",
          correct: false,
        },
        {
          text: "Violet Evergarden",
          correct: true,
        },
        {
          text: "Anne Magnolia",
          correct: false,
        },
        {
          text: "Iris Cannary",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which of the following is the Opening to Violet Evergarden",
      answers: [
        {
          text: "Sincerely - TRUE",
          correct: true,
        },
        {
          text: "Michishirube - Minori Chihara",
          correct: false,
        },
        {
          text: "Shiny Days - Asaka",
          correct: false,
        },
        {
          text: "Guren no Yumiya - Linked Horizon",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Why does Violet want to become an auto-memory doll",
      answers: [
        {
          text: "So she can make money",
          correct: false,
        },
        {
          text: "To learn to sing",
          correct: false,
        },
        {
          text: "To learn to write",
          correct: false,
        },
        {
          text: "To learn the meaning of 'aishiteru'",
          correct: true,
        },
      ],
    },
    {
        id: 4,
        question: "What accessory does Violet Evergarden keep dearly",
        answers: [
          {
            text: "A Silver Ring",
            correct: false,
          },
          {
            text: "An Emerald Brooch",
            correct: true,
          },
          {
            text: "A Red Ribbon",
            correct: false,
          },
          {
            text: "Peanuts!",
            correct: false,
          },
        ],
    },
    {
        id: 5,
        question: "Which studio animated Violet Evergarden",
        answers: [
          {
            text: "MAPPA",
            correct: false,
          },
          {
            text: "Wit Studio",
            correct: false,
          },
          {
            text: "Kyoto Animations",
            correct: true,
          },
          {
            text: "Ufotable",
            correct: false,
          },
        ],
    },
    {
        id: 6,
        question: "Violet Evergarden takes place in the region known as",
        answers: [
          {
            text: "Critgall",
            correct: false,
          },
          {
            text: "Leidenschaftlich",
            correct: true,
          },
          {
            text: "Flugel",
            correct: false,
          },
          {
            text: "Dressel",
            correct: false,
          },
        ],
    },
    {
        id: 7,
        question: "Which friend does Violet meet at writing school",
        answers: [
          {
            text: "Luculia Marlborough",
            correct: true,
          },
          {
            text: "Erica Brown",
            correct: false,
          },
          {
            text: "Iris Cannary",
            correct: false,
          },
          {
            text: "Cattleya Baudelaire",
            correct: false,
          },
        ],
    },
    {
        id: 8,
        question: "Which of the following options is Claudia Hodgins not",
        answers: [
          {
            text: "A former Lieutenant-Colonel",
            correct: false,
          },
          {
            text: "Owner of the CH postal company",
            correct: false,
          },
          {
            text: "The one Gilbert asked to take care of Violet",
            correct: false,
          },
          {
            text: "Prince of Dressel",
            correct: true,
          },
        ],
    },
    {
        id: 9,
        question: "Erica Brown (Violet's soft spoken auto-memory doll friend) wants to become",
        answers: [
          {
            text: "Leiden's most popular doll",
            correct: false,
          },
          {
            text: "A play writer",
            correct: true,
          },
          {
            text: "A poet",
            correct: false,
          },
          {
            text: "Owner of the CH postal company",
            correct: false,
          },
        ],
    },
    {
        id: 10,
        question: "Who says \"Every letter deserves to be delivered\"",
        answers: [
          {
            text: "Roland",
            correct: true,
          },
          {
            text: "Amy Bartlett",
            correct: false,
          },
          {
            text: "Claudia Hodgins",
            correct: false,
          },
          {
            text: "Leon Stephanotis",
            correct: false,
          },
        ],
    },
    {
        id: 11,
        question: "Cattleya Baudelaire has what color eyes",
        answers: [
          {
            text: "Crimson",
            correct: false,
          },
          {
            text: "Blue",
            correct: false,
          },
          {
            text: "Purple",
            correct: true,
          },
          {
            text: "Black",
            correct: false,
          },
        ],
    },
    {
        id: 12,
        question: "Who composed the soundtrack for Violet Evergarden",
        answers: [
          {
            text: "Yuki Kajura",
            correct: false,
          },
          {
            text: "Kevin Perkin",
            correct: false,
          },
          {
            text: "Hiroyuki Sawano",
            correct: false,
          },
          {
            text: "Evan Call",
            correct: true,
          },
        ],
    },
    {
        id: 13,
        question: "In episode 5, Violet is sent to",
        answers: [
          {
            text: "The kingdom of Drossel to write letters for Charlotte Abelfreyja",
            correct: true,
          },
          {
            text: "The kingdom of Drossel to write letters for Damian Baldur",
            correct: false,
          },
          {
            text: "The kingdom of Flugel to write letters for Charlotte Abelfreyja",
            correct: false,
          },
          {
            text: "The kingdom of Flugel to write letters for Damian Baldur",
            correct: false,
          },
        ],
    },
    {
        id: 14,
        question: "Where does Violet Evergarden get her light blue parasol",
        answers: [
          {
            text: "From Tiffany Evergaren, who agreed to take Violet in after the war",
            correct: false,
          },
          {
            text: "From Iris's farmland house",
            correct: false,
          },
          {
            text: "From Oscar Webster, after helping him write his play",
            correct: true,
          },
          {
            text: "From the storage room of the CH postal company",
            correct: false,
          },
        ],
    },
    {
        id: 15,
        question: "A deleted scene, shown in one of Kyoani's earlier commericals, animates",
        answers: [
          {
            text: "Violet singing",
            correct: false,
          },
          {
            text: "Violet wielding an axe",
            correct: true,
          },
          {
            text: "Violet starting a fire",
            correct: false,
          },
          {
            text: "Violet playing tennis",
            correct: false,
          },
        ],
    },
    
    
  ];

export default data

