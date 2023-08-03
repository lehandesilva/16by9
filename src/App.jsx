import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import Homepage, { loader as trendingLoader } from "./pages/Homepage";
import DiscoverRootLayout from "./pages/DiscoverRootLayout";
const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage"));
const TvshowDetailPage = lazy(() => import("./pages/TvshowDetailPage"));
const PersonDetailPage = lazy(() => import("./pages/PersonDetailPage"));
const PopularMovies = lazy(() => import("./pages/PopularMovies"));
const TopRatedMovies = lazy(() => import("./pages/TopRatedMovies"));
const UpcomingMovies = lazy(() => import("./pages/UpcomingMovies"));
const OnTheAirTvshows = lazy(() => import("./pages/OnTheAirTvshows"));
const PopularTvshows = lazy(() => import("./pages/PopularTvshows"));
const TopRatedTvshows = lazy(() => import("./pages/TopRatedTvshows"));
const TrendingAll = lazy(() => import("./pages/TrendingAllPage"));
const TrendingMovies = lazy(() => import("./pages/TrendingMoviesPage"));
const TrendingTvshows = lazy(() => import("./pages/TrendingTvshows"));
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
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <TrendingAll />
              </Suspense>
            ),
            loader: (meta) =>
              import("./pages/TrendingAllPage").then((module) =>
                module.loader(meta)
              ),
          },
          {
            path: "movies",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <TrendingMovies />
              </Suspense>
            ),
            loader: (meta) =>
              import("./pages/TrendingMoviesPage").then((module) =>
                module.loader(meta)
              ),
          },
          {
            path: "tvshows",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <TrendingTvshows />
              </Suspense>
            ),
            loader: (meta) =>
              import("./pages/TrendingTvshows").then((module) =>
                module.loader(meta)
              ),
          },
        ],
      },
      {
        path: "movies",
        element: <DiscoverRootLayout />,
        children: [
          {
            path: "popular/:page?/:genre?",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <PopularMovies />
              </Suspense>
            ),
            loader: (meta) =>
              import("./pages/PopularMovies").then((module) =>
                module.loader(meta)
              ),
          },
          {
            path: "toprated/:page?/:genre?",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <TopRatedMovies />
              </Suspense>
            ),
            loader: (meta) =>
              import("./pages/TopRatedMovies").then((module) =>
                module.loader(meta)
              ),
          },
          {
            path: "upcoming/:page?",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <UpcomingMovies />
              </Suspense>
            ),
            loader: (meta) =>
              import("./pages/UpcomingMovies").then((module) =>
                module.loader(meta)
              ),
          },
          {
            path: ":movieID",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <MovieDetailPage />
              </Suspense>
            ),
            loader: (meta) =>
              import("./pages/MovieDetailPage").then((module) =>
                module.loader(meta)
              ),
          },
        ],
      },
      {
        path: "tvshows",
        element: <DiscoverRootLayout />,
        children: [
          {
            path: "popular/:page?/:genre?",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <PopularTvshows />
              </Suspense>
            ),
            loader: (meta) =>
              import("./pages/PopularTvshows").then((module) =>
                module.loader(meta)
              ),
          },
          {
            path: "toprated/:page?/:genre?",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <TopRatedTvshows />
              </Suspense>
            ),
            loader: (meta) =>
              import("./pages/TopRatedTvshows").then((module) =>
                module.loader(meta)
              ),
          },
          {
            path: "ontheair/:page?",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <OnTheAirTvshows />
              </Suspense>
            ),
            loader: (meta) =>
              import("./pages/OnTheAirTvshows").then((module) =>
                module.loader(meta)
              ),
          },
          {
            path: ":tvshowID",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <TvshowDetailPage />
              </Suspense>
            ),
            loader: (meta) =>
              import("./pages/TvshowDetailPage").then((module) =>
                module.loader(meta)
              ),
          },
        ],
      },
      {
        path: "person",
        element: <DiscoverRootLayout />,
        children: [
          {
            path: ":personID",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <PersonDetailPage />
              </Suspense>
            ),
            loader: (meta) =>
              import("./pages/PersonDetailPage").then((module) =>
                module.loader(meta)
              ),
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
