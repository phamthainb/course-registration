import React, { useState } from 'react';
import RegisCartTable from './RegisCartTable';
import RegisControl from './RegisControl';
import RegisNote from './RegisNote';
import RegisTable from './RegisTable';
import './style.css'

function CourseRegis() {

    const [chosenSubject, setChosenSubject] = useState({});

    const onShowSubjectList = (option)=>{
        setChosenSubject(option);
    }

    return(
        <div className="course-regis">
            <RegisControl onShowSubjectList={onShowSubjectList}></RegisControl>
            <RegisTable chosenSubject={chosenSubject}></RegisTable>
            <h5>Chosen subjects</h5>
            <RegisCartTable></RegisCartTable>
            <RegisNote></RegisNote>
        </div>
    )
}
export default CourseRegis;
