import React from 'react';

function RegisCartTable(props){

    const cart = [
        {
            code: "BAS1146",
            name: "tieng anh b12",
            crt: 4,
            id: 19,
            pg: {
                id: ''
            }
        },
        {
            code: "INT1313",
            name: "co so du lieu",
            crt: 3,
            id: 6,
            pg: {
                id: 2,
            }
        },
        {
            code: "INT1319",
            name: "he dieu hanh",
            crt: 3,
            id: 9,
            pg: {
                id: 1
            }
        },
        {
            code: "INT1330",
            name: "ki thuat vi xu li",
            crt: 3,
            id: 5,
            pg: {
                id: ''
            }
        },
    ]

    const mapToCart = cart.map((item, index)=>{
        return(
            <tr key={index}>
                <td>{index+1}</td>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>{item.id}</td>
                <td>{item.pg.id}</td>
                <td>{item.crt}</td>
                <td>{480000 * item.crt}</td>
                <td>Saved to database</td>
                <td>
                    <button className="btn btn-outline-dark">Delete</button>
                </td>
            </tr>
        )
    })

    return(
        <div className="table-responsive mt-3">
            <table className="table table-striped regis-submit-table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>No.</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>ID</th>
                        <th>PG</th>
                        <th>Crt</th>
                        <th>Fee</th>
                        <th>Status</th>
                        <th>Check</th>
                    </tr>
                </thead>
                <tbody>
                    {mapToCart}
                    <tr>
                        <td colSpan={5} className="text-center">Total</td>
                        <td>12</td>
                        <td>1 billion</td>
                        <td>
                            <button className="btn btn-info">
                                <i className="fa fa-check" aria-hidden="true"></i> Save
                            </button>
                            <button className="btn btn-dark float-right">
                                <i className="fa fa-trash-o" aria-hidden="true"></i> Delete All
                            </button>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RegisCartTable;