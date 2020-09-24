import React from 'react';
// import BottomButton from './BottomButton.js';
import subjects from './subjects.js';

function WeeklyTimetable(props){

    const mapToTimetable = ()=>{
        var xhtml = [];
        for(let i=1; i<12; i+=2){
            var subElement = null;
            var subElementArr = [];
            subjects.forEach((sub)=>{
                subElement = findSubjectElement(sub.time, i);
                if(subElement[0]){
                    subElementArr.push({
                        name: sub.name,
                        detail: subElement[0]
                    });
                }
            })
            let tr = (
                <tr>
                    <td className="table-dark" width="5%" height={100}>{i} + {i+1}</td>
                    <td>{mapToTr(subElementArr, "mon")}</td>
                    <td>{mapToTr(subElementArr, "tue")}</td>
                    <td>{mapToTr(subElementArr, "wed")}</td>
                    <td>{mapToTr(subElementArr, "thu")}</td>
                    <td>{mapToTr(subElementArr, "fri")}</td>
                    <td>{mapToTr(subElementArr, "sat")}</td>
                    <td>{mapToTr(subElementArr, "sun")}</td>
                </tr>
            );
            xhtml.push(tr);
        }
        return xhtml;
    }

    const findSubjectElement = (list, id)=>{
        return list.filter(item => {
            return item.start === id;
        })
    }

    const mapToTr = (subElementArr, value)=>{
        var xhtml = [];
        var {currentWeek} = props;
        subElementArr.forEach(sub => {
            if(sub.detail.week.includes(parseInt(currentWeek))){
                if(sub.detail.day.toLowerCase() === value.toLowerCase()){
                    xhtml.push(<h6>{sub.name}</h6>)
                    xhtml.push(<span>{sub.detail.room}</span>)
                }
            }
        })
        return xhtml;
    }

    return(
        <div className="table-responsive text-center mb-4">
            <table className="table table-striped timetable-show table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th className="table-dark">Lession</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                        <th>Sun</th>
                    </tr>
                </thead>
                <tbody>
                    {mapToTimetable()}
                </tbody>
            </table>
            {/* <BottomButton></BottomButton> */}
        </div>
    )
}

export default WeeklyTimetable;