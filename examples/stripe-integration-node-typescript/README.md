# 🌟 POC-Stripe-NodeJS 🌟

Welcome to our exciting Stripe integration project with Node.js and TypeScript! 🚀 This API empowers you to effortlessly perform basic operations like creating a customer, managing a checkout session, and handling a portal session using the mighty Stripe API. 💳

## 📝 Prerequisites

Before you dive in, let's go over the essential prerequisites:

- Create a Stripe account and get your test API key.
- Populate the test API key in `.env`.
- Create a Stripe Product ID based on [Stripe Products and Prices](https://stripe.com/docs/products-prices/overview#create-prices).
- Replace the Product ID in `src/requests.http` with the one created in Stripe.
- Start the app locally.
- Send requests and watch the magic unfold! ✨

## 📋 Requirements

To embark on this journey, make sure you have Node 18 or a later version on your local development machine (not required on the server). We recommend using [fnm](https://github.com/Schniz/fnm) to easily switch Node versions between different projects. It's as simple as running:

```sh
fnm use
npm install
```

## 🏃‍♂️ Let's Run Locally

We're making it super easy for you to get started! 🏁 Just copy the example environment file to set up your local configuration:

```sh
cp .env.example .env
```

And then, unleash the magic by running the following command:

```sh
npm run dev
```

## 🕵️‍♀️ Get Your Stripe Webhook Secret

In order to receive those sweet Stripe webhook secrets, you'll first need to create a webhook on the Stripe dashboard. 😎 To help you through the process, we've provided a [detailed guide](https://stripe.com/docs/webhooks) and even a [handy video](https://youtu.be/4-yy11qT1IU) for your convenience!

Once you've set up the webhook, just execute the following command in a new terminal:

```sh
stripe listen --forward-to localhost:3000/webhook
```

Voilà! Now you're all set. For more information, check out the details [here](https://stripe.com/docs/webhooks/test).

## 🧪 Testing

To ensure everything is running smoothly, we've got some testing options for you. Take your pick! 🧪

- Just run the tests:

```sh
npm run test
```

- Run the tests in watch mode:

```sh
npm run test:watch
```

- Run the tests with coverage:

```sh
npm run test:cov
```

### 🧪 Manual Testing

For a more hands-on experience, you can manually test the API using the `src/requests.http` file. It contains samples of each request accepted by the API. 📝

## 🚀 To Do

As we continue to enhance this exceptional API, here are the next steps on our roadmap:

- [ ] Add error logging for the API to enhance reliability and troubleshooting.
- [ ] Update `src/requests.http` file with error scenarios to ensure robustness.
- [ ] Implement integration tests to further strengthen the API.
- [ ] Introduce additional Stripe scenarios to provide even more value and versatility.

We can't wait to see the possibilities this API unlocks for you! 🌈 If you have any questions or need assistance, feel free to reach out to us anytime. Let's make this Stripe integration shine brightly in the vast universe of possibilities! 🌌
