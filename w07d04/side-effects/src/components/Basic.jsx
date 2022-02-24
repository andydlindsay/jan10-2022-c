import {useEffect, useState} from 'react';

const Basic = () => {
  const [counter, setCounter] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect(() => {}, []);

  useEffect(() => {
    console.log('the document title has been set');
    document.title = `The counter is ${counter}`;
  }, [counter]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('the interval has fired', counter);
    }, 3000);

    const cleanup = () => {
      console.log('clearing the interval');
      clearInterval(interval);
    };

    return cleanup;
  }, [counter]);

  return (
    <div>
      <h2>This is the basic component</h2>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Click me!</button>

      <div>
        <h2>The value of search term: {searchTerm}</h2>
        <label>Search Term:</label>
        <input 
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Basic;
