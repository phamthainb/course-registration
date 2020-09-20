import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as subActions from '../../actions/subjects';

function RegisControl(props) {

  useEffect(()=>{
    props.onGetSubjects();
  }, [])

  const onShowSubjectList = (e)=>{
    props.onGetSubjects();
    var value = e.target.value;
    var option = props.subjects.filter(sub=>{
      return sub.code === value;
    })
    props.onShowSubjectList(option)
  }

  const mapSubjects = props.subjects.map((sub, index) => {
    return (
      <option key={index} value={sub.code}>
        {`${sub.code} - ${sub.name} (${sub.credits} TC)`}
      </option>
    );
  });

  return (
    <div className="regis-control">
      <select onChange={onShowSubjectList} defaultValue="subject">
        <option value="subject" disabled>Subject</option>
        {mapSubjects}
      </select>
    </div>
  );
}

const mapState = state => {
  return{
    subjects: state.subjects
  }
}

const mapDispatch = dispatch => {
  return{
    onGetSubjects: ()=>{
      dispatch(subActions.getSubjectRequest())
    }
  }
}

export default connect(mapState, mapDispatch)(RegisControl);
