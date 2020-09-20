import React from 'react';

function TimetableControl(){

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

    return(
        <div className="d-flex justify-content-around mb-3 mt-3 timetable-control">
            <select>
                <option value="weekly">Weekly timetable</option>
                <option value="private">Private timetable</option>
            </select>
            <select>
                {mapWeeks(weeks)}
            </select>
        </div>
    )
}

export default TimetableControl;