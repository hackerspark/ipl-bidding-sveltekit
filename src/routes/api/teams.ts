import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

export async function get({ context }) {
  if (!context.authenticated || context.user?.type !== 'admin') {
    return {
      status: 401,
      body: {
        message: 'Unauthorized',
      },
    };
  }
  const GAME_SERVER_HOST = process.env['GAME_SERVER_HOST'];

  const response = await fetch(`${GAME_SERVER_HOST}/teams`);
  const teams = await response.json();

  return {
    body: {
      teams,
    },
  };
}
