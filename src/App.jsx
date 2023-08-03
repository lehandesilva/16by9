import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import Homepage, { loader as trendingLoader } from "./pages/Homepage";
import DiscoverRootLayout from "./pages/DiscoverRootLayout";
import MovieDetailPage, {
  loader as MovieDetailLoader,
} from "./pages/MovieDetailPage";
import TvshowDetailPage, {
  loader as TvshowDetailLoader,
} from "./pages/TvshowDetailPage";
import PersonDetailPage, {
  loader as personDetailLoader,
} from "./pages/PersonDetailPage";
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
import TrendingAll, {
  loader as TrendingAllLoader,
} from "./pages/TrendingAllPage";
import TrendingMovies, {
  loader as TrendingMoviesLoader,
} from "./pages/TrendingMoviesPage";
import TrendingTvshows, {
  loader as TrendingTvshowsLoader,
} from "./pages/TrendingTvshows";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: trendingLoader,
      },
      {
        path: "trending",
        element: <DiscoverRootLayout />,
        children: [
          {
            path: "all",
            element: <TrendingAll />,
            loader: TrendingAllLoader,
          },
          {
            path: "movies",
            element: <TrendingMovies />,
            loader: TrendingMoviesLoader,
          },
          {
            path: "tvshows",
            element: <TrendingTvshows />,
            loader: TrendingTvshowsLoader,
          },
        ],
      },
      {
        path: "movies",
        element: <DiscoverRootLayout />,
        children: [
          {
            path: "popular/:page?/:genre?",
            element: <PopularMovies />,
            loader: popularMoviesLoader,
          },
          {
            path: "toprated/:page?/:genre?",
            element: <TopRatedMovies />,
            loader: topRatedMoviesLoader,
          },
          {
            path: "upcoming/:page?",
            element: <UpcomingMovies />,
            loader: upcomingMoviesLoader,
          },
          {
            path: ":movieID",
            element: <MovieDetailPage />,
            loader: MovieDetailLoader,
          },
        ],
      },
      {
        path: "tvshows",
        element: <DiscoverRootLayout />,
        children: [
          {
            path: "popular/:page?/:genre?",
            element: <PopularTvshows />,
            loader: popularTvShowLoader,
          },
          {
            path: "toprated/:page?/:genre?",
            element: <TopRatedTvshows />,
            loader: topRatedTvShowLoader,
          },
          {
            path: "ontheair/:page?",
            element: <OnTheAirTvshows />,
            loader: onTheAirTvShowLoader,
          },
          {
            path: ":tvshowID",
            element: <TvshowDetailPage />,
            loader: TvshowDetailLoader,
          },
        ],
      },
      {
        path: "person",
        element: <DiscoverRootLayout />,
        children: [
          {
            path: ":personID",
            element: <PersonDetailPage />,
            loader: personDetailLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
