import { creditCardPaymentMethod, debitCardPaymentMethod, payPalPaymentMethod, upiPaymentMethod, walletPaymentMethod } from "./services";

const getPaymentSuccessFull = (paymentMethod, amount) => {
    switch (paymentMethod) {
        case "upi":
            return upiPaymentMethod(amount, 0.01);
        case "creditCard":
            return creditCardPaymentMethod(amount, 0.02);
        case "debitCard":
            return debitCardPaymentMethod(amount, 0.03);
        case "wallet":
            return walletPaymentMethod(amount, 0.04);
        case "payPal":
            return payPalPaymentMethod(amount, 0.05);
        case "wallet":
            return walletPaymentMethod(amount, 0.06);
        default:
            return Promise.reject("Invalid payment method");
    }
}

const paymentMethod = "payPal";
const amount = 100;
getPaymentSuccessFull(paymentMethod, amount)