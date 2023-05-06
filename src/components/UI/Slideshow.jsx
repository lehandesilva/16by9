import { useState, useEffect } from "react";
import classes from "./Slideshow.module.css";

const MOCKDATA = [
  {
    adult: false,
    backdrop_path: "/fh7aM10THQzivGU7kAkgKrgzot4.jpg",
    id: 493529,
    title: "Dungeons & Dragons: Honor Among Thieves",
    original_language: "en",
    original_title: "Dungeons & Dragons: Honor Among Thieves",
    overview:
      "A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
    poster_path: "/v7UF7ypAqjsFZFdjksjQ7IUpXdn.jpg",
    media_type: "movie",
    genre_ids: [12, 14, 35],
    popularity: 994.451,
    release_date: "2023-03-23",
    video: false,
    vote_average: 7.527,
    vote_count: 736,
  },
  {
    adult: false,
    backdrop_path: "/gMJngTNfaqCSCqGD4y8lVMZXKDn.jpg",
    id: 640146,
    title: "Ant-Man and the Wasp: Quantumania",
    original_language: "en",
    original_title: "Ant-Man and the Wasp: Quantumania",
    overview:
      "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
    poster_path: "/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
    media_type: "movie",
    genre_ids: [28, 12, 878],
    popularity: 5677.055,
    release_date: "2023-02-15",
    video: false,
    vote_average: 6.572,
    vote_count: 2182,
  },
  {
    adult: false,
    backdrop_path: "/44immBwzhDVyjn87b3x3l9mlhAD.jpg",
    id: 934433,
    title: "Scream VI",
    original_language: "en",
    original_title: "Scream VI",
    overview:
      "Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter.",
    poster_path: "/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg",
    media_type: "movie",
    genre_ids: [27, 9648, 53],
    popularity: 2196.75,
    release_date: "2023-03-08",
    video: false,
    vote_average: 7.367,
    vote_count: 957,
  },
  {
    adult: false,
    backdrop_path: "/hiHGRbyTcbZoLsYYkO4QiCLYe34.jpg",
    id: 758323,
    title: "The Pope's Exorcist",
    original_language: "en",
    original_title: "The Pope's Exorcist",
    overview:
      "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
    poster_path: "/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg",
    media_type: "movie",
    genre_ids: [27, 9648, 53],
    popularity: 3525.578,
    release_date: "2023-04-05",
    video: false,
    vote_average: 7.3,
    vote_count: 364,
  },
  {
    adult: false,
    backdrop_path: "/4IYRAyTbpL05xHqCii5lMTtxMHO.jpg",
    id: 447365,
    title: "Guardians of the Galaxy Volume 3",
    original_language: "en",
    original_title: "Guardians of the Galaxy Volume 3",
    overview:
      "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    poster_path: "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    media_type: "movie",
    genre_ids: [878, 12, 28],
    popularity: 1092.82,
    release_date: "2023-05-03",
    video: false,
    vote_average: 8.5,
    vote_count: 185,
  },
  {
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
    popularity: 4102.971,
    release_date: "2023-04-05",
    video: false,
    vote_average: 7.484,
    vote_count: 1744,
  },
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === MOCKDATA.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );
    return () => {};
  }, [index]);

  return (
    <>
      <div className={classes.slideshow}>
        <div
          className={classes.slideshowSlider}
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          <div className={classes.slide}>
            {MOCKDATA.map((item) => (
              <img
                className={classes.heroImg}
                src={"https://image.tmdb.org/t/p/w1280" + item.backdrop_path}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={classes.movieInfo}>
        <p className={classes.year}>
          {MOCKDATA[index].release_date.slice(0, 4)}
        </p>
        <h1 className={classes.title}>{MOCKDATA[index].title}</h1>
        <p className={classes.overview}>{MOCKDATA[index].overview}</p>
        <p className={classes.genre}></p>
        <p className={classes.genre}></p>
        <p className={classes.genre}></p>
        <p className={classes.rating}>
          {MOCKDATA[index].vote_average.toFixed(1)}
        </p>
      </div>
    </>
  );
};

export default Slideshow;
