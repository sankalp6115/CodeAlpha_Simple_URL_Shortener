# URL Shortener API

This is a beginner-friendly URL shortener project built with Node.js, Express, and MongoDB. It takes a long URL, generates a short code, stores it in the database, and redirects users to the original URL when they visit the short link.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- shortid

## Features

- Create short URLs from long URLs
- Save URL records in MongoDB
- Redirect short links to the original URL
- Track visit history timestamps
- Simple and easy-to-understand backend structure

## Project Structure

```bash
url_shortener/
├── index.js
├── connect.js
├── package.json
├── controllers/
│   └── url.js
├── models/
│   └── url.js
├── routes/
│   └── url.js
├── README.md
└── .gitignore
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start MongoDB

Make sure MongoDB is running locally or through Docker.

If you are using Docker, you can run:

```bash
docker run -d -p 27017:27017 --name mongo mongo
```

### 3. Start the app

```bash
npm start
```

If the project uses `nodemon` in your setup, you can also run:

```bash
npx nodemon index.js
```

## Environment Setup

You may need a `.env` file depending on your version of the project.

A simple MongoDB connection setup usually looks like:

```env
MONGODB_URI=mongodb://localhost:27017/url_shortener
```

## How it works

1. User sends a long URL to the create route.
2. The server generates a short ID.
3. The long URL and short ID are saved in MongoDB.
4. When the user visits the short path, the server finds the record and redirects them.

## API Endpoints

### Create short URL

- `POST /` or `/api` depending on your route setup

Request body:

```json
{
  "url": "https://www.example.com/very/long/url"
}
```

Response:

```json
{
  "id": "abc123"
}
```

### Redirect short URL

- `GET /:shortId`

Example:

```bash
http://localhost:3000/abc123
```

This will redirect the user to the original URL stored in the database.

## Example Flow

```bash
POST /
{
  "url": "https://google.com"
}
```

Server returns:

```json
{
  "id": "a1b2c3"
}
```

Then visiting:

```bash
GET /a1b2c3
```

redirects to:

```bash
https://google.com
```

## Notes

This project is a classic beginner backend example for learning:

- Express route handling
- Mongoose models
- Database queries
- URL redirection logic
- CRUD basics in a real application

It is intentionally simple and easy to follow when you are learning backend development.

## License

This project is for learning and practice purposes.
