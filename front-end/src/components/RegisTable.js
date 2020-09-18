import React from 'react'

function RegisTable() {
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
                    <tr>
                        <td>
                            <input type="checkbox"/>
                        </td>
                        <td>BAS1146</td>
                        <td>Tieng anh B12</td>
                        <td>01</td>
                        <td>null</td>
                        <td>4</td>
                        <td>36</td>
                        <td>0</td>
                        <td>Mon</td>
                        <td>1</td>
                        <td>2</td>
                        <td>
                            <p>801B2-A2</p>
                            <p>801B2-A2</p>
                        </td>
                        <td>N.T.Thiet</td>
                        <td>1234567890</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox"/>
                        </td>
                        <td>BAS1146</td>
                        <td>Tieng anh B12</td>
                        <td>01</td>
                        <td>null</td>
                        <td>4</td>
                        <td>36</td>
                        <td>0</td>
                        <td>Mon</td>
                        <td>1</td>
                        <td>2</td>
                        <td>801B2-A2</td>
                        <td>N.T.Thiet</td>
                        <td>1234567890</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RegisTable;