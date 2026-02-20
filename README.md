# Ledgerly Server 💾  
### JSON Server Backend for Ledgerly Finance App

---

## Project Name

Ledgerly Server

This repository contains a json-server setup used to provide mock REST API endpoints for the Ledgerly React application.

It serves financial data including accounts, expenses, and revenues.

---

## Collections

### accounts

```
{
  id,
  name,
  type,
  balance,
  currency,
  createdAt
}
```

---

### expenses

```
{
  id,
  accountId,
  title,
  amount,
  category,
  vendor,
  note,
  receiptUrl,
  createdAt
}
```

---

### revenues

```
{
  id,
  accountId,
  title,
  amount,
  category,
  payerName,
  note,
  createdAt
}
```

---

## Used API Endpoints in the App

| HTTP Method | URL | Request Body | Description |
|------------|-----|-------------|-------------|
| GET | `/accounts` | — | Returns all accounts |
| POST | `/accounts` | `{ name, type, balance, currency, createdAt }` | Creates a new account |
| GET | `/accounts/:accountId` | — | Returns single account details |
| PUT | `/accounts/:accountId` | `{ name, type, balance, currency, createdAt  }` | Updates an account |
| PATCH | `/accounts/:accountId` | `{ balance}` | Updates the balance of an account |
| DELETE | `/accounts/:accountId` | — | Deletes an account and all expenses and revenues linke to it|
| GET | `/expenses` | — | Returns all expenses |
| POST | `/expenses` | `{ accountId, title, amount, category, createdAt }` | Creates new expense |
| PUT | `/expenses/:expenseId` | `{ title, amount, category, createdAt }` | Updates expense |
| DELETE | `/expenses/:expenseId` | — | Deletes expense |
| GET | `/revenues` | — | Returns all revenues |
| POST | `/revenues` | `{ accountId, title, amount, category, createdAt }` | Creates new revenue |
| PUT | `/revenues/:revenueId` | `{ title, amount, category, createdAt }` | Updates revenue |
| DELETE | `/revenues/:revenueId` | — | Deletes revenue |

---

## Running the Server Locally

### Install Dependencies

```
npm install
```

### Start json-server

```
node server.js
```

Server will run at:

```
http://localhost:{configured_PORT}
```

---

## Technologies Used

- json-server
- Node.js
- REST API principles
- JSON database (db.json)

---

## Project

### Repository (Client)

[Client repository](https://github.com/joemathews4development/Ledgerly-web-app?tab=readme-ov-file)

### Repository (Server)

[Server repository](https://github.com/joemathews4development/Ledgerly-server)

### Deploy Link

[Try Me](https://ledgerly-seven.vercel.app/accounts)

---

## Author

Developed independently as part of the Ledgerly full-stack finance tracking application.