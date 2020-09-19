import React from 'react'

function RegisTable(props) {

    const onAddToCart = (e)=>{
        
    }

    const mapListToTable = ()=>{
        let table = [];
        if(props.chosenSubject){
            if(props.chosenSubject[0]){
                if(props.chosenSubject[0].list !== []){
                    let sub = props.chosenSubject[0];
                    let list = sub.list;
                    let tr;
                    for(let i=0; i<list.length; i++){
                        tr = (
                            <tr key={i}>
                                <td>
                                    <input
                                    type="checkbox"
                                    onChange={onAddToCart}
                                    />
                                </td>
                                <td>{sub.code}</td>
                                <td>{sub.name}</td>
                                <td>{i}</td>
                                <td>null</td>
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
    )
}

export default RegisTable;