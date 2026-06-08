# FreightMatch AI — Frontend

React-based dashboard for AI-powered freight carrier matching. Allows shippers to submit shipment requests and instantly view matched carriers powered by Groq AI.

## Tech Stack

- React 19
- Vite
- Tailwind CSS

## Features

- Shipment request form with dropdown validation
- Real-time AI-powered carrier matching
- Loading state during AI processing
- Responsive two-column dashboard layout
- Industrial dark theme with orange accents

## Screenshots

<img width="2541" height="1337" alt="image" src="https://github.com/user-attachments/assets/fecb7082-bfcc-457c-9911-1db4342b1fcb" />


## Setup & Run

1. Clone the repo
2. Install dependencies:
```bash
npm install
```
3. Create `.env` file:
```
VITE_API_BASE_URL=http://localhost:8080
```
4. Start the dev server:
```bash
npm run dev
```

Frontend runs on `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── ShipmentForm.jsx    → Shipment request form with validation
│   └── CarrierResults.jsx  → Matched carrier cards display
└── App.jsx                 → Root component, state management
```

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_API_BASE_URL` | Backend API base URL |

## Deployment

- Frontend deployed on Vercel
- Connect repo to Vercel, set root directory to `/`
- Add `VITE_API_BASE_URL` as environment variable pointing to deployed backend

## Related

- [FreightMatch AI Backend](https://github.com/nassirsultan/freightmatch-ai-backend)
