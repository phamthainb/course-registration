import React from 'react';
import './style.css';

function EditInfoForm() {

    const onEditInfo = (e)=>{
        
    }

    const onUpdate =(e)=>{
        
    }

    const onCancel =(e)=>{

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
                        <td>Hoang thai son</td>
                    </tr>
                    <tr>
                        <td className="label">ID : </td>
                        <td>B18DCCN511</td>
                    </tr>
                    <tr>
                        <td className="label">Gender : </td>
                        <td>Male</td>
                    </tr>
                    <tr>
                        <td className="label">Birthday : </td>
                        <td>18/09/2000</td>
                    </tr>
                    <tr>
                        <td className="label">Cohort : </td>
                        <td>2018 -- 2023</td>
                    </tr>
                    <tr>
                        <td className="label">Major : </td>
                        <td>Information technology</td>
                    </tr>
                    <tr>
                        <td className="label">Phone number : </td>
                        <td>
                            <input
                            defaultValue="0329271723"
                            onChange={onEditInfo}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="label">Email : </td>
                        <td>
                            <input
                            defaultValue="sonht1109@edu.ptit.vn"
                            onChange={onEditInfo}/>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="button-group mt-4">
                <button className="btn btn-info" onClick={onUpdate}>
                    <i className="fa fa-check" aria-hidden="true"></i> Update
                </button>
                <button className="btn btn-dark" onClick={onCancel}>
                    <i className="fa fa-ban" aria-hidden="true"></i> Cancel
                </button>
            </div>
        </div>
    )
}
export default EditInfoForm;