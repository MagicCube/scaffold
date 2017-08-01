import request from 'axios';

export async function hello(name) {
  const res = await request.get('/api/test/hello', {
    params: {
      name
    }
  });
  return res.data;
}
