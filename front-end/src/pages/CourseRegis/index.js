import React, {useEffect, useState} from 'react';
import RegisCartTable from './RegisCartTable';
import RegisNote from './RegisNote';
import RegisTable from './RegisTable';
import './style.css';
import { connect } from "react-redux";
import * as actions from '../categories/actions';
import RegisControl from './RegisControl';
import * as toast from '../../common/toast';
import * as constansts from '../categories/constants';
import { apiInterceptors } from 'common/axiosService';

function CourseRegis(props) {

    const [chosenSubject, setChosenSubject] = useState();
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        props.onGetSubjects();
    }, [])

    const onShowSubjectList = (value)=>{
        apiInterceptors("GET", `${constansts.CLASSES}/${value}`)
        .then(res => {
            let data = res.data.map((e, i)=>{
                return ({...e, details : e.details.map((d, j)=> {
                    let weeks = d.weeks.map(w => Number(w.name));
                    weeks.sort((a, b)=> a - b)
                    return ({...d, weeks : weeks})
                })})
            })
            setChosenSubject(data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const onUpdateCart = (id, code, nmh, name, crt, pg)=>{
        var tempCart = [...cart];
        var check = false;
        if(tempCart.length){
            tempCart.forEach((item, index)=>{
                if(item.code === code){
                    check = true;
                    if(item.nmh === nmh && parseInt(item.pg) === parseInt(pg)){
                        tempCart.splice(index, 1);
                        //toast
                        toast.errNotify('Subject deleted');
                    }
                    else{
                        tempCart[index] = {...tempCart[index], id, nmh, pg}
                        //toast
                        toast.warningNotify('Subject updated');
                    }
                }
            })
        }
        if(check === false){
            tempCart.push({id, code, nmh, name, crt, pg});
            //toast
            toast.successNotify('Subject added');
        }
        setCart([...tempCart]);
    }

    const onDeleteAllFromCart = ()=>{
        setCart([]);
        //toast
        toast.errNotify('All deleted');
    }

    return(
        <div className="course-regis">
            
            <RegisControl
            subjects={props.subjects}
            onShowSubjectList={onShowSubjectList}>
            </RegisControl>

            {
                chosenSubject && 
                <div>
                    <RegisTable
                    onUpdateCart={onUpdateCart}
                    chosenSubject={chosenSubject}
                    cart={cart}>
                    </RegisTable>

                    {
                        cart.length > 0 &&
                        <RegisCartTable
                        cart={cart}
                        onUpdateCart={onUpdateCart}
                        onDeleteAllFromCart={onDeleteAllFromCart}>
                        </RegisCartTable>
                    }
                    
                    <RegisNote></RegisNote>
                </div>
            }

        </div>
    )
}

    const mapState = state => {
        return{
            subjects: state.subjects
        }
    }
  
    const mapDispatch = dispatch => {
        return{
            onGetSubjects: ()=>{
                dispatch(actions.getSubjectRequest())
            }
        }
    }

export default connect(mapState, mapDispatch)(CourseRegis);
