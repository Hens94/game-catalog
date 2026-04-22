export interface GameInfo {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number;
  metacritic_platforms: any[];
  released: string;
  tba: boolean;
  updated: string;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  added: number;
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: number;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: number;
  youtube_count: number;
  reviews_text_count: number;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: any[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  user_game?: any;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  parent_platforms: Parentplatform[];
  platforms: Platform2[];
  stores: Store[]; 
  developers: Developer[];
  genres: Genre[];
  tags: Tag[];
  publishers: Developer[];
  esrb_rating: Platform;
  clip?: any;
  description_raw: string;
}

export interface ScreenshotInfo {
  count: number
  next: any
  previous: any
  results: ScreenshotResult[]
}

export interface ScreenshotResult {
  id: number
  image: string
  width: number
  height: number
  is_deleted: boolean
}

export interface Store {
  id: number
  url: string
  store: Store2
}

export interface Store2 {
  id: number
  name: string
  slug: string
  domain: string
  games_count: number
  image_background: string
}

export interface Genre {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
}

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
  description: string;
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
  short_screenshots: Shortscreenshot[];
  description_raw: string;
}

export interface Shortscreenshot {
  id: number;
  image: string;
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
