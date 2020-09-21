import React from 'react'

function BottomButton(){
    return(
        <div className="bottom-button">
            <button
            className="btn btn-dark"
            data-toggle="tooltip"
            title="First week">
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </button>
            <button 
            className="btn btn-dark"
            data-toggle="tooltip"
            title="Previous week">
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </button>
            <button
            className="btn btn-dark"
            data-toggle="tooltip"
            title="Next week">
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
            <button
            className="btn btn-dark"
            data-toggle="tooltip"
            title="Final week">
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
        </div>
    )
}

export default BottomButton;