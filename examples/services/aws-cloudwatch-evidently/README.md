# Amazon CloudWatch Evidently

Amazon CloudWatch Evidently is a service that allows you to run experiments and feature management. It is a service that is part of the AWS CloudWatch suite of services. It is a service that is still in preview and it is not available in all regions. It is available in the following regions:

* US East (N. Virginia)
* US East (Ohio)
* US West (Oregon)
* EU (Ireland)
* EU (Frankfurt)
* Asia Pacific (Tokyo)
* Asia Pacific (Singapore)
* Asia Pacific (Sydney)
* Asia Pacific (Seoul)
* Asia Pacific (Mumbai)
* Canada (Central)
* South America (São Paulo)

## How does it work?

The service is composed of two main components:

* Experiments
* Feature Management

### Experiments

The experiments component allows you to run experiments on your application. You can define the experiment and the different variations that you want to test. You can also define the percentage of users that will be part of the experiment. The service will take care of the rest. It will randomly assign users to the different variations and will report the results of the experiment.

### Feature Management

The feature management component allows you to enable or disable features in your application. You can define the feature and the different variations that you want to test. You can also define the percentage of users that will be part of the experiment. The service will take care of the rest. It will randomly assign users to the different variations and will report the results of the experiment.

### How to integrate with your application?

The service provides a SDK that you can use to integrate with your application. The SDK is available in many different languages.

## Analysis

We did a research on which are the Pros and Cons of using this service. We also did a research on how to integrate with your application. You can read the full analysis [here](./ANALYSIS.md).

## How to use it? Proof of Concept

There is a POC that you can use to test the service in a [Frontend Application with React](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-bookstoreexample.html).

We also created on Proof of Concept on how to integrate the service with a [Backend Application with Node.js](./POC.md).
This Proof of Concept was created in **LESS THAN 20 MINUTES!!**. It is a simple application that has a feature that is enabled or disabled based on the variation that the user is assigned to. Also provides a simple experiment that is used to test the service and some images that are displayed based on the variation that the user is assigned to.

## Reference Documentation and Helpful Links

- [AWS News Blog - Amazon CloudWatch Evidently - Experiments and Feature Management](https://aws.amazon.com/blogs/aws/cloudwatch-evidently/)
- [AWS CloudWatch Pricing](https://aws.amazon.com/cloudwatch/pricing/)
