import React from 'react';

function PersonCard({ props }) {
  return (
    <div className={'card'}>
      <img className="profile-pic" src={props.photo} alt="random"></img>
      <p>
        `{props.name} {props.surname}`
      </p>
      <p>{props.gender}</p> <p>{props.age}</p>
      <p>{props.phone}</p>
      <p>{props.birthday ? props.birthday.dmy : ''}</p>
    </div>
  );
}

export default PersonCard;
