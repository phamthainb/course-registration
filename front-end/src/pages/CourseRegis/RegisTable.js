import React, { useState } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../pages/categories/actions';
import RegisControl from './RegisControl';

function RegisTable(props) {

    const [chosenSubject, setChosenSubject] = useState({});
    
    const onShowSubjectList = (option)=>{
        setChosenSubject(option[0]);
    }

    const onAddToCart = (e)=>{
        var code = e.target.getAttribute('data-code');
        var id = e.target.getAttribute('data-id');
        props.onUpdateCart(code, id);
    }

    const mapListToTable = ()=>{
        let table = [];
        if(chosenSubject !== {}){
            if(chosenSubject.list !== undefined){
                let sub = chosenSubject;
                let list = sub.list;
                let tr;
                for(let i=0; i<list.length; i++){
                    tr = (
                        <tr key={i}>
                            <td>
                                <input
                                type="checkbox"
                                onChange={onAddToCart}
                                data-code={sub.code}
                                data-id={sub.list[`${i}`].id}
                                />
                            </td>
                            <td>{sub.code}</td>
                            <td>{sub.name}</td>
                            <td>{sub.list[`${i}`].id}</td>
                            <td>{sub.pg ? sub.pg.id : "null"}</td>
                            <td>{sub.crt}</td>
                            <td>{sub.qtt}</td>
                            <td>{sub.list[`${i}`].slot}</td>
                            <td>{mapStartDay(sub.list[`${i}`].time)}</td>
                            <td>{mapStartLession(sub.list[`${i}`].time)}</td>
                            <td>{mapLessionQuantity(sub.list[`${i}`].time)}</td>
                            <td>{mapRoom(sub.list[`${i}`].time)}</td>
                            <td>{mapProfessor(sub.list[`${i}`].time)}</td>
                            <td>{mapWeek(sub.list[`${i}`].time)}</td>
                        </tr>
                    )
                    table.push(tr);
                }
            }
        }
        return table;
    }

    const mapStartDay = (time)=>{
        return time.map(item => {
            return(
                <p>{item.day}</p>
            )
        })
    }

    const mapLessionQuantity = (time)=>{
        return time.map(item => {
            return(
                <p>{item.less}</p>
            )
        })
    }

    const mapStartLession = (time)=>{
        return time.map(item => {
            return(
                <p>{item.start}</p>
            )
        })
    }

    const mapRoom = (time)=>{
        return time.map(item => {
            return(
                <p>{item.room}</p>
            )
        })
    }

    const mapProfessor = (time)=>{
        return time.map(item => {
            return(
                <p>{item.professor}</p>
            )
        })
    }

    const mapWeek = (time)=>{
        return time.map(item => {
            return(
                <p>{item.week.toString()}</p>
            )
        })
    }

    return(
        <div>
            <RegisControl
            onShowSubjectList={onShowSubjectList}
            >
            </RegisControl>
            <div className="table-responsive">
                <table className="table table-striped regis-table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>Check</th>
                            <th>Code</th>
                            <th>Name</th>
                            <th>ID</th>
                            <th>PG</th>
                            <th>Crt</th>
                            <th>Qtt</th>
                            <th>Slot</th>
                            <th>Day</th>
                            <th>Start</th>
                            <th>Les</th>
                            <th>Room</th>
                            <th>Professor</th>
                            <th>Week</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mapListToTable()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const mapState = state=>{
    return{}
}

const mapDispatch = dispatch=>{
    return{
        onUpdateCart: (code, id) => {
            dispatch(actions.updateCart(code, id));
        }
    }
}

export default connect(mapState, mapDispatch)(RegisTable);