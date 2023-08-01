import Stripe from 'stripe';
import {
  StripeCheckoutParams,
} from '../../types/StripeCheckoutParams';
import StripeClient from '../../clients/StripeClient';
import StripeService from '../StripeService';
import {
  CheckoutParamsSchema,
} from '../../schemas/checkoutParams.schema';


describe('createCheckoutSession', () => {
  // Set up mock environment variables
  process.env.STRIPE_SUCCESS_URL = 'https://example.com/success';
  process.env.STRIPE_CANCEL_URL = 'https://example.com/cancel';

  // Set the mock data for the createCheckoutSession function
  const params: StripeCheckoutParams = {
    lineItems: [
      {
        price: 'fake_price_id',
        quantity: 1,
      },
    ],
    paymentMethod: 'payment',
  };

  const createCheckoutSessionParams = {
    mode: params.paymentMethod,
    line_items: params.lineItems,
    success_url: process.env.STRIPE_SUCCESS_URL,
    cancel_url: process.env.STRIPE_CANCEL_URL,
    invoice_creation: {
      enabled: true,
    },
  }

  const setUpMocks = (checkoutSessionResponse: object) => {
    // Create a mock CheckoutSession Response
    const mockCheckoutSession: Partial<Stripe.Checkout.Session> = checkoutSessionResponse;

    // Mock the createCheckoutSession function
    const createCheckoutSessionMock = jest.fn().mockResolvedValue(
      mockCheckoutSession as Stripe.Response<Stripe.Checkout.Session>
    );
    // Mock the StripeClient
    const mockStripeClient = {
      checkout: {
        sessions: {
          create: createCheckoutSessionMock,
        },
    }};
    // Mock the StripeClient getStripeClient function
    jest.spyOn(StripeClient, 'getStripeClient').mockImplementation(() => {
      return mockStripeClient as unknown as Stripe;
    });

    return createCheckoutSessionMock;
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a checkout session with stripe customer', async () => {
    // Set the createCheckoutSession response to the success url
    const checkoutSessionResponse = {
      url: process.env.STRIPE_SUCCESS_URL,
    };
    
    const createCheckoutSessionMock = setUpMocks(checkoutSessionResponse);

    // Assures only the customer is sent in the params
    delete params.email;
    params.customerId = 'fake_customer_id';

    // Format the params using the CheckoutParamsSchema
    const formattedParams = CheckoutParamsSchema.parse(params);

    // Run the checkout session creation
    const sessionUrl = await StripeService.createCheckoutSession(formattedParams);
    
    // Add customer to expected session parameters
    const sessionParamsWithCustomer = {
      ...createCheckoutSessionParams,
      customer: params.customerId,
    }

    // Assert that the checkout session url is the success url
    expect(sessionUrl).toBe(process.env.STRIPE_SUCCESS_URL);

    // Assert that the createCheckoutSession function is called with the correct parameters
    expect(createCheckoutSessionMock).toHaveBeenCalledTimes(1);
    expect(createCheckoutSessionMock).toHaveBeenCalledWith(
      sessionParamsWithCustomer
    );
  });

  it('should create a checkout session with email and create_customer if_required', async () => {
    // Set the createCheckoutSession response to the success url
    const checkoutSessionResponse = {
      url: process.env.STRIPE_SUCCESS_URL,
    };
    
    const createCheckoutSessionMock = setUpMocks(checkoutSessionResponse);

    // Assures only email is send the params
    delete params.customerId;
    params.email = 'test@mail.com';
    params.createCustomer = false;

    // Format the params using the CheckoutParamsSchema
    const formattedParams = CheckoutParamsSchema.parse(params);

    // Run the checkout session creation
    const sessionUrl = await StripeService.createCheckoutSession(formattedParams);
    
    // Add customer to expected session parameters
    const sessionParamsWithoutCustomer = {
      ...createCheckoutSessionParams,
      customer_email: params.email,
      customer_creation: 'if_required',
    }

    // Assert that the checkout session url is the success url
    expect(sessionUrl).toBe(process.env.STRIPE_SUCCESS_URL);

    // Assert that the createCheckoutSession function is called with the correct parameters
    expect(createCheckoutSessionMock).toHaveBeenCalledTimes(1);
    expect(createCheckoutSessionMock).toHaveBeenCalledWith(
      sessionParamsWithoutCustomer
    );
  });

  it('should create a checkout session with email and create_customer always', async () => {
    // Set the createCheckoutSession response to the success url
    const checkoutSessionResponse = {
      url: process.env.STRIPE_SUCCESS_URL,
    };
    
    const createCheckoutSessionMock = setUpMocks(checkoutSessionResponse);

    // Assures only email is send the params
    delete params.customerId;
    params.email = 'test@mail.com';
    params.createCustomer = true;

    // Format the params using the CheckoutParamsSchema
    const formattedParams = CheckoutParamsSchema.parse(params);

    // Run the checkout session creation
    const sessionUrl = await StripeService.createCheckoutSession(formattedParams);
    
    // Add customer to expected session parameters
    const sessionParamsWithoutCustomer = {
      ...createCheckoutSessionParams,
      customer_email: params.email,
      customer_creation: 'always',
    }

    // Assert that the checkout session url is the success url
    expect(sessionUrl).toBe(process.env.STRIPE_SUCCESS_URL);

    // Assert that the createCheckoutSession function is called with the correct parameters
    expect(createCheckoutSessionMock).toHaveBeenCalledTimes(1);
    expect(createCheckoutSessionMock).toHaveBeenCalledWith(
      sessionParamsWithoutCustomer
    );
  });

  it('should get a custom error when checkout session is not created', async () => {
    // Set error message
    const errorMessage = 'Error creating checkout session';
    
    // Set createCheckoutSession response to null
    const checkoutSessionResponse = null;
    
    setUpMocks(checkoutSessionResponse);

    // Run the checkout session creation and perform assertions
    await expect(StripeService.createCheckoutSession(params)).rejects.toThrowError(errorMessage);    
  });

  it('should get an error when an error is triggered while checkout session being created', async () => {
    // Set error message
    const errorMessage = 'Error on StripeClient while creating checkout session';
  
    // Mock the StripeClient to trigger an error
    jest.spyOn(StripeClient, 'getStripeClient').mockImplementation(() => {
      throw new Error(errorMessage);
    });

    // Run the checkout session creation and assert that the error is thrown
    await expect(StripeService.createCheckoutSession(params)).rejects.toThrowError(errorMessage);    
  });
});

describe('createWebhookEvent', () => {
  // Set up mock environment variables
  process.env.STRIPE_WEBHOOK_SECRET = 'test_webhook_secret';

  // Set the mock data for the createWebhookEvent function
  const body = {
    id: 'evt_test_webhook_event_id',
  };
  const signature = 'test_webhook_signature';

  const setUpMocks = (webhookEventResponse: object) => {
    // Create a mock WebhookEvent Response
    const mockWebhookEvent: Partial<Stripe.Event> = webhookEventResponse;

    // Mock the createWebhookEvent function
    const createWebhookEventMock = jest.fn().mockReturnValue(
      mockWebhookEvent as Stripe.Event
    );
    // Mock the StripeClient
    const mockStripeClient = {
      webhooks: {
        constructEvent: createWebhookEventMock,
      },
    };
    // Mock the StripeClient getStripeClient function
    jest.spyOn(StripeClient, 'getStripeClient').mockImplementation(() => {
      return mockStripeClient as unknown as Stripe;
    });

    return createWebhookEventMock;
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a webhook event', async () => {
    // Set the createWebhookEvent response to the event id
    const webhookEventResponse = {
      id: body.id,
    };

    const createWebhookEventMock = setUpMocks(webhookEventResponse);

    // Run the webhook event creation
    const webhookEvent = await StripeService.createWebhookEvent(body, signature);

    // Assert that the webhook event is the expected one
    expect(webhookEvent).toEqual(webhookEventResponse);

    // Assert that the createWebhookEvent function is called with the correct parameters
    expect(createWebhookEventMock).toHaveBeenCalledTimes(1);
    expect(createWebhookEventMock).toHaveBeenCalledWith(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  });
});
