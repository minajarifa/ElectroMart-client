import { loadStripe } from "@stripe/stripe-js";
import Title from "../../Shared/Title/Title";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

export default function Payment() {
  const stripePromise = loadStripe(import.meta.env.VITE_payment_gatway_PK);
  return (
    <div>
      <Title heading={"Payment"} subheding={"Please pay to order"} />
      <div>
        {/* <h2 className="text-4xl">payment for bikask</h2> */}
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
}
