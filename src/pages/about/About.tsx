import { useEffect, useState } from "react";

function About() {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://api.nasa.gov/DONKI/FLR?startDate=2016-01-01&endDate=2016-01-30&api_key=mCI02flP32122flaw1Symn8GUELVJSHriQWbZqW4')
            .then((data) => {
                return data.json();
            })
            .then(data => setData(data));
    }, []);

    return (
        <h2>About : {JSON.stringify(data, null, 2)}</h2>
    )
};

export default About