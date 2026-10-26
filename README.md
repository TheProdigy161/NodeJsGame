# NodeJsGame

Real-time multiplayer browser games built with Angular and Socket.IO. Players create or join rooms from a lobby and play against each other live.

## Features

- **Lobby:** a live list of game rooms that updates as rooms open and fill
- **Rooms:** create a named room, or join one that has a free slot
- **Tic-tac-toe:** online play between two players
- **Real-time sync:** moves are relayed between players over WebSockets
- Players get a random display name

## Tech Stack

| Part | Technology |
|---|---|
| Client | Angular 13, Angular Material, Socket.IO client |
| Server | Node.js, Express, Socket.IO 4, TypeScript |
| Hosting | Azure Static Web Apps (client) |

## How It Works

```
Angular client  ⇄  Socket.IO  ⇄  Express server  ⇄  in-memory room store
```

The server tracks rooms in memory and handles these socket events:

| Event | Direction | Purpose |
|---|---|---|
| `get-game-list` / `got-game-list` | client → server → all | Fetch and broadcast the room list |
| `join-game` | client → server | Join a room (`join-room-success`, `join-room-failed` or `room-full`) |
| `tic-tac-toe-make-move` | client → server → opponent | Relay a move to the other player |

The server also exposes REST endpoints: `GET /api/healthcheck` and `GET /api/getRooms`.

## Getting Started

### Prerequisites

- Node.js and npm

### Run the server

```bash
cd server
npm install
npm start          # listens on PORT, default 5000
```

### Run the client

```bash
cd client
npm install
npm start          # http://localhost:4200
```

Open the client in two browser windows to play against yourself.

## Project Structure

```
client/   Angular app (lobby, room creation, game components)
server/   Express + Socket.IO server (socket commands, REST routes, room store)
```
