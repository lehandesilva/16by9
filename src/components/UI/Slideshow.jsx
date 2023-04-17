import { useState } from "react";
import classes from "./Slideshow.module.css";
import { useEffect } from "react";
import { useRef } from "react";

const MOCKDATA = [
  {
    key: 0,
    adult: false,
    backdrop_path: "/ytdebEE0ndYLSTEctPgh8e0vaBs.jpg",
    id: 76600,
    title: "Avatar: The Way of Water",
    original_language: "en",
    original_title: "Avatar: The Way of Water",
    overview:
      "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    media_type: "movie",
    genre_ids: [878, 12, 28],
    popularity: 5473.256,
    release_date: "2022-12-14",
    video: false,
    vote_average: 7.743,
    vote_count: 6934,
  },
  {
    key: 1,
    adult: false,
    backdrop_path: "/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg",
    id: 603692,
    title: "John Wick: Chapter 4",
    original_language: "en",
    original_title: "John Wick: Chapter 4",
    overview:
      "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    media_type: "movie",
    genre_ids: [28, 53, 80],
    popularity: 1924.929,
    release_date: "2023-03-22",
    video: false,
    vote_average: 7.994,
    vote_count: 961,
  },
  {
    key: 2,
    adult: false,
    backdrop_path: "/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",
    id: 677179,
    title: "Creed III",
    original_language: "en",
    original_title: "Creed III",
    overview:
      "After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damien Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damien — a fighter who has nothing to lose.",
    poster_path: "/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
    media_type: "movie",
    genre_ids: [18, 28],
    popularity: 6029.319,
    release_date: "2023-03-01",
    video: false,
    vote_average: 7.299,
    vote_count: 919,
  },
  {
    key: 3,
    adult: false,
    backdrop_path: "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
    id: 502356,
    title: "The Super Mario Bros. Movie",
    original_language: "en",
    original_title: "The Super Mario Bros. Movie",
    overview:
      "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
    poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    media_type: "movie",
    genre_ids: [16, 12, 10751, 14, 35],
    popularity: 9513.942,
    release_date: "2023-04-05",
    video: false,
    vote_average: 7.554,
    vote_count: 605,
  },
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  const clickHandler = (id) => {
    setIndex(id);
  };

  // useEffect(() => {
  //   setTimeout(
  //     () =>
  //       setIndex((prevIndex) =>
  //         prevIndex === MOCKDATA.length - 1 ? 0 : prevIndex + 1
  //       ),
  //     10000
  //   );
  //   return () => {};
  // }, [index]);

  return (
    <>
      {MOCKDATA.map((item) => (
        <div key={item.key} className={classes.slide}>
          <img
            className={classes.heroImg}
            src={"https://image.tmdb.org/t/p/w1280" + item.backdrop_path}
          />
          <div className={classes.movieInfo}>
            <p className={classes.year}>{item.release_date.slice(0, 4)}</p>
            <h1 className={classes.title}>{item.title}</h1>
            <p className={classes.overview}>{item.overview}</p>
            <p className={classes.genre}></p>
            <p className={classes.genre}></p>
            <p className={classes.genre}></p>
            <p className={classes.rating}>{item.vote_average.toFixed(1)}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Slideshow;
