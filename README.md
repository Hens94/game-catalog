# Game Catalog

> A web application to explore, search, and view detailed information about modern video games, powered by the RAWG API.

<img width="1567" height="774" alt="image" src="https://github.com/user-attachments/assets/b12a6385-00c6-4109-9a31-baab58992808" />

## Live Demo

**[https://game-catalog-seven.vercel.app/](https://game-catalog-seven.vercel.app/)**

## Description

**Game Catalog** is a web application that lets users explore a curated catalog of current video games for the most popular platforms: PlayStation 4/5, Xbox One/Series S/X, and Nintendo Switch.

Built with **Next.js 16** and **React 19**, the app consumes real-time data from the [RAWG Video Games Database API](https://rawg.io/) to deliver a smooth game discovery experience.

### Features

- **Featured carousel**: Full-screen carousel with fade transitions, autoplay, navigation controls, and dot indicators
- **Advanced search**: Search games by name with platform filtering
- **Platform filtering**: Browse games by PlayStation, Xbox, or Nintendo Switch
- **Responsive grid**: Masonry-style layout that adapts from 1 to 4 columns based on screen size
- **Game details**: Complete information: description, genres, ratings, store links, and screenshot gallery
- **Dark theme**: Dark-mode-first design with a cyberpunk-inspired color palette (magenta/cyan)
- **Toast notifications**: Visual feedback on API errors
- **Responsive design**: Mobile-first with adaptive layouts
  
### Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Icons | Lucide React |
| Carousel | Embla Carousel |
| Forms | React Hook Form + Zod |
| Animations | @midudev/tailwind-animations |
| Font | Quicksand (Google Fonts) |

## Getting Started

### Prerequisites

- Node.js 18+
- A [RAWG API key](https://rawg.io/apidocs) (free)
  
### Installation

1. Clone the repository:

```bash
git clone https://github.com/Hens94/game-catalog.git
cd game-catalog
```

2. Install dependencies:
   
```bash
npm install
```

3. Create a `.env.local` file and add your API credentials:
   
```env
NEXT_PUBLIC_API_BASE_URL=https://api.rawg.io/api
NEXT_PUBLIC_API_KEY=your_rawg_api_key_here
```

4. Start the development server:
   
```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).
## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (home)/             # Homepage with carousel + grid
│   ├── games/              # Search results & game detail
│   ├── platforms/          # Platform listing & filtered games
│   └── about/              # About page
├── components/
│   ├── layout/             # Header, footer, carousel, grid
│   └── ui/                 # shadcn/ui primitives
├── hooks/                  # Custom data-fetching hooks
├── common/                 # Types & API constants
├── libs/                   # Axios client with API key interceptor
└── utils/                  # Utility functions
```
