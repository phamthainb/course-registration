import React, { useState } from 'react';
import './style.css';
import TimetableControl from './TimetableControl';
import WeeklyTimetable from './WeeklyTimetable';
import PersonalTimetable from './PersonalTimetable';
import {START_DAY, CURRENT_DAY} from '../categories/constants'

function Timetable() {

    const [timetable, setTimetable] = useState('weekly');

    const [currentWeek, setCurrentWeek] = 
    useState(Math.floor((CURRENT_DAY - START_DAY)/604800000)); //currentDay - startDay


    const onChangeTimetable = (value)=>{
        setTimetable(value);
    }

    const onSetWeek = (week)=>{
        setCurrentWeek(week)
    }

    return(
        <div>
            <TimetableControl
            onChangeTimetable={onChangeTimetable}
            currentWeek={currentWeek}
            onSetWeek={onSetWeek}
            >
            </TimetableControl>
            {
                timetable === "weekly" &&
                <WeeklyTimetable currentWeek={currentWeek}></WeeklyTimetable>
            }
            {
                timetable === "personal" &&
                <PersonalTimetable></PersonalTimetable>
            }
        </div>
    )
}
export default Timetable;