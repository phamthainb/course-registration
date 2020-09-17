import React from 'react';
import RegisControl from '../../components/RegisControl';
import RegisNote from '../../components/RegisNote';
import RegisTable from '../../components/RegisTable';
import './style.css'

function CourseRegis() {
    return(
        <div className="course-regis">
            <RegisControl></RegisControl>
            <RegisTable></RegisTable>
            <RegisNote></RegisNote>
        </div>
    )
}
export default CourseRegis;