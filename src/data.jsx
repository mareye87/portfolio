import spacetravel from "./assets/images/space-travel.png";
import comfystore from "./assets/images/comfy-store.jpg";
import noteme from "./assets/images/noteme.png";
import todo from "./assets/images/todo.png";
import flags from "./assets/images/flagsotw.png";

import { FaHtml5, FaCss3, FaReact, FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTailwindcss,
  SiReactquery,
  SiExpress,
  SiMongodb,
  SiSupabase,
  SiReactrouter,
  SiDaisyui,
} from "react-icons/si";

export const skills = [
  <FaHtml5 className="text-orange-500" />,
  <FaCss3 className="text-blue-700" />,
  <IoLogoJavascript className="text-yellow-500" />,
  <FaReact className="text-blue-500" />,
  <SiTailwindcss className="text-cyan-500" />,
  <FaNode className="text-green-500" />,
  <SiReactquery className="text-red-500" />,
  <SiExpress className="text-violet-500" />,
  <SiMongodb className="text-green-500" />,
  <SiSupabase className="text-green-500" />,
  <TbBrandNextjs className="text-red-500" />,
  <SiReactrouter className="text-red-500" />,
  <SiDaisyui className="text-white " />,
];

export const projects = [
  {
    img: spacetravel,
    alt: "spacetravel-img",
    url: "https://spacetravelproject.netlify.app",
    title: "Space tourism  website",
    tools: [skills[3], skills[4], skills[11]],
  },
  {
    img: comfystore,
    alt: "comfystore-img",
    url: "https://mycomfystoreproject.netlify.app",
    title: "Comfy store",
    tools: [skills[3], skills[4], skills[11], skills[6], skills[12]],
  },
  {
    img: flags,
    alt: "flags-img",
    url: "https://countiresquiz.onrender.com",
    title: "Country quiz",
    tools: [skills[3], skills[4], skills[9], skills[6], skills[11]],
  },
  {
    img: noteme,
    alt: "noteme-img",
    url: "https://noteme-zftv.onrender.com",
    title: "NoteMe app",
    tools: [skills[3], skills[4], skills[11], skills[9], skills[6]],
  },
  {
    img: todo,
    alt: "todo-img",
    url: "https://todo-notes-mc2o.onrender.com",
    title: "ToDo app",
    tools: [skills[3], skills[4], skills[7], skills[8], skills[11]],
  },
];
