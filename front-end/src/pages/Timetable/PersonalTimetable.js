import RegisNote from 'pages/CourseRegis/RegisNote';
import React from 'react';
// import subjects from './subjects';

function PersonalTimetable(props) {


    const {subjects} = props;

    const mapListToTable = ()=>{
        let table = [];
        if(subjects){
            table = subjects.map((sub, index)=>{
                return(
                    <tr key={index}>
                        <td>{sub.code}</td>
                        <td>{sub.name}</td>
                        <td>{sub.id}</td>
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
                            title="Show list of students">
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
        <div className="table-responsive mt-4" >
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