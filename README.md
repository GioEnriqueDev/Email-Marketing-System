# 📧 Professional Email Marketing System

A complete, secure, and user-friendly system for sending professional emails and newsletters.
Designed to be simple ("Zero Configuration" for daily use) yet powerful for business needs.

## 🚀 Key Features

* **Intuitive Interface**: Clean visual editor.
* **Live Preview**: See exactly how the email looks while typing.
* **Single Send**: Quickly send personalized emails to individual clients.
* **Bulk Sending**:
    * Import recipients via **CSV**.
    * Dynamic personalization (e.g., "Hi {{name}}").
    * Sequential sending with safety intervals (anti-spam throttling).
    * Detailed sending logs.
* **Professional Templates**: Responsive design compatible with Gmail, Outlook, Apple Mail, etc.
* **Security**: Credentials are strictly separated from the source code.

---

## 📂 Project Structure

The workspace is organized for scalability and maintainability:

* `START.bat`: **Double-click here to launch the system.**
* `config/`: Configuration files.
    * `config.json`: Your credentials (NOT tracked by git).
    * `config.example.json`: Configuration template.
* `public/`: Frontend files (HTML, CSS, JS).
* `src/`: Server-side code (Node.js Backend).
* `scripts/`: Startup and utility scripts.

---

## 🛠️ Installation & Setup

### 1. Requirements
* **Node.js** installed on your machine.

### 2. First Configuration (One-time setup)
1.  Navigate to the `config` folder.
2.  Copy `config.example.json` and rename it to `config.json`.
3.  Open `config.json` with a text editor.
4.  Enter your email credentials:
    ```json
    "user": "your@email.com",
    "pass": "your-app-password"
    ```
    > **NOTE**: If using Gmail, you must use an **App Password**, not your standard password.

### 3. Usage
1.  Double-click on **`START.bat`**.
2.  The browser will automatically open at `http://localhost:3000`.

---

## 📖 User Guide

### Single Send
1.  Fill in the fields (Subject, Content, etc.).
2.  Enter the recipient's email.
3.  Click **"📤 Send Email"**.

### Bulk Sending
1.  Click the **"📤 Bulk"** button (top left).
2.  **Import Recipients**:
    * Drag & Drop a CSV file.
    * Required CSV format: `email,name,company,lastname`.
3.  **Personalize Message**:
    * Use tags like `{{name}}`, `{{company}}` in the body. They will be replaced automatically.
4.  **Send**:
    * Click **"🚀 Start Bulk Send"**.
    * The system sends emails one by one, respecting the safety interval.

---

## 🔒 Security & Best Practices
* **Credentials Safety**: Passwords are stored in `config/config.json` and are **never** committed to the repository (via `.gitignore`).

## ❓ Troubleshooting
* **Server Offline?**: Make sure `START.bat` is running and do not close the terminal window.
* **Login Error?**: Check your credentials in `config/config.json`.
* **Emails not arriving?**: Check the Spam folder.

---

**System Version 2.0 - Open Source**
