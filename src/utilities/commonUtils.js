import Home from "../LabContainer/Home/Home";
import News from "../LabContainer/News/News";
import People from "../LabContainer/People/People";
import Previous from "../LabContainer/Previous/Previous";
import Research from "../LabContainer/Research/Research";
import Publications from "../LabContainer/Publications/Publications";
import Positions from "../LabContainer/Positions/Positions";
import Acknowledgement from "../LabContainer/Acknowledgement/Acknowledgement";
import Gallery from "../LabContainer/Gallery/Gallery";
/* import ReadingGroup from "../LabContainer/Reading Group/ReadingGroup"; */

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "News",
    component: News,
  },
  {
    screen_name: "Research",
    component: Research,
  },
  {
    screen_name: "Publications",
    component: Publications,
  },
  {
    screen_name: "People",
    component: People,
  },
  {
    screen_name: "Previous Members",
    component: Previous,
  },
    {
    screen_name: "Positions",
    component: Positions,
  },
        {
    screen_name: "Acknowledgement",
    component: Acknowledgement,
  },
  {
    screen_name: "Gallery",
    component: Gallery,
  },
/*   {
    screen_name: "Reading Group",
    component: ReadingGroup,
  }, */
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};
