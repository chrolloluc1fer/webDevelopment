import { useSelector } from "react-redux";
import "./cart.css";
import { useDispatch } from "react-redux";
import { addCreator, removeCreator } from "../redux/action";
let Cart = () => {
  let state = useSelector((state) => state);
  let filteredArr = state.filter((el) => el.qty > 0);
  let total = 0;
  let dispatch = useDispatch();
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Qty</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredArr.map((el, index) => {
            let amount = el.price * el.qty;
            total += amount;
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{el.name}</td>
                <td>{el.price}</td>

                <td>
                  <button
                    className="decrease"
                    onClick={() => dispatch(removeCreator(index))}
                  >
                    -
                  </button>
                  {el.qty}
                  <button
                    className="increase"
                    onClick={() => dispatch(addCreator(index))}
                  >
                    +
                  </button>
                </td>
                <td>{amount}</td>
              </tr>
            );
          })}

          <tr>
            <th></th>
            <td></td>
            <td></td>
            <th>Total</th>
            <th>{total}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Cart;
