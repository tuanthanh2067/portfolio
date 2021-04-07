// images
import imageLibrary from "../../assets/images/image-library.jpg";
import fullImageLibrary from "../../assets/images/full-website-image-gallery.jpg";

import gameLibrary from "../../assets/images/game-library.jpg";
import fullGameLibrary from "../../assets/images/full-webpage-games-react.jpg";

import vacation from "../../assets/images/airbnb-clone.jpg";
import fullVacation from "../../assets/images/full-website-vacation.jpg";

import senecaMusic from "../../assets/images/seneca-music.jpg";
import fullSenecaMusic from "../../assets/images/full-seneca-music.png";

// icons
import react from "../../assets/icons/react.png";
import javascript from "../../assets/icons/javascript.png";
import nodejs from "../../assets/icons/nodejs.png";
import angular from "../../assets/icons/angular.png";

const projects = [
  {
    img: senecaMusic,
    full: fullSenecaMusic,
    title: "Seneca Music",
    details:
      "This project is created using Angular for frontend, Nodejs for backend, and MongoDb for database. API is fetched from Spotify API",
    technologies: [angular, nodejs],
    website: "https://web422-assignment04.vercel.app/newRelease",
    source: "https://github.com/tuanthanh2067/web422-assignment04",
  },
  {
    img: imageLibrary,
    full: fullImageLibrary,
    title: "Image library",
    details:
      "This project is about gallery created using Reactjs, styled-components, React Router, React Hooks. API is fetched from Pexels using Pexels Javascript Library. The website supports light and dark mode.",
    technologies: [react],
    website: "https://tuanthanh2067.github.io/gallery-react/",
    source: "https://github.com/tuanthanh2067/gallery-react",
  },
  {
    img: gameLibrary,
    full: fullGameLibrary,
    title: "Game Library",
    details:
      "This project is about games gallery created using Reactjs, styled-components, React Router, React Hooks, Axios. API is fetched from Rawg.io. The website supports light and dark mode.",
    technologies: [react],
    website: "https://tuanthanh2067.github.io/games-react",
    source: "https://github.com/tuanthanh2067/games-react",
  },
  {
    img: vacation,
    title: "Vacation (Airbnb clone)",
    full: fullVacation,
    details:
      "This project is airbnb clone. It provides user authentication, booking, upload rooms,... Nodejs and vanilla javascript were used to develop this website. User is able to update profile, change avatar. Host can add or remove pictures of their rooms.",
    technologies: [nodejs, javascript],
    website: "https://enigmatic-woodland-93685.herokuapp.com/",
    source: "",
  },
];

export default projects;
