import React, { useState } from 'react';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Dialog } from '@headlessui/react';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cardStyle = {
  style: {
    base: {
      fontSize: '16px',
      color: '#424770',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  },
};

const PaymentModal = ({ isOpen, closeModal, applicationFees, onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setErrorMessage('Stripe has not loaded.');
      return;
    }

    if (!name || !email || !address) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setIsProcessing(true);
    setErrorMessage('');

    try {
      const cardNumberElement = elements.getElement(CardNumberElement);

      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardNumberElement,
        billing_details: {
          name,
          email,
          address: {
            line1: address,
          },
        },
      });

      if (error) {
        setErrorMessage(`Payment failed: ${error.message}`);
      } else {
        toast.success(`Payment of $${applicationFees} successful!`);
        onPaymentSuccess(paymentMethod.id);
        closeModal();
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Payment error occurred!');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-xl font-semibold">Confirm Payment</Dialog.Title>
            <FaTimes onClick={closeModal} className="cursor-pointer text-red-500" />
          </div>
          <p className="text-gray-700 mb-4">
            Pay <strong>${applicationFees}</strong> for the scholarship application.
          </p>

          <form onSubmit={handlePayment}>
            {/* Name Field */}
            <label className="block text-sm mb-2">Cardholder Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border w-full mb-4 p-2 rounded"
              placeholder="John Doe"
              required
            />

            {/* Email Field */}
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border w-full mb-4 p-2 rounded"
              placeholder="johndoe@example.com"
              required
            />

            {/* Address Field */}
            <label className="block text-sm mb-2">Billing Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border w-full mb-4 p-2 rounded"
              placeholder="123 Main St, City"
              required
            />

            {/* Card Details Fields */}
            <label className="block text-sm mb-2">Card Number</label>
            <div className="border p-2 rounded mb-4">
              <CardNumberElement options={cardStyle} />
            </div>

            <label className="block text-sm mb-2">Expiry Date</label>
            <div className="border p-2 rounded mb-4">
              <CardExpiryElement options={cardStyle} />
            </div>

            <label className="block text-sm mb-2">CVC</label>
            <div className="border p-2 rounded mb-4">
              <CardCvcElement options={cardStyle} />
            </div>

            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

            <div className="flex justify-end gap-2">
              <button type="button" onClick={closeModal} className="btn bg-gray-500 text-white">
                Cancel
              </button>
              <button
                type="submit"
                disabled={!stripe || isProcessing}
                className="btn bg-green-500 text-white"
              >
                {isProcessing ? 'Processing...' : 'Proceed for Payment'}
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default PaymentModal;
