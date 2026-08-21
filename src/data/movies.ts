import vikram from "@/assets/posters/vikram.jpg";
import leo from "@/assets/posters/leo.jpg";
import jailer from "@/assets/posters/jailer.jpg";
import master from "@/assets/posters/master.jpg";
import kaithi from "@/assets/posters/kaithi.jpg";
import vadaChennai from "@/assets/posters/vada-chennai.jpg";
import soorarai from "@/assets/posters/soorarai.jpg";
import asuran from "@/assets/posters/asuran.jpg";
import jaiBhim from "@/assets/posters/jai-bhim.jpg";
import superDeluxe from "@/assets/posters/super-deluxe.jpg";
import ninetysix from "@/assets/posters/ninetysix.jpg";
import maanaadu from "@/assets/posters/maanaadu.jpg";
import doctor from "@/assets/posters/doctor.jpg";
import thaniOruvan from "@/assets/posters/thani-oruvan.jpg";
import ratsasan from "@/assets/posters/ratsasan.jpg";

export type Movie = {
  id: string;
  title: string;
  tamilTitle: string;
  year: number;
  rating: number;
  runtime: number;
  genres: string[];
  language: string;
  director: string;
  cast: string[];
  overview: string;
  tagline: string;
  poster: string;
  trending?: boolean;
  classic?: boolean;
};

export const movies: Movie[] = [
  {
    id: "vikram",
    title: "Vikram",
    tamilTitle: "விக்ரம்",
    year: 2022,
    rating: 8.4,
    runtime: 175,
    genres: ["Action", "Thriller", "Crime"],
    language: "Tamil",
    director: "Lokesh Kanagaraj",
    cast: ["Kamal Haasan", "Vijay Sethupathi", "Fahadh Faasil", "Narain"],
    overview:
      "A special investigation officer digs into the murder of a retired officer and uncovers a masked vigilante operation buried under decades of narcotics money, betrayal and unfinished vengeance.",
    tagline: "Once upon a time, there lived a ghost.",
    poster: vikram,
    trending: true,
  },
  {
    id: "leo",
    title: "Leo",
    tamilTitle: "லியோ",
    year: 2023,
    rating: 7.9,
    runtime: 164,
    genres: ["Action", "Thriller"],
    language: "Tamil",
    director: "Lokesh Kanagaraj",
    cast: ["Vijay", "Trisha Krishnan", "Sanjay Dutt", "Arjun Sarja"],
    overview:
      "A mild-mannered cafe owner in a frozen hill town defends his family from a gang of killers, forcing a buried identity he has spent years denying back into the light.",
    tagline: "Bloody sweet.",
    poster: leo,
    trending: true,
  },
  {
    id: "jailer",
    title: "Jailer",
    tamilTitle: "ஜெயிலர்",
    year: 2023,
    rating: 7.5,
    runtime: 168,
    genres: ["Action", "Crime", "Drama"],
    language: "Tamil",
    director: "Nelson Dilipkumar",
    cast: ["Rajinikanth", "Ramya Krishnan", "Vinayakan", "Shivarajkumar"],
    overview:
      "A retired jail warden living a quiet suburban life becomes the most dangerous man in the state when his police-officer son disappears while chasing an idol-smuggling syndicate.",
    tagline: "Retired. Never harmless.",
    poster: jailer,
    trending: true,
  },
  {
    id: "master",
    title: "Master",
    tamilTitle: "மாஸ்டர்",
    year: 2021,
    rating: 7.3,
    runtime: 179,
    genres: ["Action", "Drama"],
    language: "Tamil",
    director: "Lokesh Kanagaraj",
    cast: ["Vijay", "Vijay Sethupathi", "Malavika Mohanan", "Andrea Jeremiah"],
    overview:
      "An alcoholic college professor is transferred to a juvenile home where a ruthless gangster uses the boys as cover for his crimes — and finds himself the only adult willing to fight back.",
    tagline: "The lion sleeps, it doesn't die.",
    poster: master,
  },
  {
    id: "kaithi",
    title: "Kaithi",
    tamilTitle: "கைதி",
    year: 2019,
    rating: 8.1,
    runtime: 145,
    genres: ["Action", "Thriller"],
    language: "Tamil",
    director: "Lokesh Kanagaraj",
    cast: ["Karthi", "Narain", "George Maryan", "Arjun Das"],
    overview:
      "A convict released for a single day to meet the daughter he has never seen is forced to drive a truckload of poisoned policemen through a night-long ambush.",
    tagline: "One night. One man. No sleep.",
    poster: kaithi,
    trending: true,
  },
  {
    id: "vada-chennai",
    title: "Vada Chennai",
    tamilTitle: "வடசென்னை",
    year: 2018,
    rating: 8.3,
    runtime: 164,
    genres: ["Crime", "Drama", "Thriller"],
    language: "Tamil",
    director: "Vetrimaaran",
    cast: ["Dhanush", "Aishwarya Rajesh", "Andrea Jeremiah", "Ameer"],
    overview:
      "A carrom prodigy from a North Chennai fishing settlement is pulled into a decades-long gang war over land, loyalty and the ghost of a murdered don.",
    tagline: "The harbour remembers everything.",
    poster: vadaChennai,
    classic: true,
  },
  {
    id: "soorarai-pottru",
    title: "Soorarai Pottru",
    tamilTitle: "சூரரைப் போற்று",
    year: 2020,
    rating: 8.7,
    runtime: 153,
    genres: ["Drama", "Biography"],
    language: "Tamil",
    director: "Sudha Kongara",
    cast: ["Suriya", "Aparna Balamurali", "Paresh Rawal", "Urvashi"],
    overview:
      "A hot-headed air force officer walks away from his uniform to build an airline for people who have never flown, taking on an industry designed to crush him.",
    tagline: "Praise the brave.",
    poster: soorarai,
  },
  {
    id: "asuran",
    title: "Asuran",
    tamilTitle: "அசுரன்",
    year: 2019,
    rating: 8.4,
    runtime: 141,
    genres: ["Action", "Drama", "Crime"],
    language: "Tamil",
    director: "Vetrimaaran",
    cast: ["Dhanush", "Manju Warrier", "Pasupathy", "Ken Karunas"],
    overview:
      "A weathered farmer flees through the fields with his surviving son as a landlord clan hunts them, while the violence of his own youth catches up in flashback.",
    tagline: "Land never forgives blood.",
    poster: asuran,
    classic: true,
  },
  {
    id: "jai-bhim",
    title: "Jai Bhim",
    tamilTitle: "ஜெய் பீம்",
    year: 2021,
    rating: 8.8,
    runtime: 164,
    genres: ["Drama", "Crime", "Biography"],
    language: "Tamil",
    director: "T. J. Gnanavel",
    cast: ["Suriya", "Lijomol Jose", "Manikandan", "Rajisha Vijayan"],
    overview:
      "A human rights lawyer takes on the state itself when a tribal man vanishes in police custody and his pregnant wife refuses to stop asking where he is.",
    tagline: "Justice is not a favour.",
    poster: jaiBhim,
  },
  {
    id: "super-deluxe",
    title: "Super Deluxe",
    tamilTitle: "சூப்பர் டீலக்ஸ்",
    year: 2019,
    rating: 8.4,
    runtime: 176,
    genres: ["Drama", "Comedy", "Thriller"],
    language: "Tamil",
    director: "Thiagarajan Kumararaja",
    cast: ["Vijay Sethupathi", "Fahadh Faasil", "Samantha", "Ramya Krishnan"],
    overview:
      "An unfaithful wife, a returning trans parent, four teenagers and a doomsday preacher collide across one absurd, brutally funny day in Chennai.",
    tagline: "Everything is connected.",
    poster: superDeluxe,
    classic: true,
  },
  {
    id: "96",
    title: "96",
    tamilTitle: "96",
    year: 2018,
    rating: 8.5,
    runtime: 158,
    genres: ["Romance", "Drama"],
    language: "Tamil",
    director: "C. Prem Kumar",
    cast: ["Vijay Sethupathi", "Trisha Krishnan", "Gouri Kishan", "Devadarshini"],
    overview:
      "A travel photographer meets his school sweetheart at a reunion twenty-two years later, and one long night reopens everything the two of them never said.",
    tagline: "Some love stories never end. They just pause.",
    poster: ninetysix,
    classic: true,
  },
  {
    id: "maanaadu",
    title: "Maanaadu",
    tamilTitle: "மானாடு",
    year: 2021,
    rating: 7.8,
    runtime: 145,
    genres: ["Action", "Thriller", "Sci-Fi"],
    language: "Tamil",
    director: "Venkat Prabhu",
    cast: ["Silambarasan TR", "S. J. Suryah", "Kalyani Priyadarshan", "Y. G. Mahendran"],
    overview:
      "A young man caught in a time loop must relive the same afternoon again and again to stop a political assassination he is being framed for.",
    tagline: "Same day. New plan.",
    poster: maanaadu,
  },
  {
    id: "doctor",
    title: "Doctor",
    tamilTitle: "டாக்டர்",
    year: 2021,
    rating: 7.4,
    runtime: 153,
    genres: ["Comedy", "Action", "Thriller"],
    language: "Tamil",
    director: "Nelson Dilipkumar",
    cast: ["Sivakarthikeyan", "Priyanka Arul Mohan", "Vinay Rai", "Yogi Babu"],
    overview:
      "A deadpan army doctor hunts a child-trafficking ring with clinical calm and a very dry sense of humour after his fiancée's niece is abducted.",
    tagline: "No emotion. All precision.",
    poster: doctor,
  },
  {
    id: "thani-oruvan",
    title: "Thani Oruvan",
    tamilTitle: "தனி ஒருவன்",
    year: 2015,
    rating: 8.4,
    runtime: 160,
    genres: ["Action", "Thriller", "Crime"],
    language: "Tamil",
    director: "Mohan Raja",
    cast: ["Jayam Ravi", "Arvind Swamy", "Nayanthara", "Ganesh Venkatraman"],
    overview:
      "An idealistic IPS officer picks the untouchable scientist-criminal at the top of the food chain as his personal target, and the two spend the film dismantling each other.",
    tagline: "Two minds. One trap.",
    poster: thaniOruvan,
    classic: true,
  },
  {
    id: "ratsasan",
    title: "Ratsasan",
    tamilTitle: "ராட்சசன்",
    year: 2018,
    rating: 8.4,
    runtime: 170,
    genres: ["Horror", "Thriller", "Crime"],
    language: "Tamil",
    director: "Ram Kumar",
    cast: ["Vishnu Vishal", "Amala Paul", "Saravanan", "Suzane George"],
    overview:
      "A failed filmmaker turned rookie sub-inspector uses his abandoned serial-killer screenplay to track a real predator stalking schoolgirls across the city.",
    tagline: "He studied monsters. Now one is watching him.",
    poster: ratsasan,
    trending: true,
  },
];

export const heroMovieId = "vikram";

export const getMovie = (id: string) => movies.find((m) => m.id === id);

export const allGenres = Array.from(new Set(movies.flatMap((m) => m.genres))).sort();
export const allYears = Array.from(new Set(movies.map((m) => m.year))).sort((a, b) => b - a);
export const allDirectors = Array.from(new Set(movies.map((m) => m.director))).sort();
export const allActors = Array.from(new Set(movies.flatMap((m) => m.cast))).sort();

export const byGenre = (genre: string) => movies.filter((m) => m.genres.includes(genre));

export const trending = movies.filter((m) => m.trending);
export const topRated = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 10);
export const latest = [...movies].sort((a, b) => b.year - a.year).slice(0, 10);
export const classics = movies.filter((m) => m.classic);

export const similarTo = (movie: Movie) =>
  movies
    .filter((m) => m.id !== movie.id)
    .map((m) => ({ m, score: m.genres.filter((g) => movie.genres.includes(g)).length }))
    .sort((a, b) => b.score - a.score || b.m.rating - a.m.rating)
    .slice(0, 8)
    .map((x) => x.m);

export const searchMovies = (query: string) => {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return movies.filter((m) =>
    [m.title, m.tamilTitle, m.director, String(m.year), ...m.genres, ...m.cast]
      .join(" ")
      .toLowerCase()
      .includes(q),
  );
};
