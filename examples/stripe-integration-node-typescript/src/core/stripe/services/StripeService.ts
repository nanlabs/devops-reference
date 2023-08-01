import Stripe from 'stripe';
import { StripeCheckoutParams } from '../types/StripeCheckoutParams';
import StripeClient from '../clients/StripeClient';

const createCheckoutSession: (params: StripeCheckoutParams) => Promise<string> = async (
    params
) => {
    // Prepare checkout generic session parameters
    const sessionParam: Stripe.Checkout.SessionCreateParams = {
        mode: params.paymentMethod,
        invoice_creation: {
            enabled: true,
        },
        line_items: params.lineItems,
        success_url: `${process.env.STRIPE_SUCCESS_URL}`,
        cancel_url: `${process.env.STRIPE_CANCEL_URL}`,
      }

    // Add customer to session if provided
    if (params.customerId) {
        sessionParam.customer = params.customerId;
    } else {
        // Add customer email to session if provided
        if (params.email) {
            sessionParam.customer_email = params.email;
        }
        // Define customer creation
        if (params.createCustomer) {
            sessionParam.customer_creation = 'always' as Stripe.Checkout.SessionCreateParams.CustomerCreation;
        }
        else {
            sessionParam.customer_creation = 'if_required' as Stripe.Checkout.SessionCreateParams.CustomerCreation;
        }
    }
    try {
        const session = await StripeClient.getStripeClient().checkout.sessions.create(sessionParam);
        if (!session) {
            throw new Error('Error creating checkout session');
        }
        return session.url;
    } catch (error) {
        throw new Error(error.message);
    }
};


const createWebhookEvent: (body: any, signature: string | string[]) => Promise<Stripe.Event> = async (
    body,
    signature
) => {
    return StripeClient.getStripeClient().webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
};

export default {
    createCheckoutSession,
    createWebhookEvent,
};