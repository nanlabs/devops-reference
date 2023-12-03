# 🗄️ Project Structure

Most of the code lives in the `src` folder and looks like this:

```sh
src
|
+-- components # shared components used across the entire application
|
+-- features # MOST IMPORTANT! feature based modules
|
+-- hooks # shared hooks used across the entire application
|
+-- layouts # shared layouts used across the entire application
|
+-- libs # shared libs used across the entire application
|
+-- pages # shared pages used across the entire application
|
+-- providers # all of the application providers
|
+-- routes # all of the application routes
|
+-- services # shared services used across the entire application
|
+-- store # global state stores
|
+-- theme # shared theme used across the entire application
|
+-- utils # shared helpers used across the entire application
```

In order to scale the application in the easiest and most maintainable way, keep most of the code inside the `features` folder, which should contain different feature-based things. Every `feature` folder should contain domain specific code for a given feature. This will allow you to keep functionalities scoped to a feature and not mix its declarations with shared things. This is much easier to maintain than a flat folder structure with many files.

A feature could have the following structure:

```sh
src/features/awesome-feature
|
+-- assets # assets used only in this feature
|
+-- components # components used only in this feature
|
+-- hooks # hooks used only in this feature
|
+-- providers # providers used only in this feature
|
+-- services # services used only in this feature
|
+-- store # stores used only in this feature
|
+-- theme # theme used only in this feature
|
+-- utils # helpers used only in this feature
|
+-- index.ts # public API of the feature
```

Everything from a feature should be exported from the `index.ts` file which behaves as the public API of the feature.

You should import stuff from other features only by using:

`import { AwesomeComponent } from "@/features/awesome-feature"`

and not

`import { AwesomeComponent } from "@/features/awesome-feature/components/AwesomeComponent`

This can also be configured in the ESLint configuration to disallow the later import by the following rule:

```js
{
    rules: {
        'no-restricted-imports': [
            'error',
            {
                patterns: ['@/features/*/*'],
            },
        ],

    // ...rest of the configuration
}
```
