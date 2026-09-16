#!/usr/bin/env -S deno run --allow-read --allow-write --allow-run

import { groupExamplesByTags, readExamplesFromJsonPaths } from "./lib/transform.ts";
import { generateContent, generateToc } from "./lib/generator.ts";

async function main() {
  if (Deno.args.length < 2) {
    console.log(
      "Usage: generate.ts README.md.tmpl examples1.json [examples2.json ...]",
      "\n",
      "README.md.tmpl: The template file to use to generate the README.md file.",
      "\n",
      "examples1.json, examples2.json, ...: The JSON files containing the examples.",
      "\n",
      "Options:",
      "\n",
      "--json: Generate a JSON file instead of a README.md file.",
    );
    console.log(
      "Example: generate.ts README.md.tmpl examples1.json examples2.json",
    );
    console.log(
      "Example: generate.ts --json examples1.json examples2.json > examples.json",
    );
    Deno.exit(1);
  }

  const shouldGenerateJson = Deno.args.includes("--json");

  const examples = await readExamplesFromJsonPaths([...Deno.args.slice(1)]);

  if (shouldGenerateJson) {
    console.log(JSON.stringify(examples, null, 2));
    return;
  }

  const examplesByTags = await groupExamplesByTags(examples);

  const content = generateContent(examplesByTags);
  const toc = generateToc(examplesByTags);

  const readmeTmplPath = Deno.args[0];
  const readmeTmpl = await Deno.readTextFile(readmeTmplPath);

  const readme = readmeTmpl
    .replace("{{toc}}", toc)
    .replace("{{content}}", content);

  await Deno.writeTextFile("README.md", readme);
}

await main();
