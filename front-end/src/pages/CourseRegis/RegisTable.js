import React from 'react';

function RegisTable(props) {
    
    const {chosenSubject} = props;

    const onUpdateCart = (e)=>{
        var code = e.target.getAttribute('data-code');
        var id = e.target.getAttribute('data-id');
        var name = e.target.getAttribute('data-name');
        var crt = e.target.getAttribute('data-crt');
        props.onUpdateCart(code, id, name, crt);
    }

    const mapListToTable = ()=>{
        let table = [];
        if(chosenSubject){
            if(chosenSubject.list){
                let sub = chosenSubject;
                let list = sub.list;
                let tr;
                for(let i=0; i<list.length; i++){
                    tr = (
                        <tr key={Date.now().toString() + i}>
                            <td>
                                <button
                                className="btn btn-outline-dark"
                                onClick={onUpdateCart}
                                data-code={sub.code}
                                data-id={sub.list[`${i}`].id}
                                data-name={sub.name}
                                data-crt={sub.crt}>
                                    Add
                                </button>
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

    const mapStartDay = (sub)=>{
        return sub.map(item => {
            return(
                <p>{item.day}</p>
            )
        })
    }

    const mapLessionQuantity = (sub)=>{
        return sub.map(item => {
            return(
                <p>{item.less}</p>
            )
        })
    }

    const mapStartLession = (sub)=>{
        return sub.map(item => {
            return(
                <p>{item.start}</p>
            )
        })
    }

    const mapRoom = (sub)=>{
        return sub.map(item => {
            return(
                <p>{item.room}</p>
            )
        })
    }

    const mapProfessor = (sub)=>{
        return sub.map(item => {
            return(
                <p>{item.professor}</p>
            )
        })
    }

    const mapWeek = (sub)=>{
        return sub.map(item => {
            return(
                <p>{item.week.toString()}</p>
            )
        })
    }

    return(
        <div>
            {
                chosenSubject && 
                <div className="table-responsive">
                    <table className="table table-striped regis-table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Act</th>
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
            }
        </div>
    )
}

export default RegisTable;