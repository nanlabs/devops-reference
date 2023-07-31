import { z } from 'zod';


export const LineItemSchema = z.object({
    price: z.string(),
    quantity: z.number()
});

// values from Stripe.Checkout.SessionCreateParams.Mode
export const PaymentModesSchema = z.union([
    z.literal('payment'),
    z.literal('setup'),
    z.literal('subscription'),
]);

export const CheckoutParamsSchema = z.object({
    customerId: z.optional(z.string()),
    email: z.optional(z.string().email()),
    lineItems: z.array(LineItemSchema).nonempty(),
    paymentMethod: PaymentModesSchema,
    createCustomer: z.optional(z.boolean()),
}).superRefine((schema, ctx) => {
    if (schema.customerId && schema.email) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Data must have either a customerId or an email, not both.',
      });
    }
    if (schema.customerId && schema.createCustomer !== undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'CreateCustomer should not be defined if a customerId is sent.',
        });
      }
    if (schema.customerId === undefined && schema.createCustomer === undefined) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'CreateCustomer must be defined if a customerId is not sent.',
      });
    }
});
