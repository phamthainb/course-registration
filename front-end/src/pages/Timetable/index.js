import React, { useState } from 'react';
import './style.css';
import TimetableControl from './TimetableControl';
import WeeklyTimetable from './WeeklyTimetable';
import PersonalTimetable from './PersonalTimetable';

function Timetable() {

    const [timetable, setTimetable] = useState('weekly')

    const onChangeTimetable = (value)=>{
        setTimetable(value);
    }

    return(
        <div>
            <TimetableControl onChangeTimetable={onChangeTimetable}></TimetableControl>
            {timetable === "weekly" && <WeeklyTimetable></WeeklyTimetable>}
            {timetable === "personal" && <PersonalTimetable></PersonalTimetable>}
        </div>
    )
}
export default Timetable;