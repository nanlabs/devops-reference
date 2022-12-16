## Deploy a Next.js app to AWS with Amplify

Deploying a Next.js app can sometimes be a little harder than deploying a regular React app built with a tool like CRA, where by default we only have support for client side rendering, which means it's enough to just create static files at build time, upload them to some storage service and make them public.

We can't follow that same approach for most Next.js apps since this framework provides the opportunity to not only use client side rendering but other methods like SSR. For these rendering options that require backend computation we need to change the approach we use to deploy our app.

There are multiple options out there to host Next.js apps, here we are going to see how to do it using Amplify from AWS.

Amplify will set up everything for us in a very automatic way, we just need to tell it where our codebase is, and then Amplify will deploy every required AWS service behind the scenes, like s3 buckets, lambda functions, CloudFront distributions, etc.

This can be done using the Amplify CLI or with the Amplify dashboard, we are going to do it with the dashboard here since it's easier, although it doesn't have all the available options the CLI provides.

### Create the app

Let's create an empty Next.js project, of course this can be avoided if you already have one.

```bash
npx create-next-app next-app
```

Then you'll need to commit your code and push your repository to some git provider.

### Deploy to Amplify

We'll go to the Amplify dashboard in the AWS website:

![Amplify](https://i.imgur.com/jTcfFQd.png)

Select `host web app`:

![host web app](https://i.imgur.com/4YxIRQM.png)

Select the git provider you are using to host your repository. Then the exact repository where you have the source code.

![select repository](https://i.imgur.com/xFCDQZf.png)

Depending on the provider you are using you might be asked to give permissions for AWS to access the repository.

Then Amplify automatically detects the build settings you need based on your code. For now you won't need to make any adjustments, so we can continue as it is. Then finish the process selecting `Save and Deploy`.

Amplify will start building the application, we can check the current status in the dashboard. After 2-3 minutes it will finish and it will provide us an URL for our website, we can visit it and check the website renders correctly.

### Check SSR is working

The default app we created with `create-next-app` doesn't have a page that renders with SSR so we can create a new page doing a small SSR example to check it works correctly with Amplify.

For this we will go our codebase and create a new page called `ssr.js` with the following content:

```jsx
export default function SSR({ renderTime }) {
  return (
    <>
      <h1>SSR page</h1>
      <p>Render time: {renderTime}.</p>
    </>
  );
}

export async function getServerSideProps() {
  const renderTime = new Date().toLocaleTimeString();

  return { props: { renderTime } };
}
```

Then save the changes, commit them and push them to the repository. Amplify should automatically detect the push and start building your app again (of course you can configure it if you don't want it to behave like that).

When the build finishes go to the deployed URL again and check the new page works under the `/ssr` route. We should see the render time in the screen. To be completelly sure SSR worked we can inspect the page and check that the actual time was sent from the server in the HTML:

![check page source](https://i.imgur.com/qZHr38L.png)

As we can see the server is returning the render time in the html, that means that this was rendered in the server when we requested the page. So we can confirm that SSR is working in our Amplify deployment.
