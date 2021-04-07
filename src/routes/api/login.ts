import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import * as cookie from 'cookie';
import fetch from 'node-fetch';

dotenv.config();

export async function post({ body: { username, password } }) {
  const SERVER_HOST = process.env['SERVER_HOST'];

  const response = await fetch(`${SERVER_HOST}/users?username=${username}`);
  const [user] = await response.json();
  if (user.username !== username || user.password !== password) {
    return {
      status: 401,
      body: {
        message: 'Invalid username or password',
      },
    };
  }

  const cookieID = uuidv4();
  await fetch(`${SERVER_HOST}/sessions`, {
    method: 'POST',
    body: JSON.stringify({
      cookieID,
      username,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const headers = {
    'Set-Cookie': cookie.serialize('session_id', cookieID, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    }),
  };

  return {
    status: 200,
    headers,
    body: {
      username,
      type: user.type,
    },
  };
}
