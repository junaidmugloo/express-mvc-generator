#!/usr/bin/env node

const { Command } = require("commander");
const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");

const program = new Command();

program
  .name("express-mvc-generator")
  .description("A MVC generator for Express.js")
  .version("1.0.0");

function copyTemplate(src, dest, replacements = {}) {
  let content = fs.readFileSync(src, "utf8");
  for (const [key, value] of Object.entries(replacements)) {
    content = content.replace(new RegExp(`{{${key}}}`, "g"), value);
  }
  fs.outputFileSync(dest, content);
  console.log(chalk.green(`✔ Created ${dest}`));
}

// Generate new project
program
  .command("new <projectName>")
  .description("Create a new Express MVC project")
  .action((projectName) => {
    const baseDir = path.join(process.cwd(), projectName);

    const folders = ["controllers", "models", "routes", "middlewares", "config"];
    folders.forEach((folder) => {
      fs.ensureDirSync(path.join(baseDir, folder));
    });

    // Create server.js
    const serverFile = `
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Example Route
app.use("/", require("./routes/homeRoute"));

app.listen(PORT, () => console.log(\`🚀 Server running on http://localhost:\${PORT}\`));
`;
    fs.outputFileSync(path.join(baseDir, "server.js"), serverFile);

    // Copy templates
    copyTemplate(
      path.join(__dirname, "../templates/controller.js"),
      path.join(baseDir, "controllers", "homeController.js"),
      { name: "Home" }
    );

    copyTemplate(
      path.join(__dirname, "../templates/route.js"),
      path.join(baseDir, "routes", "homeRoute.js"),
      { name: "home" }
    );

    console.log(chalk.blue(`\n🎉 Project ${projectName} created successfully!`));
  });

// Generate controller
program
  .command("make:controller <name>")
  .description("Generate a new controller")
  .action((name) => {
    const filePath = path.join(process.cwd(), "controllers", `${name}Controller.js`);
    copyTemplate(
      path.join(__dirname, "../templates/controller.js"),
      filePath,
      { name }
    );
  });

// Generate model
program
  .command("make:model <name>")
  .description("Generate a new model")
  .action((name) => {
    const filePath = path.join(process.cwd(), "models", `${name}.js`);
    copyTemplate(path.join(__dirname, "../templates/model.js"), filePath, { name });
  });

// Generate route
program
  .command("make:route <name>")
  .description("Generate a new route")
  .action((name) => {
    const filePath = path.join(process.cwd(), "routes", `${name}Route.js`);
    copyTemplate(
      path.join(__dirname, "../templates/route.js"),
      filePath,
      { name }
    );
  });

program.parse();
