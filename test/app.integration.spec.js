const request = require('supertest');
const app = require('../app');

const connection = require('../connection');

describe('Test routes', () => {
    describe('GET /bookmarks/:id', () => {
  const testBookmark = { url: 'https://nodejs.org/', title: 'Node.js' };
  beforeEach((done) => connection.query(
    'TRUNCATE bookmark', () => connection.query(
    'INSERT INTO bookmark SET ?', testBookmark, done
    )));
  // Write your tests HERE!

  it('POST /bookmarks - error (fields missing) ', (done) => {
    request(app)
      .post('/bookmarks')
      .send({})
      .expect(404)
      .expect('Content-Type', /json/)
      .then(response => {
        const expected = {error: 'Bookmark not found'};
        expect(response.body).toEqual(expected);
        done();
      });
  });
});
  });
