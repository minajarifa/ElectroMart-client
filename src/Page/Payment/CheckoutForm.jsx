import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useProducts from "../../hooks/useProducts";
import useAuth from "../../hooks/useAuth";

export default function CheckoutForm() {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [products] = useProducts();
  const { user } = useAuth();
  const totalPrice = products.reduce((total, item) => total + item.price, 0);
  console.log(totalPrice);
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post(`/create-payment-intent`, { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user.email || "anonymous",
            name: user.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirmError");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succceeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        // now save the payment in the database
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          data: new Date(), // TODO
          cartIds: cart.map((item) => item?._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "pending",
        };
        const res = await axiosSecure.post("/payment", payment);
        console.log("payment saved", res.data);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-6xl text-red-600">{error}</p>
        {transactionId && (
          <p className="text-green-800">Your Transaction id: {transactionId}</p>
        )}
      </form>
    </div>
  );
}
