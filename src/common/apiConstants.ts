export const API_ENDPOINTS = {
  GET_GAMES: "/games",
  GET_GAMES_BY_ID : (id:number) => `/games/${id}`
} as const;
