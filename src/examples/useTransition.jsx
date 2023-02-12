import React, { useState, useMemo, useTransition } from "react";

const numbers = [...new Array(20000).keys()];

const TransitionExample = () => {
  const [query, setQuery] = useState("");
  const [text, setText] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setText(e.target.value);
    startTransition(() => {
      setQuery(e.target.value);
    });
  };

  const list = useMemo(() => (
    numbers.map((i, index) => (
      query
        ? i.toString().startsWith(query) && <p key={index}>{i}</p>
        : <p key={index}>{i}</p>
    ))
  ), [query]);

  return (
    <div>
      <h1>useTransition example</h1>
      <input type="number" onChange={handleChange} value={text} />
      <div>
        {
          isPending
            ? "Loading..."
            : list
        }
      </div>
    </div>
  );
};

export default TransitionExample;