const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('debe responder con el mensaje correcto', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('¡Hola Jorge Chicana, desde Render y GitHub Actions!');
  });
});
