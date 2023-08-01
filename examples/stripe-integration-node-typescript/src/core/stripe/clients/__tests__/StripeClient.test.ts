import Stripe from 'stripe';
import StripeClient from '../StripeClient';

// Mock the 'stripe' module
jest.mock('stripe');

describe('StripeClient', () => {
    // Set up mock environment variables
    process.env.STRIPE_SECRET_KEY = 'fake_secret_key';

    // Set the mock data for the getStripeClient function
    const stripeClientParams = {
        apiVersion: '2022-11-15',
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('getStripeClient should create a single Stripe instance', () => {
        // Call the getStripeClient function
        const stripeClient = StripeClient.getStripeClient();

        // Assert that Stripe constructor is called with the correct arguments
        expect(Stripe).toHaveBeenCalledWith(process.env.STRIPE_SECRET_KEY, stripeClientParams);

        // Assert that the returned stripeClient is the same instance created in the first call
        expect(stripeClient).toBe(StripeClient.getStripeClient());

        // Assert that Stripe constructor is called only once when singleton already exists
        expect(Stripe).toHaveBeenCalledTimes(1);
    });
});
