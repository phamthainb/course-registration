import React from 'react';
import BottomButton from './BottomButton.js';
import subjects from './subjects.js';

function WeeklyTimetable(){

    const mapToTimetable = ()=>{
        var xhtml = [];
        for(let i=1; i<12; i+=2){
            var subElement;
            var subElements = [];
            var tr;
            subjects.forEach((sub)=>{
                subElement = findSubjectElement(sub.time, i);
                if(subElement[0]){
                    subElements.push(subElement[0]);
                }
            })
            subElements.forEach((item)=>{
                tr = (
                    <tr>
                        <td className="table-dark lession">{i}</td>
                        <td>{item.day === "Mon" && <p>{item.room}</p>}</td>
                        <td>{item.day === "Tue" && <p>{item.room}</p>}</td>
                        <td>{item.day === "Wed" && <p>{item.room}</p>}</td>
                        <td>{item.day === "Thu" && <p>{item.room}</p>}</td>
                        <td>{item.day === "Fri" && <p>{item.room}</p>}</td>
                        <td>{item.day === "Sat" && <p>{item.room}</p>}</td>
                        <td>{item.day === "Sun" && <p>{item.room}</p>}</td>
                    </tr>
                )
            })
            xhtml.push(tr);
        }
        return xhtml;
    }

    const findSubjectElement = (list, id)=>{
        return list.filter(item => {
            return item.start === id;
        })
    }

    return(
        <div className="table-responsive text-center">
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
                    <tr>
                    </tr>
                    {mapToTimetable()}
                </tbody>
            </table>
            <BottomButton></BottomButton>
        </div>
    )
}

export default WeeklyTimetable;