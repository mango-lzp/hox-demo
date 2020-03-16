import React from 'react';
import useCount from './state';
function Home(){
  const count = useCount();
  return (
    <>
      <div>{count.count}</div>
      <button onClick={count.increment}>increment</button>
    </>
  )
}
export default Home