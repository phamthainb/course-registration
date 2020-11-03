import { apiTokenInterceptors } from 'common/axiosService';
import React, { useEffect } from 'react';
import * as constants from '../categories/constants';
import * as toast from '../../common/toast';
import { connect } from 'react-redux';
import * as actions from '../categories/actions';

function RegisCartTable(props) {

    const { cart } = props;

    useEffect(() => (
        props.userCart?.forEach(userCart => {
            if (cart.findIndex(cartItem => {
                return parseInt(cartItem.id) === parseInt(userCart.id)
            }) === -1) {
                userCart.isAdded = true;
                let data = {
                    ...userCart,
                        details: userCart.details.map(d => {
                            let weeks = d.weeks.map(w => Number(w.name))
                            weeks.sort((a, b) => a - b)
                            return ({...d , weeks})
                        })
                }
                props.onUpdateCart({...data});
            }
        })
    ), [props.userCart]);

    const onUpdateCart = (sub) => {
        props.onUpdateCart(sub);
    }

    const onDeleteAllFromCart = () => {
        props.onDeleteAllFromCart();
    }

    const totalCredits = () => {
        var total = 0;
        cart.forEach(item => {
            total += parseInt(item.subject.credit);
        })
        return total;
    }

    const totalFee = () => {
        var total = 0;
        cart.forEach(item => {
            total += parseInt(item.subject.credit) * 480000;
        })
        return total;
    }

    const mapToCart = cart.map((item, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.subject.code}</td>
                <td>{item.subject.name}</td>
                <td>{item.nmh}</td>
                <td>{item.tth === 0 ? "null" : item.tth}</td>
                <td>{item.subject.credit}</td>
                <td>{480000 * item.subject.credit}</td>
                <td>
                    {item.isAdded ?
                        constants.SAVE_SUCCESSFUL : constants.ADD_TO_CART_SUCCESSFUL}
                </td>
                <td>
                    <button
                        className="btn btn-outline-dark"
                        onClick={() => onUpdateCart(item)}>
                        Delete
                    </button>
                </td>
            </tr>
        )
    })

    const onSaveSubjects = () => {
        if(totalCredits() >= 14 && totalCredits() <= 26){
            var idList = cart.map(item => {
                var itemObj = { id: parseInt(item.id) }
                return itemObj;
            })
            apiTokenInterceptors("PUT", constants.CLASSES, idList)
                .then(function(){
                    toast.successNotify("Saved to database");
                })
                .catch(err => {
                    //console.log(err);
                    toast.errNotify(err.message);
                })
        }
        else{
            toast.errNotify("14 <= credits <= 26");
        }
    }

    return (
        <div style={{ margin: "30px 20px 0"}}>
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
                            <th style={{minWidth: 200}}>Name</th>
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
        onUpdateCart: (sub) => {
            dispatch(actions.updateCart(sub))
        },
        onDeleteAllFromCart: () => {
            dispatch(actions.deleteAllFromCart());
        }
    }
}

export default connect(mapState, mapDispatch)(RegisCartTable);