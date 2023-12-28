/* ************************************************************************************************* */
/* src/components/messages/messagesController/messagesController.js */
/* ************************************************************************************************* */
/* Funcionalidad: Testing de Payments */

const PaymentsServices = require('../paymentsServices/paymentsServices');

class PaymentsController {
    createPaymentIntent = async (req, res) => {
        return await PaymentsServices.createPaymentIntent(req, res);
    };
}

module.exports = new PaymentsController();
