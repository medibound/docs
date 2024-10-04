---
id: organization-schema
title: MbOrganization Schema
sidebar_label: Organization Schema
---

# MbOrganization Schema

The `MbOrganization` schema represents an organization in the Medibound ecosystem. It captures key information about an organization, including its properties, methods for managing CRUD operations, and Firebase integration.

## Fields

| Field          | Type                       | Description                                           |
|----------------|----------------------------|-------------------------------------------------------|
| `id`           | `String?`                  | Unique identifier for the organization (optional).    |
| `type`         | `String`                   | Type of organization (e.g., Manufacturer, Retailer).  |
| `name`         | `String`                   | Name of the organization.                             |
| `email`        | `String`                   | Organization's primary contact email.                 |
| `website`      | `String`                   | Website URL of the organization.                      |
| `privacyPolicy`| `String`                   | URL to the organization's privacy policy.             |
| `address`      | `String`                   | Physical address of the organization.                 |
| `members`      | `List<Map<String, String>>`| A list of members, represented as user details.       |
| `membersIds`   | `List<String>?`            | List of member IDs derived from `members`.            |
| `pictureUrl`   | `String?`                  | URL to the organization's profile picture.            |
| `color`        | `Color?`                   | Organization's color, represented as a `Color` object.|

### Notes on Fields
- **`members`**: Each member is represented by a `Map` containing user details, such as `userId`.
- **`pictureUrl`**: Can be optionally specified or fetched dynamically from Firebase Storage.
- **`color`**: Represents the organization’s theme or brand color.

## Methods

### 1. **create**
Creates a new organization record in the backend, optionally uploading an image.

```dart
Future<void> create({ Uint8List? imageData });
