import { apiTokenInterceptors } from 'common/axiosService';
import RegisNote from 'pages/CourseRegis/RegisNote';
import React from 'react';
import * as constants from '../categories/constants';

function PersonalTimetable(props) {

    const {subjects} = props;

    const onShowListStudents = (e)=>{
        const id = e.target.getAttribute("data-id");
        apiTokenInterceptors("GET", `${constants.GET_USER}/list?classId=${id}`,null)
        .then(res =>{
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const mapListToTable = ()=>{
        let table = [];
        if(subjects){
            table = subjects.map((sub, index)=>{
                return(
                    <tr key={sub.id}>
                        <td>{sub.code}</td>
                        <td>{sub.name}</td>
                        <td>{sub.nmh}</td>
                        <td>{sub.pg}</td>
                        <td>{sub.crt}</td>
                        <td>{mapDay(sub.time)}</td>
                        <td>{mapStart(sub.time)}</td>
                        <td>{mapLess(sub.time)}</td>
                        <td>{mapRoom(sub.time)}</td>
                        <td>{mapWeek(sub.time)}</td>
                        <td>
                            <button
                            className="btn btn-dark"
                            data-toggle="tooltip"
                            title="Show list of students"
                            onClick={onShowListStudents}
                            data-id={sub.id}
                            >
                                <i className="fa fa-list-ul" aria-hidden="true"></i>
                            </button>
                        </td>
                    </tr>
                )
            })
        }
        return table;
    }

    const mapDay = (time)=>{
        var td = [];
        time.forEach(item => {
            td.push(
                <p>{item.day}</p>
            )
        })
        return td;
    }

    const mapStart = (time)=>{
        var td = [];
        time.forEach(item => {
            td.push(
                <p>{item.start}</p>
            )
        })
        return td;
    }

    const mapLess = (time)=>{
        var td = [];
        time.forEach(item => {
            td.push(
                <p>{item.less}</p>
            )
        })
        return td;
    }

    const mapRoom = (time)=>{
        var td = [];
        time.forEach(item => {
            td.push(
                <p>{item.room}</p>
            )
        })
        return td;
    }
    const mapWeek = (time)=>{
        var td = [];
        time.forEach(item => {
            td.push(
                <p>{item.week.toString()}</p>
            )
        })
        return td;
    }

    return(
        <div className="table-responsive mt-4" style={{minHeight: "70vh"}}>
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>ID</th>
                        <th>PG</th>
                        <th>Crt</th>
                        <th>Day</th>
                        <th>Start</th>
                        <th>Les</th>
                        <th>Room</th>
                        <th>Week</th>
                        <th>List</th>
                    </tr>
                </thead>
                <tbody>
                    {mapListToTable()}
                </tbody>
            </table>
            <RegisNote></RegisNote>
        </div>
    )
}

export default PersonalTimetable;