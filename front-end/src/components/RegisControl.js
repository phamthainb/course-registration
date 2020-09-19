import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux'
import * as subActions from '../actions/subjects';

function RegisControl(props){

    useEffect(() => {
        props.onGetSubjects();
    }, [])

    const onChooseSubject = (e)=>{
        props.onGetSubjects();
        let value = e.target.value;
        let option = props.subjects.filter(sub => {
            return sub.code === value;
        })
        props.onShowSubjectList(option);
    }

    let mapSubjects = props.subjects.map((sub, index)=>{
        return(
            <option key={index} value={sub.code}>
                {`${sub.code} - ${sub.name} (${sub.crt} TC)`}
            </option>
        )
    })

    return(
        <div className="regis-control mb-3">
            <select onChange={onChooseSubject} defaultValue="subject">
                <option disabled={true} value="subject">Subject</option>
                {mapSubjects}
            </select>
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
            return dispatch(subActions.getSubjectRequest());
        }
    }
}

export default connect(mapState, mapDispatch)(RegisControl);