import PageContent from "../components/Layout/PageContent";

const results = [
  {
    adult: false,
    backdrop_path: "/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
    id: 603692,
    title: "John Wick: Chapter 4",
    original_language: "en",
    original_title: "John Wick: Chapter 4",
    overview:
      "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    media_type: "movie",
    genre_ids: [28, 53, 80],
    popularity: 4456.007,
    release_date: "2023-03-22",
    video: false,
    vote_average: 7.948,
    vote_count: 2696,
  },
  {
    adult: false,
    backdrop_path: "/2I5eBh98Q4aPq8WdQrHdTC8ARhY.jpg",
    id: 569094,
    title: "Spider-Man: Across the Spider-Verse",
    original_language: "en",
    original_title: "Spider-Man: Across the Spider-Verse",
    overview:
      "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
    poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    media_type: "movie",
    genre_ids: [28, 12, 16, 878],
    popularity: 2921.844,
    release_date: "2023-05-31",
    video: false,
    vote_average: 8.8,
    vote_count: 775,
  },
  {
    adult: false,
    backdrop_path: "/2klQ1z1fcHGgQPevbEQdkCnzyuS.jpg",
    id: 502356,
    title: "The Super Mario Bros. Movie",
    original_language: "en",
    original_title: "The Super Mario Bros. Movie",
    overview:
      "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
    poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    media_type: "movie",
    genre_ids: [16, 10751, 12, 14, 35],
    popularity: 3392.2,
    release_date: "2023-04-05",
    video: false,
    vote_average: 7.809,
    vote_count: 4361,
  },
  {
    adult: false,
    backdrop_path: "/4t0oBFrJyweYPt0hocW6RUa0b6H.jpg",
    id: 385687,
    title: "Fast X",
    original_language: "en",
    original_title: "Fast X",
    overview:
      "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
    poster_path: "/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
    media_type: "movie",
    genre_ids: [28, 80, 53],
    popularity: 2334.66,
    release_date: "2023-05-17",
    video: false,
    vote_average: 7.1,
    vote_count: 860,
  },
  {
    adult: false,
    backdrop_path: "/1IM8i8HiomFC4y6NRyBuDrHJWg3.jpg",
    id: 447277,
    title: "The Little Mermaid",
    original_language: "en",
    original_title: "The Little Mermaid",
    overview:
      "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
    poster_path: "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
    media_type: "movie",
    genre_ids: [12, 10751, 14, 10749],
    popularity: 1482.026,
    release_date: "2023-05-18",
    video: false,
    vote_average: 6.088,
    vote_count: 519,
  },
  {
    adult: false,
    backdrop_path: "/bqMWZ5hB7bcI1KK2TH29odwCgWX.jpg",
    id: 493529,
    title: "Dungeons & Dragons: Honor Among Thieves",
    original_language: "en",
    original_title: "Dungeons & Dragons: Honor Among Thieves",
    overview:
      "A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
    poster_path: "/A7AoNT06aRAc4SV89Dwxj3EYAgC.jpg",
    media_type: "movie",
    genre_ids: [12, 14, 35],
    popularity: 458.887,
    release_date: "2023-03-23",
    video: false,
    vote_average: 7.465,
    vote_count: 1609,
  },
  {
    adult: false,
    backdrop_path: "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
    id: 447365,
    title: "Guardians of the Galaxy Vol. 3",
    original_language: "en",
    original_title: "Guardians of the Galaxy Vol. 3",
    overview:
      "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    poster_path: "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    media_type: "movie",
    genre_ids: [878, 12, 28],
    popularity: 1080.396,
    release_date: "2023-05-03",
    video: false,
    vote_average: 8.129,
    vote_count: 1841,
  },
  {
    adult: false,
    backdrop_path: "/m8JTwHFwX7I7JY5fPe4SjqejWag.jpg",
    id: 640146,
    title: "Ant-Man and the Wasp: Quantumania",
    original_language: "en",
    original_title: "Ant-Man and the Wasp: Quantumania",
    overview:
      "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
    poster_path: "/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg",
    media_type: "movie",
    genre_ids: [28, 12, 878],
    popularity: 1166.051,
    release_date: "2023-02-15",
    video: false,
    vote_average: 6.493,
    vote_count: 3148,
  },
  {
    adult: false,
    backdrop_path: "/rH3jY9JN9krUyE0Q3WLNtujMs8.jpg",
    id: 667538,
    title: "Transformers: Rise of the Beasts",
    original_language: "en",
    original_title: "Transformers: Rise of the Beasts",
    overview:
      "A '90s globetrotting adventure that introduces the Maximals, Predacons, and Terrorcons to the existing battle on earth between Autobots and Decepticons.",
    poster_path: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    media_type: "movie",
    genre_ids: [28, 12, 878],
    popularity: 729.835,
    release_date: "2023-06-06",
    video: false,
    vote_average: 8.517,
    vote_count: 30,
  },
  {
    adult: false,
    backdrop_path: "/vQ5T84t8h4N2xAswNFW9fkVIyZq.jpg",
    id: 536437,
    title: "Hypnotic",
    original_language: "en",
    original_title: "Hypnotic",
    overview:
      "A detective becomes entangled in a mystery involving his missing daughter and a secret government program while investigating a string of reality-bending crimes.",
    poster_path: "/3IhGkkalwXguTlceGSl8XUJZOVI.jpg",
    media_type: "movie",
    genre_ids: [80, 9648, 53],
    popularity: 489.46,
    release_date: "2023-05-11",
    video: false,
    vote_average: 6.6,
    vote_count: 113,
  },
  {
    adult: false,
    backdrop_path: "/rmmKVswMSMJfBxPAe4rn5jN2Tb0.jpg",
    id: 221300,
    name: "FUBAR",
    original_language: "en",
    original_name: "FUBAR",
    overview:
      "When a father and daughter discover they both secretly work for the CIA, an already dicey undercover mission turns into a dysfunctional family affair.",
    poster_path: "/6fM34tcGFp3A0csyxJJomknZB4b.jpg",
    media_type: "tv",
    genre_ids: [10759, 18, 35],
    popularity: 382.656,
    first_air_date: "2023-05-25",
    vote_average: 6.8,
    vote_count: 115,
    origin_country: ["US"],
  },
  {
    adult: false,
    backdrop_path: "/aAgGrfBwna1nO4M2USxwFgK5O0t.jpg",
    id: 713704,
    title: "Evil Dead Rise",
    original_language: "en",
    original_title: "Evil Dead Rise",
    overview:
      "Three siblings find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
    poster_path: "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
    media_type: "movie",
    genre_ids: [53, 27],
    popularity: 1218.785,
    release_date: "2023-04-12",
    video: false,
    vote_average: 7.07,
    vote_count: 1531,
  },
  {
    adult: false,
    backdrop_path: "/jbFkZSsmFFLjqZzxQHTBYyQb0RR.jpg",
    id: 135251,
    name: "The Idol",
    original_language: "en",
    original_name: "The Idol",
    overview:
      "After a nervous breakdown derailed Jocelyn's last tour, she’s determined to claim her rightful status as the greatest and sexiest pop star in America. Her passions are reignited by Tedros, a nightclub impresario with a sordid past. Will her romantic awakening take her to glorious new heights or the deepest and darkest depths of her soul?",
    poster_path: "/gO9k7t9jSdkkWVG0deMZDpELZGw.jpg",
    media_type: "tv",
    genre_ids: [18],
    popularity: 289.285,
    first_air_date: "2023-06-04",
    vote_average: 6.3,
    vote_count: 18,
    origin_country: ["US"],
  },
  {
    adult: false,
    backdrop_path: "/suw8eyL3YwE4wfzPQ0cLR02k0Gh.jpg",
    id: 76600,
    title: "Avatar: The Way of Water",
    original_language: "en",
    original_title: "Avatar: The Way of Water",
    overview:
      "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    media_type: "movie",
    genre_ids: [878, 12, 28],
    popularity: 984.223,
    release_date: "2022-12-14",
    video: false,
    vote_average: 7.703,
    vote_count: 8340,
  },
  {
    adult: false,
    backdrop_path: "/1V4SPkV3bQvl85zK4FqwTzdfBs4.jpg",
    id: 125988,
    name: "Silo",
    original_language: "en",
    original_name: "Silo",
    overview:
      "In a ruined and toxic future, a community exists in a giant underground silo that plunges hundreds of stories deep. There, men and women live in a society full of regulations they believe are meant to protect them.",
    poster_path: "/zBx1X06G1OlndbXTCZI13FECNz2.jpg",
    media_type: "tv",
    genre_ids: [10765, 18],
    popularity: 887.899,
    first_air_date: "2023-05-04",
    vote_average: 8.4,
    vote_count: 128,
    origin_country: ["US", "GB"],
  },
  {
    adult: false,
    backdrop_path: "/nTvM4mhqNlHIvUkI1gVnW6XP7GG.jpg",
    id: 85937,
    name: "Demon Slayer: Kimetsu no Yaiba",
    original_language: "ja",
    original_name: "鬼滅の刃",
    overview:
      "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.",
    poster_path: "/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
    media_type: "tv",
    genre_ids: [16, 10759, 10765],
    popularity: 266.229,
    first_air_date: "2019-04-06",
    vote_average: 8.699,
    vote_count: 5264,
    origin_country: ["JP"],
  },
  {
    adult: false,
    backdrop_path: "/fUVK7iUF0k9dU3MwV5MIKWMKGys.jpg",
    id: 298618,
    title: "The Flash",
    original_language: "en",
    original_title: "The Flash",
    overview:
      "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
    poster_path: "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    media_type: "movie",
    genre_ids: [878, 28, 12],
    popularity: 366.46,
    release_date: "2023-06-05",
    video: false,
    vote_average: 8.1,
    vote_count: 8,
  },
  {
    adult: false,
    backdrop_path: "/aEHwpKJyLB56AqR7SPBje5L8M79.jpg",
    id: 961718,
    title: "Medellin",
    original_language: "fr",
    original_title: "Medellin",
    overview:
      "To save his little brother from the hands of dangerous narcos of the Medellín cartel, Reda has a plan that is as simple as it is totally insane: put together a team and raid Colombia. But this adventure is going to get completely out of control when he decides to kidnap the son of the cartel leader to exchange him for his brother's life.",
    poster_path: "/jKFOQ5LNQuIWGLdB2WhVlSUcS6F.jpg",
    media_type: "movie",
    genre_ids: [28, 35],
    popularity: 194.757,
    release_date: "2023-06-01",
    video: false,
    vote_average: 5.647,
    vote_count: 51,
  },
  {
    adult: false,
    backdrop_path: "/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg",
    id: 700391,
    title: "65",
    original_language: "en",
    original_title: "65",
    overview:
      "65 million years ago, the only 2 survivors of a spaceship from Somaris that crash-landed on Earth must fend off dinosaurs and reach the escape vessel in time before an imminent asteroid strike threatens to destroy the planet.",
    poster_path: "/rzRb63TldOKdKydCvWJM8B6EkPM.jpg",
    media_type: "movie",
    genre_ids: [878, 12, 53],
    popularity: 231.314,
    release_date: "2023-03-02",
    video: false,
    vote_average: 6.231,
    vote_count: 1175,
  },
  {
    adult: false,
    backdrop_path: "/eGPrOVaXp5gGFmm1gTYFhtTCeps.jpg",
    id: 114922,
    name: "Citadel",
    original_language: "en",
    original_name: "Citadel",
    overview:
      "What if you lost your memory? What if a spy didn’t know they were a spy? Years ago, the top agents of Citadel, Mason Kane and Nadia Sinh, had their minds wiped. But, they’re called back to action as sinister forces emerge from the past. With the help of spymaster Bernard Orlick, these former lovers must remember the past to save the future.",
    poster_path: "/AcrDB32TqpAGwvQFbICALGxSzn3.jpg",
    media_type: "tv",
    genre_ids: [18, 80, 10759],
    popularity: 385.812,
    first_air_date: "2023-04-27",
    vote_average: 7.344,
    vote_count: 179,
    origin_country: ["US"],
  },
];

const TrendingPage = () => {
  return <PageContent title={"Trending"} cardContent={results} />;
};

export default TrendingPage;
