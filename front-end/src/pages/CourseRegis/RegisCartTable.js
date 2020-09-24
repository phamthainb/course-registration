import React from 'react';
import { connect } from 'react-redux';

function RegisCartTable(props){

    // const mapToCart = props.cart.map((item, index)=>{
    //     return(
    //         <tr key={index}>
    //             <td>{index+1}</td>
    //             <td>{item.code}</td>
    //             <td>{item.name}</td>
    //             <td>{item.id}</td>
    //             <td>{item.pg.id}</td>
    //             <td>{item.crt}</td>
    //             <td>{480000 * item.crt}</td>
    //             <td>Saved to database</td>
    //             <td>
    //                 <button className="btn btn-outline-dark">Delete</button>
    //             </td>
    //         </tr>
    //     )
    // })

    return(
        <div className="table-responsive mt-5">
            <table className="table table-striped regis-submit-table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th colSpan={9}>Chosen Subjects</th>
                    </tr>
                    <tr>
                        <th>No.</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>ID</th>
                        <th>PG</th>
                        <th>Crt</th>
                        <th>Fee</th>
                        <th>Status</th>
                        <th>Act</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {mapToCart} */}
                    <tr>
                        <td colSpan={5} className="text-center">Total</td>
                        <td>12</td>
                        <td>1 billion</td>
                        <td>
                            <button className="btn btn-info">
                                <i className="fa fa-check" aria-hidden="true"></i> Save
                            </button>
                            <button className="btn btn-dark float-right">
                                Delete All
                            </button>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const mapState = state=>{
    return{
    }
}

const mapDispatch = dispatch =>{
    return{}
}

export default connect(mapState, mapDispatch)(RegisCartTable);