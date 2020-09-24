import React, {useEffect, useState} from 'react';
import RegisCartTable from './RegisCartTable';
import RegisNote from './RegisNote';
import RegisTable from './RegisTable';
import './style.css';
import { connect } from "react-redux";
import * as actions from '../categories/actions';
import RegisControl from './RegisControl';

function CourseRegis(props) {

    const [chosenSubject, setChosenSubject] = useState();
    const [cart, setCart] = useState([]);
    console.log('render');

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

    const onUpdateCart = (code, id)=>{
        var tempCart = [...cart];
        var check = false;
        if(tempCart.length){
            tempCart.forEach((item, index)=>{
                if(item.code === code){
                    check = true;
                    if(item.id === id){
                        tempCart.splice(index, 1);
                    }
                    else{
                        tempCart[index] = {...tempCart[index], id}
                    }
                }
            })
        }
        if(check === false){
            tempCart.push({code, id});
        }
        setCart([...tempCart]);
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
                    chosenSubject={chosenSubject}>
                    </RegisTable>

                    <RegisCartTable
                    cart={cart}>
                    </RegisCartTable>
                    
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
