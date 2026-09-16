export type Example = {
  name: string;
  description: string;
  tags: string[];
  labels: string[];
};

export const isExample = (example: unknown): example is Example => {
  return (
    typeof example === "object" &&
    example !== null &&
    "name" in example &&
    "description" in example &&
    "tags" in example &&
    "labels" in example
  );
};

export const isExamplesArray = (examples: unknown): examples is Example[] => {
  return Array.isArray(examples) &&
    examples.every((example) => isExample(example));
};

export type ExamplesTree = {
  [key: string]: ExamplesTree | Example[];
};

export const isExamplesTree = (
  exampleTree: unknown,
): exampleTree is ExamplesTree => {
  return (
    typeof exampleTree === "object" &&
    exampleTree !== null &&
    Object.values(exampleTree).every((value) =>
      isExamplesTree(value) || Array.isArray(value)
    )
  );
};
