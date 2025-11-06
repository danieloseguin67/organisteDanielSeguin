# EmailJS Troubleshooting Guide

## Common Issues and Solutions

### Issue: EmailJS sending fails

#### What I Fixed:
1. **Added public key parameter to emailjs.send() calls**
   - The `emailjs.send()` function needs 4 parameters: serviceId, templateId, templateParams, and publicKey
   - Previously missing the publicKey parameter in the send calls

2. **Improved error handling**
   - Added detailed console logging
   - Error messages now show the actual error text

3. **Updated index.html**
   - Fixed the fan subscription function with correct credentials
   - Added publicKey to the send call

### How to Debug EmailJS Errors:

1. **Open Browser Console** (F12)
   - Look for console.log messages showing:
     - "EmailJS initialized successfully"
     - "Attempting to send [email type]..."
   - Look for errors showing:
     - "Error sending [email type]:"
     - "Error details:" (shows the actual error message)

2. **Common Error Messages:**

   **"The public key is required"**
   - Solution: Make sure publicKey is passed as 4th parameter to emailjs.send()
   - ✅ Fixed in the updated code

   **"Template doesn't exist"**
   - Solution: Check that template IDs match your EmailJS dashboard
   - Current templates:
     - Fan: `template_m9u9b4e`
     - Contact/Request: `template_as3xwbs`

   **"Service doesn't exist"**
   - Solution: Verify service ID is correct
   - Current: `service_0nh5sa8`

   **"Invalid public key"**
   - Solution: Check public key in EmailJS dashboard
   - Current: `gLAGnqUeakXx77MrF`

3. **Test Each Function:**

   A. **Test Fan Subscription** (from homepage):
   ```
   1. Enter email in "Register as a fan" section
   2. Click Submit
   3. Check browser console for logs
   4. Check daniel@seguin.dev inbox
   ```

   B. **Test Contact Webmaster** (from /contactme):
   ```
   1. Fill in name, email, and question
   2. Click Submit
   3. Check browser console for logs
   4. Check daniel@seguin.dev inbox
   ```

   C. **Test Special Request** (from /specialrequest):
   ```
   1. Fill in name, email, song name, and message
   2. Click Submit
   3. Check browser console for logs
   4. Check daniel@seguin.dev inbox
   ```

4. **Verify EmailJS Dashboard Settings:**
   - Go to https://dashboard.emailjs.com/
   - Check "Email Services" - service should be connected
   - Check "Email Templates" - templates should exist
   - Check each template has the correct variable names:
     - `to_email`
     - `from_email` or `from_name`
     - `message`
     - `reply_to`
     - `song_name` (for special request)

5. **Check Template Variables:**

   Make sure your EmailJS templates use these variables:

   **Fan Subscription Template:**
   ```
   From: {{from_email}}
   
   A new fan has subscribed: {{from_email}}
   Message: {{message}}
   ```

   **Contact/Request Template:**
   ```
   From: {{from_name}} <{{from_email}}>
   
   {{message}}
   
   Reply to: {{reply_to}}
   Song: {{song_name}}
   ```

6. **Network Issues:**
   - Make sure you have internet connection
   - Check if EmailJS CDN is loaded (should see email.min.js in Network tab)
   - Try disabling browser extensions (ad blockers may block EmailJS)

### Testing in Development:

Run the app:
```bash
npm start
```

Then open: http://localhost:4201/

Open browser console (F12) and watch for:
- ✅ "EmailJS initialized successfully"
- ✅ "Attempting to send..."
- ✅ "Email sent successfully"
- ❌ Any error messages

### Still Having Issues?

1. Check the actual error message in console
2. Verify all credentials match your EmailJS dashboard
3. Make sure email service is connected in EmailJS
4. Try sending a test email from EmailJS dashboard directly
5. Check spam folder in daniel@seguin.dev

### Quick Test Command:

Open browser console on homepage and run:
```javascript
emailjs.send(
  "service_0nh5sa8",
  "template_m9u9b4e",
  {
    to_email: "daniel@seguin.dev",
    from_email: "test@example.com",
    message: "Test email from console"
  },
  "gLAGnqUeakXx77MrF"
).then(
  response => console.log('SUCCESS!', response),
  error => console.log('FAILED...', error)
);
```

This will help identify if the issue is with the credentials or the code.
