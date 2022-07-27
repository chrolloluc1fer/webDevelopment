import { useSelector, useDispatch } from 'react-redux'
import { incrementCounter, decrementCounter, loginCreator, logoutCreator } from './redux/action'



function App() {
  let count = useSelector(function (state) {
    return state.count;
  })

  let logged = useSelector(function (state) {
    return state.logged;
  })
  let dispatch = useDispatch();

  return (
    <>
      <button onClick={() => { dispatch(loginCreator()) }}>Login</button>
      <button onClick={() => { dispatch(logoutCreator()) }}>Logout</button>
      {logged ? (<><p>{count}</p>
        <button onClick={() => { dispatch(incrementCounter()) }}>+</button>
        <button onClick={() => { dispatch(decrementCounter()) }}>-</button>
      </>
      ) : ""}


    </>
  );
}

export default App;
