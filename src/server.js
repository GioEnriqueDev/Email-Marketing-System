const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

// Load Configuration
const configPath = path.join(__dirname, '../config/config.json');
let config;

try {
    if (fs.existsSync(configPath)) {
        config = require(configPath);
    } else {
        console.error('❌ ERROR: config/config.json not found. Please copy config/config.example.json to config/config.json and configure it.');
        process.exit(1);
    }
} catch (error) {
    console.error('❌ ERROR loading config:', error.message);
    process.exit(1);
}

const app = express();
const PORT = config.server.port || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Email Transporter Configuration
const transporter = nodemailer.createTransport({
    host: config.email.host,
    port: config.email.port,
    secure: config.email.secure,
    auth: {
        user: config.email.user,
        pass: config.email.pass
    }
});

// 🏠 Main Route - Serves the editor
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// 📤 Send Email Route
app.post('/send-email', async (req, res) => {
    try {
        const {
            to,
            from,
            fromName,
            subject,
            html,
            text,
            recipientName
        } = req.body;

        // Basic Validation
        if (!to || !subject || (!html && !text)) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields: recipient email, subject, or content'
            });
        }

        // Configure Email Options
        const mailOptions = {
            from: `"${fromName || config.defaults.fromName}" <${config.email.user}>`,
            to: to,
            subject: subject,
            replyTo: from || config.defaults.replyTo,
            headers: {
                'X-Mailer': 'GioEnriqueDev Email System v2.0',
                'X-Priority': '3'
            }
        };

        // Add Content
        if (html) {
            mailOptions.html = html;
            // Fallback text
            mailOptions.text = text || 'Please view this email in an HTML-compatible email client.';
        } else {
            mailOptions.text = text;
        }

        // Send Email
        const result = await transporter.sendMail(mailOptions);

        console.log(`✅ Email sent to ${to} - ID: ${result.messageId}`);

        res.json({
            success: true,
            message: `Email sent successfully to ${to}`,
            messageId: result.messageId
        });

    } catch (error) {
        console.error('❌ Error sending email:', error);

        res.status(500).json({
            success: false,
            message: 'Error sending email',
            error: error.message
        });
    }
});

// 🧪 System Test Route
app.get('/test-email', async (req, res) => {
    try {
        await transporter.verify();
        res.json({
            success: true,
            message: 'Email system configured correctly!',
            config: {
                host: config.email.host,
                port: config.email.port,
                user: config.email.user
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Email configuration error',
            error: error.message
        });
    }
});

// 📊 Server Status Route
app.get('/status', (req, res) => {
    res.json({
        success: true,
        message: 'Email Server Active',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`
🚀 =======================================
   GIOENRIQUEDEV EMAIL SYSTEM ACTIVE!
🚀 =======================================

📱 Editor:      http://localhost:${PORT}
🧪 System Test: http://localhost:${PORT}/test-email
📊 Status:      http://localhost:${PORT}/status

⚙️  CURRENT CONFIGURATION:
   - Host SMTP: ${config.email.host}
   - Port:      ${config.email.port}
   - Email:     ${config.email.user}

🌐 Opening browser automatically...

=======================================
`);

    // Open browser automatically
    setTimeout(() => {
        const startCommand = process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open';
        exec(`${startCommand} http://localhost:${PORT}`, (error) => {
            if (error) {
                console.log(`⚠️  Open manually: http://localhost:${PORT}`);
            } else {
                console.log('✅ Browser opened automatically!');
            }
        });
    }, 3000);
});

// Error Handling
process.on('uncaughtException', (error) => {
    console.error('❌ Critical Error:', error);
});

process.on('unhandledRejection', (error) => {
    console.error('❌ Unhandled Promise Rejection:', error);
});
