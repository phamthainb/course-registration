import React, {useEffect, useState} from 'react';
import RegisCartTable from './RegisCartTable';
import RegisNote from './RegisNote';
import RegisTable from './RegisTable';
import './style.css';
import { connect } from "react-redux";
import * as actions from '../categories/actions';
import RegisControl from './RegisControl';
import * as toast from '../../common/toast';

function CourseRegis(props) {

    const [chosenSubject, setChosenSubject] = useState();
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        props.onGetSubjects();
    }, [])

    const onShowSubjectList = (value)=>{
        var option = props.subjects.filter(sub=>{
            return sub.code === value;
        })
        props.onGetSubjects();
        setChosenSubject(option[0]);
    }

    const onUpdateCart = (code, id, name, crt)=>{
        var tempCart = [...cart];
        var check = false;
        if(tempCart.length){
            tempCart.forEach((item, index)=>{
                if(item.code === code){
                    check = true;
                    if(item.id === id){
                        tempCart.splice(index, 1);
                        toast.errNotify('Subject deleted');
                    }
                    else{
                        tempCart[index] = {...tempCart[index], id};
                        toast.warningNotify('Subject updated');
                    }
                }
            })
        }
        if(check === false){
            tempCart.push({code, id, name, crt});
            toast.successNotify('Subject added');
        }
        setCart([...tempCart]);
    }

    const onDeleteAllFromCart = ()=>{
        setCart([]);
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
