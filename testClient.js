// const EventSource = require('eventsource'); // Install with npm install eventsource

// const url = 'http://localhost:5000/api/livegames';
// const eventSource = new EventSource(url);

// eventSource.onmessage = (event) => {
//   console.log('Data:', event.data); // Log data chunks
// };

// eventSource.onerror = (err) => {
//   console.error('Error:', err);
//   eventSource.close();
// };


const fetch = require('node-fetch'); // Ensure it's installed

(async () => {
  const response = await fetch('http://localhost:5000/api/livegames');
  response.body.on('data', (chunk) => {
    console.log('Chunk:', chunk.toString());
  });
})();
