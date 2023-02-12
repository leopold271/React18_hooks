import React, { useState, useMemo, useDeferredValue } from "react";

const numbers = [...new Array(200000).keys()];

const DefferedValueExample = () => {
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div>
            <h1>useDeferredValue example</h1>
            <input type="number" onChange={handleChange} value={query} />
            <List query={query} />
        </div>
    );
}

const List = (props) => {
    const { query } = props;
    const defQuery = useDeferredValue(query);

    const list = useMemo(() => (
        numbers.map((i, index) => (
            defQuery
                ? i.toString().startsWith(defQuery)
                && <p key={index}>{i}</p>
                : <p key={index}>{i}</p>
        ))
    ), [defQuery]);
    
    return (
        <div>
            {list}
        </div>
    );
}

export default DefferedValueExample;