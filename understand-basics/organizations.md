---
sidebar_position: 1
---
# Organizations

Organizations are the foundational entities in the Medibound ecosystem, representing healthcare providers, medical device manufacturers, research institutions, and other entities that manage medical devices.

## What is an Organization?

An Organization in Medibound is a structured entity that:

- Manages multiple devices and users
- Controls access and permissions
- Maintains compliance and security standards
- Handles billing and subscription management

## Organization Schema

```json
{
  "address": "3451 Walnut Street, Philadelphia, PA 19104",
  "api_key": {
    "created_time": "2025-05-06T21:17:23+02:00",
    "hint_key": "3351b867e4",
    "secret": "CiUA1x+OlqMWrBRRGlwg6MnvyCMjJHwQKgFpFXQWbul3TdKcSOcSEmkAJSY6aTUuJ2FH/SSdSq1wpxQOf89sbAGz0zwcJWDU0iN+02q9fwHHj8AsX0I9xzpNlKhHfnR+u5rEVjJSdNcbIXYAKNikmVbbWwbXzZW0o2HjDN3L6vWqj6PeAwBUiSxvs+gJbyrmPaY="
  },
  "created_time": "2025-04-18T07:08:01+02:00",
  "edited_time": "2025-04-18T07:08:01+02:00",
  "email": "support.neuros@medibound.com",
  "members": [
    "/users/QjjmqZm5GaYJSCWLXQD8IS4yqHb2"
  ],
  "owner": "/users/QjjmqZm5GaYJSCWLXQD8IS4yqHb2",
  "privacyPolicy": "https://neuros.medibound.com/privac",
  "profile": {
    "display_name": "Neuros",
    "photo_url": "https://firebasestorage.googleapis.com/v0/b/medibound-portal-hdztzw.firebasestorage.app/o/users%2FQjjmqZm5GaYJSCWLXQD8IS4yqHb2%2Fuploads%2F1744952880667000.png?alt=media&token=a43abe94-280f-423a-b584-c4cb19a62d88",
    "profile_type": "ORGANIZATIONS",
    "uid": "KnNrQHyT6r2vwe8GTN4g"
  },
  "type": "OT04",
  "website": "https://neuros.medibound.com"
}
```

## Organization Types

### 1. Healthcare Providers

- Hospitals
- Clinics
- Medical practices
- Home healthcare providers

### 2. Device Manufacturers

- Medical device companies
- IoT device manufacturers
- Healthcare technology providers

### 3. Research Institutions

- Medical research facilities
- Universities
- Clinical trial organizations

