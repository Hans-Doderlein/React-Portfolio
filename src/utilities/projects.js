import images from "../images";
const { techimg, noteimg, weatherimg, scheduleimg, quizimg, passimg, gitimg } =
  images;

export const projects = [
  {
    gitlink: " https://github.com/Hans-Doderlein/Tech-Blog",
    weblink: "https://nick3399-tech-blog-7e44e83dddc5.herokuapp.com/",
    mainImg: techimg,
    name: "Tech Blog",
    icon: gitimg,
  },
  {
    gitlink: "https://github.com/Hans-Doderlein/Note-Taker",
    weblink: " https://note-taker-3399-27ac485843f9.herokuapp.com/",
    mainImg: noteimg,
    name: "Note Taker",
    icon: gitimg,
  },
  {
    gitlink: " https://github.com/Hans-Doderlein/Weather-App",
    weblink: " https://hans-doderlein.github.io/Weather-App/",
    mainImg: weatherimg,
    name: "Weather App",
    icon: gitimg,
  },
  {
    gitlink: "https://github.com/Hans-Doderlein/Calendar",
    weblink: " https://hans-doderlein.github.io/Calendar/",
    mainImg: scheduleimg,
    name: "Schedule",
    icon: gitimg,
  },
  {
    gitlink: " https://github.com/Hans-Doderlein/Coding-Quiz",
    weblink: "https://hans-doderlein.github.io/Coding-Quiz/",
    mainImg: quizimg,
    name: "Coding Quiz",
    icon: gitimg,
  },
  {
    gitlink: "https://github.com/Hans-Doderlein/Password-Generator",
    weblink: "https://hans-doderlein.github.io/Password-Generator/",
    mainImg: passimg,
    name: "Password Generator",
    icon: gitimg,
  },
];
