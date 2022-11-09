import { insertOrder } from "../modules/db";
import { useRef, useState } from "react";

function CheckoutForm(props) {
  const theForm = useRef(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  async function submit(e) {
    e.preventDefault();
    const response = await insertOrder({
      name: theForm.current.elements.name.value,
      email: theForm.current.elements.email.value,
      address: theForm.current.elements.address.value,
      basket: props.cart,
    });
    console.log(response);
    if (response && response.length) {
      setPaymentCompleted(true);
    }
  }
  return (
    <>
      {paymentCompleted ? (
        <p>THANK YOU!</p>
      ) : (
        <form onSubmit={submit} ref={theForm}>
          <div className="form-control">
            <label htmlFor="form-name">Name</label>
            <input required type="text" name="name" id="form-name" />
          </div>
          <div className="form-control">
            <label htmlFor="form-email">Email</label>
            <input required type="email" name="email" id="form-email" />
          </div>
          <div className="form-control">
            <label htmlFor="form-address">Address</label>
            <textarea required name="address" id="form-address" />
          </div>
          <button>Pay</button>
        </form>
      )}
    </>
  );
}

export default CheckoutForm;
