import Card from "../UI/Card";
import Grid from "../UI/Grid";

const MOCKDATa = [
  {
    adult: false,
    backdrop_path: "/qmEKe0AEsns2WXinbkGxlCxlTHq.jpg",
    id: 493529,
    title: "Dungeons & Dragons: Honor Among Thieves",
    original_language: "en",
    original_title: "Dungeons & Dragons: Honor Among Thieves",
    overview:
      "A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
    poster_path: "/v7UF7ypAqjsFZFdjksjQ7IUpXdn.jpg",
    media_type: "movie",
    genre_ids: [12, 14, 35],
    popularity: 1392.231,
    release_date: "2023-03-23",
    video: false,
    vote_average: 7.55,
    vote_count: 805,
  },
  {
    adult: false,
    backdrop_path: "/3pF4tO8vIRMO98NsNjxb9EZkgbj.jpg",
    id: 447365,
    title: "Guardians of the Galaxy Volume 3",
    original_language: "en",
    original_title: "Guardians of the Galaxy Volume 3",
    overview:
      "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    poster_path: "/y0G2ybLpVwIxYaPLT1qkn8J5o44.jpg",
    media_type: "movie",
    genre_ids: [878, 12, 28],
    popularity: 1529.948,
    release_date: "2023-05-03",
    video: false,
    vote_average: 8.4,
    vote_count: 364,
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
    popularity: 4935.809,
    release_date: "2023-04-05",
    video: false,
    vote_average: 7.428,
    vote_count: 447,
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
    popularity: 5012.25,
    release_date: "2023-02-15",
    video: false,
    vote_average: 6.58,
    vote_count: 2226,
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
    popularity: 2017.591,
    release_date: "2023-03-08",
    video: false,
    vote_average: 7.36,
    vote_count: 979,
  },
  {
    adult: false,
    backdrop_path: "/iJQIbOPm81fPEGKt5BPuZmfnA54.jpg",
    id: 502356,
    title: "The Super Mario Bros. Movie",
    original_language: "en",
    original_title: "The Super Mario Bros. Movie",
    overview:
      "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
    poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    media_type: "movie",
    genre_ids: [16, 12, 10751, 14, 35],
    popularity: 4137.922,
    release_date: "2023-04-05",
    video: false,
    vote_average: 7.496,
    vote_count: 1779,
  },
  {
    adult: false,
    backdrop_path: "/8HfjrSxfTVKmjNh8cJjbu5eXzcX.jpg",
    id: 420808,
    title: "Peter Pan & Wendy",
    original_language: "en",
    original_title: "Peter Pan & Wendy",
    overview:
      "Wendy Darling, a young girl afraid to leave her childhood home behind, meets Peter Pan, a boy who refuses to grow up. Alongside her brothers and a tiny fairy, Tinker Bell, she travels with Peter to the magical world of Neverland. There, she encounters an evil pirate captain, Captain Hook, and embarks on a thrilling adventure that will change her life forever.",
    poster_path: "/9NXAlFEE7WDssbXSMgdacsUD58Y.jpg",
    media_type: "movie",
    genre_ids: [10751, 14, 28, 12],
    popularity: 855.771,
    release_date: "2023-04-20",
    video: false,
    vote_average: 5.921,
    vote_count: 246,
  },
  {
    adult: false,
    backdrop_path: "/e7FzphKs5gzoghDotAEp2FeP46u.jpg",
    id: 649609,
    title: "Renfield",
    original_language: "en",
    original_title: "Renfield",
    overview:
      "Having grown sick and tired of his centuries as Dracula's lackey, Renfield finds a new lease on life — and maybe even redemption — when he falls for feisty, perennially angry traffic cop Rebecca Quincy.",
    poster_path: "/p6yUjhvNGQpFZilKwOKbxQ1eHlo.jpg",
    media_type: "movie",
    genre_ids: [27, 35, 14],
    popularity: 406.659,
    release_date: "2023-04-07",
    video: false,
    vote_average: 7.3,
    vote_count: 239,
  },
  {
    adult: false,
    backdrop_path: "/b9UCfDzwiWw7mIFsIQR9ZJUeh7q.jpg",
    id: 868759,
    title: "Ghosted",
    original_language: "en",
    original_title: "Ghosted",
    overview:
      "Salt-of-the-earth Cole falls head over heels for enigmatic Sadie — but then makes the shocking discovery that she’s a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.",
    poster_path: "/liLN69YgoovHVgmlHJ876PKi5Yi.jpg",
    media_type: "movie",
    genre_ids: [10749, 28, 35],
    popularity: 3123.29,
    release_date: "2023-04-18",
    video: false,
    vote_average: 7.203,
    vote_count: 606,
  },
  {
    adult: false,
    backdrop_path: "/8rpDcsfLJypbO6vREc0547VKqEv.jpg",
    id: 76600,
    title: "Avatar: The Way of Water",
    original_language: "en",
    original_title: "Avatar: The Way of Water",
    overview:
      "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    media_type: "movie",
    genre_ids: [878, 12, 28],
    popularity: 2244.6,
    release_date: "2022-12-14",
    video: false,
    vote_average: 7.71,
    vote_count: 7788,
  },
  {
    adult: false,
    backdrop_path: "/3cgRI0hOq3dYyezSYrsfdmqxtMw.jpg",
    id: 114922,
    name: "Citadel",
    original_language: "en",
    original_name: "Citadel",
    overview:
      "What if you lost your memory? What if a spy didn’t know they were a spy? Years ago, the top agents of Citadel, Mason Kane and Nadia Sinh, had their minds wiped. But, they’re called back to action as sinister forces emerge from the past. With the help of spymaster Bernard Orlick, these former lovers must remember the past to save the future.",
    poster_path: "/AcrDB32TqpAGwvQFbICALGxSzn3.jpg",
    media_type: "tv",
    genre_ids: [18, 80, 10759],
    popularity: 366.012,
    first_air_date: "2023-04-27",
    vote_average: 8.241,
    vote_count: 56,
    origin_country: ["US"],
  },
  {
    adult: false,
    backdrop_path: "/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg",
    id: 713704,
    title: "Evil Dead Rise",
    original_language: "en",
    original_title: "Evil Dead Rise",
    overview:
      "Two sisters find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
    poster_path: "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
    media_type: "movie",
    genre_ids: [27],
    popularity: 1136.358,
    release_date: "2023-04-12",
    video: false,
    vote_average: 7.049,
    vote_count: 360,
  },
];

const Trending = () => {
  return (
    <>
      <h1>Trending</h1>
      <Grid>
        {MOCKDATa.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            type={item.media_type}
            imgUrl={item.poster_path}
            name={item.title ? item.title : item.name}
            rating={item.vote_average.toFixed(1)}
          />
        ))}
      </Grid>
    </>
  );
};

export default Trending;
