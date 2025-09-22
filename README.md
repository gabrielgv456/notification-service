# 🔔 Notification Service

An API built with **Node.js**, **Express**, and **TypeScript** for sending notifications via **AWS SNS** (Simple Notification Service).

---

## 📑 Table of Contents

- [ℹ️ About](#️-about)  
- [⚙️ Technologies Used](#️-technologies-used)  
- [📋 Requirements](#-requirements)  
- [💻 Installation](#-installation)  
- [🔧 Configuration](#-configuration)  
- [🚀 Usage](#-usage)  
- [📂 Project Structure](#-project-structure)  
- [📜 Available Scripts](#-available-scripts)  
- [🤝 Contributing](#-contributing)  
- [📄 License](#-license)  

---

## ℹ️ About

This project is a RESTful API that enables sending notifications through **AWS SNS**.  

✨ Features:
- 🌐 Built with **Node.js** + **Express**  
- 🔒 Strong typing with **TypeScript**  
- ☁️ AWS SDK v3 (`@aws-sdk/client-sns`) for SNS integration  
- ⚡ Easy environment configuration with **dotenv**  

---

## ⚙️ Technologies Used

- 🟩 Node.js  
- 🚂 Express  
- 📝 TypeScript  
- ☁️ AWS SDK v3  
- ⚙️ dotenv  

---

## 📋 Requirements

Before running this service, ensure you have:

- 📦 Node.js (LTS recommended)  
- 📥 npm or yarn  
- 🔑 AWS credentials with SNS permissions  
- 🌍 An AWS region where your SNS topics exist  

---

## 💻 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gabrielgv456/notification-service.git
   cd notification-service
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file (or rename `.env.example`) and configure it. See [🔧 Configuration](#-configuration).

---

## 🔧 Configuration

Set the following environment variables in your `.env` file:

- 🔑 `AWS_ACCESS_KEY_ID` — your AWS access key  
- 🔑 `AWS_SECRET_ACCESS_KEY` — your AWS secret key  
- 🌍 `AWS_REGION` — AWS region for SNS  
- 📢 `SNS_TOPIC_ARN` — ARN of the SNS topic  
- 🔌 `PORT` — port for the Express server  

⚠️ **Never commit secrets** to GitHub! Use environment variables or a secret manager.

---

## 🚀 Usage

Start the service:

```bash
npm run dev   # Development
npm start     # Production
```

Send a notification request:

```http
POST /notifications
Content-Type: application/json

{
  "topicArn": "arn:aws:sns:us-east-1:123456789012:MyTopic",
  "message": "Hello world",
  "subject": "Notification Subject",
  "attributes": {
    "key1": "value1"
  }
}
```

✅ The service will publish this message to AWS SNS.

---

## 📂 Project Structure

```
notification-service/
├── src/
│   ├── controllers/    🎯 API logic
│   ├── services/       ☁️ SNS integration
│   ├── routes/         🌐 Express routes
│   ├── middlewares/    🛡️ Error handling & validation
│   ├── config/         ⚙️ Configuration
│   ├── types/          📝 TypeScript definitions
│   └── index.ts        🚀 Entry point
├── .env.example
├── tsconfig.json
├── package.json
├── .gitignore
└── README.md
```

---

## 📜 Available Scripts

Inside `package.json`:

```json
{
  "scripts": {
    "start": "node dist/index.js",
    "build": "tsc",
    "dev": "ts-node-dev src/index.ts",
    "lint": "eslint . --ext .ts",
    "test": "jest",
    "prestart": "npm run build"
  }
}
```

- ▶️ `npm start` → run compiled app  
- 🛠️ `npm run dev` → dev mode with hot reload  
- 🏗️ `npm run build` → compile TypeScript  
- ✅ `npm test` → run tests  
- 🔍 `npm run lint` → lint code  

---

## 🤝 Contributing

We ❤️ contributions!  

1. Open an **issue** (🐛 bug / ✨ feature).  
2. Fork the repo.  
3. Create a branch: `git checkout -b feature/my-feature`.  
4. Commit your changes.  
5. Push & open a PR 🚀.  

---

## 📄 License

This project is licensed under the **MIT License**.  

---
