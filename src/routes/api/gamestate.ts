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
  try {
    const gamestate = await getGameState();
    return {
      body: gamestate,
    };
  } catch(e) {
    console.log("error",e);
  }

}

async function getGameState() {
  const GAME_SERVER_HOST = process.env['GAME_SERVER_HOST'];

  const gamestateResponse = await fetch(`${GAME_SERVER_HOST}/gamestate/reset`);

  return (await gamestateResponse.json());
}
