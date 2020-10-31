import React, { useState } from 'react';
// import BottomButton from './BottomButton.js';

function WeeklyTimetable(props){

    const {subjects, currentWeek} = props;

    const mapToTimetable = ()=>{
        var xhtml = [];
        if(subjects){
            for(let i=1; i<12; i+=2){
                var subElement = null;
                var subElementArr = [];
                subjects.forEach((sub)=>{
                    subElement = findSubjectElement(sub.time, i);
                    if(subElement.length > 0){
                        subElement.forEach(detail => {
                            subElementArr.push({
                                name: sub.name,
                                detail: detail
                            })
                        })
                    }
                })
                let tr = (
                    <tr key={Date.now().toString() + i}>
                        <td className="table-dark" width="5%" height={100}>{i} + {i+1}</td>
                        <td>{mapToTr(subElementArr, "Hai")}</td>
                        <td>{mapToTr(subElementArr, "Ba")}</td>
                        <td>{mapToTr(subElementArr, "Tư")}</td>
                        <td>{mapToTr(subElementArr, "Năm")}</td>
                        <td>{mapToTr(subElementArr, "Sáu")}</td>
                        <td>{mapToTr(subElementArr, "Bảy")}</td>
                        <td>{mapToTr(subElementArr, "CN")}</td>
                    </tr>
                );
                xhtml.push(tr);
            }
        }
        return xhtml;
    }

    const findSubjectElement = (list, value)=>{
        var listDetails = [];
        list.forEach(item => {
            if(item.start === value){
                listDetails.push(item);
            }
        })
        return listDetails;
    }

    const mapToTr = (subElementArr, value)=>{
        var xhtml = [];
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
        <div className="table-responsive text-center mb-4" style={{minHeight: "74vh"}}>
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