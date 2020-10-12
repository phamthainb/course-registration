import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import CourseRegis from './pages/CourseRegis';
import Timetable from './pages/Timetable';
import EditInfoForm from './pages/EditInfoForm';

const routes = [
    {
        path: "/home",
        private : false,
        exact: true,
        main: ()=> <Home/>
    },
    {
        path: "/about",
        private : false,
        exact: false,
        main: ()=> <About/>
    },
    {
        path: "/course-regis",
        private : true,
        exact: false,
        main: ()=> <CourseRegis/>
    },
    {
        path: "/timetable",
        private : true,
        exact: false,
        main: ()=> <Timetable/>
    },
    {
        path: "/edit-info",
        private : true,
        exact: false,
        main: ()=> <EditInfoForm/>
    }
]

export default routes;