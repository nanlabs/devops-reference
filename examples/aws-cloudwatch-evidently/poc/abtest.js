const { Evidently } = require("@aws-sdk/client-evidently");
const uuid = require("node-uuid");

// Create an Evidently client
const evidently = new Evidently({ region: "us-west-2" });

// Create a new entity id. For example, we can use the flashId here
const id = uuid.v4();

// pageLoadTime custom metric
const timeSpendOnHomePageData = `{
  "details": {
    "timeOnPage": 10
  },
  "userDetails": { "userId": "${id}", "sessionId": "${id}" }
}`;

const yesterday = new Date();

yesterday.setDate(yesterday.getDate() - 1);

const putProjectEventsRequest = {
  project: "AWSEvidentlyPOC",
  events: [
    {
      timestamp: yesterday,
      type: "aws.evidently.custom",
      data: JSON.parse(timeSpendOnHomePageData),
    },
  ],
};

evidently.putProjectEvents(putProjectEventsRequest).then((res) => {
  console.log(res);
});
