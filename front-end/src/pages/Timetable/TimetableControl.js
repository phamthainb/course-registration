import React, { useState } from 'react';

function TimetableControl(props){

    const [timetable, setTimetable] = useState('weekly');

    const weeks = 20;

    const mapWeeks = (weeks)=>{
        var xhtml = [];
        for(let i=1; i<=weeks; i++){
            let option = (
                <option key={i}>
                    {`Week ${i} [14/09/2020 -- 20/09/2020]`}
                </option>
            )
            xhtml.push(option);
        }
        return xhtml;
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