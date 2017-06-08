export default {
  "local_browser": {
    "visible": true,
    "type": "string",
    "example": "browsername",
    "description": "Run tests in chrome, firefox, etc (default: phantomjs)."
  },
  "local_browsers": {
    "visible": true,
    "type": "string",
    "example": "b1,b2,..",
    "description": "Run multiple browsers in parallel."
  },
  "local_list_browsers": {
    "visible": true,
    "type": "function",
    "description": "List the available browsers configured."
  },
  "remote_first_node": {
    "visible": true,
    "type": "string",
    "description": "Index of the first node reserved for tests execution in CircleCI."
  },
  "remote_exported_vars": {
    "visible": true,
    "type": "string",
    "description": "Environment vars exported to a remote node before executing a test."
  }
};
