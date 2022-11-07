# AWS Cloudwatch Evidently

## Introduction

There were a lot of announcements on AWS re:Invent last year. One of those is the new Amazon CloudWatch Evidently which is an experiments and feature management. The idea of this document is to analyze that service.

> ***IMPORTANT** - This analysis was made on 2021-12-17. The service is still in preview and the documentation is not complete.*

### Outcomes

This is a very recent announcement so there is not that much documentation and examples on how to setup CloudWatch Evidently. Anyways we think there are enough examples to start using it and the good thing is that it has some features that are similar to other services from AWS. We need to consider that CloudWatch Evidently is not a service itself but a feature on AWS CloudWatch, so it should be easy to use starting from there.

### Pros and Cons

In this section we will list the pros and cons of using CloudWatch Evidently.

#### Cons

- This is a new feature, so using this feature we will be early adopters of it so we should have in mind that there is not that much documentation, code examples and other related stuff.

#### Pros

- It is a service that is part of the AWS CloudWatch suite of services.
- There is tracking and analysis built into the tool. That way we would not have to cobble together a bunch of different tools to run A/B Testing (Experiments).
- Since Evidently is a feature of AWS CloudWatch, then it is possible to connect it easily with any other Amazon Service. Storing logs, creating alerts and other stuff is already builtin.
  - Evidently can be use with any application type: `front-end web` or `mobile`, `back-end API`, or even `machine learning` (ML). For example, you may use Evidently to deploy two different ML models and conduct experiments just like I showed above.
  - Just like with other AWS Services, Evidently API is available in all of our AWS SDK. This lets you use `EvaluateFeature` and other APIs from nine programing languages: C++, Go, Java, JavaScript (and Typescript), .Net, NodeJS, PHP, Python, and Ruby. AWS SDK for Rust and Swift are in the making.

### Considerations

For a front-end application, it is important to consider how to authenticate calls to Evidently API. Hard coding access keys and secret access keys is not an option. For the front-end scenario, I suggest that you use [Amazon Cognito Identity Pools](https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html) to exchange user identity tokens for a temporary access and secret keys. User identity tokens may be obtained from [Cognito User Pools](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html), or third-party authentications systems, such as [Active Directory](https://azure.microsoft.com/en-us/services/active-directory/), [Login with Amazon](https://developer.amazon.com/apps-and-games/login-with-amazon), [Login with Facebook](https://developers.facebook.com/docs/facebook-login/), [Login with Google](https://developers.google.com/identity/sign-in/web/sign-in), [Signin with Apple](https://developer.apple.com/sign-in-with-apple/), or any system compliant with [OpenID Connect](https://openid.net/connect/) or [SAML](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language). Cognito Identity Pools also allows for anonymous access. No identity token is required. Cognito Identity Pools vends temporary tokens associated with IAM roles. You must `Allow` calls to the `evidently:EvaluateFeature` API in your policies.

Finally, when using feature flags, plan for code cleanup time during your sprints. Once a feature is launched, you might consider removing calls to `EvaluateFeature` API and the `if-then-else` logic used to initially hide the feature.
