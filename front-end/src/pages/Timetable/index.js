import React from 'react';
import './style.css';
import TimetableControl from './TimetableControl';
import TimetableShow from './TimetableShow';

function Timetable() {
    return(
        <div>   
            <TimetableControl></TimetableControl>
            <TimetableShow></TimetableShow>
        </div>
    )
}
export default Timetable;