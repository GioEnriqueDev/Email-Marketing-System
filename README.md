# 📧 Professional Email Marketing System

A complete, secure, and user-friendly system for sending professional emails and newsletters.
Designed to be simple ("Zero Configuration" for daily use) yet powerful for business needs.

## 📸 Screenshots

A glance at the system in action, from dashboard to inbox.

| **Intuitive Dashboard & Live Preview** | **Final Email in Client's Inbox (Gmail)** |
|:---:|:---:|
| ![Dashboard with Live Preview](<img width="1366" height="673" alt="image" src="https://github.com/user-attachments/assets/d68196de-7170-4ba5-a57d-0ff36a39e315" />
) | ![Email received in Gmail](<img width="1361" height="683" alt="image" src="https://github.com/user-attachments/assets/ffb2c58d-9fd8-4f16-bc03-137db794975a" />
) |
| *The main interface where you compose and preview your emails in real-time.* | *The professional, responsive result as seen by the recipient.* |

---

## 🚀 Key Features

* **Intuitive Interface**: Clean visual editor with live preview.
* **Single & Bulk Sending**: Send to individuals or import huge lists via CSV.
* **Dynamic Personalization**: Use tags like `{{name}}` for personalized messages.
* **Anti-Spam Throttling**: Intelligent sequential sending to maintain high delivery rates.
* **Professional Templates**: 100% Gmail compatible HTML structure.
* **Security**: Credentials strictly separated from the source code.

---

## 🛠️ Installation & Setup

The system is designed for a quick setup, with clear feedback directly in the terminal.

### 1. Requirements
* **Node.js** installed on your machine.

### 2. Installation
1.  Open a terminal in the project folder.
2.  Run the command:
    ```bash
    npm install
    ```
You will see the installation progress as shown below:

![Terminal Installation Process](<img width="999" height="521" alt="image" src="https://github.com/user-attachments/assets/93099d21-4457-47e0-b026-682f29426601" />)

### 3. Configuration (One-time setup)
1.  Navigate to the `config` folder.
2.  Copy `config.example.json` and rename it to `config.json`.
3.  Open `config.json` and enter your email credentials (remember to use an **App Password** for Gmail).

### 4. Usage
1.  Double-click on **`START.bat`**.
2.  The browser will automatically open at `http://localhost:3000`.

---

## 📂 Project Structure

* `START.bat`: **Double-click to launch.**
* `config/`: Configuration files (credentials are NOT tracked by git).
* `public/`: Frontend files (HTML, CSS, JS).
* `src/`: Node.js server-side code.

---

## ⚖️ License

This project is licensed under the MIT License - see the LICENSE file for details.
