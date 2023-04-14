// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component

import { findAllByTestId } from "@testing-library/react";

// You can also destructure your props directly from the parameter list
export default function CardValidation(props) {
  //function to return loaded JSX
  const validate = () => {

    /**
    Orig  :  4 4 0 8 0 4 1 2 3 4   5 6   7 8   9 3
    Step 1:  8 4 0 8 0 4 2 2 6 4  10 6  14 8  18 3
    Step 2:  8+4+0+8+0+4+2+2+6+4+1+0+6+1+4+8+1+8+3 = 70
    Step 3:  70 % 10 == 0
     */
    const card_numer = props.card
    let digit_array = card_numer.toString().split('')
   
    let real_digits = digit_array.map((v, i) => {
      let value = null
      if ((i + 1) % 2 != 0) {
        value = v * 2
      } else {
        value = v
      }
      return value
    })

    let digit_str = ''
    real_digits.forEach( a =>{
     
      digit_str +=a
    })

    let cal_digit_array =  digit_str.split('')
    let sum = 0
    cal_digit_array.map(x => sum += parseInt(x));
    
    let isvalidCard = (sum % 10 == 0) ? true : false
    return isvalidCard ? <h1>Valid card</h1> : <h1>Invalid card</h1>
  };


  return props.card ? validate() : "";
};

  // We must export the component to use it in other files
