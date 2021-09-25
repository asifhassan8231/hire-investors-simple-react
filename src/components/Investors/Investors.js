import React, { useEffect, useState } from 'react';
import Legend from '../Legend/Legend';
import Salary from '../Salary/Salary';
import './Investors.css'
let infoArray = [];
const Investors = () => {
    const [investors, setInvestors] = useState([]);
    const [infos, setInfos] = useState([]);
    useEffect(() => {
        fetch('./investors.JSON')
            .then(res => res.json())
            .then(data => setInvestors(data));
    }, [])
    const handleHireBtn = info => {
        infoArray = [...infoArray, info];
        setInfos(infoArray);
    }
    return (
        <div className="container">
            <div className="budget">
                <h3>Gather your billionaire Investors to Beat The Market!!!</h3>
                <h2>Budget: 999 Million</h2>
            </div>
            <div className="investors">
                <div className="investor">
                    {
                        investors.map(investor => <Legend key={investor.name} investor={investor} handleHireBtn={handleHireBtn}></Legend>)
                    }
                </div>
                <div>
                    <Salary info={infos} />
                </div>
            </div>
        </div>
    );
};

export default Investors;