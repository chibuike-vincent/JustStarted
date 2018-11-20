const mycourses = [
	{
		title: "Introduction to Javascript",
		picture: "/client/img/intro_to_js.png",
		price: "free",
		short_summary:
			"This course teaches you the fundamentals of javascript. At the end of this course, you should know the building blocks of the language have a solid graps of how programming works in general. You will have a lot of hands on projects to build as well. We can't wait to have you onboard.",
		instructors: ["Victor Zeem", "Philip James"],
		likes: 230,
		dislikes: 12,
    shares: 120,
    isActive: true
	},
	{
		title: "Introduction to HTML",
		picture: "/client/img/intro_to_html.png",
		price: "free",
		short_summary:
			"Join a wide range of students from all over the world to gain mastery of the web language. In this course, you would learn how to design web pages for e-commerce, blogs, and many more. I am excited taking you on this important journey",
		instructors: ["Kalu Obota"],
		likes: 500,
		dislikes: 15,
		shares: 450
	},
	{
		title: "Introduction to CSS",
		picture: "/client/img/intro_to_css.png",
		price: "free",
		short_summary:
			"Learn CSS today and join the league of extra-ordinary web designers who make user experience much better. You must have a keen interest for beautiful and sleek stuffs. Don't worry, we have loads of projects for you to work on and master this art.",
		instructors: ["Green Volley", "Yolda Simens"],
		likes: 420,
		dislikes: 24,
		shares: 200
	},
	{
		title: "Introduction to Python",
		picture: "/client/img/intro_to_python.png",
		price: "free",
		short_summary:
			"Your first step in learning data analysis, web crawling or data visualization is learning python programming language. We understand how important this is for your career and so have dedicated quality time in building this great content for you to enjoy.",
		instructors: ["Amelon Ada", "Brawn Cassidy", "Ify Loks"],
		likes: 189,
		dislikes: 4,
		shares: 120
	},
	{
		title: "Introduction to React",
		picture: "/client/img/intro_to_react.png",
    price: "paid",
    amount: '45.32',
		short_summary:
      "React gives you the edge while working with javascript. Let's help you learn how to get things done faster and more effieciently with React. This is the framework to learn",
		instructors: ["Victor Zeem", "Philip James"],
		likes: 230,
		dislikes: 12,
    shares: 120,
    video: true
  },
  {
    title: "Intro to Vue",
    picture: "/client/img/intro_to_vue.png",
    price: "free",
    short_summary:
      "Building frontend applications are teh joy of development. Learn Vue today and get more out of your development scale. Vue is right on the edge for the fast and furious.",
    instructors: ["Hameed Shenaek", "Groulph Griendl"],
    likes: 329,
    dislikes: 26,
    shares: 30,
    isActive: true,
    video: true
  },
  {
    title: "Bootstrap Courseware",
    picture: "/client/img/intro_to_bootstrap.png",
    price: "free",
    short_summary:
      "Bootstrap is a framework that helps you style reuseable components and make your designs more responsive to any screen - mobile, tablets, desktop, big screens. In this course we teach you how to go about getting the most out of bootstrap",
    instructors: ["Odunze Dons"],
    likes: 500,
    dislikes: 34,
    shares: 250
  },
  {
    title: "Introduction to Node",
    picture: "/client/img/intro_to_node.png",
    price: "free",
    short_summary:
      "Node gives you the power of running javascript on your server, In this course we take you from zero to hero of building applications with node.",
    instructors: ["Daniel Imma", "Yolven Sunn"],
    likes: 420,
    dislikes: 24,
    shares: 200
  },
  {
    title: "Electron Beginners",
    picture: "/client/img/intro_to_electron.png",
    price: "free",
    short_summary:
      "If you have a passion for developing cross-platform desktop applications, then this course is for you. Get started with building your favorite applications for the desktop view.",
    instructors: ["Amelon Ada", "Brawn Cassidy", "Ify Loks"],
    likes: 189,
    dislikes: 4,
    shares: 120
  },
  {
    title: "Learn PHP",
    picture: "/client/img/intro_to_php.png",
    price: "free",
    short_summary:
      "Give your scripts more life with PHP, with simple syntax and a complete learning guide it has never been more fun learning PHP",
    instructors: ["Joseph Ude", "laka Bluek"],
    likes: 230,
    dislikes: 12,
    shares: 120
  },
  {
    title: "Advanced Javascript",
    picture: "/client/img/intro_to_js.png",
    price: "paid",
    amount: "19.00",
    short_summary:
      "This course teaches you the fundamentals of javascript. At the end of this course, you should know the building blocks of the language have a solid graps of how programming works in general. You will have a lot of hands on projects to build as well. We can't wait to have you onboard.",
    instructors: ["Victor Zeem", "Philip James"],
    likes: 230,
    dislikes: 12,
    shares: 120
  },
  {
    title: "Introduction to HTML Canvas",
    picture: "/client/img/intro_to_html.png",
    price: "paid",
    amount: "21.90",
    short_summary:
      "Join a wide range of students from all over the world to gain mastery of the web language. In this course, you would learn how to design web pages for e-commerce, blogs, and many more. I am excited taking you on this important journey",
    instructors: ["Kalu Obota"],
    likes: 500,
    dislikes: 15,
    shares: 450
  },
  {
    title: "Introduction to CSS",
    picture: "/client/img/intro_to_css.png",
    price: "free",
    short_summary:
      "Learn CSS today and join the league of extra-ordinary web designers who make user experience much better. You must have a keen interest for beautiful and sleek stuffs. Don't worry, we have loads of projects for you to work on and master this art.",
    instructors: ["Green Volley", "Yolda Simens"],
    likes: 420,
    dislikes: 24,
    shares: 200
  },
  {
    title: "Introduction to Python",
    picture: "/client/img/intro_to_python.png",
    price: "free",
    short_summary:
      "Your first step in learning data analysis, web crawling or data visualization is learning python programming language. We understand how important this is for your career and so have dedicated quality time in building this great content for you to enjoy.",
    instructors: ["Amelon Ada", "Brawn Cassidy", "Ify Loks"],
    likes: 189,
    dislikes: 4,
    shares: 120
  },
  {
    title: "Introducing Context in React",
    picture: "/client/img/intro_to_react.png",
    price: "free",
    video: true,
    short_summary:
      "React gives you the edge while working with javascript. Let's help you learn how to get things done faster and more effieciently with React. This is the framework to learn",
    instructors: ["Victor Zeem", "Philip James"],
    likes: 230,
    dislikes: 12,
    shares: 120
  },
  {
    title: "Reimagine Vue",
    picture: "/client/img/intro_to_vue.png",
    price: "paid",
    amount: '25.43',
    short_summary:
      "Building frontend applications are teh joy of development. Learn Vue today and get more out of your development scale. Vue is right on the edge for the fast and furious.",
    instructors: ["Hameed Shenaek", "Groulph Griendl"],
    likes: 329,
    dislikes: 26,
    shares: 30
  },
  {
    title: "Introduction to Bootstrap",
    picture: "/client/img/intro_to_bootstrap.png",
    price: "free",
    short_summary:
      "Bootstrap is a framework that helps you style reuseable components and make your designs more responsive to any screen - mobile, tablets, desktop, big screens. In this course we teach you how to go about getting the most out of bootstrap",
    instructors: ["Odunze Dons"],
    likes: 500,
    dislikes: 34,
    shares: 250
  },
  {
    title: "Advandced Node",
    picture: "/client/img/intro_to_node.png",
    price: "paid",
    amount: '57.23',
    short_summary:
      "Node gives you the power of running javascript on your server, In this course we take you from zero to hero of building applications with node.",
    instructors: ["Daniel Imma", "Yolven Sunn"],
    likes: 420,
    dislikes: 24,
    shares: 200
  },
  {
    title: "Advance to Electron",
    picture: "/client/img/intro_to_electron.png",
    price: "free",
    short_summary:
      "If you have a passion for developing cross-platform desktop applications, then this course is for you. Get started with building your favorite applications for the desktop view.",
    instructors: ["Amelon Ada", "Brawn Cassidy", "Ify Loks"],
    likes: 189,
    dislikes: 4,
    shares: 120
  },
  {
    title: "Advance to PHP",
    picture: "/client/img/intro_to_php.png",
    price: "paid",
    amount: '45.234',
    short_summary:
      "Give your scripts more life with PHP, with simple syntax and a complete learning guide it has never been more fun learning PHP",
    instructors: ["Joseph Ude", "laka Bluek"],
    likes: 230,
    dislikes: 12,
    shares: 120
  }
];

const getAllCourses = (allCourses) => {
  return allCourses.forEach(course => {
    console.log(`Course Title: ${course.title}`)
  })
}

getAllCourses(courses) 


// Get all Free courses
document.getElementById('free').addEventListener("click", function () {
  const getFreeCourses = freeCourses => {
    const isFree = freeCourses.filter((course) => course.price === 'free')
  
    return isFree.forEach((course) => console.log(`Course Title: ${course.title} \nCourse Cost: ${course.price}`))
  }
  getFreeCourses(courses) 
  
})


// Get all Paid courses

const getPaidCourses = paidCourses => {
  const isPaid = paidCourses.filter(course => course.price === 'paid')

  return isPaid.forEach(course => console.log(`
  Course Title: ${course.title}
  Course Cost: ${course.price}
  Course Price: ${course.amount}
  `))
}
getPaidCourses(courses)


// Get all Video Courses

const getVideoCourses = videoCourses => {
  const isVideo = videoCourses.filter(course => course.video)

  return isVideo.forEach(course => console.log(`
  Course Title: ${course.title}
  Course Type: video
  ${course.price === 'paid' ? `Course Cost: ${course.amount}` : `Course Cost: ${course.price}`}
  `))
}
getVideoCourses(courses)
