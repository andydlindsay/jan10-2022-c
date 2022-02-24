# W07D04 - Data Fetching & Other Side Effects

### To Do
- [x] Rules for Hooks
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Cleanup
- [x] Dependencies
- [x] _useEffect_ Flow

Dan Abramov

### Rules for Hooks
* can't be called conditionally
* have to be used inside a React function
* all hooks must start with `use`

### Pure Function
* return the same output given the same input
* no side effects

```js
let additive = 2;
let something = 'hello';

const addTwo = (num) => {
  const result = num + additive;
  something = 'goodbye';
  // console.log(result);
  return result;
};
```

### Side Effect
* reaching outside of your function
* Common side effects
  * console.log
  * establish socket connections
  * data fetching
  * setting up timers/intervals




try {
  // try this risky code
  const returnVal = await myPromise
  console.log(returnVal);
} catch(e) {
  console.log(e);
}






