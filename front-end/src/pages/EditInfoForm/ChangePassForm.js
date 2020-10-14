import React from 'react'

function ChangePassForm(){

    const onSavePassChange = (e)=>{
        
    }

    return (
        <div>
            <p
            data-toggle="modal"
            data-target="#modelId"
            style={{color: "#1976d2", fontWeight: 800, cursor: "pointer"}}
            >Change password
            </p>
            
            <div className="modal fade" id="modelId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Change password</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <input
                                placeholder="Old password"
                                type="password"/>
                            </div>
                            <div className="form-group">
                                <input
                                placeholder="New password"
                                type="password"/>
                            </div>
                            <div className="form-group">
                                <input
                                placeholder="Confirm password"
                                type="password"/>
                            </div>
                        </div>
                        <div className="modal-footer">

                            <button
                            type="button"
                            className="btn btn-dark"
                            data-dismiss="modal">
                                <i className="fa fa-times" aria-hidden="true"></i> Close
                            </button>

                            <button
                            type="button"
                            className="btn btn-info"
                            onClick={onSavePassChange}>
                                <i className="fa fa-check" aria-hidden="true"></i> Save
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassForm;