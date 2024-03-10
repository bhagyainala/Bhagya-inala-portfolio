import { BiGitRepoForked } from "react-icons/bi";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { ImBook } from "react-icons/im";

import sklearnGenetic from "../images/sklearn_genetic_opt.png"
import graphEmbeddings from "../images/graph_embeddings.png"
import kafkaMl from "../images/kafkaml.png"
import portfolio from "../images/portfolio.png"
import { HiDocumentReport } from "react-icons/hi";

import React from 'react'

const projectConfig = [

    {
        id: "project-4",
        title: "Car Sales dashboard",
        links: [
            {
                name: "report",
                url: "https://public.tableau.com/app/profile/bhagyalakshmi.inala/vizzes",
                icon: <HiDocumentReport />,
            },
            {
                name: "repo",
                url: "https://github.com/Bhagyalakshmiinala/Car_Sales_Dashboard",
                icon: <AiFillGithub />,
            },

            {
                name: "fork",
                url: "https://github.com/Bhagyalakshmiinala/Car_Sales_Dashboard",
                icon: <BiGitRepoForked />,
            }

        ],
        image: graphEmbeddings,
        description: "Designed to provide insights into the performance of car sales.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "Covid Data Analysis",
        links: [
            {
                name: "report",
                url: "https://public.tableau.com/app/profile/bhagyalakshmi.inala/vizzes",
                icon: <HiDocumentReport />,
            },
            {
                name: "repo",
                url: "https://github.com/Bhagyalakshmiinala/Covid_Data_Analysis",
                icon: <AiFillGithub />,
            },

            {
                name: "fork",
                url: "https://github.com/Bhagyalakshmiinala/Covid_Data_Analysis",
                icon: <BiGitRepoForked />,
            }
        ],
        image: kafkaMl,
        description: "Comprehensive Covid-19 Data Exploration designed by managing and querying relational databases",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Credit Card Transactions",
        links: [

            {
                name: "report",
                url: "https://public.tableau.com/app/profile/bhagyalakshmi.inala/vizzes",
                icon: <HiDocumentReport />,
            },
            {
                name: "repo",
                url: "https://github.com/Bhagyalakshmiinala/Credit_Card_Transactions",
                icon: <AiFillGithub />,
            },
            {
                name: "fork",
                url: "https://github.com/Bhagyalakshmiinala/Credit_Card_Transactions",
                icon: <BiGitRepoForked />,
            }
        ],
        image: sklearnGenetic,
        description: "Project to list out top Cities with Highest Credit Card spends and percentage of contribution and Highest Spend Month and Amount for Each card type and various data analysis",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "iPhone Data Analysis using Python",
        links: [

            {
                name: "report",
                url: "https://public.tableau.com/app/profile/bhagyalakshmi.inala/vizzes",
                icon: <HiDocumentReport />,
            },
            {
                name: "repo",
                url: "https://github.com/Bhagyalakshmiinala/iphone_Data_Analysis_python",
                icon: <AiFillGithub />,
            },
            {
                name: "fork",
                url: "https://github.com/Bhagyalakshmiinala/iphone_Data_Analysis_python",
                icon: <BiGitRepoForked />,
            }
        ],
        image: "https://media.licdn.com/dms/image/D4D12AQEPATlSbOKG8g/article-cover_image-shrink_720_1280/0/1694883587013?e=2147483647&v=beta&t=29IFOmbYl2635iNfL0MRC14eSuJG10dzIVJTNc3dGWk",
        description: "iPhone Data Analysis : Pricing,Reviews and Specifications using Python and pandas",
        target: "_blank"
    }
]

export default projectConfig