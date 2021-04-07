import fetch from 'node-fetch';
import dotenv from 'dotenv';
import * as cookie from 'cookie';

dotenv.config();

export async function getContext({ headers }) {
  const { session_id } = cookie.parse(headers.cookie || '');
  if (!session_id) {
    return {
      authenticated: false,
    };
  }

  const SERVER_HOST = process.env['SERVER_HOST'];

  const sessionResponse = await fetch(
    `${SERVER_HOST}/sessions?cookieID=${session_id}`
  );
  const [{ username }] = await sessionResponse.json();

  const userResponse = await fetch(`${SERVER_HOST}/users?username=${username}`);
  const [user] = await userResponse.json();

  return {
    authenticated: true,
    user: {
      username: user.username,
      type: user.type,
    },
  };
}

export async function getSession({ context: { authenticated, user } }) {
  return {
    authenticated,
    user,
  };
}
