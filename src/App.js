import {useState, useEffect} from "react";
import "./App.css";
import CardValidation from "./components/CardValidation";
import Form from "./components/Form";

export default function App() {
  //variable with your apiKey
  const apiKey = "98e3fb1f";

  //State to hold credit card data
  const [creditCard, setCreditCard] = useState(null);

  //Function to validate the credit card number
  const getcard =  (card_number) => {
    //console.log(`Credit card ${card_number}`)
    setCreditCard(card_number);
  }

  //This will run on the first render but not on subsquent renders
  useEffect(() => {
    getcard("");
  }, []);

  return (
    <div className="App">
      <Form card_val={getcard} />
      <CardValidation card={creditCard} />
    </div>
  );
}
//71934a67
