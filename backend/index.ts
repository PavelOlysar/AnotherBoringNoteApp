import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.text('Hello, World!'));

Bun.serve({
  fetch(req) {
    return app.fetch(req);
  },
  port: 6969,
});

console.log('Server running on http://localhost:6969');
