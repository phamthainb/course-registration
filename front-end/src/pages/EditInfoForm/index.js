import { apiTokenInterceptors } from 'common/axiosService';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import ChangePassForm from './ChangePassForm';
import * as constants from '../categories/constants';
import * as toast from '../../common/toast';
import './style.css';

function EditInfoForm(props) {

    const {user} = props;

    const [phone, setPhone] = useState(user?.phone);
    const [email, setEmail] = useState(user?.email);

    const onEditInfo = (e)=>{
        var target = e.target;
        var name = target.name;
        var value = target.value;
        if(name === 'phone'){
            setPhone(value);
        }
        else{
            setEmail(value);
        }
    }

    const onUpdate =()=>{
        apiTokenInterceptors("PUT", constants.GET_USER, {
            phone: phone,
            email: email
        })
        .then(res => {
            toast.successNotify("Updated successfully");
        })
        .catch(err => {
            console.log(err);
        })
    }

    const onCancel =()=>{
        console.log('cancel');
        setPhone(user?.phone);
        setEmail(user?.email);
        console.log(phone, email);
    }

    return(
        <div className="edit-form container d-flex justify-content-center align-items-center">
            <div className="edit-form-header mb-4">
                <span>About you</span>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td className="label">Name : </td>
                        <td>{user?.name}</td>
                    </tr>
                    <tr>
                        <td className="label">ID : </td>
                        <td>{user?.code}</td>
                    </tr>
                    <tr>
                        <td className="label">Grade : </td>
                        <td>{user?.lop}</td>
                    </tr>
                    <tr>
                        <td className="label">Birthday : </td>
                        <td>{user?.birthday}</td>
                    </tr>
                    <tr>
                        <td className="label">Cohort : </td>
                        <td>{user?.code && convertCohort(user.code)}</td>
                    </tr>
                    <tr>
                        <td className="label">Major : </td>
                        <td>{user?.code && convertMajor(user.code)}</td>
                    </tr>
                    <tr>
                        <td className="label">Phone number : </td>
                        <td>
                            <input
                            value={phone}
                            autoComplete={false}
                            onChange={onEditInfo}
                            name="phone"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="label">Email : </td>
                        <td>
                            <input
                            value={email}
                            autoComplete={false}
                            onChange={onEditInfo}
                            name="email"/>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="button-group mt-4 mb-4">
                <button className="btn btn-info" onClick={onUpdate}>
                    <i className="fa fa-check" aria-hidden="true"></i> Update
                </button>
                <button className="btn btn-dark" onClick={onCancel}>
                    <i className="fa fa-ban" aria-hidden="true"></i> Cancel
                </button>
            </div>
            <ChangePassForm/>
        </div>
    )
}

const mapState = state => {
    return{
        user:  state.app.user
    }
}

const convertCohort = (s)=>{
    var startYear = parseInt(s.substring(1, 3)) + 2000;
    var endYear = startYear + 5;
    return startYear + " -- " + endYear;
}

const convertMajor = (s)=>{
    var major = s.substring(5, 7);
    return major;
}

export default connect(mapState, null)(EditInfoForm);