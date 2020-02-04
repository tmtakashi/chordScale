import React from "react";

const Card = props => {
  return (
    <div className="card">
      {props.children}
      <style jsx>{`
        .card {
          border-radius: 5%;
          box-shadow: 0px 2px 3px -2px rgba(0, 0, 0, 0.5);
          width: 40%;
          height: 35%;
          background-color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Card;
