# Freelancer Team Portfolio (MERN)

## Folder Structure

```
root/
  frontend/
  backend/
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

Set API base URL (optional):

```bash
# frontend/.env
VITE_API_BASE_URL=http://localhost:5000
```

## Backend Setup

```bash
cd backend
npm install
npm run start
```

Backend runs at: `http://localhost:5000`

Create env file:

```env
MONGO_URI=mongodb://127.0.0.1:27017/freelancer_portfolio
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_app_password
PORT=5000
```

## API

### POST `/api/contact`

Payload:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I need a MERN app"
}
```

Returns saved message + success status.
