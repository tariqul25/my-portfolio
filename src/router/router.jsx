import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/About/About";
import Skills from "../pages/Home/Skills/Skills";
import Contact from "../pages/Home/Contact/Contact";
import Project from "../pages/Home/Project/Project";

export const router=createBrowserRouter(
    [
        {
            path: '/',
            Component: Root,
            children: [
                {index:true,Component:Home },
                {path:'about',Component:About },
                {path:'skills',Component:Skills },
                {path:'contact',Component:Contact },
                {path:'project',Component:Project },
            ]
        }
    ]
)