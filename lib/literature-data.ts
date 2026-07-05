import { bookCoverUrls } from "./book-covers";

export type BookClassification = "Fiction" | "Non-Fiction";

export type Book = {
  title: string;
  href: string;
  author: string;
  category: string;
  categoryColor: string;
  genre: string;
  value: string;
  coverUrl: string;
  coverFallbackUrls?: string[];
  classification?: BookClassification;
};

function book(
  entry: Omit<Book, "coverUrl" | "coverFallbackUrls">
): Book {
  return { ...entry, ...bookCoverUrls(entry.href, entry.title) };
}

export const READING_LIST: Book[] = [
  book({
    title: "Secrets of Sand Hill Road",
    href: "https://www.amazon.com/Secrets-Sand-Hill-Road-Venture/dp/059308358X",
    author: "Scott Kupor",
    category: "Business",
    categoryColor: "bg-emerald-100/80 text-emerald-950",
    genre: "Venture Capital",
    value:
      "Explains how VCs evaluate startups, negotiate term sheets, and think about fundraising from the inside of Sand Hill Road.",
    classification: "Non-Fiction",
  }),
  book({
    title: "The Technological Republic",
    href: "https://www.amazon.com/Technological-Republic-Power-Belief-Future/dp/0593798690",
    author: "Alexander C. Karp & Nicholas W. Zamiska",
    category: "Technology",
    categoryColor: "bg-sky-100/80 text-sky-950",
    genre: "Geopolitics & AI",
    value:
      "Argues that the West must renew the partnership between technology and government to compete in the age of AI.",
    classification: "Non-Fiction",
  }),
  book({
    title: "Genesis: Artificial Intelligence, Hope, and the Human Spirit",
    href: "https://www.amazon.com/Genesis-Artificial-Intelligence-Human-Spirit/dp/0316581291",
    author: "Henry Kissinger, Craig Mundie & Eric Schmidt",
    category: "Technology",
    categoryColor: "bg-sky-100/80 text-sky-950",
    genre: "AI & Society",
    value:
      "Balances optimism and caution about AI's potential to reshape crisis response, discovery, and human agency.",
    classification: "Non-Fiction",
  }),
  book({
    title: "The Courage to Be Disliked",
    href: "https://www.amazon.com/Courage-Be-Disliked-Phenomenon-Happiness/dp/1501197274",
    author: "Ichiro Kishimi & Fumitake Koga",
    category: "Philosophy",
    categoryColor: "bg-violet-100/80 text-violet-950",
    genre: "Adlerian Psychology",
    value:
      "Reframes happiness as a choice rooted in responsibility rather than past trauma or external approval.",
    classification: "Non-Fiction",
  }),
  book({
    title: "The Ages of Globalization",
    href: "https://www.amazon.com/Ages-Globalization-Geography-Technology-Institutions/dp/0231193742",
    author: "Jeffrey D. Sachs",
    category: "Geopolitics",
    categoryColor: "bg-stone-200/80 text-stone-900",
    genre: "Global History",
    value:
      "Traces seven waves of globalization to explain how geography, technology, and institutions shape the present.",
    classification: "Non-Fiction",
  }),
  book({
    title: "Patriot: A Memoir",
    href: "https://www.amazon.com/Patriot-Memoir-Alexei-Navalny/dp/0593320964",
    author: "Alexei Navalny",
    category: "Memoir",
    categoryColor: "bg-rose-100/80 text-rose-950",
    genre: "Political Memoir",
    value:
      "Navalny's final account of courage, opposition, and conviction under an authoritarian regime.",
    classification: "Non-Fiction",
  }),
  book({
    title: "Rome: A History in Seven Sackings",
    href: "https://www.amazon.com/Rome-History-Sackings-Matthew-Kneale/dp/1501191098",
    author: "Matthew Kneale",
    category: "History",
    categoryColor: "bg-amber-100/80 text-amber-950",
    genre: "Urban History",
    value:
      "Uses seven invasions of Rome to show how catastrophe and renewal shaped one of history's most enduring cities.",
    classification: "Non-Fiction",
  }),
];

export const FAVORITE_READS: Book[] = [
  book({
    title: "Zero to One",
    href: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296",
    author: "Peter Thiel",
    category: "Business",
    categoryColor: "bg-emerald-100/80 text-emerald-950",
    genre: "Startup Strategy",
    value:
      "A contrarian framework for how to build companies that matter and develop yourself as an individual that can develop desirable talents and expertise.",
  }),
  book({
    title: "The Hard Thing About Hard Things",
    href: "https://www.amazon.com/Hard-Thing-About-Things-Building/dp/0062273205",
    author: "Ben Horowitz",
    category: "Business",
    categoryColor: "bg-emerald-100/80 text-emerald-950",
    genre: "Leadership",
    value:
      "A candid journey into how Ben Horowitz navigated the challenges of building and running massive technology companies under tumultuous pressures, insane challenges, and his pivot into venture capital. He also discusses wise lessons he learned from some of the most successful founders, executives, and investors in the world.",
  }),
  book({
    title: "The Mom Test",
    href: "https://www.amazon.com/Mom-Test-customers-business-everyone/dp/1492180742",
    author: "Rob Fitzpatrick",
    category: "Business",
    categoryColor: "bg-emerald-100/80 text-emerald-950",
    genre: "Customer Development",
    value:
      "Teaches how to ask questions that reveal whether people will actually pay for what you are building.",
  }),
  book({
    title: "The Almanack of Naval Ravikant",
    href: "https://www.amazon.com/Almanack-Naval-Ravikant-Eric-Jorgenson/dp/1544514212",
    author: "Eric Jorgenson",
    category: "Philosophy",
    categoryColor: "bg-violet-100/80 text-violet-950",
    genre: "Wealth & Wisdom",
    value:
      "Distills practical mental models for building leverage, judgment, and a meaningful life.",
  }),
  book({
    title: "On Grand Strategy",
    href: "https://www.amazon.com/Grand-Strategy-John-Lewis-Gaddis/dp/014311158X",
    author: "John Lewis Gaddis",
    category: "Strategy",
    categoryColor: "bg-amber-100/80 text-amber-950",
    genre: "Grand Strategy",
    value:
      "Explores how leaders balance ambition with limits across history's most consequential decisions.",
  }),
  book({
    title: "The Industries of the Future",
    href: "https://www.amazon.com/Industries-Future-Alec-Ross/dp/1476752944",
    author: "Alec Ross",
    category: "Technology",
    categoryColor: "bg-sky-100/80 text-sky-950",
    genre: "Future Trends",
    value:
      "Maps the sectors reshaping the global economy, from robotics to genomics to cybersecurity. While it's old, I found it incredibly salient and relevant to today.",
  }),
  book({
    title: "Ikigai",
    href: "https://www.amazon.com/Ikigai-Japanese-Secret-Long-Happy/dp/1526420896",
    author: "Héctor García & Francesc Miralles",
    category: "Philosophy",
    categoryColor: "bg-violet-100/80 text-violet-950",
    genre: "Longevity & Purpose",
    value:
      "Examines Okinawan longevity and the habits that sustain purpose, community, and daily meaning. Great for developing a calm psyche for founders.",
  }),
  book({
    title: "Faith",
    href: "https://www.amazon.com/Faith-Journey-Jimmy-Carter/dp/1501234467",
    author: "Jimmy Carter",
    category: "Memoir",
    categoryColor: "bg-rose-100/80 text-rose-950",
    genre: "Faith & Public Life",
    value:
      "A personal reflection on belief, service, and moral responsibility from a life in public leadership. A really admirable personal reflection on his life in politics, before, and after.",
  }),
  book({
    title: "Power and Prediction",
    href: "https://www.amazon.com/Power-Prediction-Disruptive-Economics-Artificial/dp/1647824219",
    author: "Ajay Agrawal, Joshua Gans & Avi Goldfarb",
    category: "Technology",
    categoryColor: "bg-sky-100/80 text-sky-950",
    genre: "AI Economics",
    value:
      "Frames AI as a drop in the cost of prediction and explains how that reshapes business strategy.",
  }),
  book({
    title: "The World: A Brief Introduction",
    href: "https://www.amazon.com/World-Brief-Introduction-Richard-Haass/dp/039956239X",
    author: "Richard Haass",
    category: "Geopolitics",
    categoryColor: "bg-stone-200/80 text-stone-900",
    genre: "International Relations",
    value:
      "A concise primer on the forces, institutions, and fault lines shaping global affairs today.",
  }),
  book({
    title: "The Metaverse",
    href: "https://www.amazon.com/Metaverse-Revolutionize-Everything-Matthew-Ball/dp/1324092037",
    author: "Matthew Ball",
    category: "Technology",
    categoryColor: "bg-sky-100/80 text-sky-950",
    genre: "Virtual Worlds",
    value:
      "Defines the infrastructure and economics of the metaverse and what it will take to build it.",
  }),
];
