import { loadStripe } from "@stripe/stripe-js";
import Title from "../../Shared/Title/Title";
import { Elements } from "@stripe/react-stripe-js";

export default function Payment() {
  const stripePromise = loadStripe("");
  return (
    <div>
      <Title heading={"Payment"} subheding={"Please pay to order"} />
      <div>
        <h2 className="text-4xl">payment for bikask</h2>
        <Elements stripe={stripePromise}>
          
        </Elements>
      </div>
    </div>
  );
}
