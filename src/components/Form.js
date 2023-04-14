import {useState, useEffect} from "react";

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function Form (props) {
  //State to hold the data of our form
  const [formData, setFormData] = useState({
    cardnbr: "",
  });

  //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
   
    props.card_val(formData.cardnbr);
  };

  //The component must return some JSX
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your card number: </label>
        <input
          type="text"
          name="cardnbr"
          onChange={handleChange}
          value={formData.cardnbr}
        />
        <input type="submit"  value="submit" />
            
      </form>
    </div>
  );
};