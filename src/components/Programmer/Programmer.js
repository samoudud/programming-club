import React from 'react';
import './Programmer.css';

const Programmer = (props) => {
    // console.log(props.programmer)
    const { Name, Age, Salary, Role, Country, img } = props.programmer;
    return (
        <div className="programmer-container col">
            <div className="card h-100">
                <img src={img} className="card-img-top mx-auto my-3" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {Name}</h5>
                    <h5>Role: {Role}</h5>
                    <h5>Age: {Age}</h5>
                    <h5>Country: {Country}</h5>
                    <h5>Salary: {Salary}</h5>
                    <button className="btn btn-secondary px-5 me-2" onClick={() => props.handleBtn(props.programmer)}>
                        <i className="fas fa-user-plus"></i> Hire
                    </button>
                    <button className="btn p-1 mx-1">
                        <i className="fab fa-facebook-square text-secondary"></i>
                    </button>
                    <button className="btn p-1">
                        <i className="fab fa-instagram-square text-secondary"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Programmer;