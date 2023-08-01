import path from "path";
import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import StripeService from "./core/stripe/services/StripeService";
import { CheckoutParamsSchema } from "./core/stripe/schemas/checkoutParams.schema";

// Set config path
dotenv.config({ path: path.join(__dirname, "..", ".env") });

const app = express();
const port = 3000;

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (request, response) => {
    console.log("⚡️ [Webhook] Event received!");
    let event;
    try {
      const signature = request.headers["stripe-signature"];
      event = await StripeService.createWebhookEvent(request.body, signature);
      console.log("⚡️ [Webhook] ✅ verified: ", event.id);
    } catch (err) {
      console.log(`⚡️ [Webhook] ❌ Error message: ${err.message}`);
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntentSucceeded = event.data.object;
        // Then define and call a function to handle the event payment_intent.succeeded
        console.log("Payment intent succeeded: ", paymentIntentSucceeded);
        break;
      case "payment_intent.created":
        const paymentIntentCreated = event.data.object;
        // Then define and call a function to handle the event payment_intent.created
        console.log("Payment intent created: ", paymentIntentCreated);
        break;
      case "checkout.session.completed":
        const checkoutSessionCompleted = event.data.object;
        // Then define and call a function to handle the event checkout.session.completed
        console.log("Checkout session completed: ", checkoutSessionCompleted);
        break;
      // ... handle other event types
      default:
        console.log(`⚡️ [Webhook] Unhandled event type ${event.type}`);
    }

    response.send();
  }
);

// bodyParser set here as otherwiser it mess the webhook endpoint above
app.use(bodyParser.json());

app.post("/checkout-session", async (req, res) => {
  let params = null;
  try {
    params = CheckoutParamsSchema.parse(req.body);
  } catch (error) {
    return res.status(400).send(error);
  }
  try {
    const sessionUrl = await StripeService.createCheckoutSession(params);
    res.send(sessionUrl);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/success", async (req, res) => {
  res.send("Congrats you did it!!");
});

app.get("/cancel", async (req, res) => {
  res.send("Booo, you canceled!!");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
