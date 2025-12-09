// 🚀 GIOENRIQUEDEV EMAIL SYSTEM - GMAIL COMPATIBLE v2.0
const emailTemplate = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Email Template</title>
  <style type="text/css">
    /* CLIENT-SPECIFIC STYLES */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; }
    
    /* RESET STYLES */
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
    
    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    
    /* MEDIA QUERIES */
    @media screen and (max-width: 525px) {
      .wrapper { width: 100% !important; max-width: 100% !important; }
      .responsive-table { width: 100% !important; }
      .padding { padding: 10px 5% 15px 5% !important; }
      .section-padding { padding: 0 15px 50px 15px !important; }
    }
  </style>
</head>
<body style="margin: 0 !important; padding: 0 !important; background-color: #1a1a1a;">

<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
  {{BADGE}} - {{MAIN_CONTENT_PREVIEW}}
</div>

<!-- MAIN CONTAINER -->
<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#1a1a1a" align="center">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" class="wrapper">
        <tr>
          <td align="center" valign="top" style="padding: 15px 0;" class="logo">
            <a href="#" target="_blank" style="text-decoration: none;">
              <span style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: 800; font-size: 28px; color: #00ff88; letter-spacing: 2px;">GioEnrique</span><span style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: 300; font-size: 28px; color: #ffffff;">Dev</span>
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td bgcolor="#1a1a1a" align="center" style="padding: 0 10px 0 10px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" class="responsive-table">
        <tr>
          <td bgcolor="#2d2d2d" style="padding: 40px 30px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td align="center" style="padding-bottom: 20px;">
                  <!-- BADGE -->
                  <table border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="center" bgcolor="#00ff88" style="border-radius: 50px; padding: 6px 16px;">
                        <span style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; font-weight: 800; color: #1a1a1a; text-transform: uppercase; letter-spacing: 1px;">{{BADGE}}</span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="left" style="padding: 20px 0 0 0; font-size: 24px; line-height: 32px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #ffffff; font-weight: bold;">
                  Hello {{RECIPIENT_NAME}},
                </td>
              </tr>
              <tr>
                <td align="left" style="padding: 20px 0 0 0; font-size: 16px; line-height: 26px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #cccccc;">
                  {{MAIN_CONTENT}}
                </td>
              </tr>
              
              <!-- HIGHLIGHT BOX -->
              <tr>
                <td align="center" style="padding: 30px 0;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td bgcolor="#363636" style="padding: 25px; border-left: 4px solid #00ff88; border-radius: 4px;">
                        <span style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 16px; line-height: 24px; color: #ffffff; font-weight: 600;">
                          {{HIGHLIGHT_CONTENT}}
                        </span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td align="left" style="padding: 0 0 30px 0; font-size: 16px; line-height: 26px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #cccccc;">
                  {{ADDITIONAL_DETAILS}}
                </td>
              </tr>
              
              <tr>
                <td align="center">
                  <!-- CTA BUTTON -->
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="border-radius: 8px;" bgcolor="#00ff88">
                        <a href="mailto:{{EMAIL_CONTACT}}?subject={{EMAIL_SUBJECT}}" target="_blank" style="font-size: 16px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1a1a1a; text-decoration: none; padding: 15px 35px; border-radius: 8px; border: 1px solid #00ff88; display: inline-block; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">
                          {{CTA_TEXT}}
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td align="left" style="padding: 40px 0 0 0; font-size: 16px; line-height: 26px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #cccccc;">
                  {{CONCLUSION}}
                </td>
              </tr>
              
              <tr>
                <td align="left" style="padding: 20px 0 0 0; font-size: 16px; line-height: 26px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #ffffff; font-weight: bold;">
                  Best regards,<br>
                  <span style="color: #00ff88;">{{SIGNATURE}}</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td bgcolor="#1a1a1a" align="center" style="padding: 30px 10px 0 10px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;" class="responsive-table">
        <tr>
          <td align="center" style="padding: 30px 30px 30px 30px; border-radius: 12px; background-color: #2d2d2d; color: #666666; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 12px; line-height: 18px;">
            <p style="margin: 0;">Powered by <strong>GioEnriqueDev</strong> Email System</p>
            <p style="margin: 10px 0 0 0;"><a href="#" style="color: #00ff88; text-decoration: none;">Unsubscribe</a> | <a href="#" style="color: #00ff88; text-decoration: none;">View in Browser</a></p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

</body>
</html>`;

// Global Variables
let serverOnline = false;
let recipients = [];
let bulkSending = false;
let bulkAbortController = null;

// Check Server Status
async function checkServer() {
    try {
        const response = await fetch('/status');
        const data = await response.json();

        if (data.success) {
            serverOnline = true;
            updateServerStatus(true);
            showStatus('success', '✅ Server Online!');
        } else {
            throw new Error('Server not responding correctly');
        }
    } catch (error) {
        serverOnline = false;
        updateServerStatus(false);
        showStatus('error', '❌ Server Offline! Start it with: npm start');
    }
}

// Update Server Status Indicator
function updateServerStatus(online) {
    const statusEl = document.getElementById('serverStatus');
    if (online) {
        statusEl.className = 'server-status server-online';
        statusEl.textContent = '🟢 Online';
    } else {
        statusEl.className = 'server-status server-offline';
        statusEl.textContent = '🔴 Offline';
    }
}

// Send Email Function
async function sendEmail() {
    // Validation
    const recipientEmail = document.getElementById('recipientEmail').value;
    const senderName = document.getElementById('senderName').value;
    const senderEmail = document.getElementById('senderEmail').value;
    const emailSubject = document.getElementById('emailSubject').value;

    if (!recipientEmail || !senderName || !senderEmail) {
        showStatus('error', '❌ Please fill in all required fields!');
        return;
    }

    if (!isValidEmail(recipientEmail)) {
        showStatus('error', '❌ Invalid email address!');
        return;
    }

    if (!serverOnline) {
        showStatus('error', '❌ Server offline! Click "Test Server" or start the server.');
        return;
    }

    // Show loading
    showStatus('loading', '<span class="loading-spinner"></span>Sending email...');
    document.getElementById('sendBtn').disabled = true;

    try {
        updatePreview();

        const emailData = {
            to: recipientEmail,
            from: senderEmail,
            fromName: senderName,
            subject: emailSubject,
            html: document.getElementById('emailPreview').innerHTML,
            recipientName: document.getElementById('recipientName').value || 'Client'
        };

        const response = await fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailData)
        });

        const result = await response.json();

        if (result.success) {
            showStatus('success', `✅ ${result.message} (ID: ${result.messageId})`);
        } else {
            throw new Error(result.message);
        }

    } catch (error) {
        showStatus('error', `❌ Error: ${error.message}`);
        console.error('Email send error:', error);
    } finally {
        document.getElementById('sendBtn').disabled = false;
    }
}

// Utility Functions
function fillTestData() {
    document.getElementById('recipientEmail').value = 'test@example.com';
    document.getElementById('recipientName').value = 'Test Client';
    document.getElementById('senderName').value = 'John Doe';
    document.getElementById('senderEmail').value = 'info@example.com';
    showStatus('success', '📝 Test data filled!');
}

function clearAll() {
    if (confirm('Are you sure you want to clear all fields?')) {
        document.getElementById('emailForm').reset();
        showStatus('success', '🗑️ All fields cleared!');
    }
}

function showStatus(type, message) {
    const statusEl = document.getElementById('statusMessage');
    statusEl.className = `status-message status-${type}`;
    statusEl.innerHTML = message;
    statusEl.style.display = 'block';

    if (type !== 'loading') {
        setTimeout(() => {
            statusEl.style.display = 'none';
        }, 6000);
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function updatePreview() {
    const badge = document.getElementById('badge').value;
    const mainContent = document.getElementById('mainContent').value;
    const highlightContent = document.getElementById('highlightContent').value;
    const additionalDetails = document.getElementById('additionalDetails').value;
    const conclusion = document.getElementById('conclusion').value;
    const ctaText = document.getElementById('ctaText').value;
    const emailContact = document.getElementById('emailContact').value;
    const emailSubject = encodeURIComponent(document.getElementById('emailSubject').value);
    const signature = document.getElementById('signature').value;
    const recipientName = document.getElementById('recipientName').value || 'Client';

    // Preview text for hidden preheader
    const mainContentPreview = mainContent.substring(0, 100) + '...';

    let preview = emailTemplate
        .replace(/\{\{BADGE\}\}/g, badge)
        .replace(/\{\{MAIN_CONTENT\}\}/g, mainContent.replace(/\n/g, '<br>'))
        .replace(/\{\{MAIN_CONTENT_PREVIEW\}\}/g, mainContentPreview)
        .replace(/\{\{HIGHLIGHT_CONTENT\}\}/g, highlightContent.replace(/\n/g, '<br>'))
        .replace(/\{\{ADDITIONAL_DETAILS\}\}/g, additionalDetails.replace(/\n/g, '<br>'))
        .replace(/\{\{CONCLUSION\}\}/g, conclusion.replace(/\n/g, '<br>'))
        .replace(/\{\{CTA_TEXT\}\}/g, ctaText)
        .replace(/\{\{EMAIL_CONTACT\}\}/g, emailContact)
        .replace(/\{\{EMAIL_SUBJECT\}\}/g, emailSubject)
        .replace(/\{\{SIGNATURE\}\}/g, signature)
        .replace(/\{\{RECIPIENT_NAME\}\}/g, recipientName);

    document.getElementById('emailPreview').innerHTML = preview;
}

function generateEmail() {
    updatePreview();
    document.getElementById('generatedCode').textContent = document.getElementById('emailPreview').innerHTML;
    document.getElementById('codeModal').style.display = 'block';
}

function copyCode() {
    const code = document.getElementById('generatedCode').textContent;
    navigator.clipboard.writeText(code).then(() => {
        alert('✅ Code copied!');
    });
}

function closeModal() {
    document.getElementById('codeModal').style.display = 'none';
}

function resetForm() {
    if (confirm('Reset all fields to default?')) {
        document.getElementById('emailForm').reset();
        // Set defaults
        document.getElementById('badge').value = 'Special Offer';
        document.getElementById('mainContent').value = 'We are happy to announce our new collection.';
        document.getElementById('highlightContent').value = 'Contact us for more information.';
        document.getElementById('additionalDetails').value = 'High quality products available now.';
        document.getElementById('conclusion').value = 'We hope you find what you are looking for.';
        document.getElementById('ctaText').value = 'Contact Us';
        document.getElementById('emailSubject').value = 'Information Request';
        document.getElementById('signature').value = 'The Team';

        updatePreview();
        showStatus('success', '✅ Form reset to defaults!');
    }
}

// ===== BULK EMAIL FUNCTIONS =====

function switchMode(mode) {
    const singleSection = document.getElementById('singleSection');
    const bulkSection = document.getElementById('bulkSection');
    const modeBtns = document.querySelectorAll('.mode-btn');

    if (mode === 'single') {
        singleSection.style.display = 'block';
        bulkSection.style.display = 'none';
        modeBtns[0].classList.add('active');
        modeBtns[1].classList.remove('active');
        document.querySelector('.preview-title').textContent = '📱 Email Preview';
        updatePreview();
    } else {
        singleSection.style.display = 'none';
        bulkSection.style.display = 'block';
        modeBtns[0].classList.remove('active');
        modeBtns[1].classList.add('active');
        document.querySelector('.preview-title').textContent = '📱 Bulk Preview';
        updateBulkPreview();
    }
}

function handleCSVUpload(event) {
    const file = event.target.files[0];
    if (file && file.type === 'text/csv') {
        const reader = new FileReader();
        reader.onload = function (e) {
            parseCSV(e.target.result);
        };
        reader.readAsText(file);
    } else {
        showBulkStatus('error', '❌ Select a valid CSV file!');
    }
}

function handleCSVDrop(event) {
    event.preventDefault();
    const uploadArea = event.target.closest('.csv-upload-area');
    uploadArea.classList.remove('dragover');

    const file = event.dataTransfer.files[0];
    if (file && file.type === 'text/csv') {
        const reader = new FileReader();
        reader.onload = function (e) {
            parseCSV(e.target.result);
        };
        reader.readAsText(file);
    } else {
        showBulkStatus('error', '❌ Drop a valid CSV file!');
    }
}

function handleCSVDragOver(event) {
    event.preventDefault();
    const uploadArea = event.target.closest('.csv-upload-area');
    uploadArea.classList.add('dragover');
}

function handleCSVDragLeave(event) {
    const uploadArea = event.target.closest('.csv-upload-area');
    uploadArea.classList.remove('dragover');
}

function parseCSV(csvText) {
    try {
        const lines = csvText.trim().split('\n');
        if (lines.length < 2) {
            throw new Error('CSV must have a header row and at least one data row');
        }

        const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
        const expectedHeaders = ['email', 'nome', 'azienda', 'cognome'];

        if (!expectedHeaders.every(h => headers.includes(h))) {
            throw new Error('CSV must contain columns: email, nome, azienda, cognome');
        }

        let newRecipients = 0;
        let duplicates = 0;

        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',').map(v => v.trim());
            if (values.length >= headers.length) {
                const recipient = {};
                headers.forEach((header, index) => {
                    recipient[header] = values[index] || '';
                });

                if (recipient.email && isValidEmail(recipient.email)) {
                    if (!recipients.find(r => r.email === recipient.email)) {
                        recipients.push(recipient);
                        newRecipients++;
                    } else {
                        duplicates++;
                    }
                }
            }
        }

        updateRecipientsList();
        showBulkStatus('success', `✅ CSV imported! ${newRecipients} new, ${duplicates} duplicates ignored`);
    } catch (error) {
        showBulkStatus('error', `❌ CSV Error: ${error.message}`);
    }
}

function addManualRecipient() {
    const email = document.getElementById('manualEmail').value.trim();
    const name = document.getElementById('manualName').value.trim();
    const company = document.getElementById('manualCompany').value.trim();

    if (!email) {
        showBulkStatus('error', '❌ Email is required!');
        return;
    }

    if (!isValidEmail(email)) {
        showBulkStatus('error', '❌ Invalid email!');
        return;
    }

    if (recipients.find(r => r.email === email)) {
        showBulkStatus('error', '❌ Email already in list!');
        return;
    }

    recipients.push({
        email: email,
        nome: name,
        azienda: company,
        cognome: ''
    });

    document.getElementById('manualEmail').value = '';
    document.getElementById('manualName').value = '';
    document.getElementById('manualCompany').value = '';

    updateRecipientsList();
    showBulkStatus('success', `✅ Added: ${email}`);
}

function updateRecipientsList() {
    const list = document.getElementById('recipientsList');
    const count = document.getElementById('recipientCount');
    const emailCount = document.getElementById('emailCount');

    count.textContent = recipients.length;
    emailCount.textContent = recipients.length;

    if (recipients.length === 0) {
        list.innerHTML = `
            <div style="padding: 20px; text-align: center; color: #666;">
                <p>🚫 No recipients added</p>
                <small>Import from CSV or add manually</small>
            </div>
        `;
    } else {
        list.innerHTML = recipients.map((recipient, index) => `
            <div class="recipient-item">
                <div class="recipient-info">
                    <div class="recipient-email">${recipient.email}</div>
                    <div class="recipient-details">
                        ${recipient.nome || 'No Name'}
                        ${recipient.azienda ? ` - ${recipient.azienda}` : ''}
                        ${recipient.cognome ? ` ${recipient.cognome}` : ''}
                    </div>
                </div>
                <button class="remove-recipient" onclick="removeRecipient(${index})">🗑️</button>
            </div>
        `).join('');
    }
}

function removeRecipient(index) {
    const removed = recipients.splice(index, 1)[0];
    updateRecipientsList();
    showBulkStatus('success', `✅ Removed: ${removed.email}`);
}

function clearAllRecipients() {
    if (recipients.length === 0) return;

    if (confirm(`Remove all ${recipients.length} recipients?`)) {
        recipients = [];
        updateRecipientsList();
        showBulkStatus('success', '✅ List cleared!');
    }
}

function replaceTemplateVariables(template, recipient, senderName, senderEmail) {
    let result = template;

    result = result.replace(/\{\{nome\}\}/g, recipient.nome || 'Client');
    result = result.replace(/\{\{azienda\}\}/g, recipient.azienda || '');
    result = result.replace(/\{\{cognome\}\}/g, recipient.cognome || '');
    result = result.replace(/\{\{mittente\}\}/g, senderName || 'The Team');
    result = result.replace(/\{\{email_mittente\}\}/g, senderEmail || 'info@example.com');

    if (recipient.azienda) {
        result = result.replace(/\{\{#azienda\}\}(.*?)\{\{\/azienda\}\}/g, '$1');
    } else {
        result = result.replace(/\{\{#azienda\}\}(.*?)\{\{\/azienda\}\}/g, '');
    }

    return result;
}

function previewBulkEmail() {
    if (recipients.length === 0) {
        showBulkStatus('error', '❌ Add at least one recipient!');
        return;
    }

    const recipient = recipients[0];
    updateBulkPreview(recipient);
    showBulkStatus('success', `👁️ Previewing for: ${recipient.email}`);
}

function updateBulkPreview(recipient = null) {
    if (!recipient && recipients.length > 0) {
        recipient = recipients[0];
    } else if (!recipient) {
        recipient = { email: 'client@example.com', nome: 'Client', azienda: 'Example Co', cognome: 'Test' };
    }

    const badge = document.getElementById('bulkBadge').value;
    const mainContent = replaceTemplateVariables(document.getElementById('bulkMainContent').value, recipient,
        document.getElementById('bulkSenderName').value, document.getElementById('bulkSenderEmail').value);
    const highlightContent = replaceTemplateVariables(document.getElementById('bulkHighlightContent').value, recipient,
        document.getElementById('bulkSenderName').value, document.getElementById('bulkSenderEmail').value);
    const additionalDetails = replaceTemplateVariables(document.getElementById('bulkAdditionalDetails').value, recipient,
        document.getElementById('bulkSenderName').value, document.getElementById('bulkSenderEmail').value);
    const conclusion = replaceTemplateVariables(document.getElementById('bulkConclusion').value, recipient,
        document.getElementById('bulkSenderName').value, document.getElementById('bulkSenderEmail').value);
    const ctaText = document.getElementById('bulkCtaText').value;
    const emailContact = document.getElementById('bulkEmailContact').value;
    const emailSubject = encodeURIComponent(replaceTemplateVariables(document.getElementById('bulkEmailSubject').value, recipient,
        document.getElementById('bulkSenderName').value, document.getElementById('bulkSenderEmail').value));
    const signature = replaceTemplateVariables(document.getElementById('bulkSignature').value, recipient,
        document.getElementById('bulkSenderName').value, document.getElementById('bulkSenderEmail').value);

    // Preview text for hidden preheader
    const mainContentPreview = mainContent.substring(0, 100) + '...';

    let preview = emailTemplate
        .replace('{{BADGE}}', badge)
        .replace('{{MAIN_CONTENT}}', mainContent)
        .replace('{{MAIN_CONTENT_PREVIEW}}', mainContentPreview)
        .replace('{{HIGHLIGHT_CONTENT}}', highlightContent)
        .replace('{{ADDITIONAL_DETAILS}}', additionalDetails)
        .replace('{{CONCLUSION}}', conclusion)
        .replace('{{CTA_TEXT}}', ctaText)
        .replace('{{EMAIL_CONTACT}}', emailContact)
        .replace('{{EMAIL_SUBJECT}}', emailSubject)
        .replace('{{SIGNATURE}}', signature)
        .replace('{{RECIPIENT_NAME}}', recipient.nome || 'Client');

    document.getElementById('emailPreview').innerHTML = preview;
}

async function startBulkSend() {
    if (recipients.length === 0) {
        showBulkStatus('error', '❌ Add at least one recipient!');
        return;
    }

    const senderName = document.getElementById('bulkSenderName').value.trim();
    const senderEmail = document.getElementById('bulkSenderEmail').value;

    if (!senderName || !senderEmail) {
        showBulkStatus('error', '❌ Sender name and email are required!');
        return;
    }

    if (!serverOnline) {
        showBulkStatus('error', '❌ Server offline!');
        return;
    }

    bulkSending = true;
    bulkAbortController = new AbortController();

    document.getElementById('bulkProgress').style.display = 'block';
    document.getElementById('bulkLogs').style.display = 'block';
    document.getElementById('startBulkBtn').style.display = 'none';
    document.getElementById('stopBulkBtn').style.display = 'inline-block';

    const totalEmails = recipients.length;
    let sentEmails = 0;
    let failedEmails = 0;

    updateBulkStats(totalEmails, sentEmails, failedEmails);
    clearBulkLogs();

    const interval = parseInt(document.getElementById('sendInterval').value) * 1000;

    showBulkStatus('loading', '<span class="loading-spinner"></span>Bulk sending...');
    addLog('info', `🚀 Starting bulk send of ${totalEmails} emails. Interval: ${interval / 1000}s`);

    try {
        for (let i = 0; i < recipients.length && bulkSending; i++) {
            const recipient = recipients[i];

            try {
                const personalizedSubject = replaceTemplateVariables(
                    document.getElementById('bulkEmailSubject').value, recipient, senderName, senderEmail
                );

                const personalizedContent = generatePersonalizedEmail(recipient, senderName, senderEmail);

                const emailData = {
                    to: recipient.email,
                    from: senderEmail,
                    fromName: senderName,
                    subject: personalizedSubject,
                    html: personalizedContent,
                    recipientName: recipient.nome || 'Client'
                };

                const response = await fetch('/send-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(emailData),
                    signal: bulkAbortController.signal
                });

                const result = await response.json();

                if (result.success) {
                    sentEmails++;
                    addLog('success', `✅ ${recipient.email} - Sent (ID: ${result.messageId})`);
                } else {
                    throw new Error(result.message);
                }

            } catch (error) {
                if (error.name === 'AbortError') {
                    addLog('info', '⏹️ Stopped by user');
                    break;
                }
                failedEmails++;
                addLog('error', `❌ ${recipient.email} - Error: ${error.message}`);
            }

            updateBulkStats(totalEmails, sentEmails, failedEmails);

            if (i < recipients.length - 1 && bulkSending) {
                await new Promise(resolve => setTimeout(resolve, interval));
            }
        }

    } catch (error) {
        addLog('error', `❌ General Error: ${error.message}`);
    } finally {
        bulkSending = false;
        document.getElementById('startBulkBtn').style.display = 'inline-block';
        document.getElementById('stopBulkBtn').style.display = 'none';

        if (sentEmails > 0) {
            showBulkStatus('success', `✅ Completed! ${sentEmails} sent, ${failedEmails} failed`);
            addLog('info', `📊 Summary: ${sentEmails} success, ${failedEmails} errors`);
        } else {
            showBulkStatus('error', '❌ No emails sent successfully!');
        }
    }
}

function stopBulkSend() {
    if (bulkAbortController) {
        bulkAbortController.abort();
    }
    bulkSending = false;
    addLog('info', '⏹️ Stopped by user');
    showBulkStatus('error', '⏹️ Stopped!');
}

function generatePersonalizedEmail(recipient, senderName, senderEmail) {
    const badge = document.getElementById('bulkBadge').value;
    const mainContent = replaceTemplateVariables(document.getElementById('bulkMainContent').value, recipient, senderName, senderEmail);
    const highlightContent = replaceTemplateVariables(document.getElementById('bulkHighlightContent').value, recipient, senderName, senderEmail);
    const additionalDetails = replaceTemplateVariables(document.getElementById('bulkAdditionalDetails').value, recipient, senderName, senderEmail);
    const conclusion = replaceTemplateVariables(document.getElementById('bulkConclusion').value, recipient, senderName, senderEmail);
    const ctaText = document.getElementById('bulkCtaText').value;
    const emailContact = document.getElementById('bulkEmailContact').value;
    const emailSubject = encodeURIComponent(replaceTemplateVariables(document.getElementById('bulkEmailSubject').value, recipient, senderName, senderEmail));
    const signature = replaceTemplateVariables(document.getElementById('bulkSignature').value, recipient, senderName, senderEmail);

    // Preview text for hidden preheader
    const mainContentPreview = mainContent.substring(0, 100) + '...';

    return emailTemplate
        .replace('{{BADGE}}', badge)
        .replace('{{MAIN_CONTENT}}', mainContent)
        .replace('{{MAIN_CONTENT_PREVIEW}}', mainContentPreview)
        .replace('{{HIGHLIGHT_CONTENT}}', highlightContent)
        .replace('{{ADDITIONAL_DETAILS}}', additionalDetails)
        .replace('{{CONCLUSION}}', conclusion)
        .replace('{{CTA_TEXT}}', ctaText)
        .replace('{{EMAIL_CONTACT}}', emailContact)
        .replace('{{EMAIL_SUBJECT}}', emailSubject)
        .replace('{{SIGNATURE}}', signature)
        .replace('{{RECIPIENT_NAME}}', recipient.nome || 'Client');
}

function updateBulkStats(total, sent, failed) {
    document.getElementById('totalEmails').textContent = total;
    document.getElementById('sentEmails').textContent = sent;
    document.getElementById('failedEmails').textContent = failed;
    document.getElementById('remainingEmails').textContent = total - sent - failed;

    const progress = total > 0 ? ((sent + failed) / total) * 100 : 0;
    document.getElementById('progressBar').style.width = progress + '%';
}

function addLog(type, message) {
    const logContainer = document.getElementById('logContainer');
    const timestamp = new Date().toLocaleTimeString();
    const logItem = document.createElement('div');
    logItem.className = `log-item log-${type}`;
    logItem.innerHTML = `[${timestamp}] ${message}`;
    logContainer.appendChild(logItem);
    logContainer.scrollTop = logContainer.scrollHeight;
}

function clearBulkLogs() {
    document.getElementById('logContainer').innerHTML = '';
}

function resetBulkForm() {
    if (confirm('Reset all BULK fields?')) {
        document.getElementById('bulkEmailForm').reset();

        document.getElementById('bulkBadge').value = 'Special Offer';
        document.getElementById('bulkMainContent').value = `Hello {{nome}},

We are happy to announce our new collection. {{#azienda}}We know that {{azienda}} looks for quality{{/azienda}} and we have a great selection for you.`;
        document.getElementById('bulkHighlightContent').value = `Contact us for more info.`;
        document.getElementById('bulkAdditionalDetails').value = 'High quality products.';
        document.getElementById('bulkConclusion').value = 'Best regards.';
        document.getElementById('bulkCtaText').value = 'Contact Us';
        document.getElementById('bulkEmailSubject').value = 'Info Request - {{nome}}';
        document.getElementById('bulkSignature').value = 'The Team';
        document.getElementById('sendInterval').value = '2';

        updateBulkPreview();
        showBulkStatus('success', '✅ Bulk form reset!');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    checkServer();
    updatePreview();

    const singleFields = [
        'badge', 'mainContent', 'highlightContent', 'additionalDetails',
        'conclusion', 'ctaText', 'emailContact', 'emailSubject', 'signature', 'recipientName'
    ];

    singleFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('input', updatePreview);
            field.addEventListener('change', updatePreview);
        }
    });

    setInterval(checkServer, 30000);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    document.getElementById('codeModal').addEventListener('click', function (e) {
        if (e.target === this) {
            closeModal();
        }
    });

    const bulkInputs = document.querySelectorAll('#bulkEmailForm input, #bulkEmailForm textarea, #bulkEmailForm select');
    bulkInputs.forEach(input => {
        input.addEventListener('input', updateBulkPreview);
        input.addEventListener('change', updateBulkPreview);
    });

    updateRecipientsList();
    updateBulkPreview();
});
