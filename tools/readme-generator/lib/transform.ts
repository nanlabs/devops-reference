import { Example, ExamplesTree } from "./tree.ts";

async function readExamplesFromJsonPath(jsonPath: string): Promise<Example[]> {
  const json = await Deno.readTextFile(jsonPath);
  const content = JSON.parse(json);

  return content.list as Example[];
}

export async function readExamplesFromJsonPaths(
  jsonPaths: string[],
): Promise<Example[]> {
  return (await Promise.all(jsonPaths.map(readExamplesFromJsonPath))).flat();
}

/**
 * groupExamplesByTags groups examples by tags recursively.
 * @param examples - Examples to group.
 * @returns The examples grouped by tags.
 *
 * @example
 * groupExamplesByTags([
 * {
 * name: "Example 1",
 * description: "This is an example.",
 * tags: ["Examples > Category 1 > Subcategory 1"],
 * labels: ["label1", "label2"]
 * },
 * {
 * name: "Example 2",
 * description: "This is another example.",
 * tags: ["Examples > Category 1 > Subcategory 1"],
 * labels: ["label1", "label2"]
 * },
 * {
 * name: "Example 3",
 * description: "This is an example.",
 * tags: ["Examples > Category 2 > Subcategory 2"],
 * labels: ["label1", "label2"]
 * }
 * ]);
 *
 * // Returns:
 * // {
 * //   "Examples": {
 * //     "Category 1": {
 * //       "Subcategory 1": [
 * //         {
 * //           name: "Example 1",
 * //           description: "This is an example.",
 * //           tags: ["Examples > Category 1 > Subcategory 1"],
 * //           labels: ["label1", "label2"]
 * //         },
 * //         {
 * //           name: "Example 2",
 * //           description: "This is another example.",
 * //           tags: ["Examples > Category 1 > Subcategory 1"],
 * //           labels: ["label1", "label2"]
 * //         }
 * //       ]
 * //     },
 * //     "Category 2": {
 * //       "Subcategory 2": [
 * //         {
 * //           name: "Example 3",
 * //           description: "This is an example.",
 * //           tags: ["Examples > Category 2 > Subcategory 2"],
 * //           labels: ["label1", "label2"]
 * //         }
 * //       ]
 * //     }
 * //   }
 * // }
 */
export async function groupExamplesByTags(
  examples: Example[],
): Promise<ExamplesTree> {
  const tagsWithSeparator = examples.flatMap((example) => example.tags);
  const examplesByTags: ExamplesTree = {};

  for (const tagWithSeparator of tagsWithSeparator) {
    const tags = tagWithSeparator.split(" > ");

    let currentTag = examplesByTags;

    for (const tag of tags) {
      if (!currentTag[tag]) {
        currentTag[tag] = {};
      }

      currentTag = currentTag[tag] as ExamplesTree;
    }

    currentTag.examples = examples.filter((example) =>
      example.tags.includes(tagWithSeparator)
    ).sort((a, b) => a.name.localeCompare(b.name));
  }

  return examplesByTags;
}
