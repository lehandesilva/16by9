import { useState, useEffect } from "react";
import classes from "./Slideshow.module.css";

const MOCKDATA = [
  {
    adult: false,
    backdrop_path: "/3CxUndGhUcZdt1Zggjdb2HkLLQX.jpg",
    genre_ids: [28, 12, 878],
    id: 640146,
    original_language: "en",
    original_title: "Ant-Man and the Wasp: Quantumania",
    overview:
      "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
    popularity: 5012.25,
    poster_path: "/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
    release_date: "2023-02-15",
    title: "Ant-Man and the Wasp: Quantumania",
    video: false,
    vote_average: 6.6,
    vote_count: 2198,
  },
  {
    adult: false,
    backdrop_path: "/hiHGRbyTcbZoLsYYkO4QiCLYe34.jpg",
    genre_ids: [27, 9648, 53],
    id: 758323,
    original_language: "en",
    original_title: "The Pope's Exorcist",
    overview:
      "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
    popularity: 4935.809,
    poster_path: "/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg",
    release_date: "2023-04-05",
    title: "The Pope's Exorcist",
    video: false,
    vote_average: 7.4,
    vote_count: 400,
  },
  {
    adult: false,
    backdrop_path: "/iJQIbOPm81fPEGKt5BPuZmfnA54.jpg",
    genre_ids: [16, 12, 10751, 14, 35],
    id: 502356,
    original_language: "en",
    original_title: "The Super Mario Bros. Movie",
    overview:
      "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
    popularity: 4137.922,
    poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    release_date: "2023-04-05",
    title: "The Super Mario Bros. Movie",
    video: false,
    vote_average: 7.5,
    vote_count: 1760,
  },
  {
    adult: false,
    backdrop_path: "/b9UCfDzwiWw7mIFsIQR9ZJUeh7q.jpg",
    genre_ids: [10749, 28, 35],
    id: 868759,
    original_language: "en",
    original_title: "Ghosted",
    overview:
      "Salt-of-the-earth Cole falls head over heels for enigmatic Sadie — but then makes the shocking discovery that she’s a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.",
    popularity: 3123.29,
    poster_path: "/liLN69YgoovHVgmlHJ876PKi5Yi.jpg",
    release_date: "2023-04-18",
    title: "Ghosted",
    video: false,
    vote_average: 7.2,
    vote_count: 594,
  },
  {
    adult: false,
    backdrop_path: "/nDxJJyA5giRhXx96q1sWbOUjMBI.jpg",
    genre_ids: [28, 35, 14, 12],
    id: 594767,
    original_language: "en",
    original_title: "Shazam! Fury of the Gods",
    overview:
      'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.',
    popularity: 2844.72,
    poster_path: "/2VK4d3mqqTc7LVZLnLPeRiPaJ71.jpg",
    release_date: "2023-03-15",
    title: "Shazam! Fury of the Gods",
    video: false,
    vote_average: 6.8,
    vote_count: 1459,
  },
  {
    adult: false,
    backdrop_path: "/8rpDcsfLJypbO6vREc0547VKqEv.jpg",
    genre_ids: [878, 12, 28],
    id: 76600,
    original_language: "en",
    original_title: "Avatar: The Way of Water",
    overview:
      "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    popularity: 2244.6,
    poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    release_date: "2022-12-14",
    title: "Avatar: The Way of Water",
    video: false,
    vote_average: 7.7,
    vote_count: 7768,
  },
  {
    adult: false,
    backdrop_path: "/44immBwzhDVyjn87b3x3l9mlhAD.jpg",
    genre_ids: [27, 9648, 53],
    id: 934433,
    original_language: "en",
    original_title: "Scream VI",
    overview:
      "Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter.",
    popularity: 2017.591,
    poster_path: "/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg",
    release_date: "2023-03-08",
    title: "Scream VI",
    video: false,
    vote_average: 7.4,
    vote_count: 967,
  },
  {
    adult: false,
    backdrop_path: "/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",
    genre_ids: [18, 28],
    id: 677179,
    original_language: "en",
    original_title: "Creed III",
    overview:
      "After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damian — a fighter who has nothing to lose.",
    popularity: 1806.939,
    poster_path: "/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
    release_date: "2023-03-01",
    title: "Creed III",
    video: false,
    vote_average: 7.3,
    vote_count: 1270,
  },
  {
    adult: false,
    backdrop_path: "/xwA90BwZXTh8ke3CVsQlj8EOkFr.jpg",
    genre_ids: [28, 12, 36, 18, 10752],
    id: 948713,
    original_language: "en",
    original_title: "The Last Kingdom: Seven Kings Must Die",
    overview:
      "In the wake of King Edward's death, Uhtred of Bebbanburg and his comrades adventure across a fractured kingdom in the hopes of uniting England at last.",
    popularity: 1541.653,
    poster_path: "/7yyFEsuaLGTPul5UkHc5BhXnQ0k.jpg",
    release_date: "2023-04-14",
    title: "The Last Kingdom: Seven Kings Must Die",
    video: false,
    vote_average: 7.3,
    vote_count: 301,
  },
  {
    adult: false,
    backdrop_path: "/3pF4tO8vIRMO98NsNjxb9EZkgbj.jpg",
    genre_ids: [878, 12, 28],
    id: 447365,
    original_language: "en",
    original_title: "Guardians of the Galaxy Volume 3",
    overview:
      "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    popularity: 1529.948,
    poster_path: "/y0G2ybLpVwIxYaPLT1qkn8J5o44.jpg",
    release_date: "2023-05-03",
    title: "Guardians of the Galaxy Volume 3",
    video: false,
    vote_average: 8.4,
    vote_count: 272,
  },
  {
    adult: false,
    backdrop_path: "/cWDWUkIR22FSlxokhaNrT6jqX3n.jpg",
    genre_ids: [12, 14, 35],
    id: 493529,
    original_language: "en",
    original_title: "Dungeons & Dragons: Honor Among Thieves",
    overview:
      "A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
    popularity: 1392.231,
    poster_path: "/v7UF7ypAqjsFZFdjksjQ7IUpXdn.jpg",
    release_date: "2023-03-23",
    title: "Dungeons & Dragons: Honor Among Thieves",
    video: false,
    vote_average: 7.5,
    vote_count: 762,
  },
  {
    adult: false,
    backdrop_path: "/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
    genre_ids: [28, 53, 80],
    id: 603692,
    original_language: "en",
    original_title: "John Wick: Chapter 4",
    overview:
      "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    popularity: 1166.275,
    poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    release_date: "2023-03-22",
    title: "John Wick: Chapter 4",
    video: false,
    vote_average: 7.9,
    vote_count: 1311,
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
      8000
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
                src={"https://image.tmdb.org/t/p/original" + item.backdrop_path}
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
