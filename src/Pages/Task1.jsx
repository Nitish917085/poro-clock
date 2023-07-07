import React, { useState } from "react";
import { styled } from "styled-components";

const Input = styled.div`
  display: flex;
  margin-right: 10px;
`;

function Task1() {
  const [listA, setListA] = useState("");
  const [listB, setListB] = useState("");
  const [results, setResults] = useState([]);

  const findDifferences = () => {
    const arrA = listA.split("\n").map((item) => item.trim());
    const arrB = listB.split("\n").map((item) => item.trim());

    const uniqueA = arrA.filter((item) => !arrB.includes(item));
    const uniqueB = arrB.filter((item) => !arrA.includes(item));
    const common = arrA.filter((item) => arrB.includes(item));
    const combined = [...uniqueA, ...uniqueB];

    const diffResults = {
      uniqueA,
      uniqueB,
      common,
      combined,
    };

    setResults(diffResults);
  };

  return (
    <div>
      <div></div>
      <div></div>
      <h1>Find List Differences</h1>
      <Input>
        <div>
          <h5>List A</h5>
          <textarea
            style={{ minHeight: "200px" }}
            placeholder="Please press enter to add next value in list"
            value={listA}
            onChange={(e) => setListA(e.target.value)}
          ></textarea>
        </div>
        <div style={{ marginLeft: "10px" }}>
          <h5>List B</h5>

          <textarea
            style={{ minHeight: "200px" }}
            placeholder="Please press enter to add next value in list"
            value={listB}
            onChange={(e) => setListB(e.target.value)}
          ></textarea>
        </div>
      </Input>
      <button onClick={findDifferences}>Compute</button>
      <div>
        <h4>Items present only in A:</h4>
        <ul>
          {results.uniqueA &&
            results.uniqueA.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
      <div>
        <h4>Items present only in B:</h4>
        <ul>
          {results.uniqueB &&
            results.uniqueB.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
      <div>
        <h4>Items present in both A and B:</h4>
        <ul>
          {results.common &&
            results.common.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
      <div>
        <h4>Items combining both A and B (unique):</h4>
        <ul>
          {results.combined &&
            results.combined.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Task1;
