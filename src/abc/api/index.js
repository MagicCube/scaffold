import request from 'axios';

export async function hello(name) {
  try {
    const res = await request.get('/api/test/hello', {
      params: {
        name
      }
    });
    return res.data;
  } catch (e) {
    throw e;
  }
}
