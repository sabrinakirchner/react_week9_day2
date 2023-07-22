import { useState, useEffect } from "react"


const isValidCreditCard = (number) =>{
    let sum =0; 
    let isEven = false;

    for(let i = number.length -1; i>= 0; i--){
        let digit = parseInt(number[i], 10); 
        if(isEven){
            digit *= 2; 
            if (digit > 9){
                digit -= 9; 
            }
        }
        sum += digit;
        isEven = !isEven; 
    }
    return sum % 10 === 0;
};

const CreditCardForm =()=>{
    const [creditNumber, setCreditNumber] = useState("");
    const [isValid, setIsValid] = useState(false);

    useEffect(()=>{
        setIsValid(isValidCreditCard(creditNumber));
    }, [creditNumber]);

    const handleChange = (event) => {
        const creditNumberWithoutSpaces = event.target.value.split("").join("");
        setCreditNumber(creditNumberWithoutSpaces);
    };

    return(
        <div> 
            <input type="text" value={creditNumber} onChange={handleChange} />
            {isValid ? <p>Credit card is valid. </p> : <p> Credit card is not valid</p>}
        </div>
    );
};

export default CreditCardForm; 