import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import React from "react";

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            url: "https://github.com/Bhagyalakshmiinala",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={50}/>
        },
        {
            id: "footer-1",
            url: "https://www.linkedin.com/in/bhagyalakshmi-inala-825862154",
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={50}/>
        },
        {
            id: "footer-2",
            url: "https://www.codechef.com/users/graphs_11",
            className: "social-icon",
            target: "_blank",
            icon: <SiCodechef size={50}/>
        }
    ]
}

export default footerConfig
