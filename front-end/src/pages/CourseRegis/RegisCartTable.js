import { apiTokenInterceptors } from 'common/axiosService';
import React, { useEffect } from 'react';
import * as constants from '../categories/constants';
import * as toast from '../../common/toast';
import { connect } from 'react-redux';
import * as actions from '../categories/actions';

function RegisCartTable(props) {

    const { cart } = props;

    useEffect(() => (
        props.userCart?.forEach(item => {
            if (cart.findIndex(cartItem => {
                return cartItem.id === item.id
            }) === -1) {
                props.onUpdateCart(
                    item.id,
                    item.subject.code,
                    item.nmh,
                    item.subject.name,
                    item.subject.credit,
                    item.tth);
            }
        })
    ), []);

    const onUpdateCart = (id, code, nmh, name, crt, pg) => {
        props.onUpdateCart(id, code, nmh, name, crt, pg);
    }

    const onDeleteAllFromCart = () => {
        props.onDeleteAllFromCart();
    }

    const totalCredits = () => {
        var total = 0;
        cart.forEach(item => {
            total += parseInt(item.crt);
        })
        return total;
    }

    const totalFee = () => {
        var total = 0;
        cart.forEach(item => {
            total += parseInt(item.crt) * 480000;
        })
        return total;
    }

    const mapToCart = cart.map((item, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>{item.nmh}</td>
                <td>{item.pg === 0 ? "null" : item.pg}</td>
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

    const onSaveSubjects = () => {
        var idList = cart.map(item => {
            var itemObj = { id: parseInt(item.id) }
            return itemObj;
        })
        apiTokenInterceptors("PUT", constants.CLASSES, idList)
            .then(res => {
                toast.successNotify("Saved to database");
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div style={{margin: "30px 20px 0"}}>
            <div className="table-responsive" style={{
                maxHeight: 400,
                overflow: "auto",
            }}>
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
                        <tr className="table-active" style={{ fontWeight: 800 }}>
                            <td colSpan={5} className="text-center">Total</td>
                            <td>{totalCredits()}</td>
                            <td>{totalFee()}</td>
                            <td style={{ display: "flex", justifyContent: "space-between" }}>
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
        </div>
    )
}

const mapState = state => {
    return {
        cart: state.cart,
        userCart: state.app.user?.classRooms
    }
}

const mapDispatch = dispatch => {
    return {
        onUpdateCart: (id, code, nmh, name, crt, pg) => {
            dispatch(actions.updateCart(id, code, nmh, name, crt, pg))
        },
        onDeleteAllFromCart: () => {
            dispatch(actions.deleteAllFromCart());
        }
    }
}

export default connect(mapState, mapDispatch)(RegisCartTable);