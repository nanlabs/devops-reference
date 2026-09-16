import { ExamplesTree, isExamplesArray, isExamplesTree } from "./tree.ts";

function generateLinkForTag(tag: string): string {
  return `#${tag.replace(/ /g, "-").toLowerCase().replace(/[^a-z0-9-]/g, "")}`;
}

/**
 * generateContent returns the content of the README.md file based on the examples
 * grouped by tags.
 * @param examplesByTags - The examples grouped by tags.
 * @returns The content of the README.md file.
 *
 * @example
 * generateContent({
 *  "Examples > Category 1": [
 *   {
 *    name: "Example 1",
 *   description: "This is an example.",
 *  tags: ["Examples > Category 1"],
 * labels: ["label1", "label2"]
 *  },
 * {
 * name: "Example 2",
 * description: "This is another example.",
 * tags: ["Examples > Category 1"],
 * labels: ["label1", "label2"]
 * }
 * ],
 * "Examples > Category 2 > Subcategory 2": [
 * {
 * name: "Example 3",
 * description: "This is an example.",
 * tags: ["Examples > Category 2 > Subcategory 2"],
 * labels: ["label1", "label2"]
 * }
 * ]
 * });
 *
 * // Returns:
 * // ## Examples
 * // ### Category 1
 * // | Name | Description | Keywords |
 * // | ---- | ----------- | -------- |
 * // | [Example 1](examples/category1/example1.ts) | This is an example. | _label1_, _label2_ |
 * // | [Example 2](examples/category1/example2.ts) | This is another example. | _label1_, _label2_ |
 * // ### Category 2
 * // #### Subcategory 2
 * // | Name | Description | Keywords |
 * // | ---- | ----------- | -------- |
 * // | [Example 3](examples/category2/subcategory2/example3.ts) | This is an example. | _label1_, _label2_ |
 */
export function generateContent(
  examplesByTags: ExamplesTree,
  level = 0,
): string {
  let content = "";

  for (const [tag, examples] of Object.entries(examplesByTags)) {
    if (isExamplesTree(examples)) {
      content += `${"#".repeat(level + 2)} ${tag}\n`;
      content += generateContent(examples, level + 1);
    } else if (isExamplesArray(examples)) {
      content += `| Name | Description | Keywords |\n`;
      content += `| ---- | ----------- | -------- |\n`;
      content += examples.map((example) => {
        const keywords = example.labels.map((label) => `_${label}_`).join(", ");
        return `| [${example.name}](${example.url}) | ${example.description} | ${keywords} |`;
      }).join("\n");
      content += "\n";
    }
  }

  return content;
}

/**
 * generateToc returns the table of contents of the README.md file based on the
 * examples grouped by tags.
 * @param examplesByTags - The examples grouped by tags.
 * @returns The table of contents of the README.md file.
 *
 * @example
 * generateToc({
 * "Examples > Category 1": [
 *   {
 *    name: "Example 1",
 *   description: "This is an example.",
 *  tags: ["Examples > Category 1"],
 * labels: ["label1", "label2"]
 *  },
 * {
 * name: "Example 2",
 * description: "This is another example.",
 * tags: ["Examples > Category 1"],
 * labels: ["label1", "label2"]
 * }
 * ],
 * "Examples > Category 2 > Subcategory 2": [
 * {
 * name: "Example 3",
 * description: "This is an example.",
 * tags: ["Examples > Category 2 > Subcategory 2"],
 * labels: ["label1", "label2"]
 * }
 * ]
 * });
 *
 * // Returns:
 * // - [Examples](#examples)
 * //   - [Category 1](#category-1)
 * //   - [Category 2](#category-2)
 * //     - [Subcategory 2](#subcategory-2)
 */
export function generateToc(examplesByTags: ExamplesTree, level = 0): string {
  let toc = "";

  for (const [tag, examples] of Object.entries(examplesByTags)) {
    if (isExamplesArray(examples)) {
      continue;
    }

    if (isExamplesTree(examples)) {
      toc += `${"  ".repeat(level)}- [${tag}](${generateLinkForTag(tag)})\n`;
      toc += generateToc(examples as ExamplesTree, level + 1);
    }
  }

  return toc;
}
