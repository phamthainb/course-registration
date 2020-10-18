import React from 'react';
import * as constants from '../categories/constants';

function RegisCartTable(props){

    const onUpdateCart = (id, code, nmh, name, crt, pg)=>{
        props.onUpdateCart(id, code, nmh, name, crt, pg);
    }

    const onDeleteAllFromCart = ()=>{
        props.onDeleteAllFromCart();
    }

    const totalCredits = ()=>{
        var total = 0;
        props.cart.forEach(item=>{
            total += parseInt(item.crt);
        })
        return total;
    }

    const totalFee = ()=>{
        var total = 0;
        props.cart.forEach(item=>{
            total += parseInt(item.crt) * 480000;
        })
        return total;
    }

    const mapToCart = props.cart.map((item, index)=>{
        return(
            <tr key={index}>
                <td>{index+1}</td>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>{item.nmh}</td>
                <td>{item.pg === "0" ? "null" : item.pg}</td>
                <td>{item.crt}</td>
                <td>{480000 * item.crt}</td>
                <td>{constants.ADD_TO_CART_SUCCESSFUL}</td>
                <td>
                    <button
                    className="btn btn-outline-dark"
                    onClick={() => onUpdateCart(item.id, item.code, item.nmh, item.name, item.crt, item.pg)}>
                        Delete
                    </button>
                </td>
            </tr>
        )
    })

    const onSaveSubjects = (e)=>{
        
    }
    
    return(
        <div className="table-responsive mt-5">
            <table className="table regis-submit-table table-bordered">
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
                    {mapToCart}
                    <tr className="table-active" style={{fontWeight: 800}}>
                        <td colSpan={5} className="text-center">Total</td>
                        <td>{totalCredits()}</td>
                        <td>{totalFee()}</td>
                        <td>
                            <button className="btn btn-info" onClick={onSaveSubjects}>
                                <i className="fa fa-check" aria-hidden="true"></i> Save
                            </button>
                            <button
                            className="btn btn-dark float-right"
                            onClick={onDeleteAllFromCart}>
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

export default RegisCartTable;