export const completion: Fig.Spec = {
  name: "railway",
  description: "🚅 Deploy infrastructure, instantly",
  subcommands: [
    {
      name: "add",
      description: "Add a new plugin to your project",
      args: {
        name: "plugin",
        isOptional: true,
        description:
          "If you don't specify a plugin, you will be prompted to select a plugin to connect to",
      },
    },
    {
      name: "connect",
      description: "Lets you connect to your Railway plugins",
      args: {
        name: "plugin",
        isOptional: true,
        description:
          "If you don't specify a plugin, you will be prompted to select a plugin to connect to",
      },
    },
    {
      name: "docs",
      description: "Open Railway Documentation in default browser",
    },
    {
      name: "environment",
      description: "Change which environment you are using",
      args: {
        name: "name",
      },
    },
    {
      name: "init",
      description: "Create a new Railway project",
    },
    {
      name: "link",
      description: "Connect to an existing Railway project",
      args: {
        name: "projectId",
      },
    },
    {
      name: "list",
      description: "List all projects in your Railway account",
    },
    {
      name: "login",
      description: "Login to your Railway account",
      options: [
        {
          name: ["--browserless"],
          description: "Perform a browserless login",
        },
      ],
    },
    {
      name: "logout",
      description: "Logout of your Railway account",
    },
    {
      name: "logs",
      description: "View the most-recent deploy's logs",
    },
    {
      name: "open",
      description: "Open your current Railway project in the browser",
    },
    {
      name: "protect",
      description:
        "[EXPERIMENTAL!] Protect current branch (Actions will require confirmation)",
    },
    {
      name: "run",
      description:
        "Run a local command using variables from the active environment",
      args: {
        name: "cmd",
        isOptional: true,
        description:
          "Without specifying a command, it will try to run the Dockerfile in the current directory, if it can find one",
      },
    },
    {
      name: "status",
      description: " Show information about the current project",
    },
    {
      name: "unlink",
      description: "Disassociate project from current directory",
    },
    {
      name: "up",
      description: "Upload and deploy project from the current directory",
    },
    {
      name: "variables",
      description: "Show variables for active environment",
    },
    {
      name: "whoami",
      description: "Get the current logged in user",
    },
  ],
  options: [
    {
      name: ["-v", "--version"],
      description: "Version for railway",
    },
    {
      name: ["-h", "--help"],
      description: "Help for railway",
    },
  ],
};
