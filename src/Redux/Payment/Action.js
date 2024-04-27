import { api } from "../../Config/Config"


export const createPayment = (orderId) => async (dispatch) => {


    try {
        const {data} = await api.post(`/api/payments/${orderId}`);
        console.log("Payment Response Data : ", data);
        if(data.payment_link_url) {
            console.log("Payment Link Url - ", data.payment_link_url);
            localStorage.setItem("slotBooked", true);
            window.location.href = data.payment_link_url;
        }
        console.log("Successfully redirected to razorpay ...!");

    } catch (error) {
        console.log("Error occured while making payment ...!", error);
    }
}