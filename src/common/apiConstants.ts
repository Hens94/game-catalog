export const API_ENDPOINTS = {
  GET_GAMES: "/games",
  GET_GAMES_BY_ID : (id:number) => `/games/${id}`,
  GET_SCREENSHOTS : (id:number) => `/games/${id}/screenshots`
} as const;
