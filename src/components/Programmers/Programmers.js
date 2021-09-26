import React, { useEffect, useState } from 'react';
import './Programmers.css';
import Programmer from '../Programmer/Programmer'

const Programmers = () => {
    const [programmers, setProgrammers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./programmers.JSON')
            .then(res => res.json())
            .then(data => setProgrammers(data))
    }, [])

    const handleBtn = (programmer) => {
        console.log(programmer);
        const newCart = [...cart, programmer];
        setCart(newCart);
    }

    let tot = 0;
    for (const obj of cart) {
        tot += obj.Salary;
    }

    return (
        <div className="programmers-container my-5">
            <div className="programmers row row-cols-1 row-cols-md-3 g-4 ms-5">
                {
                    programmers.map(programmer => <Programmer key={programmer.Name} programmer={programmer} handleBtn={handleBtn}></Programmer>)
                }

            </div>
            <div className="cart">
                <div className="border border-secondary rounded m-3 mt-0">
                    <h4>
                        <i class="fas fa-user-check"></i> Total Programmers: {cart.length}
                    </h4>
                    <h4>
                        Total Cost: {tot}
                    </h4>
                    <div>
                        {
                            cart.map(programmer => <h4>{programmer.Name}</h4>)
                        }
                    </div>
                    <button className="btn btn-secondary my-3">
                        Hire Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Programmers;