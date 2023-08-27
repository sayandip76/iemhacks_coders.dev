
const makePayment = async() => {
    try{
     const payment=await loadStripe('pk_test_51N96toSB22CAWVNpjebfr4dOasUqm8DPqI4UMxFBDyU5MAXNAU72cABNTBCewouLgCsKarmOknr4Ia06on3sYn3N00pkWDRv3W');
     await payment.redirectToCheckout({
        mode:'payment',
        lineItems:'23',
        successUrl:`${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl:`window,location.origin`        
     })
    }
    catch(err){
        console.log(err);
    }
}

export {makePayment}