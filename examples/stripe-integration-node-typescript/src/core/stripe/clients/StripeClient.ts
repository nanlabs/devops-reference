import Stripe from 'stripe';

// stripe instance singleton
const getStripeClient = (() => {
    let stripe: Stripe;
    return () => {
        if (!stripe) {
            stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
                apiVersion: '2022-11-15',
            });
        }
        return stripe;
    };
})();

export default {
    getStripeClient,
};
