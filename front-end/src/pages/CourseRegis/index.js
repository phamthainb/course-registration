import React, { useState } from 'react';
import RegisCartTable from '../../components/RegisCartTable';
import RegisControl from '../../components/RegisControl';
import RegisNote from '../../components/RegisNote';
import RegisTable from '../../components/RegisTable';
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
            <h6>Chosen subjects</h6>
            <RegisCartTable></RegisCartTable>
            <RegisNote></RegisNote>
        </div>
    )
}
export default CourseRegis;
