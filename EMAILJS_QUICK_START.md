# EmailJS Configuration Quick Reference

## Files to Update After Getting EmailJS Credentials

### 1. src/app/shared/email.service.ts
Replace these values (around lines 8-15):
```typescript
private serviceId = 'YOUR_SERVICE_ID';
private publicKey = 'YOUR_PUBLIC_KEY';

private templateIds = {
  fanSubscription: 'YOUR_FAN_TEMPLATE_ID',
  contactWebmaster: 'YOUR_CONTACT_TEMPLATE_ID',
  specialRequest: 'YOUR_REQUEST_TEMPLATE_ID'
};
```

### 2. src/index.html
Replace these values (around lines 375 and 387-388):
```javascript
emailjs.init("YOUR_PUBLIC_KEY");

await emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_FAN_TEMPLATE_ID",
  // ...
);
```

## Testing Checklist
- [ ] Fan subscription from homepage
- [ ] Contact webmaster form
- [ ] Special music request form
- [ ] Check daniel@seguin.dev inbox
- [ ] Verify reply-to addresses work

## Get Your Credentials
1. Sign up at https://www.emailjs.com/
2. Service ID: Email Services section
3. Public Key: Account > General
4. Template IDs: Email Templates section (create 3 templates)

See EMAILJS_SETUP.md for detailed instructions.
