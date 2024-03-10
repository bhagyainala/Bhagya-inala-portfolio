import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Bhagyalakshmi Inala</strong>
        </h1>,
    titles: [
        "A Data Analyst",
        "A Data Warehouse Engineer",
        "An Open Source Contributor",
        "A Python Developer",
        "A SQL Developer"
    ],
    about: {
        start: "I've been working for several years on data engineering projects. " +
            "I'm excited by learning new things, contributing to the data science community," +
            " and spreading the word of data!",
        exit: "I'm fluent at Python, SQL databases, BI tools, and more, " +
            "with a deep interest in machine learning."
    },
    workTimeline: [
        // {
        //     id: "work-4",
        //     title: "Sr ML Engineer",
        //     company: "EPAM",
        //     description: "Working to build scalable ML solutions, LLM's, and RAG architectures.",
        //     date: "2023-Present",
        //     icon: <BiRocket/>,
        //     tags: ["ml", "mlops", "python", "azure", "llm", "automl"]
        // },
        // {
        //     id: "work-3",
        //     title: "Sr Data Scientist",
        //     company: "Globant",
        //     description: "Build AutoML models and make them available to non-technical " +
        //         "users from a graphical interface.",
        //     date: "2021-2023",
        //     icon: <DiCodeigniter/>,
        //     tags: ["ml", "automl", "python", "docker", "redshift", "superset"]
        // },
        // {
        //     id: "work-2",
        //     title: "BI Manager",
        //     company: "Rappi",
        //     description: "Leading a team of analysts and data scientists to execute different projects, " +
        //         "including the construction of ETLs, data lakes, data warehouses, and machine learning models.",
        //     date: "2019-2021",
        //     icon: <FaMobileAlt/>,
        //     tags: ["ml", "airflow", "python", "docker", "snowflake", "postgres", "azure"]
        // },
        {
            id: "work-1",
            title: "Data Analyst",
            company: "IBM",
            description: "Build interactive dashboards, ETLs and SQL queries also developing data mining ,reporting solutions to scale across the large volume of structured and unstructured data.",
            date: "Apr 2021 - Aug 2022",
            icon: <BsClipboardData/>,
          
            tags: [ "mssql", "python", "docker", "pbi", "NumPy","Pandas"]
        },
        {
            id: "work-0",
            title: "Data Analyst",
            company: "Meirtec Solutions",
            description: 
                "Build the construction of ETLs, data lakes, data warehouses, machine learning models ,forecast models, and Power BI dashboards.",
            date: "Jan 2020 - Jun 2020",
            icon: <GiCommercialAirplane/>,
            tags: ["python", "sql", "tableau", "excel"]
        }
    ]
}


export default homeConfig