#!/usr/bin/env node

"use strict";

const path = require("path");
const fs = require("fs");

class PythonOfflineFix {
  constructor(serverless, options) {
    this.hooks = {
      "before:offline:start:init": () => this.fixPaths(serverless),
    };
    if (options.stage === "local") {
      serverless.service.custom.pythonRequirements.noDeploy = [];
    }
  }

  async fixPaths(serverless) {
    for (const func of Object.values(serverless.service.functions)) {
      if (func.runtime.match(/python/)) {
        if (func.module) {
          func.handler = `${func.module}/${func.handler}`;
          delete func.module;
        }
        if (!func.environment) {
          func.environment = {};
        }
        func.environment.PYTHONPATH = await fs.promises.realpath(
          path.join(
            __dirname,
            "..",
            "..",
            ".serverless",
            path.dirname(func.handler),
            "requirements"
          )
        );
      }
    }
  }
}

module.exports = PythonOfflineFix;
