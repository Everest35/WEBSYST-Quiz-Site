const quizQuestions = [
  {
    question: 'Who is the CEO of WEBSYST?',
    answers: [
      { text: 'John Smith', correct: false },
      { text: 'Alice Johnson', correct: false },
      { text: 'James Brown', correct: true },
      { text: 'Emily Davis', correct: false }
    ]
  },
  {
    question: 'Which programming languages are commonly used at WEBSYST?',
    answers: [
      { text: 'Java and C++', correct: false },
      { text: 'Python and Ruby', correct: false },
      { text: 'JavaScript and PHP', correct: true },
      { text: 'Swift and Kotlin', correct: false }
    ]
  },
  {
    question: 'What is the WEBSYST logo?',
    answers: [
      { text: 'A blue circle', correct: false },
      { text: 'A green leaf', correct: false },
      { text: 'An orange square', correct: true },
      { text: 'A red triangle', correct: false }
    ]
  },
  {
    question: 'Which of the following is NOT a product of WEBSYST?',
    answers: [
      { text: 'Web development framework', correct: false },
      { text: 'Cloud storage service', correct: true },
      { text: 'Mobile app development tool', correct: false },
      { text: 'E-commerce platform', correct: false }
    ]
  },
  {
    question: 'What is the tagline of WEBSYST?',
    answers: [
      { text: 'Innovate your world', correct: false },
      { text: 'Empowering digital transformation', correct: false },
      { text: 'Building the future', correct: false },
      { text: 'Creating possibilities', correct: true }
    ]
  },
  {
    question: 'Which of the following industries does WEBSYST primarily serve?',
    answers: [
      { text: 'Fashion', correct: false },
      { text: 'Finance', correct: false },
      { text: 'Technology', correct: true },
      { text: 'Agriculture', correct: false }
    ]
  },
  {
    question: 'What is the WEBSYST mascot?',
    answers: [
      { text: 'A lion', correct: false },
      { text: 'An owl', correct: false },
      { text: 'A fox', correct: false },
      { text: 'A robot', correct: true }
    ]
  },
  {
    question: 'Which of the following statements about WEBSYST is true?',
    answers: [
      { text: 'It was the first company to develop the internet', correct: false },
      { text: 'It has offices in over 50 countries', correct: false },
      { text: 'It was founded by a group of college friends', correct: false },
      { text: 'It offers custom software development services', correct: true }
    ]
  },
  {
    question: 'What is the WEBSYST corporate color?',
    answers: [
      { text: 'Blue', correct: false },
      { text: 'Red', correct: false },
      { text: 'Green', correct: false },
      { text: 'Purple', correct: true }
    ]
  },
  {
    question: 'What is the WEBSYST slogan?',
    answers: [
      { text: 'Innovation at its best', correct: false },
      { text: 'Unleash your potential', correct: false },
      { text: 'Quality you can trust', correct: false },
      { text: 'Making IT happen', correct: true }
    ]
  },
  {
    question: 'What is an init() method? Explain your answer.',
    answers: [
      { text: 'A method that initializes an object or a class', correct: false },
      { text: 'A method that is called when a servlet is initialized', correct: true },
      { text: 'A method that is called when a servlet is destroyed', correct: false },
      { text: 'A method that handles HTTP GET requests', correct: false }
    ]
  },
  {
    question: 'What is a doGet() method?',
    answers: [
      { text: 'A method that initializes an object or a class', correct: false },
      { text: 'A method that is called when a servlet is initialized', correct: false },
      { text: 'A method that handles HTTP GET requests', correct: true },
      { text: 'A method that handles HTTP POST requests', correct: false }
    ]
  },
  {
    question: 'What is a doPost() method?',
    answers: [
      { text: 'A method that initializes an object or a class', correct: false },
      { text: 'A method that is called when a servlet is initialized', correct: false },
      { text: 'A method that handles HTTP GET requests', correct: false },
      { text: 'A method that handles HTTP POST requests', correct: true }
    ]
  },
  {
    question: 'What is a destroy() method?',
    answers: [
      { text: 'A method that is called when a servlet is initialized', correct: false },
      { text: 'A method that handles HTTP GET requests', correct: false },
      { text: 'A method that handles HTTP POST requests', correct: false },
      { text: 'A method that is called when a servlet is destroyed', correct: true }
    ]
  },
  {
    question: 'What are the disadvantages of servlet?',
    answers: [
      { text: 'Efficient and fast', correct: false },
      { text: 'Platform independent', correct: false },
      { text: 'Secure', correct: false },
      { text: 'Complex to set up and use', correct: true }
    ]
  },
  {
    question: 'Why do we need to learn CGI (common gateway interface)?',
    answers: [
      { text: 'To learn how to create dynamic web pages', correct: true },
      { text: 'To learn how to create static web pages', correct: false },
      { text: 'To learn how to create mobile applications', correct: false },
      { text: 'To learn how to create desktop applications', correct: false }
    ]
  },
  {
    question: 'IMP Interface Message Processor',
    answers: [
      { text: 'A protocol used for sending messages between devices', correct: false },
      { text: 'A programming language used for creating web applications', correct: false },
      { text: 'A software application used for processing messages', correct: true },
      { text: 'A hardware device used for sending messages between devices', correct: false }
    ]
  },
  {
    question: 'TCP Transmission Control Protocol',
    answers: [
      { text: 'A protocol used for sending messages between devices', correct: false },
      { text: 'A programming language used for creating web applications', correct: false },
      { text: 'A software application used for processing messages', correct: false },
      { text: 'A protocol used for reliable data transfer over the internet', correct: true }
    ]
  },
  {
    question: 'DNS Domain Name System',
    answers: [
      { text: 'A protocol used for sending messages between devices', correct: false },
      { text: 'A programming language used for creating web applications', correct: false },
      { text: 'A database used for mapping domain names to IP addresses', correct: true },
      { text: 'A software application used for processing messages', correct: false }
    ]
  }
];