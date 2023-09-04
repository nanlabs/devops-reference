<div align="center">
<p>
    <img
        style="width: 200px"
        width="200"
        src="https://pnpm.io/fr/img/pnpm-no-name-with-frame.svg"
    >
</p>
<h1>Node Package Managers Comparison</h1>

</div>

The purpose of this repository is to investigate the advantages and disadvantages of using PNPM as a package manager.

All documentation written below is based on existing documentation on _<https://pnpm.io/>_ and other websites.

## Why use pnpm?

- Saving disk space
- Boosting installation speed
- More security
- Offline mode

You can read more about the motivations to use pnpm here:

- _<https://pnpm.io/motivation>_
- _<https://medium.com/pnpm/why-should-we-use-pnpm-75ca4bfe7d93#:~:text=pnpm%20is%20not%20only%20faster>,them%20from%20the%20global%20store_

## How does it work?

One of the main features of PNPM is Creating a non-flat node_modules directory.

![non-flat](https://d33wubrfki0l68.cloudfront.net/64b2f62af3b1c3dc4314df0ec517d9661d03b934/aca71/assets/images/node-modules-structure-8ab301ddaed3b7530858b233f5b3be57.jpg)

When installing dependencies with npm or Yarn Classic, all packages are hoisted to the root of the modules directory. As a result, source code has access to dependencies that are not added as dependencies to the project.

By default, pnpm uses symlinks to add only the direct dependencies of the project into the root of the modules directory.

## Installation

Install pnmpm with npm

```bash
npm install -g pnpm
```

For more installation instructions you can read the installation guide found at: : _<https://pnpm.io/es/installation>_

## Installation times / Benchmarks

The installation times shown below were obtained after making small repositories of our own. You can see them in this repository, inside the [examples](./examples/) folder.

Time it takes to install Chakra-UI:

- NPM: 5.15s user 2.02s system 31% cpu 22.981 total
- YARN: 5.04s user 3.17s system 22% cpu 37.268 total
- PNPM: 3.97s user 3.10s system 64% cpu 10.896 total

Time it takes to install Express:

- NPM: 0.59s user 0.10s system 34% cpu 2.003 total
- YARN: 1.36s user 0.51s system 33% cpu 5.544 total
- PNPM: 0.74s user 0.19s system 39% cpu 2.370 total

For more information about bencharks between pnpm, npm and yarn you can visit the following link: _<https://pnpm.io/benchmarks>_

For other comparisons with NPM and YARN see the information found here: _<https://pnpm.io/feature-comparison>_

## Differences in node_modules folder structure

NPM node_modules folder:

![npm](./images/npm-project.png)

YARN node_modules folder:

![yarn](./images/yarn-project.png)

PNPM node_modules folder:

![pnpm](./images/pnpm-project.png)

## Other features

## Filtering

Filtering allows you to restrict commands to specific subsets of packages.

pnpm supports a rich selector syntax for picking packages by name or by relation.

Selectors may be specified via the --filter (or -F) flag:

```bash
pnpm --filter <package_selector> <command>
```

To learn how to use the filter function, see the following link: _<https://pnpm.io/filtering>_

## Workspaces

pnpm has built-in support for monorepositories (AKA multi-package repositories, multi-project repositories, or monolithic repositories). You can create a workspace to unite multiple projects inside a single repository.

A workspace must have a pnpm-workspace.yaml file in its root. A workspace also may have an .npmrc in its root.

Here are a few of the most popular open source projects that use the workspace feature of pnpm:

![workspaces](./images/pnpm-workspaces-examples.png)

To learn more about the implementation of workspaces, you can see the following link: _<https://pnpm.io/workspaces>_
