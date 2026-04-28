export interface GameInfo {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  background_image_additional: string;
  suggestions_count: number;
  alternative_names: any[];
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  platforms: Platform2[];
  stores: Store[]; 
  developers: Developer[];
  genres: Genre[];
  tags: Tag[];
  publishers: Publisher[];
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

export interface Developer {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
}

export interface Publisher {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
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
  year_start?: (null | number)[];
  games_count: number;
  image_background: string;
}


export interface Requirements {
  minimum: string;
  recommended: string;
}

export interface PlatformsList {
  count: number;
  next: string;
  results: PlatformsResult[];
}

export interface PlatformsResult {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
  games: GamesFromPlatform[]
}

export interface GamesFromPlatform {
  id: number
  slug: string
  name: string
  added: number
}

export interface GridList {
  count: number
  next: string
  results: GridItem[]
}

export interface GridItem {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  rating: number;
  platforms: Platform2[];
  games_count: number;
  image_background: string; //platform image background
  short_screenshots: Shortscreenshot[];
}
