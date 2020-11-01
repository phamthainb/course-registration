import React, { useMemo } from "react";
import { connect } from "react-redux";
import * as actions from '../categories/actions';

function RegisTable(props) {

  const { chosenSubject, cart } = props;

  // const weekArray = useMemo(()=>{
  //   cart.map(item => {
  //     return (
  //       {
  //         code: item.
  //       }
  //     )
  //   })
  // })

  // const onUpdateCart = (e) => {
  //   var code = e.target.getAttribute("data-code");
  //   var id = e.target.getAttribute("data-id");
  //   var nmh = e.target.getAttribute("data-nmh");
  //   var name = e.target.getAttribute("data-name");
  //   var crt = e.target.getAttribute("data-crt");
  //   var pg = e.target.getAttribute("data-pg");
  //   var time = e.target.getAttribute("data-time");
  //   console.log(typeof(time));
  //   props.onUpdateCart(id, code, nmh, name, crt, pg, false);
  // };
  const onUpdateCart = (sub)=>{
    sub.isAdded = false;
    props.onUpdateCart({...sub});
  }

  const changeTrColor = (sub) => {
    if (sub.isAdded === true) {
      return "table-success";
    } else if (sub.slot === 0) {
      return "table-active";
    }
    return "";
  };

  const checkChosenSubject = () => {
    chosenSubject.forEach((sub) => {
      sub.isAdded = false;
      if (cart) {
        cart.forEach((item) => {
          if (parseInt(item.id) === parseInt(sub.id)) {
            sub.isAdded = true;
          }
        });
      }
    });
  };

  checkChosenSubject();

  const mapStartDay = (sub) => {
    return sub.map((item) => {
      return <p>{item.time.name}</p>;
    });
  };

  const mapLessionQuantity = (sub) => {
    return sub.map((item) => {
      return <p>2</p>;
    });
  };

  const mapStartLession = (sub) => {
    return sub.map((item) => {
      return <p>{item.time.lesson}</p>;
    });
  };

  const mapRoom = (sub) => {
    return sub.map((item) => {
      return <p>{item.room.name}</p>;
    });
  };

  const mapProfessor = (sub) => {
    return sub.map((item) => {
      return <p>{item.professor.name}</p>;
    });
  };

  const mapWeek = (sub) => {
    return sub.map(item => {
      return <p>{item.weeks.toString()}</p>;
    })
  };

  const mapListToTable = chosenSubject.map((sub, index) => {
    console.log(sub);
    return (
      <tr
      key={Date.now().toString() + index}
      className={changeTrColor(sub)}>
        <td>
          <button
            className="btn btn-outline-dark"
            onClick={()=>onUpdateCart(sub)}
            disabled={sub.slot ? false : true}
          >
            {sub.isAdded === true ? "Delete" : "Add"}
          </button>
        </td>
        <td>{sub.subject.code}</td>
        <td>{sub.subject.name}</td>
        <td>{sub.nmh}</td>
        <td>{sub.tth === 0 ? "null" : sub.tth}</td>
        <td>{sub.subject.credit}</td>
        <td>{sub.quantity}</td>
        <td>{sub.slot}</td>
        <td>{sub.details && mapStartDay(sub.details)}</td>
        <td>{sub.details && mapStartLession(sub.details)}</td>
        <td>{sub.details && mapLessionQuantity(sub.details)}</td>
        <td>{sub.details && mapRoom(sub.details)}</td>
        <td>{sub.details && mapProfessor(sub.details)}</td>
        <td>{sub.details && mapWeek(sub.details)}</td>
      </tr>
    );
  });

  return (
    <div style={{margin: "0 20px"}}>
      <div
        className="table-responsive"
        style={{ maxHeight: 400, overflow: "auto" }}
      >
        {
          chosenSubject.length > 0 && 
          <table className="table regis-table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Act</th>
              <th>Code</th>
              <th>Name</th>
              <th>ID</th>
              <th>PG</th>
              <th>Crt</th>
              <th>Qtt</th>
              <th>Slot</th>
              <th>Day</th>
              <th>Start</th>
              <th>Les</th>
              <th>Room</th>
              <th>Professor</th>
              <th>Week</th>
            </tr>
          </thead>
          <tbody>{chosenSubject.length > 0 && mapListToTable}</tbody>
        </table>
        }
      </div>
    </div>
  );
}

const mapState = state => {
  return{
    cart: state.cart,
    chosenSubject: state.chosenSubject
  }
}

const mapDispatch = dispatch => {
  return{
    onUpdateCart: (sub)=>{
      dispatch(actions.updateCart(sub))
    }
  }
}

export default connect(mapState, mapDispatch)(RegisTable);
