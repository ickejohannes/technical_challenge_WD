import React, { useEffect, useState } from 'react';
import Phone from '../components/Phone';

function AllPhonesPage(props) {
    const [phones, setPhones] = useState([])

    const fetchPhones = async () => {
        const response = await fetch("http://localhost:5005/api/phones",
            {method: "GET", headers: {
                "Content-Type": "application/json"
                }
            })
        const responseParsed = await response.json();
        setPhones(responseParsed.phones)
    }

    useEffect(() => {
        fetchPhones();
    }, []);

    return (
        <div>
            This is the all phones page.
            {phones.map((phone) => {
                return <div>
                    <Phone phone={phone}/>
                </div>
            })}
        </div>
    );
}

export default AllPhonesPage;