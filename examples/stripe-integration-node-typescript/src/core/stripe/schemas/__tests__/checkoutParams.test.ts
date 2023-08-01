
import {
  CheckoutParamsSchema,
} from '../checkoutParams.schema'; // Replace with the correct path to your module

describe('CheckoutParamsSchema', () => {
  test('should validate valid checkout parameters', () => {
    const validParams = {
      customerId: 'customer_id',
      lineItems: [{ price: 'item1', quantity: 2 }],
      paymentMethod: 'payment',
    };

    expect(CheckoutParamsSchema.safeParse(validParams).success).toBe(true);
  });

  test('should validate valid checkout parameters with email', () => {
    const validParams = {
      email: 'test@example.com',
      lineItems: [{ price: 'item1', quantity: 2 }],
      paymentMethod: 'subscription',
      createCustomer: true,
    };

    expect(CheckoutParamsSchema.safeParse(validParams).success).toBe(true);
  });

  test('should validate valid checkout parameters with createCustomer', () => {
    const validParams = {
      email: 'test@example.com',
      lineItems: [{ price: 'item1', quantity: 2 }],
      paymentMethod: 'setup',
      createCustomer: true,
    };

    expect(CheckoutParamsSchema.safeParse(validParams).success).toBe(true);
  });

  test('should invalidate data with both customerId and email', () => {
    const invalidParams = {
      customerId: 'customer_id',
      email: 'test@example.com',
      lineItems: [{ price: 'item1', quantity: 2 }],
      paymentMethod: 'subscription',
    };

    expect(CheckoutParamsSchema.safeParse(invalidParams).success).toBe(false);
  });

  test('should invalidate data with customerId and createCustomer defined', () => {
    const invalidParams = {
      customerId: 'customer_id',
      lineItems: [{ price: 'item1', quantity: 2 }],
      paymentMethod: 'setup',
      createCustomer: true,
    };

    expect(CheckoutParamsSchema.safeParse(invalidParams).success).toBe(false);
  });

  test('should invalidate data without customerId and createCustomer undefined', () => {
    const invalidParams = {
      lineItems: [{ price: 'item1', quantity: 2 }],
      paymentMethod: 'payment',
    };

    expect(CheckoutParamsSchema.safeParse(invalidParams).success).toBe(false);
  });
});
