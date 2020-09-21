import React, { useState } from 'react';

function TimetableControl(props){

    const weeks = 20;

    const [timetable, setTimetable] = useState('weekly');

    const startDay = new Date(2020, 8, 7).getTime();

    const mapWeeks = (weeks)=>{
        var xhtml = [];
        for(let i=0; i<weeks; i++){
            let date1 = new Date(convertDayToMilliseconds(i));
            let date2 = new Date(convertDayToMilliseconds(i) + 518400000);
            let option = (
                <option key={i}>
                    Week {i+1} [{date1.getDate()}/{date1.getMonth()+1} -- {date2.getDate()}/{date2.getMonth()+1}]
                </option>   
            )
            xhtml.push(option);
        }
        return xhtml;
    }

    const convertDayToMilliseconds = (i)=>{
        return startDay + (i * 604800000);
    }

    const onChangeTimetable = (e)=>{
        const value = e.target.value;
        props.onChangeTimetable(value);
        setTimetable(value);
    }

    return(
        <div className="d-flex justify-content-around mb-3 mt-3 timetable-control">
            <select onChange={onChangeTimetable}>
                <option value="weekly">Weekly Timetable</option>
                <option value="personal">Personal Timetable</option>
            </select>
            <select disabled={timetable === "weekly" ? false : true}>
                {mapWeeks(weeks)}
            </select>
        </div>
    )
}

export default TimetableControl;