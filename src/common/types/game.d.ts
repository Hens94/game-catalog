export interface GameList {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

export interface Result {
  id: number;
  slug: string;
  name: string;
  released: Date;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: AddedByStatus;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: AddedByStatus;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: Date;
  esrb_rating: EsrbRating;
  platforms: Platform2[];
}

export interface EsrbRating {
  id: number;
  slug: string;
  name: string;
}

export interface Platform2 {
  platform: Platform;
  released_at: string;
  requirements_en?: Requirementsen | Requirementsen2 | Requirementsen3 | null | null;
  requirements_ru?: (Requirementsen | null)[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image?: any;
  year_end?: any;
  year_start?: (null | number)[];
  games_count: number;
  image_background: string;
}


export interface Requirements {
  minimum: string;
  recommended: string;
}
