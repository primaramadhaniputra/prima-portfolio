import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import RoomIcon from "@mui/icons-material/Room";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import recipe from "./image/recipe.png";
import comfy from "./image/comfy.png";
import covid from "./image/covid.png";
import cocktail from "./image/cocktail.png";

export const data = [
  {
    id: 1,
    title: "Website Recipes",
    text: "Made website SimpleRecipes using Rapid API",
    icon: <FastfoodIcon style={{ backgroundColor: "#006064", color: "#b2ebf2", height: '100%', width: '100%' }} />,
    color: "#eee",
    bgcolor: "#000",
    desc: "simply recipes is a website that I created, to add to my experience in learning React js of course, I got a lot of additional knowledge from making this website. ",
    use: ["React.js", "Rapid.API", "Material UI", "React router"],
    img: recipe,
    url: "https://prima-recipes.netlify.app/",
  },
  {
    id: 2,
    title: "Cocktail drink search",
    text: "Made cocktail drink search using API",
    icon: (
      <LocalBarIcon
        style={{
          backgroundColor: "#827717",
          color: "#e6ee9c",
          padding: "1rem",
          fontSize: "5rem",
          height: '100%', width: '100%'
        }}
      />
    ),
    desc: "cocktail search is a website that I created, to add to my experience in learning React js of course, I got a lot of additional knowledge from making this website. ",
    use: ["React.js", "API"],
    img: cocktail,
    url: "https://react-chocktail.netlify.app",
  },
  {
    id: 3,
    title: "E commerce comfy",
    text: "Made e commerce comfy shop using react js,and react hooks",
    icon: <RoomIcon color="secondary" style={{ padding: "1rem", fontSize: "5rem", height: '100%', width: '100%' }} />,
    color: "secondary",
    bgcolor: "#000",
    desc: "Comfy shop is a website that I created, to add to my experience in learning React js of course, I got a lot of additional knowledge from making this website. when you click 'add in cart' that will be added in your cart. ",
    use: ["React.js", "React hooks",],
    img: comfy,
    url: "https://rjscomfy.netlify.app/",
  },
  {
    id: 4,
    title: "Corona tracker",
    text: "Made corona tracker using chart,API",
    icon: <CoronavirusIcon color="error" style={{ padding: "1rem", fontSize: "5rem", height: '100%', width: '100%' }} />,
    color: "error",
    bgcolor: "#000",
    desc: "Corona tracker is a website that I created, to add to my experience in learning React js of course, I got a lot of additional knowledge from making this website. ",
    use: ["React.js", "API", "Bar,Chart", "Material UI", "React-count"],
    img: covid,
    url: "https://react-corona-tracker01.netlify.app",
  },
];
