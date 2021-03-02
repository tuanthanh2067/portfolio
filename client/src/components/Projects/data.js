// images
import imageLibrary from "../../assets/images/image-library.jpg";

import gameLibrary from "../../assets/images/game-library.jpg";
import fullGameLibrary from "../../assets/images/full-webpage-games-react.jpg";

import vacation from "../../assets/images/airbnb-clone.jpg";

// icons
import react from "../../assets/icons/react.png";

const projects = [
  { img: imageLibrary, title: "Image library" },
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
  { img: vacation, title: "Vacation (Airbnb clone)" },
];

export default projects;
