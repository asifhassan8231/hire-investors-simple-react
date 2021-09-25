import React from 'react';
import './Legend.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons'


const Legend = (props) => {
    const { name, age, country, salary, company, img } = props.investor;
    const icon = <FontAwesomeIcon icon={faUserTie} />
    return (
        <div className="legend">
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="detail">
                <div style={{ fontWeight: 700 }}>
                    <p>Name:</p>
                    <p>Age:</p>
                    <p>Country:</p>
                    <p>Company:</p>
                    <p>Salary:</p>
                </div>
                <div>
                    <p>{name}</p>
                    <p>{age}</p>
                    <p>{country}</p>
                    <p>{company}</p>
                    <p>${salary}</p>
                </div>
            </div>
            <button className="btn-design" onClick={() => props.handleHireBtn(props.investor)}>{icon} Hire!</button>
        </div>
    );
};

export default Legend;