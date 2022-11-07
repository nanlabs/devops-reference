const { Evidently } = require("@aws-sdk/client-evidently");
const uuid = require("node-uuid");

// Create an Evidently client
const evidently = new Evidently({ region: "us-west-2" });

// Create a new entity id. For example, we can use the flashId here
const id = uuid.v4();

// API request structure
const evaluateFeatureRequest = {
  // entityId for calling evaluate feature API
  entityId: id,
  // Name of your feature
  feature: "TestFeature",
  // Name of your project
  project: "AUEvidentlyPOC",
};

// Evaluate feature
evidently.evaluateFeature(evaluateFeatureRequest).then((response) => {
  // Instrument your code based on evaluate feature API response
  console.log(response);
});
