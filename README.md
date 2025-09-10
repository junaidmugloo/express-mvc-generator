# 🚀 express-mvc-generator  

A **MVC generator** for Node.js & Express that helps you quickly scaffold projects with a clean MVC folder structure.  
It also provides handy artisan-like commands to generate controllers, models, and routes — saving you hours of boilerplate setup.  

---

## 📦 Installation

```bash
npm install -g express-mvc-generator
```

Or run directly without installing globally:

```bash
npx express-mvc-generator
```

---

## ⚡ Usage

### 1. Create a New Project

```bash
express-mvc-generator new myApp
cd myApp
node server.js
```

This will generate a project structure like:

```
myApp/
 ┣ controllers/
 ┃ ┗ homeController.js
 ┣ models/
 ┣ routes/
 ┃ ┗ homeRoute.js
 ┣ middlewares/
 ┣ config/
 ┣ server.js
```

---

### 2. Generate a Controller

```bash
express-mvc-generator make:controller User
```

Creates:

```js
// controllers/UserController.js
exports.getUser = (req, res) => {
  res.json({ message: "Hello from User Controller" });
};
```

---

### 3. Generate a Model

```bash
express-mvc-generator make:model User
```

Creates:

```js
// models/User.js
class User {
  constructor() {
    this.id = null;
  }
}

module.exports = User;
```

---

### 4. Generate a Route

```bash
express-mvc-generator make:route user
```

Creates:

```js
// routes/userRoute.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/UserController");

router.get("/", controller.getUser);

module.exports = router;
```

---

## 🛠 Example Run

```bash
express-mvc-generator new blogApp
cd blogApp
express-mvc-generator make:controller Post
express-mvc-generator make:model Post
express-mvc-generator make:route post
node server.js
```

Now open 👉 [http://localhost:3000](http://localhost:3000)  
You’ll see your generated route in action 🎉  

---

## ✨ Features
- 🚀 Create full Express MVC projects in seconds  
- 🛠 Artisan-style commands for controllers, models, and routes  
- 📂 Clean folder structure  
- ⚡ Works with `npx` (no global install needed)  

---

## 👨‍💻 Author

**Junaid Mugloo**  
📧 [junaidmugloo.dev@example.com](mailto:junaidmugloo@example.com)  
🌍 [https://github.com/junaidmugloo](https://github.com/junaidmugloo)  

---

## 📜 License
MIT License © 2025 [Junaid Mugloo](https://www.npmjs.com/junaidmugloo)  
