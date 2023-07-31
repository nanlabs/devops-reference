import { z } from "zod";
import { CheckoutParamsSchema } from "../schemas/checkoutParams.schema";

export type StripeCheckoutParams = z.infer<typeof CheckoutParamsSchema>;
