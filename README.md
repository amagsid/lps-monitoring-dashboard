Welcome to the LPS Monitoring Dashboard

## Getting Started

1. To start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to view the project

### `Approach to the assignment`

- Created the project and installed the necessary dependancies, inluding TypeScript, Material UI, Tailwind
- created a single page app with an initial layout for a dashboard, status bar for the connection status, and a sidebar
- Looked up some initial inspirations for presenting the data, including Material Ui and daisy UI
- researched Websockets and best practices on using a websocket API with React/Next.js
  -making the websocket connection:
- I started with making one connection to the websocket API that got me a stream of data for all servers, but when I modularized the websocket call into a hook, I experimented with making a different call for each server, since it would save me the seperartion of data if I went with the first approach, here are the pros and cons I found for each option:

  Option 1, Single WebSocket Connection with Data Separation:

  Advantages:

  1. Efficiency: A single connection reduces the overhead and complexity associated with managing multiple 2. WebSocket connections.
  2. Simplicity: Easier to manage connection lifecycle and error handling for a single connection.
     Resource Usage: Reduced resource usage on both the client and server.

  Disadvantages:

1. Increased Complexity in data handling and sepertion: I found it woiuod take more time to seperate data especially that its a big stream of continious real time data in

Option 2: Multiple WebSocket Connections:

Advantages:

1. Separation of Concerns: Each WebSocket connection handles a distinct type of data, making it easier to 2. manage and debug.
2. Independent Error Handling: Each connection can have its own error handling and retry logic.

Disadvantages:

1. Increased Complexity: Managing multiple connections can increase the complexity of code.
2. Resource Usage: More WebSocket connections can increase resource usage on both the client and server.

### `chellenges`

- learning Websocket and how to query a GrahQL request and run it with fetch
- fragmenting the GraphQL query and modulaerizing it
- deciding between spending time on data sepratation once its recieved back from the websocket call or making seperate call for each server so data comes in a more manageable way

### `Things I would have approached differently if I had more time`

- building the UI with responsiveness in mind
- avoiding numbers in naming. (like Server01). I'm aware this is not the best practice but for this specefic use case, it made sense especiualy in seperating the pages for gthe detailed server view
