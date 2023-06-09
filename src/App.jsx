import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import Homepage, { loader as trendingLoader } from "./pages/Homepage";
import TvshowDetailPage from "./pages/TvshowDetailPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import MoviesRootLayout from "./pages/MoviesRootLayout";
import TvshowsRootLayout from "./pages/TvshowsRootLayout";
import PopularMovies, {
  loader as popularMoviesLoader,
} from "./pages/PopularMovies";
import TopRatedMovies, {
  loader as topRatedMoviesLoader,
} from "./pages/TopRatedMovies";
import UpcomingMovies, {
  loader as upcomingMoviesLoader,
} from "./pages/UpcomingMovies";
import OnTheAirTvshows, {
  loader as onTheAirTvShowLoader,
} from "./pages/OnTheAirTvshows";
import PopularTvshows, {
  loader as popularTvShowLoader,
} from "./pages/PopularTvshows";
import TopRatedTvshows, {
  loader as topRatedTvShowLoader,
} from "./pages/TopRatedTvshows";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: trendingLoader,
      },
      {
        path: "movies",
        element: <MoviesRootLayout />,
        children: [
          {
            path: "popular/:page?",
            element: <PopularMovies />,
            loader: popularMoviesLoader,
          },
          {
            path: "toprated/:page?",
            element: <TopRatedMovies />,
            loader: topRatedMoviesLoader,
          },
          {
            path: "upcoming/:page?",
            element: <UpcomingMovies />,
            loader: upcomingMoviesLoader,
          },
          { path: ":movieID", element: <MovieDetailPage /> },
        ],
      },
      {
        path: "tvshows",
        element: <TvshowsRootLayout />,
        children: [
          {
            path: "popular/:page?",
            element: <PopularTvshows />,
            loader: popularTvShowLoader,
          },
          {
            path: "toprated/:page?",
            element: <TopRatedTvshows />,
            loader: topRatedTvShowLoader,
          },
          {
            path: "ontheair/:page?",
            element: <OnTheAirTvshows />,
            loader: onTheAirTvShowLoader,
          },
          { path: ":tvshowID", element: <TvshowDetailPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
/*
Images
  base url -https://image.tmdb.org/t/p/
  image formats - w1280 w342

Discover
  movies - https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=true&page=1
  tv shows - https://api.themoviedb.org/3/discover/tv?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&page=1

Trending 
  all - https://api.themoviedb.org/3/trending/all/week?api_key=<<api_key>>

Multi-Search
  all - https://api.themoviedb.org/3/search/multi?api_key=<<api_key>>&language=en-US&query=<<query%20>>&page=1&include_adult=true

Movie
  details - https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  credits - https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
  recommendations - https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=<<api_key>>&language=en-US&page=1
  trailer - https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
  popular - https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
  top rated - https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1
  upcoming - https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1

Tv Shows
  details - https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US
  recommendations - https://api.themoviedb.org/3/tv/{tv_id}/recommendations?api_key=<<api_key>>&language=en-US&page=1
  videos - https://api.themoviedb.org/3/tv/{tv_id}/videos?api_key=<<api_key>>&language=en-US
  on the air - https://api.themoviedb.org/3/tv/on_the_air?api_key=<<api_key>>&language=en-US&page=1
  popular - https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
  top rated - https://api.themoviedb.org/3/tv/top_rated?api_key=<<api_key>>&language=en-US&page=1

HOMEPAGE
 {
  Trending

 MOVIES SECTION
  {
    Discover
    Popular
    Top Rated
    Upcoming
  }
 
 TV SHOWS
  {
    Discover
    Popular
    Top Rated
    On the Air
  }
}

 Things to add: 
 (.)(.)- Api requests for all sections of the homepage
 - Movies and Tv shows page with a filter default would be popular
 - Trending page
 - Error Page
 - Adult filter using redux (Just safe search toggle on nav)
 - Footer
 - Search bar css for profile and other information
 - Movie/tvshow/profile details page
 - Media queries

 Just use loaders for each of the individual pages and use a normal get request for the sections
 */
