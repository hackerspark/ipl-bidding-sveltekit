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
  try {
    // TODO: Need to fix issue with response being { error: 'HTTP Page Not Found', error_code: 0 }
    const response = await fetch(`${GAME_SERVER_HOST}/gamestate`);
    const gamestate = await response.json();
    console.log(gamestate);
    return {
      body: {
        gamestate,
      },
    };
  } catch(e) {
    console.log("error",e);
  }

}
