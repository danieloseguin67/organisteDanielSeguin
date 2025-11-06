# EmailJS Setup Instructions

This application uses EmailJS to send emails to daniel@seguin.dev for:
1. Fan subscriptions
2. Contact webmaster inquiries
3. Special music requests

## Setup Steps

### 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account (daniel@seguin.dev)
5. Copy the **Service ID** (e.g., `service_xxxxxxx`)

### 3. Create Email Templates

#### Template 1: Fan Subscription
1. Go to "Email Templates" > "Create New Template"
2. Name: "Fan Subscription"
3. Template content:
```
Subject: New Fan Subscription

From: {{from_email}}

A new fan has subscribed to Daniel Seguin's music website.

Fan Email: {{from_email}}
Date: {{current_date}}

---
This is an automated message from organisteDanielSeguin website.
```
4. Copy the **Template ID** (e.g., `template_xxxxxxx`)

#### Template 2: Contact Webmaster
1. Create another new template
2. Name: "Contact Webmaster"
3. Template content:
```
Subject: Question from Website Visitor

From: {{from_name}} <{{from_email}}>

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```
4. Copy the **Template ID**

#### Template 3: Special Music Request
1. Create another new template
2. Name: "Special Music Request"
3. Template content:
```
Subject: Special Song Request: {{song_name}}

From: {{from_name}} <{{from_email}}>

Name: {{from_name}}
Email: {{from_email}}
Song Requested: {{song_name}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```
4. Copy the **Template ID**

### 4. Get Your Public Key
1. In EmailJS dashboard, go to "Account" > "General"
2. Copy your **Public Key** (also called User ID)

### 5. Update the Application Code

#### Update `src/app/shared/email.service.ts`:
```typescript
private serviceId = 'YOUR_SERVICE_ID';        // Replace with your Service ID
private publicKey = 'YOUR_PUBLIC_KEY';        // Replace with your Public Key

private templateIds = {
  fanSubscription: 'YOUR_FAN_TEMPLATE_ID',    // Replace with Fan template ID
  contactWebmaster: 'YOUR_CONTACT_TEMPLATE_ID', // Replace with Contact template ID
  specialRequest: 'YOUR_REQUEST_TEMPLATE_ID'    // Replace with Request template ID
};
```

#### Update `src/index.html`:
Find these lines and replace with your credentials:
```javascript
emailjs.init("YOUR_PUBLIC_KEY");  // Line ~375

await emailjs.send(
  "YOUR_SERVICE_ID",              // Line ~387
  "YOUR_FAN_TEMPLATE_ID",        // Line ~388
```

### 6. Test Your Setup
1. Run `npm start`
2. Test each email function:
   - Subscribe as a fan
   - Send a question to the webmaster
   - Make a special music request
3. Check daniel@seguin.dev inbox for test emails

## Free Tier Limits
- EmailJS free tier: 200 emails/month
- Should be sufficient for a personal music website

## Troubleshooting
- Check browser console for errors
- Verify all IDs are correct (no typos)
- Make sure email service is connected in EmailJS dashboard
- Check spam folder for test emails
- Verify daniel@seguin.dev is authorized in EmailJS

## Email Template Variables Reference

### Fan Subscription
- `from_email`: Subscriber's email
- `to_email`: daniel@seguin.dev

### Contact Webmaster
- `from_name`: Sender's name
- `from_email`: Sender's email
- `message`: Question/message
- `reply_to`: Reply-to address

### Special Request
- `from_name`: Requester's name
- `from_email`: Requester's email
- `song_name`: Name of requested song
- `message`: Additional message
- `reply_to`: Reply-to address
