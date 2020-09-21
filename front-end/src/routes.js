import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import CourseRegis from './pages/CourseRegis';
import Timetable from './pages/Timetable';
import EditInfoForm from './pages/EditInfoForm';
import PersonalTimetable from 'pages/Timetable/PersonalTimetable';

const routes = [
    {
        path: "/home",
        exact: true,
        main: ()=> <Home/>
    },
    {
        path: "/about",
        exact: false,
        main: ()=> <About/>
    },
    {
        path: "/login",
        exact: true,
        main: ()=> <Login/>
    },
    {
        path: "/course-regis",
        exact: false,
        main: ()=> <CourseRegis/>
    },
    {
        path: "/timetable",
        exact: false,
        main: ()=> <Timetable/>
    },
    {
        path: "/edit-info",
        exact: false,
        main: ()=> <EditInfoForm/>
    }
]

export default routes;