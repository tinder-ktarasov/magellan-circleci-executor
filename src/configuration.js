import settings from "./settings";

export default {
  getConfig: () => {
    return settings.config;
  },

  /*eslint-disable no-unused-vars*/
  validateConfig: (opts, argvMock = null, envMock = null) => {
    if (opts.margs || argvMock) {
      let runArgv = opts.margs.argv;

      if (argvMock) {
        runArgv = argvMock;
      }

      if (runArgv.remote_first_node) {
        settings.config.firstNode = runArgv.remote_first_node;
      } else {
        settings.config.firstNode = 1;
      }

      if (runArgv.remote_exported_vars) {
        if (Array.isArray(runArgv.remote_exported_vars)) {
          settings.config.exportedEnvVars = runArgv.remote_exported_vars;
        } else if (typeof runArgv.remote_exported_vars === 'string') {
          settings.config.exportedEnvVars = runArgv.remote_exported_vars.split(',');
        } else {
          throw new Error('remote_exported_vars must be a string or an array');
        }
      } else {
        settings.config.exportedEnvVars = [];
      }
    }

    return settings.config;
  }
};
