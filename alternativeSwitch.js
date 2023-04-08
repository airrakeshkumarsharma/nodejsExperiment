import { creditCardPaymentMethod, debitCardPaymentMethod, payPalPaymentMethod, upiPaymentMethod, walletPaymentMethod } from "./services";

const mappedSPaymentMethod = {
    upi: upiPaymentMethod,
    creditCard: creditCardPaymentMethod,
    debitCard: debitCardPaymentMethod,
    wallet: walletPaymentMethod,
    payPal: payPalPaymentMethod,
    wallet: walletPaymentMethod
}

const getPaymentSuccessFull = (paymentMethod, amount) => {
    if (mappedSPaymentMethod[paymentMethod]) {
        return mappedSPaymentMethod[paymentMethod](amount, 0.01);
    }
    return Promise.reject("Invalid payment method");
}