const fs = require('fs');
const path = require('path');

const questions = [
  // Chapter 1: The Dying Sun (Sir James Jeans)
  {
    id: 1,
    chapter: "The Dying Sun",
    author: "Sir James Jeans",
    question: "A few stars are known which are hardly bigger than the earth:",
    underlinedWord: "hardly",
    options: {
      A: "Boldly",
      B: "Nicely",
      C: "Tightly",
      D: "Scarcely"
    },
    answer: "D"
  },
  {
    id: 2,
    chapter: "The Dying Sun",
    author: "Sir James Jeans",
    question: "A star seldom finds another star anywhere near it.",
    underlinedWord: "seldom",
    options: {
      A: "Often",
      B: "Rarely",
      C: "Daily",
      D: "Frequently"
    },
    answer: "B"
  },
  {
    id: 3,
    chapter: "The Dying Sun",
    author: "Sir James Jeans",
    question: "Such is the littleness of our home in space.",
    underlinedWord: "littleness",
    options: {
      A: "Mean",
      B: "Value",
      C: "Size",
      D: "Smallness"
    },
    answer: "D"
  },
  {
    id: 4,
    chapter: "The Dying Sun",
    author: "Sir James Jeans",
    question: "These millions of stars are wandering in space.",
    underlinedWord: "wandering",
    options: {
      A: "Moving",
      B: "Diving",
      C: "Annoying",
      D: "Declining"
    },
    answer: "A"
  },
  {
    id: 5,
    chapter: "The Dying Sun",
    author: "Sir James Jeans",
    question: "Each star makes its voyage in complete loneliness.",
    underlinedWord: "voyage",
    options: {
      A: "Journey",
      B: "Relief",
      C: "Sleep",
      D: "Stop"
    },
    answer: "A"
  },
  {
    id: 6,
    chapter: "The Dying Sun",
    author: "Sir James Jeans",
    question: "Here and there, we find an immense star near it.",
    underlinedWord: "immense",
    options: {
      A: "Huge",
      B: "Small",
      C: "Less",
      D: "Burning"
    },
    answer: "A"
  },
  {
    id: 7,
    chapter: "The Dying Sun",
    author: "Sir James Jeans",
    question: "It is extremely unusual for suns to throw off planets.",
    underlinedWord: "unusual",
    options: {
      A: "Uncommon",
      B: "Difficult",
      C: "Easy",
      D: "Pleasant"
    },
    answer: "A"
  },
  {
    id: 8,
    chapter: "The Dying Sun",
    author: "Sir James Jeans",
    question: "It is very, very rare event indeed.",
    underlinedWord: "rare",
    options: {
      A: "Common",
      B: "Usual",
      C: "Unusual",
      D: "Ordinary"
    },
    answer: "C"
  },
  {
    id: 9,
    chapter: "The Dying Sun",
    author: "Sir James Jeans",
    question: "From humble beginnings came a stream of life.",
    underlinedWord: "humble",
    options: {
      A: "Strong",
      B: "Amazing",
      C: "Simple",
      D: "Complex"
    },
    answer: "C"
  },
  {
    id: 10,
    chapter: "The Dying Sun",
    author: "Sir James Jeans",
    question: "Life started in simple organisms.",
    underlinedWord: "organisms",
    options: {
      A: "Oceans",
      B: "Cells",
      C: "Living things",
      D: "Flowers"
    },
    answer: "C"
  },
  {
    id: 11,
    chapter: "The Dying Sun",
    author: "Sir James Jeans",
    question: "Their living power consisted their being able to reproduce themselves before dying.",
    underlinedWord: "reproduce",
    options: {
      A: "Recomb",
      B: "Remark",
      C: "Restructure",
      D: "Recreate"
    },
    answer: "D"
  },
  {
    id: 12,
    chapter: "The Dying Sun",
    author: "Sir James Jeans",
    question: "The planet earth gave birth to life.",
    underlinedWord: "gave birth to",
    options: {
      A: "Produced",
      B: "Degenerated",
      C: "Decomposed",
      D: "Devastated"
    },
    answer: "A"
  },
  {
    id: 13,
    chapter: "The Dying Sun",
    author: "Sir James Jeans",
    question: "Stretches of space beyond the Milky Way.",
    underlinedWord: "Milky Way",
    options: {
      A: "The marks",
      B: "Collection of stars",
      C: "The sun",
      D: "The wandering star"
    },
    answer: "B"
  },
  {
    id: 14,
    chapter: "The Dying Sun",
    author: "Sir James Jeans",
    question: "We find the universe frightening.",
    underlinedWord: "frightening",
    options: {
      A: "Vast",
      B: "Beautiful",
      C: "Terrifying",
      D: "Pleasant"
    },
    answer: "C"
  },
  {
    id: 15,
    chapter: "The Dying Sun",
    author: "Sir James Jeans",
    question: "In the immense stretches of space, it is colder still.",
    underlinedWord: "immense",
    options: {
      A: "Severs",
      B: "Vast",
      C: "Bright",
      D: "Brilliant"
    },
    answer: "B"
  },
  {
    id: 16,
    chapter: "The Dying Sun",
    author: "Sir James Jeans",
    question: "The universe is entirely frightening.",
    underlinedWord: "entirely",
    options: {
      A: "Probably",
      B: "Fully",
      C: "Minutely",
      D: "Partially"
    },
    answer: "B"
  },
  {
    id: 17,
    chapter: "The Dying Sun",
    author: "Sir James Jeans",
    question: "Gradually they became cooler.",
    underlinedWord: "Gradually",
    options: {
      A: "Widely",
      B: "Quickly",
      C: "Systematically",
      D: "Slowly and by degrees"
    },
    answer: "D"
  },
  {
    id: 18,
    chapter: "The Dying Sun",
    author: "Sir James Jeans",
    question: "We may think of the stars as a collection of fires scattered through space.",
    underlinedWord: "scattered",
    options: {
      A: "Brightened",
      B: "Wandering",
      C: "Sparkling",
      D: "Thrown"
    },
    answer: "D"
  },

  // Chapter 2: Using the Scientific Method (Darrel Barnard & Lon Edwards)
  {
    id: 19,
    chapter: "Using the Scientific Method",
    author: "Darrel Barnard & Lon Edwards",
    question: "All of us have benefitted greatly from the use of scientific method.",
    underlinedWord: "benefitted",
    options: {
      A: "Lost",
      B: "Profited",
      C: "Suffered",
      D: "Worried"
    },
    answer: "B"
  },
  {
    id: 20,
    chapter: "Using the Scientific Method",
    author: "Darrel Barnard & Lon Edwards",
    question: "We are more critical than our ancestors.",
    underlinedWord: "critical",
    options: {
      A: "clever",
      B: "ignorant",
      C: "conscious",
      D: "kind"
    },
    answer: "C"
  },
  {
    id: 21,
    chapter: "Using the Scientific Method",
    author: "Darrel Barnard & Lon Edwards",
    question: "We are more critical than our ancestors.",
    underlinedWord: "ancestors",
    options: {
      A: "Fellow creatures",
      B: "Forefathers",
      C: "Relatives",
      D: "Nationalists"
    },
    answer: "B"
  },
  {
    id: 22,
    chapter: "Using the Scientific Method",
    author: "Darrel Barnard & Lon Edwards",
    question: "Today we are more critical than our forefathers.",
    underlinedWord: "forefathers",
    options: {
      A: "brothers",
      B: "teachers",
      C: "rulers",
      D: "ancestors"
    },
    answer: "D"
  },
  {
    id: 23,
    chapter: "Using the Scientific Method",
    author: "Darrel Barnard & Lon Edwards",
    question: "There is a little likelihood of their getting disease.",
    underlinedWord: "likelihood",
    options: {
      A: "liking",
      B: "effort",
      C: "ray",
      D: "probability"
    },
    answer: "D"
  },
  {
    id: 24,
    chapter: "Using the Scientific Method",
    author: "Darrel Barnard & Lon Edwards",
    question: "Life was uncertain.",
    underlinedWord: "uncertain",
    options: {
      A: "Unsure",
      B: "Unpleasant",
      C: "Real",
      D: "Dull"
    },
    answer: "A"
  },
  {
    id: 25,
    chapter: "Using the Scientific Method",
    author: "Darrel Barnard & Lon Edwards",
    question: "Thrifty housewives preserved their house grown vegetables and fruits by canning, pickling or drying.",
    underlinedWord: "Thrifty",
    options: {
      A: "Frugal",
      B: "Fragile",
      C: "Stingy",
      D: "Careful"
    },
    answer: "A"
  },
  {
    id: 26,
    chapter: "Using the Scientific Method",
    author: "Darrel Barnard & Lon Edwards",
    question: "The streets were narrow and unpaved.",
    underlinedWord: "unpaved",
    options: {
      A: "Metalled",
      B: "Unclean",
      C: "Smooth",
      D: "Unmetalled"
    },
    answer: "D"
  },
  {
    id: 27,
    chapter: "Using the Scientific Method",
    author: "Darrel Barnard & Lon Edwards",
    question: "Water was used sparingly for bathing and cleaning purposes.",
    underlinedWord: "sparingly",
    options: {
      A: "Lavishing",
      B: "Carelessly",
      C: "Usually",
      D: "Frugally"
    },
    answer: "D"
  },
  {
    id: 28,
    chapter: "Using the Scientific Method",
    author: "Darrel Barnard & Lon Edwards",
    question: "Dehydration proved a practical method of preservation.",
    underlinedWord: "Dehydration",
    options: {
      A: "Adding water",
      B: "Removal of water",
      C: "Medication",
      D: "Drying food"
    },
    answer: "B"
  },
  {
    id: 29,
    chapter: "Using the Scientific Method",
    author: "Darrel Barnard & Lon Edwards",
    question: "Quick-freeze method keeps food nutritious.",
    underlinedWord: "nutritious",
    options: {
      A: "Foul",
      B: "Stinking",
      C: "Wholesome",
      D: "Unhealthful"
    },
    answer: "C"
  },
  {
    id: 30,
    chapter: "Using the Scientific Method",
    author: "Darrel Barnard & Lon Edwards",
    question: "Science has improved the way we spend our leisure time.",
    underlinedWord: "leisure",
    options: {
      A: "common",
      B: "important",
      C: "spare",
      D: "busy"
    },
    answer: "C"
  },
  {
    id: 31,
    chapter: "Using the Scientific Method",
    author: "Darrel Barnard & Lon Edwards",
    question: "Superstitious people believe in signs of good or bad luck.",
    underlinedWord: "Superstitious",
    options: {
      A: "logical",
      B: "free",
      C: "ugly",
      D: "irrational"
    },
    answer: "D"
  },
  {
    id: 32,
    chapter: "Using the Scientific Method",
    author: "Darrel Barnard & Lon Edwards",
    question: "Now people are less likely to accept conclusions as final.",
    underlinedWord: "likely",
    options: {
      A: "Prone",
      B: "Unwilling",
      C: "Hesitated",
      D: "Liked"
    },
    answer: "A"
  },
  {
    id: 33,
    chapter: "Using the Scientific Method",
    author: "Darrel Barnard & Lon Edwards",
    question: "Into the narrow streets, household garbage and other refuse were thrown.",
    underlinedWord: "refuse",
    options: {
      A: "Denial",
      B: "Waste",
      C: "Contradict",
      D: "Support"
    },
    answer: "B"
  },
  {
    id: 34,
    chapter: "Using the Scientific Method",
    author: "Darrel Barnard & Lon Edwards",
    question: "It had been demonstrated that ideas are not necessarily true.",
    underlinedWord: "demonstrated",
    options: {
      A: "narrated",
      B: "told",
      C: "realized",
      D: "explained"
    },
    answer: "D"
  },
  {
    id: 35,
    chapter: "Using the Scientific Method",
    author: "Darrel Barnard & Lon Edwards",
    question: "In the case of poor academic work for which the reason is not apparent, I always ask for a physical examination:",
    underlinedWord: "apparent",
    options: {
      A: "Obvious",
      B: "Important",
      C: "Suitable",
      D: "Believable"
    },
    answer: "A"
  },

  // Chapter 3: Why Boys Fail in College (Herbert E. Hawkes)
  {
    id: 36,
    chapter: "Why Boys Fail in College",
    author: "Herbert E. Hawkes",
    question: "Many boys attempt seriously to make good.",
    underlinedWord: "make good",
    options: {
      A: "Do well",
      B: "Feel better",
      C: "See really",
      D: "Compensate"
    },
    answer: "A"
  },
  {
    id: 37,
    chapter: "Why Boys Fail in College",
    author: "Herbert E. Hawkes",
    question: "Nervous habits are not easy to uproot.",
    underlinedWord: "uproot",
    options: {
      A: "get rid of",
      B: "nurture",
      C: "appreciated",
      D: "rejected"
    },
    answer: "A"
  },
  {
    id: 38,
    chapter: "Why Boys Fail in College",
    author: "Herbert E. Hawkes",
    question: "The boy himself can eradicate his nervous habits.",
    underlinedWord: "eradicate",
    options: {
      A: "Uprooted",
      B: "look into",
      C: "break",
      D: "eliminate"
    },
    answer: "D"
  },
  {
    id: 39,
    chapter: "Why Boys Fail in College",
    author: "Herbert E. Hawkes",
    question: "A boy must cultivate a poise and calm that smothers the fidgets.",
    underlinedWord: "poise",
    options: {
      A: "Attitude",
      B: "Thought",
      C: "Balance",
      D: "Planning"
    },
    answer: "C"
  },
  {
    id: 40,
    chapter: "Why Boys Fail in College",
    author: "Herbert E. Hawkes",
    question: "As a general thing, the boy wins out in such controversies.",
    underlinedWord: "controversies",
    options: {
      A: "Agreements",
      B: "Disputes",
      C: "Selected",
      D: "Succeeds"
    },
    answer: "B"
  },
  {
    id: 41,
    chapter: "Why Boys Fail in College",
    author: "Herbert E. Hawkes",
    question: "The parents whom I have offended usually come back.",
    underlinedWord: "offended",
    options: {
      A: "Defended",
      B: "Pleased",
      C: "Frightened",
      D: "Annoyed"
    },
    answer: "D"
  },
  {
    id: 42,
    chapter: "Why Boys Fail in College",
    author: "Herbert E. Hawkes",
    question: "There is no substitute for health.",
    underlinedWord: "substitute",
    options: {
      A: "attitude",
      B: "alternative",
      C: "aptitude",
      D: "option"
    },
    answer: "B"
  },
  {
    id: 43,
    chapter: "Why Boys Fail in College",
    author: "Herbert E. Hawkes",
    question: "Financial pressure is a very serious one.",
    underlinedWord: "Financial",
    options: {
      A: "Mental",
      B: "Spiritual",
      C: "Monetary",
      D: "Public"
    },
    answer: "C"
  },
  {
    id: 44,
    chapter: "Why Boys Fail in College",
    author: "Herbert E. Hawkes",
    question: "Any parent owes this much his son.",
    underlinedWord: "owes",
    options: {
      A: "Tells",
      B: "Keeps",
      C: "Indebted",
      D: "Negates"
    },
    answer: "C"
  },
  {
    id: 45,
    chapter: "Why Boys Fail in College",
    author: "Herbert E. Hawkes",
    question: "Most colleges do all they can with scholarship funds to alleviate this situation.",
    underlinedWord: "alleviate",
    options: {
      A: "Assuage",
      B: "Improve",
      C: "Arrest",
      D: "Worsen"
    },
    answer: "A"
  },
  {
    id: 46,
    chapter: "Why Boys Fail in College",
    author: "Herbert E. Hawkes",
    question: "It is always to the detriment of their health.",
    underlinedWord: "detriment",
    options: {
      A: "Improvement",
      B: "Harm",
      C: "Benefit",
      D: "Determination"
    },
    answer: "B"
  },
  {
    id: 47,
    chapter: "Why Boys Fail in College",
    author: "Herbert E. Hawkes",
    question: "A few lazy bluffers also drift into college.",
    underlinedWord: "bluffers",
    options: {
      A: "Cheaters",
      B: "Friends",
      C: "Foes",
      D: "Students"
    },
    answer: "A"
  },
  {
    id: 48,
    chapter: "Why Boys Fail in College",
    author: "Herbert E. Hawkes",
    question: "He is helping the young men under him to see life steadily and see it whole.",
    underlinedWord: "steadily",
    options: {
      A: "civilly",
      B: "readily",
      C: "continuously",
      D: "strategy"
    },
    answer: "C"
  },
  {
    id: 49,
    chapter: "Why Boys Fail in College",
    author: "Herbert E. Hawkes",
    question: "Nevertheless, many boys are cast entirely on their own resources.",
    underlinedWord: "Nevertheless",
    options: {
      A: "Still",
      B: "Because of",
      C: "Upright",
      D: "Wrongly"
    },
    answer: "A"
  },
  {
    id: 50,
    chapter: "Why Boys Fail in College",
    author: "Herbert E. Hawkes",
    question: "Boys undergoing transfusion of blood to get money for their food and books.",
    underlinedWord: "transfusion",
    options: {
      A: "Selling",
      B: "Disease",
      C: "Transfer",
      D: "Shortage"
    },
    answer: "C"
  },

  // Chapter 4: End of Term (David Daiches)
  {
    id: 51,
    chapter: "End of Term",
    author: "David Daiches",
    question: "The daily grind of the school pressed heavily upon me.",
    underlinedWord: "grind",
    options: {
      A: "routine",
      B: "homework",
      C: "hard work",
      D: "labour"
    },
    answer: "C"
  },
  {
    id: 52,
    chapter: "End of Term",
    author: "David Daiches",
    question: "The maid servant walked with grim steps.",
    underlinedWord: "grim",
    options: {
      A: "Dreadful",
      B: "Light",
      C: "horrible",
      D: "light"
    },
    answer: "A"
  },
  {
    id: 53,
    chapter: "End of Term",
    author: "David Daiches",
    question: "The voice of the maid sounded like a summon to damnation.",
    underlinedWord: "damnation",
    options: {
      A: "hell",
      B: "paradise",
      C: "fair",
      D: "exhibition"
    },
    answer: "A"
  },
  {
    id: 54,
    chapter: "End of Term",
    author: "David Daiches",
    question: "The anticipation was always worse than reality.",
    underlinedWord: "anticipation",
    options: {
      A: "Justification",
      B: "expectation",
      C: "Perception",
      D: "Damnation"
    },
    answer: "B"
  },
  {
    id: 55,
    chapter: "End of Term",
    author: "David Daiches",
    question: "There was fierce competition in the school.",
    underlinedWord: "fierce",
    options: {
      A: "Severe",
      B: "Light",
      C: "Pleasant",
      D: "Enjoyable"
    },
    answer: "A"
  },
  {
    id: 56,
    chapter: "End of Term",
    author: "David Daiches",
    question: "The writer used to lie waiting for the ominous tread.",
    underlinedWord: "ominous",
    options: {
      A: "joyful",
      B: "musical",
      C: "beautiful",
      D: "gloomy"
    },
    answer: "D"
  },
  {
    id: 57,
    chapter: "End of Term",
    author: "David Daiches",
    question: "I used to lie waiting for that ominous tread.",
    underlinedWord: "tread",
    options: {
      A: "Pace",
      B: "Walk",
      C: "Race",
      D: "Trace"
    },
    answer: "B"
  },
  {
    id: 58,
    chapter: "End of Term",
    author: "David Daiches",
    question: "But the oppressive weight of the knowledge of a full day's school ahead remained a characteristic sensation.",
    underlinedWord: "oppressive",
    options: {
      A: "Pleasant",
      B: "Soft",
      C: "Sensible",
      D: "Crushing"
    },
    answer: "D"
  },
  {
    id: 59,
    chapter: "End of Term",
    author: "David Daiches",
    question: "Waking up in the morning and seeing the hours of school stretching ahead was a dismal experience.",
    underlinedWord: "dismal",
    options: {
      A: "Tough",
      B: "Easy",
      C: "Soft",
      D: "Disappointing"
    },
    answer: "D"
  },
  {
    id: 60,
    chapter: "End of Term",
    author: "David Daiches",
    question: "The last period on Friday had a happy flavor.",
    underlinedWord: "flavor",
    options: {
      A: "dream",
      B: "taste",
      C: "colour",
      D: "wish"
    },
    answer: "B"
  },
  {
    id: 61,
    chapter: "End of Term",
    author: "David Daiches",
    question: "On Friday, the writer walked with the tread of an escaped prisoner.",
    underlinedWord: "escaped",
    options: {
      A: "freed",
      B: "oppressed",
      C: "humiliated",
      D: "captured"
    },
    answer: "A"
  },
  {
    id: 62,
    chapter: "End of Term",
    author: "David Daiches",
    question: "Friday morning was positively rose coloured.",
    underlinedWord: "positively",
    options: {
      A: "Uncertainly",
      B: "Doubtfully",
      C: "Definitely",
      D: "Dearly"
    },
    answer: "C"
  },
  {
    id: 63,
    chapter: "End of Term",
    author: "David Daiches",
    question: "Sometimes they had dismissal of school an hour or two before the usual time.",
    underlinedWord: "dismissal",
    options: {
      A: "exposure",
      B: "routine",
      C: "timetable",
      D: "closure"
    },
    answer: "D"
  },
  {
    id: 64,
    chapter: "End of Term",
    author: "David Daiches",
    question: "Sometimes, they enjoyed unexpected respites.",
    underlinedWord: "respites",
    options: {
      A: "Intervals",
      B: "Functions",
      C: "breaks",
      D: "events"
    },
    answer: "C"
  },
  {
    id: 65,
    chapter: "End of Term",
    author: "David Daiches",
    question: "Occasionally, they would get a whole day for skating.",
    underlinedWord: "Occasionally",
    options: {
      A: "Sometimes",
      B: "Briefly",
      C: "Particularly",
      D: "Frequently"
    },
    answer: "A"
  },
  {
    id: 66,
    chapter: "End of Term",
    author: "David Daiches",
    question: "Some holidays were reduced to a mere ten days:",
    underlinedWord: "mere",
    options: {
      A: "Only",
      B: "Lonely",
      C: "Hardly",
      D: "Completely"
    },
    answer: "A"
  },
  {
    id: 67,
    chapter: "End of Term",
    author: "David Daiches",
    question: "I could look forward to a period of felicity.",
    underlinedWord: "felicity",
    options: {
      A: "freedom",
      B: "choice",
      C: "happiness",
      D: "failure"
    },
    answer: "C"
  },
  {
    id: 68,
    chapter: "End of Term",
    author: "David Daiches",
    question: "Daiches hung on the outskirts of a crowd around an ice-cream barrow.",
    underlinedWord: "outskirts",
    options: {
      A: "Inner edge",
      B: "Area",
      C: "Outer edge",
      D: "outside"
    },
    answer: "C"
  },
  {
    id: 69,
    chapter: "End of Term",
    author: "David Daiches",
    question: "The writer longed desperately for a tricycle in his childhood.",
    underlinedWord: "desperately",
    options: {
      A: "badly",
      B: "luckily",
      C: "Urgently",
      D: "kindly"
    },
    answer: "A"
  },
  {
    id: 70,
    chapter: "End of Term",
    author: "David Daiches",
    question: "Three strenuous school terms had indeed rolled away.",
    underlinedWord: "strenuous",
    options: {
      A: "Tough",
      B: "Easy",
      C: "Beautiful",
      D: "Advantageous"
    },
    answer: "A"
  },
  {
    id: 71,
    chapter: "End of Term",
    author: "David Daiches",
    question: "Later the holidays were reduced to a fortnight.",
    underlinedWord: "fortnight",
    options: {
      A: "One week",
      B: "Two weeks",
      C: "Three weeks",
      D: "Four weeks"
    },
    answer: "B"
  },

  // Chapter 5: On Destroying Books (J. C. Squire)
  {
    id: 72,
    chapter: "On Destroying Books",
    author: "J. C. Squire",
    question: "Many people were reluctant to throw away their books.",
    underlinedWord: "reluctant",
    options: {
      A: "wrathful",
      B: "happy",
      C: "willful",
      D: "unwilling"
    },
    answer: "D"
  },
  {
    id: 73,
    chapter: "On Destroying Books",
    author: "J. C. Squire",
    question: "It is sometimes difficult to find a scaffold for the worthless books.",
    underlinedWord: "scaffold",
    options: {
      A: "Grave",
      B: "Place",
      C: "Gallows",
      D: "Heaven"
    },
    answer: "C"
  },
  {
    id: 74,
    chapter: "On Destroying Books",
    author: "J. C. Squire",
    question: "I improvised a sack.",
    underlinedWord: "improvised",
    options: {
      A: "Managed",
      B: "Bought",
      C: "Filled",
      D: "Opened"
    },
    answer: "A"
  },
  {
    id: 75,
    chapter: "On Destroying Books",
    author: "J. C. Squire",
    question: "There were few solitary travellers on the way.",
    underlinedWord: "solitary",
    options: {
      A: "happy",
      B: "shivering",
      C: "lonely",
      D: "sad"
    },
    answer: "C"
  },
  {
    id: 76,
    chapter: "On Destroying Books",
    author: "J. C. Squire",
    question: "Flashing his lantern on the catches of the basement windows.",
    underlinedWord: "basement",
    options: {
      A: "First floor",
      B: "Attic",
      C: "Ceiling",
      D: "Cellar"
    },
    answer: "D"
  },
  {
    id: 77,
    chapter: "On Destroying Books",
    author: "J. C. Squire",
    question: "Perhaps, he suspects I have a swag in this sack.",
    underlinedWord: "swag",
    options: {
      A: "Food",
      B: "Stolen goods",
      C: "Books",
      D: "Stock things"
    },
    answer: "B"
  },
  {
    id: 78,
    chapter: "On Destroying Books",
    author: "J. C. Squire",
    question: "The pedestrian was only a tramp.",
    underlinedWord: "tramp",
    options: {
      A: "vagabond",
      B: "watchman",
      C: "volunteer",
      D: "guard"
    },
    answer: "A"
  },
  {
    id: 79,
    chapter: "On Destroying Books",
    author: "J. C. Squire",
    question: "I fervently hoped an air of rumination and unconcern.",
    underlinedWord: "rumination",
    options: {
      A: "meditation",
      B: "Absorbed in thoughts",
      C: "thoughtfulness",
      D: "disturbance"
    },
    answer: "A"
  },
  {
    id: 80,
    chapter: "On Destroying Books",
    author: "J. C. Squire",
    question: "I fancied he looked suspicious.",
    underlinedWord: "suspicious",
    options: {
      A: "comforted",
      B: "peaceful",
      C: "doubtful",
      D: "hurry"
    },
    answer: "C"
  },
  {
    id: 81,
    chapter: "On Destroying Books",
    author: "J. C. Squire",
    question: "The policeman acquitted me, apparently.",
    underlinedWord: "acquitted",
    options: {
      A: "let go",
      B: "arrested",
      C: "stopped",
      D: "detained"
    },
    answer: "A"
  },
  {
    id: 82,
    chapter: "On Destroying Books",
    author: "J. C. Squire",
    question: "In my agony of decision, I left the embankment.",
    underlinedWord: "agony",
    options: {
      A: "pane",
      B: "pain",
      C: "sane",
      D: "help"
    },
    answer: "B"
  },
  {
    id: 83,
    chapter: "On Destroying Books",
    author: "J. C. Squire",
    question: "In all probability they would think it was a baby boy.",
    underlinedWord: "probability",
    options: {
      A: "prosperity",
      B: "livelihood",
      C: "adulthood",
      D: "likelihood"
    },
    answer: "D"
  },
  {
    id: 84,
    chapter: "On Destroying Books",
    author: "J. C. Squire",
    question: "When I reached it I knelt on the seat.",
    underlinedWord: "knelt",
    options: {
      A: "Leaned",
      B: "Found",
      C: "Saw",
      D: "Fell"
    },
    answer: "A"
  },
  {
    id: 85,
    chapter: "On Destroying Books",
    author: "J. C. Squire",
    question: "I was living in a small and heaven-kissing flat.",
    underlinedWord: "heaven-kissing",
    options: {
      A: "Beautiful",
      B: "blessed",
      C: "costly",
      D: "very high"
    },
    answer: "D"
  },
  {
    id: 86,
    chapter: "On Destroying Books",
    author: "J. C. Squire",
    question: "I heard his gruff sneering laugh.",
    underlinedWord: "sneering",
    options: {
      A: "amazing",
      B: "appreciating",
      C: "refined",
      D: "ridiculing"
    },
    answer: "D"
  },
  {
    id: 87,
    chapter: "On Destroying Books",
    author: "J. C. Squire",
    question: "The writer wanted to evict the books from his flat.",
    underlinedWord: "evict",
    options: {
      A: "Remove",
      B: "Burn",
      C: "Save",
      D: "Load"
    },
    answer: "A"
  },
  {
    id: 88,
    chapter: "On Destroying Books",
    author: "J. C. Squire",
    question: "The Writer leaned against the Parapet.",
    underlinedWord: "Parapet",
    options: {
      A: "Cottage",
      B: "Edge",
      C: "River",
      D: "Bridge"
    },
    answer: "B"
  },

  // Chapter 6: The Man Who Was a Hospital (Jerome K. Jerome)
  {
    id: 89,
    chapter: "The Man Who Was a Hospital",
    author: "Jerome K. Jerome",
    question: "I read a liver-pill circular in which were detailed symptoms.",
    underlinedWord: "symptoms",
    options: {
      A: "Indications",
      B: "Inclinations",
      C: "Incentives",
      D: "Intentions"
    },
    answer: "A"
  },
  {
    id: 90,
    chapter: "The Man Who Was a Hospital",
    author: "Jerome K. Jerome",
    question: "I plodded conscientiously through the twenty-six letters.",
    underlinedWord: "conscientiously",
    options: {
      A: "Carelessly",
      B: "Hopelessly",
      C: "Honestly",
      D: "Entirely"
    },
    answer: "C"
  },
  {
    id: 91,
    chapter: "The Man Who Was a Hospital",
    author: "Jerome K. Jerome",
    question: "I began to indolently study diseases.",
    underlinedWord: "indolently",
    options: {
      A: "lazily",
      B: "comfortably",
      C: "seriously",
      D: "idly"
    },
    answer: "A"
  },
  {
    id: 92,
    chapter: "The Man Who Was a Hospital",
    author: "Jerome K. Jerome",
    question: "Cholera, the writer had with severe complications.",
    underlinedWord: "complications",
    options: {
      A: "Complexities",
      B: "Facilities",
      C: "Conditions",
      D: "Conversation"
    },
    answer: "A"
  },
  {
    id: 93,
    chapter: "The Man Who Was a Hospital",
    author: "Jerome K. Jerome",
    question: "I plodded conscientiously through the twenty-six letters.",
    underlinedWord: "conscientiously",
    options: {
      A: "hurriedly",
      B: "slowly",
      C: "safely",
      D: "faithfully"
    },
    answer: "D"
  },
  {
    id: 94,
    chapter: "The Man Who Was a Hospital",
    author: "Jerome K. Jerome",
    question: "It seemed somehow to be a sort of slight. Why I hadn't got housemaid's knee?",
    underlinedWord: "slight",
    options: {
      A: "Humiliation",
      B: "Pride",
      C: "Achievement",
      D: "Failure"
    },
    answer: "A"
  },
  {
    id: 95,
    chapter: "The Man Who Was a Hospital",
    author: "Jerome K. Jerome",
    question: "He sat and pondered over his problem.",
    underlinedWord: "pondered",
    options: {
      A: "saw",
      B: "thought",
      C: "ignored",
      D: "rejected"
    },
    answer: "B"
  },
  {
    id: 96,
    chapter: "The Man Who Was a Hospital",
    author: "Jerome K. Jerome",
    question: "What an acquisition I should be to a class.",
    underlinedWord: "acquisition",
    options: {
      A: "doctor",
      B: "friend",
      C: "worth acquiring",
      D: "patient"
    },
    answer: "C"
  },
  {
    id: 97,
    chapter: "The Man Who Was a Hospital",
    author: "Jerome K. Jerome",
    question: "I determined to sift it to the bottom.",
    underlinedWord: "sift",
    options: {
      A: "Go through",
      B: "Make",
      C: "Write",
      D: "Follow"
    },
    answer: "A"
  },
  {
    id: 98,
    chapter: "The Man Who Was a Hospital",
    author: "Jerome K. Jerome",
    question: "It was some devastating scourge I thought I had.",
    underlinedWord: "scourge",
    options: {
      A: "Building",
      B: "Problem",
      C: "Curse",
      D: "Abuse"
    },
    answer: "C"
  },
  {
    id: 99,
    chapter: "The Man Who Was a Hospital",
    author: "Jerome K. Jerome",
    question: "I forgot which was the first distemper I plunged into.",
    underlinedWord: "distemper",
    options: {
      A: "fatal disease",
      B: "unknown disease",
      C: "contagious disease",
      D: "dangerous disease"
    },
    answer: "C"
  },
  {
    id: 100,
    chapter: "The Man Who Was a Hospital",
    author: "Jerome K. Jerome",
    question: "Zymosis I had evidently been suffering from boyhood.",
    underlinedWord: "evidently",
    options: {
      A: "Supposedly",
      B: "Constantly",
      C: "Secretly",
      D: "Clearly"
    },
    answer: "D"
  },
  {
    id: 101,
    chapter: "The Man Who Was a Hospital",
    author: "Jerome K. Jerome",
    question: "The writer patted himself all over his front.",
    underlinedWord: "patted",
    options: {
      A: "Smiled",
      B: "Stroked",
      C: "Kicked",
      D: "Inserted"
    },
    answer: "B"
  },
  {
    id: 102,
    chapter: "The Man Who Was a Hospital",
    author: "Jerome K. Jerome",
    question: "The writer crawled out a decrepit wreck.",
    underlinedWord: "decrepit",
    options: {
      A: "Strong",
      B: "Sick",
      C: "Feeble",
      D: "Happy"
    },
    answer: "C"
  },

  // Chapter 7: My Financial Career (Stephen Leacock)
  {
    id: 103,
    chapter: "My Financial Career",
    author: "Stephen Leacock",
    question: "When I go into a bank, I get rattled.",
    underlinedWord: "rattled",
    options: {
      A: "upset",
      B: "happy",
      C: "confused",
      D: "pleased"
    },
    answer: "A"
  },
  {
    id: 104,
    chapter: "My Financial Career",
    author: "Stephen Leacock",
    question: "The sight of the money rattles me.",
    underlinedWord: "sight",
    options: {
      A: "Cite",
      B: "Place",
      C: "Scene",
      D: "Plot"
    },
    answer: "C"
  },
  {
    id: 105,
    chapter: "My Financial Career",
    author: "Stephen Leacock",
    question: "So I shambled in and looked timidly round at the clerks.",
    underlinedWord: "shambled in",
    options: {
      A: "walk steadily",
      B: "walk awkwardly",
      C: "strode",
      D: "entered"
    },
    answer: "B"
  },
  {
    id: 106,
    chapter: "My Financial Career",
    author: "Stephen Leacock",
    question: "The writer shambled in and looked timidly.",
    underlinedWord: "timidly",
    options: {
      A: "Cowardly",
      B: "Happily",
      C: "Greedily",
      D: "Confidently"
    },
    answer: "A"
  },
  {
    id: 107,
    chapter: "My Financial Career",
    author: "Stephen Leacock",
    question: "The manager was a grave, calm man.",
    underlinedWord: "grave",
    options: {
      A: "rough",
      B: "great",
      C: "jolly",
      D: "serious"
    },
    answer: "D"
  },
  {
    id: 108,
    chapter: "My Financial Career",
    author: "Stephen Leacock",
    question: "I asked in a hollow vibrating voice.",
    underlinedWord: "vibrating",
    options: {
      A: "Loud",
      B: "Shaky",
      C: "Low",
      D: "Harsh"
    },
    answer: "B"
  },
  {
    id: 109,
    chapter: "My Financial Career",
    author: "Stephen Leacock",
    question: "The manager was a grave, calm man.",
    underlinedWord: "grave",
    options: {
      A: "Bald",
      B: "Rash",
      C: "Death",
      D: "Serious"
    },
    answer: "D"
  },
  {
    id: 110,
    chapter: "My Financial Career",
    author: "Stephen Leacock",
    question: "The manager thought that I was a detective.",
    underlinedWord: "detective",
    options: {
      A: "dangerous person",
      B: "investigator",
      C: "murderer",
      D: "worker"
    },
    answer: "B"
  },
  {
    id: 111,
    chapter: "My Financial Career",
    author: "Stephen Leacock",
    question: "He felt that I had an awful secret to reveal.",
    underlinedWord: "reveal",
    options: {
      A: "hide",
      B: "conceal",
      C: "disclose",
      D: "carried"
    },
    answer: "C"
  },
  {
    id: 112,
    chapter: "My Financial Career",
    author: "Stephen Leacock",
    question: "The manager looked relieved.",
    underlinedWord: "relieved",
    options: {
      A: "Upset",
      B: "confused",
      C: "Serious",
      D: "Relaxed"
    },
    answer: "D"
  },
  {
    id: 113,
    chapter: "My Financial Career",
    author: "Stephen Leacock",
    question: "My face was ghastly pale.",
    underlinedWord: "ghastly",
    options: {
      A: "Simply",
      B: "Horribly",
      C: "Beautifully",
      D: "Wonderfully"
    },
    answer: "B"
  },
  {
    id: 114,
    chapter: "My Financial Career",
    author: "Stephen Leacock",
    question: "I wrote something on the cheque and thrust it at the clerk.",
    underlinedWord: "thrust",
    options: {
      A: "Threw",
      B: "Exposed",
      C: "Showed",
      D: "Folded"
    },
    answer: "A"
  },
  {
    id: 115,
    chapter: "My Financial Career",
    author: "Stephen Leacock",
    question: "Reckless with misery, I made a plunge.",
    underlinedWord: "Reckless",
    options: {
      A: "quiet",
      B: "talkative",
      C: "rash",
      D: "slow"
    },
    answer: "C"
  },
  {
    id: 116,
    chapter: "My Financial Career",
    author: "Stephen Leacock",
    question: "Reckless with misery, I made a plunge.",
    underlinedWord: "plunge",
    options: {
      A: "Decided",
      B: "Rejected",
      C: "Dejected",
      D: "Praised"
    },
    answer: "A"
  },
  {
    id: 117,
    chapter: "My Financial Career",
    author: "Stephen Leacock",
    question: "I came from a rival agency.",
    underlinedWord: "rival",
    options: {
      A: "detective",
      B: "secret",
      C: "opponent",
      D: "state"
    },
    answer: "C"
  },
  {
    id: 118,
    chapter: "My Financial Career",
    author: "Stephen Leacock",
    question: "Since then I bank no more.",
    underlinedWord: "bank",
    options: {
      A: "Edge",
      B: "River",
      C: "To visit a bank",
      D: "stopped"
    },
    answer: "C"
  },
  {
    id: 119,
    chapter: "My Financial Career",
    author: "Stephen Leacock",
    question: "The writer poked the ball of money at the clerk.",
    underlinedWord: "poked",
    options: {
      A: "Received",
      B: "Pushed",
      C: "Pulled",
      D: "Snatched"
    },
    answer: "B"
  },
  {
    id: 120,
    chapter: "My Financial Career",
    author: "Stephen Leacock",
    question: "The writer looked timidly round at the clerks.",
    underlinedWord: "timidly round",
    options: {
      A: "Hesitatingly",
      B: "Happily",
      C: "Minutely",
      D: "Differently"
    },
    answer: "A"
  },
  {
    id: 121,
    chapter: "My Financial Career",
    author: "Stephen Leacock",
    question: "I made a wretched attempt to look like a man with a quick temper.",
    underlinedWord: "quick temper",
    options: {
      A: "habit",
      B: "angry",
      C: "friendly",
      D: "fashionable"
    },
    answer: "B"
  },
  {
    id: 122,
    chapter: "My Financial Career",
    author: "Stephen Leacock",
    question: "I looked down into the faintly luminous swirls of the river.",
    underlinedWord: "luminous",
    options: {
      A: "Frightening",
      B: "Pleasing",
      C: "Shining",
      D: "Mesmerizing"
    },
    answer: "C"
  },
  {
    id: 123,
    chapter: "My Financial Career",
    author: "Stephen Leacock",
    question: "In my agony of decision, I left the embankment.",
    underlinedWord: "agony",
    options: {
      A: "Pleasure",
      B: "Pangs",
      C: "Trial",
      D: "Justification"
    },
    answer: "B"
  },
  {
    id: 124,
    chapter: "My Financial Career",
    author: "Stephen Leacock",
    question: "He crossed the threshold of the banks.",
    underlinedWord: "threshold",
    options: {
      A: "Front",
      B: "Limits",
      C: "Doorstep",
      D: "Window"
    },
    answer: "C"
  },
  {
    id: 125,
    chapter: "My Financial Career",
    author: "Stephen Leacock",
    question: "But having encountered one who seemed to need masculine help embarrassed him:",
    underlinedWord: "encountered",
    options: {
      A: "Troubled",
      B: "Faced",
      C: "Preferred",
      D: "Entangled"
    },
    answer: "B"
  },

  // Chapter 8: China's Way to Progress (Galeazzo Santini)
  {
    id: 126,
    chapter: "China's Way to Progress",
    author: "Galeazzo Santini",
    question: "The occidental countries launched a warm hug to China.",
    underlinedWord: "occidental",
    options: {
      A: "Northern",
      B: "Southern",
      C: "Eastern",
      D: "Western"
    },
    answer: "D"
  },
  {
    id: 127,
    chapter: "China's Way to Progress",
    author: "Galeazzo Santini",
    question: "For twenty-four years, China lay forgotten.",
    underlinedWord: "forgotten",
    options: {
      A: "Forgiven",
      B: "Objected",
      C: "Ignored",
      D: "Disappointed"
    },
    answer: "C"
  },
  {
    id: 128,
    chapter: "China's Way to Progress",
    author: "Galeazzo Santini",
    question: "Cultural revolution freed China from cumbersome bureaucracy.",
    underlinedWord: "cumbersome",
    options: {
      A: "materialistic",
      B: "light",
      C: "burdensome",
      D: "fashionable"
    },
    answer: "C"
  },
  {
    id: 129,
    chapter: "China's Way to Progress",
    author: "Galeazzo Santini",
    question: "Economic decentralization has freed China from a cumbersome bureaucracy.",
    underlinedWord: "cumbersome",
    options: {
      A: "Bulky",
      B: "Efficient",
      C: "Lazy",
      D: "sluggish"
    },
    answer: "A"
  },
  {
    id: 130,
    chapter: "China's Way to Progress",
    author: "Galeazzo Santini",
    question: "The Chinese peasant does not flee to the cities.",
    underlinedWord: "flee",
    options: {
      A: "see",
      B: "escape",
      C: "point",
      D: "welcome"
    },
    answer: "B"
  },
  {
    id: 131,
    chapter: "China's Way to Progress",
    author: "Galeazzo Santini",
    question: "There are no neon signs in China.",
    underlinedWord: "neon signs",
    options: {
      A: "good signs",
      B: "welfare",
      C: "omens",
      D: "shining"
    },
    answer: "D"
  },
  {
    id: 132,
    chapter: "China's Way to Progress",
    author: "Galeazzo Santini",
    question: "The gigantic Chinese social experiment does not only concern Asia.",
    underlinedWord: "gigantic",
    options: {
      A: "tremendous",
      B: "hardworking",
      C: "well known",
      D: "progressive"
    },
    answer: "A"
  },
  {
    id: 133,
    chapter: "China's Way to Progress",
    author: "Galeazzo Santini",
    question: "Political control over the masses stopped the exodus from the countryside.",
    underlinedWord: "exodus",
    options: {
      A: "reach",
      B: "setting",
      C: "migration",
      D: "inhabiting"
    },
    answer: "C"
  },
  {
    id: 134,
    chapter: "China's Way to Progress",
    author: "Galeazzo Santini",
    question: "The Chinese regime has maintained minimum subsistence level.",
    underlinedWord: "subsistence",
    options: {
      A: "progress",
      B: "forbearance",
      C: "Intelligence",
      D: "livelihood/level of existence"
    },
    answer: "D"
  },
  {
    id: 135,
    chapter: "China's Way to Progress",
    author: "Galeazzo Santini",
    question: "Read Mao's famous maxim: 'Rely on your resources'.",
    underlinedWord: "maxim",
    options: {
      A: "Principal",
      B: "Saying",
      C: "Rule",
      D: "Statement"
    },
    answer: "B"
  },
  {
    id: 136,
    chapter: "China's Way to Progress",
    author: "Galeazzo Santini",
    question: "From the western angle, the Chinese women lack femininity.",
    underlinedWord: "femininity",
    options: {
      A: "wisdom",
      B: "intelligence",
      C: "womanliness",
      D: "courage"
    },
    answer: "C"
  },
  {
    id: 137,
    chapter: "China's Way to Progress",
    author: "Galeazzo Santini",
    question: "It can stimulate the revolutionary spirit of the masses.",
    underlinedWord: "stimulate",
    options: {
      A: "Subside",
      B: "Pressurize",
      C: "Activate",
      D: "Conceal"
    },
    answer: "C"
  },
  {
    id: 138,
    chapter: "China's Way to Progress",
    author: "Galeazzo Santini",
    question: "National machines and equipment are not entirely indigenous since they possess a number of foreign features.",
    underlinedWord: "indigenous",
    options: {
      A: "Intelligent",
      B: "Free",
      C: "Local",
      D: "Foreign"
    },
    answer: "C"
  },
  {
    id: 139,
    chapter: "China's Way to Progress",
    author: "Galeazzo Santini",
    question: "China got political control over masses.",
    underlinedWord: "masses",
    options: {
      A: "Public",
      B: "Factories",
      C: "Shops",
      D: "Cities"
    },
    answer: "A"
  },
  {
    id: 140,
    chapter: "China's Way to Progress",
    author: "Galeazzo Santini",
    question: "In China the individual has been rescued from the aftermath.",
    underlinedWord: "aftermath",
    options: {
      A: "Harms",
      B: "Consequences",
      C: "Charms",
      D: "Sources"
    },
    answer: "B"
  },

  // Chapter 9: Hunger and Population Explosion (Anna McKenzie)
  {
    id: 141,
    chapter: "Hunger and Population Explosion",
    author: "Anna McKenzie",
    question: "Corn is scarce and food is lacking.",
    underlinedWord: "scarce",
    options: {
      A: "Mean",
      B: "Short",
      C: "Long",
      D: "Rare"
    },
    answer: "B"
  },
  {
    id: 142,
    chapter: "Hunger and Population Explosion",
    author: "Anna McKenzie",
    question: "During my reign, corn is scarce and food is lacking.",
    underlinedWord: "scarce",
    options: {
      A: "Plenteous",
      B: "Rare",
      C: "Good",
      D: "Available"
    },
    answer: "B"
  },
  {
    id: 143,
    chapter: "Hunger and Population Explosion",
    author: "Anna McKenzie",
    question: "Joseph averted the widespread disaster by compulsory storage of food.",
    underlinedWord: "averted",
    options: {
      A: "Avoided",
      B: "Made",
      C: "Changed",
      D: "Stopped"
    },
    answer: "A"
  },
  {
    id: 144,
    chapter: "Hunger and Population Explosion",
    author: "Anna McKenzie",
    question: "The corn could not be distributed to the isolated areas.",
    underlinedWord: "isolated",
    options: {
      A: "Well-off",
      B: "Poor",
      C: "Nearby",
      D: "Remote"
    },
    answer: "D"
  },
  {
    id: 145,
    chapter: "Hunger and Population Explosion",
    author: "Anna McKenzie",
    question: "A tremendous population explosion is taking place.",
    underlinedWord: "tremendous",
    options: {
      A: "venerable",
      B: "remote",
      C: "big",
      D: "glorious"
    },
    answer: "C"
  },
  {
    id: 146,
    chapter: "Hunger and Population Explosion",
    author: "Anna McKenzie",
    question: "Thousands even millions will die of starvation because of famines caused by lack of rain.",
    underlinedWord: "starvation",
    options: {
      A: "hunger",
      B: "affliction",
      C: "satisfaction",
      D: "sacrifice"
    },
    answer: "A"
  },
  {
    id: 147,
    chapter: "Hunger and Population Explosion",
    author: "Anna McKenzie",
    question: "Muscles are destroyed and bones deformed.",
    underlinedWord: "deformed",
    options: {
      A: "Reshaped",
      B: "De-shaped",
      C: "Cramped",
      D: "Pained"
    },
    answer: "B"
  },
  {
    id: 148,
    chapter: "Hunger and Population Explosion",
    author: "Anna McKenzie",
    question: "We have the power to abolish the war.",
    underlinedWord: "abolish",
    options: {
      A: "end",
      B: "splash",
      C: "fresh",
      D: "finish"
    },
    answer: "A"
  },
  {
    id: 149,
    chapter: "Hunger and Population Explosion",
    author: "Anna McKenzie",
    question: "One of the first records of famine was carved in Granite.",
    underlinedWord: "carved",
    options: {
      A: "Engraved",
      B: "Saved",
      C: "Found",
      D: "Managed"
    },
    answer: "A"
  },
  {
    id: 150,
    chapter: "Hunger and Population Explosion",
    author: "Anna McKenzie",
    question: "It may have come from the larder of a forgetful Paddington housewife:",
    underlinedWord: "larder",
    options: {
      A: "Store-room",
      B: "Bed-room",
      C: "Drawing-room",
      D: "Washroom"
    },
    answer: "A"
  },
  {
    id: 151,
    chapter: "Hunger and Population Explosion",
    author: "Anna McKenzie",
    question: "Many countries have carried out massive programmes to free their people of yaws.",
    underlinedWord: "carried out",
    options: {
      A: "Mapped",
      B: "Planned",
      C: "Proposed",
      D: "Completed"
    },
    answer: "D"
  },

  // Chapter 10: The Jewel of the World (Philip K. Hitti)
  {
    id: 152,
    chapter: "The Jewel of the World",
    author: "Philip K. Hitti",
    question: "Abd-al-Rahman, with sharp, aquiline features was a youth of exceptional ability.",
    underlinedWord: "aquiline",
    options: {
      A: "Like an eagle",
      B: "eagle like",
      C: "unbalanced",
      D: "unfair"
    },
    answer: "B"
  },
  {
    id: 153,
    chapter: "The Jewel of the World",
    author: "Philip K. Hitti",
    question: "The story of his escape is dramatic.",
    underlinedWord: "escape",
    options: {
      A: "Fleeing",
      B: "Bedouin",
      C: "gained",
      D: "spies"
    },
    answer: "A"
  },
  {
    id: 154,
    chapter: "The Jewel of the World",
    author: "Philip K. Hitti",
    question: "Abd-ul-Rehman barely escaped assassination.",
    underlinedWord: "assassination",
    options: {
      A: "murder",
      B: "enemy",
      C: "accident",
      D: "Killing"
    },
    answer: "A"
  },
  {
    id: 155,
    chapter: "The Jewel of the World",
    author: "Philip K. Hitti",
    question: "Afoot, friendless and penniless, he set out south-east word.",
    underlinedWord: "penniless",
    options: {
      A: "Sick",
      B: "Alone",
      C: "Rich",
      D: "Poor"
    },
    answer: "D"
  },
  {
    id: 156,
    chapter: "The Jewel of the World",
    author: "Philip K. Hitti",
    question: "In Ceuta, Abdul Rehman was offered refuge.",
    underlinedWord: "refuge",
    options: {
      A: "kingdom",
      B: "shelter",
      C: "rule",
      D: "office"
    },
    answer: "B"
  },
  {
    id: 157,
    chapter: "The Jewel of the World",
    author: "Philip K. Hitti",
    question: "It took him some years more to bring all of Spain to subjection, but he persisted.",
    underlinedWord: "persisted",
    options: {
      A: "continued",
      B: "abandoned",
      C: "perished",
      D: "pertained"
    },
    answer: "A"
  },
  {
    id: 158,
    chapter: "The Jewel of the World",
    author: "Philip K. Hitti",
    question: "Abd-al-Rahman beautified the cities of his domain.",
    underlinedWord: "domain",
    options: {
      A: "country",
      B: "province",
      C: "continent",
      D: "kingdom"
    },
    answer: "D"
  },
  {
    id: 159,
    chapter: "The Jewel of the World",
    author: "Philip K. Hitti",
    question: "Abdul Rehman administered the people with sagacity.",
    underlinedWord: "sagacity",
    options: {
      A: "wisdom",
      B: "boldness",
      C: "terror",
      D: "cruelty"
    },
    answer: "A"
  },
  {
    id: 160,
    chapter: "The Jewel of the World",
    author: "Philip K. Hitti",
    question: "Al-Hakam's agents ransacked the bookshops of all the major cities.",
    underlinedWord: "ransacked",
    options: {
      A: "bought",
      B: "looted",
      C: "robbed",
      D: "searched"
    },
    answer: "D"
  },
  {
    id: 161,
    chapter: "The Jewel of the World",
    author: "Philip K. Hitti",
    question: "The garden was proverbial for its extensive shades:",
    underlinedWord: "proverbial",
    options: {
      A: "Well Known",
      B: "Beautiful",
      C: "Big",
      D: "Modern"
    },
    answer: "A"
  },
  {
    id: 162,
    chapter: "The Jewel of the World",
    author: "Philip K. Hitti",
    question: "It received envoys from the Byzantine emperor.",
    underlinedWord: "envoys",
    options: {
      A: "Enemies",
      B: "Gifts",
      C: "Diplomats",
      D: "Groups"
    },
    answer: "C"
  },

  // Chapter 11: First Year at Harrow (Sir Winston S. Churchill)
  {
    id: 163,
    chapter: "First Year at Harrow",
    author: "Sir Winston S. Churchill",
    question: "I had scarcely passed my twelfth birth day when I entered the inhospitable regions of examinations.",
    underlinedWord: "inhospitable",
    options: {
      A: "Sorrowfully",
      B: "Sadly",
      C: "Hardly",
      D: "Unfriendly"
    },
    answer: "D"
  },
  {
    id: 164,
    chapter: "First Year at Harrow",
    author: "Sir Winston S. Churchill",
    question: "These examinations were a great trial to Churchill.",
    underlinedWord: "trial",
    options: {
      A: "History",
      B: "Test",
      C: "Blessing",
      D: "Bounty"
    },
    answer: "B"
  },
  {
    id: 165,
    chapter: "First Year at Harrow",
    author: "Sir Winston S. Churchill",
    question: "They were almost invariably those I fancied least.",
    underlinedWord: "invariably",
    options: {
      A: "usually",
      B: "mostly",
      C: "always",
      D: "generally"
    },
    answer: "C"
  },
  {
    id: 166,
    chapter: "First Year at Harrow",
    author: "Sir Winston S. Churchill",
    question: "The examiners were partial to Latin and Mathematics.",
    underlinedWord: "partial",
    options: {
      A: "Hated",
      B: "Loathed",
      C: "Biased",
      D: "Shunned"
    },
    answer: "C"
  },
  {
    id: 167,
    chapter: "First Year at Harrow",
    author: "Sir Winston S. Churchill",
    question: "The examiner's will prevailed.",
    underlinedWord: "prevailed",
    options: {
      A: "Rejected",
      B: "Failed",
      C: "Succeeded",
      D: "Defeated"
    },
    answer: "C"
  },
  {
    id: 168,
    chapter: "First Year at Harrow",
    author: "Sir Winston S. Churchill",
    question: "The examiners sought to expose the ignorance of the writer.",
    underlinedWord: "expose",
    options: {
      A: "Conceal",
      B: "Comprehend",
      C: "Appreciate",
      D: "Show"
    },
    answer: "D"
  },
  {
    id: 169,
    chapter: "First Year at Harrow",
    author: "Sir Winston S. Churchill",
    question: "The headmaster judged his ability from these slender indications.",
    underlinedWord: "slender",
    options: {
      A: "small",
      B: "active",
      C: "large",
      D: "Slight"
    },
    answer: "D"
  },
  {
    id: 170,
    chapter: "First Year at Harrow",
    author: "Sir Winston S. Churchill",
    question: "After much reflection, I put a bracket round it.",
    underlinedWord: "reflection",
    options: {
      A: "thought",
      B: "wait",
      C: "effort",
      D: "force"
    },
    answer: "A"
  },
  {
    id: 171,
    chapter: "First Year at Harrow",
    author: "Sir Winston S. Churchill",
    question: "I gazed for two whole hours:",
    underlinedWord: "gazed",
    options: {
      A: "Wondered",
      B: "Wandered",
      C: "Stared",
      D: "Avoided"
    },
    answer: "C"
  },
  {
    id: 172,
    chapter: "First Year at Harrow",
    author: "Sir Winston S. Churchill",
    question: "I gazed for two hours on this sad spectacle.",
    underlinedWord: "spectacle",
    options: {
      A: "optical",
      B: "event",
      C: "incident",
      D: "scene"
    },
    answer: "D"
  },
  {
    id: 173,
    chapter: "First Year at Harrow",
    author: "Sir Winston S. Churchill",
    question: "The merciful ushers collected the papers of the writer.",
    underlinedWord: "ushers",
    options: {
      A: "Attendants",
      B: "Soldiers",
      C: "Teachers",
      D: "Actors"
    },
    answer: "A"
  },
  {
    id: 174,
    chapter: "First Year at Harrow",
    author: "Sir Winston S. Churchill",
    question: "The headmaster showed discernment in judging writer's general ability.",
    underlinedWord: "discernment",
    options: {
      A: "Foolishness",
      B: "Understanding",
      C: "Mercy",
      D: "Cruelty"
    },
    answer: "B"
  },
  {
    id: 175,
    chapter: "First Year at Harrow",
    author: "Sir Winston S. Churchill",
    question: "It is very much to his credit.",
    underlinedWord: "credit",
    options: {
      A: "repute",
      B: "disgrace",
      C: "privilege",
      D: "disrepute"
    },
    answer: "C"
  },
  {
    id: 176,
    chapter: "First Year at Harrow",
    author: "Sir Winston S. Churchill",
    question: "I continued in this unpretentious situation.",
    underlinedWord: "unpretentious",
    options: {
      A: "modern",
      B: "unpleasant",
      C: "ugly",
      D: "Unassuming"
    },
    answer: "D"
  },
  {
    id: 177,
    chapter: "First Year at Harrow",
    author: "Sir Winston S. Churchill",
    question: "I learnt English thoroughly.",
    underlinedWord: "thoroughly",
    options: {
      A: "specially",
      B: "clearly",
      C: "lazily",
      D: "completely"
    },
    answer: "D"
  },
  {
    id: 178,
    chapter: "First Year at Harrow",
    author: "Sir Winston S. Churchill",
    question: "He learned English parsing thoroughly.",
    underlinedWord: "parsing",
    options: {
      A: "Grammar Rules",
      B: "Writing Rules",
      C: "Spelling Rules",
      D: "Reading Rules"
    },
    answer: "A"
  },
  {
    id: 179,
    chapter: "First Year at Harrow",
    author: "Sir Winston S. Churchill",
    question: "Naturally, I am biased in favour of boys learning English.",
    underlinedWord: "biased",
    options: {
      A: "willing",
      B: "unwilling",
      C: "prejudiced",
      D: "hesitant"
    },
    answer: "C"
  },
  {
    id: 180,
    chapter: "First Year at Harrow",
    author: "Sir Winston S. Churchill",
    question: "But the only thing I would whip them for is not knowing English.",
    underlinedWord: "whip",
    options: {
      A: "Praise",
      B: "Award",
      C: "Punish",
      D: "Criticize"
    },
    answer: "C"
  },
  {
    id: 181,
    chapter: "First Year at Harrow",
    author: "Sir Winston S. Churchill",
    question: "The talented students won prizes for writing pithy Greek epigrams.",
    underlinedWord: "pithy",
    options: {
      A: "Difficult",
      B: "Concise",
      C: "Easy",
      D: "High"
    },
    answer: "B"
  },
  {
    id: 182,
    chapter: "First Year at Harrow",
    author: "Sir Winston S. Churchill",
    question: "The examiners liked those subjects which I fancied least.",
    underlinedWord: "fancied",
    options: {
      A: "Needed",
      B: "Prayed",
      C: "Liked",
      D: "Hated"
    },
    answer: "C"
  },

  // Chapter 12: Hitch-Hiking Across the Sahara (G. F. Lamb)
  {
    id: 183,
    chapter: "Hitch-Hiking Across the Sahara",
    author: "G. F. Lamb",
    question: "The full Sahara area is stretching almost the complete width of North Africa.",
    underlinedWord: "stretching",
    options: {
      A: "Hunting",
      B: "Travelling",
      C: "Hiking",
      D: "Extending"
    },
    answer: "D"
  },
  {
    id: 184,
    chapter: "Hitch-Hiking Across the Sahara",
    author: "G. F. Lamb",
    question: "Large parts of the Sahara were almost uninhabited.",
    underlinedWord: "uninhabited",
    options: {
      A: "unpleasant",
      B: "smooth",
      C: "unpopulated",
      D: "uncultivated"
    },
    answer: "C"
  },
  {
    id: 185,
    chapter: "Hitch-Hiking Across the Sahara",
    author: "G. F. Lamb",
    question: "Christopher determined that his next journey should be Timbuktu.",
    underlinedWord: "determined",
    options: {
      A: "Decided",
      B: "Announced",
      C: "Delayed",
      D: "Showed"
    },
    answer: "A"
  },
  {
    id: 186,
    chapter: "Hitch-Hiking Across the Sahara",
    author: "G. F. Lamb",
    question: "The conditions were agonizing.",
    underlinedWord: "agonizing",
    options: {
      A: "Macabre",
      B: "Painful",
      C: "painful",
      D: "Favourable"
    },
    answer: "C"
  },
  {
    id: 187,
    chapter: "Hitch-Hiking Across the Sahara",
    author: "G. F. Lamb",
    question: "He was firmly gripped by the wanderlust.",
    underlinedWord: "wanderlust",
    options: {
      A: "hungry",
      B: "disease",
      C: "fear",
      D: "desire for travelling"
    },
    answer: "D"
  },
  {
    id: 188,
    chapter: "Hitch-Hiking Across the Sahara",
    author: "G. F. Lamb",
    question: "It was stifling in driver's cabin.",
    underlinedWord: "stifling",
    options: {
      A: "refreshing",
      B: "comforting",
      C: "pressing",
      D: "suffocating"
    },
    answer: "D"
  },
  {
    id: 189,
    chapter: "Hitch-Hiking Across the Sahara",
    author: "G. F. Lamb",
    question: "Christopher had to be vigilant until each mouthful was safely behind his teeth.",
    underlinedWord: "vigilant",
    options: {
      A: "Careless",
      B: "watchful",
      C: "reckless",
      D: "hesitant"
    },
    answer: "B"
  },
  {
    id: 190,
    chapter: "Hitch-Hiking Across the Sahara",
    author: "G. F. Lamb",
    question: "This time the driver and greaser seemed reluctant to take him.",
    underlinedWord: "reluctant",
    options: {
      A: "willing",
      B: "unwilling/hesitant",
      C: "willful",
      D: "unhappy"
    },
    answer: "B"
  },
  {
    id: 191,
    chapter: "Hitch-Hiking Across the Sahara",
    author: "G. F. Lamb",
    question: "A truck; a big dirty, clumsy looking truck.",
    underlinedWord: "clumsy",
    options: {
      A: "Awkward",
      B: "Backward",
      C: "Horrible",
      D: "Terrible"
    },
    answer: "A"
  },
  {
    id: 192,
    chapter: "Hitch-Hiking Across the Sahara",
    author: "G. F. Lamb",
    question: "The driver picked his way with uncanny skill.",
    underlinedWord: "uncanny",
    options: {
      A: "Simple",
      B: "Ordinary",
      C: "Humorous",
      D: "Remarkable"
    },
    answer: "D"
  },
  {
    id: 193,
    chapter: "Hitch-Hiking Across the Sahara",
    author: "G. F. Lamb",
    question: "Their car had become stuck in a sand dune.",
    underlinedWord: "sand dune",
    options: {
      A: "area",
      B: "sea",
      C: "shore",
      D: "Sand"
    },
    answer: "D"
  },

  // Chapter 13: Sir Alexander Fleming (Patrick Pringle)
  {
    id: 194,
    chapter: "Sir Alexander Fleming",
    author: "Patrick Pringle",
    question: "Lister was medical peer of Pasteur.",
    underlinedWord: "peer",
    options: {
      A: "fellow",
      B: "foe",
      C: "enemy",
      D: "teacher"
    },
    answer: "A"
  },
  {
    id: 195,
    chapter: "Sir Alexander Fleming",
    author: "Patrick Pringle",
    question: "Lister's aim was the prevention of disease.",
    underlinedWord: "prevention",
    options: {
      A: "avoidance/cure",
      B: "cure/protection",
      C: "Avoidance",
      D: "Stopping"
    },
    answer: "C"
  },
  {
    id: 196,
    chapter: "Sir Alexander Fleming",
    author: "Patrick Pringle",
    question: "Carbolic acid destroyed leucocytes.",
    underlinedWord: "leucocytes",
    options: {
      A: "Red cells",
      B: "White cells",
      C: "Germs",
      D: "Bacteria"
    },
    answer: "B"
  },
  {
    id: 197,
    chapter: "Sir Alexander Fleming",
    author: "Patrick Pringle",
    question: "Metchnikoff discovered the body's natural armour against disease.",
    underlinedWord: "armour",
    options: {
      A: "Malady",
      B: "shield",
      C: "medicine",
      D: "Defensive"
    },
    answer: "B"
  },
  {
    id: 198,
    chapter: "Sir Alexander Fleming",
    author: "Patrick Pringle",
    question: "Metchnikoff, a pupil of Pasteur, revealed the true nature of the problem.",
    underlinedWord: "revealed",
    options: {
      A: "showed",
      B: "concealed",
      C: "folded",
      D: "appreciated"
    },
    answer: "A"
  },
  {
    id: 199,
    chapter: "Sir Alexander Fleming",
    author: "Patrick Pringle",
    question: "Two brothers of Fleming became opticians.",
    underlinedWord: "opticians",
    options: {
      A: "Oculists",
      B: "Dentists",
      C: "Doctors",
      D: "Experts"
    },
    answer: "A"
  },
  {
    id: 200,
    chapter: "Sir Alexander Fleming",
    author: "Patrick Pringle",
    question: "Fleming got a share in the legacy.",
    underlinedWord: "legacy",
    options: {
      A: "Endowment",
      B: "Heritage",
      C: "inheritance",
      D: "history"
    },
    answer: "C"
  },
  {
    id: 201,
    chapter: "Sir Alexander Fleming",
    author: "Patrick Pringle",
    question: "Injecting carbolic acid was abandoned soon.",
    underlinedWord: "abandoned",
    options: {
      A: "given up",
      B: "adopted",
      C: "practiced",
      D: "postponed"
    },
    answer: "A"
  },
  {
    id: 202,
    chapter: "Sir Alexander Fleming",
    author: "Patrick Pringle",
    question: "It may have come from the larder of a forgetful housewife.",
    underlinedWord: "larder",
    options: {
      A: "Store-room",
      B: "Bed-room",
      C: "Wash-room",
      D: "Drawing-room"
    },
    answer: "A"
  },
  {
    id: 203,
    chapter: "Sir Alexander Fleming",
    author: "Patrick Pringle",
    question: "Fleming plated the mould on meat broth.",
    underlinedWord: "broth",
    options: {
      A: "Soup",
      B: "Soot",
      C: "Suit",
      D: "Suite"
    },
    answer: "A"
  },
  {
    id: 204,
    chapter: "Sir Alexander Fleming",
    author: "Patrick Pringle",
    question: "Lysozyme was the forerunner of penicillin.",
    underlinedWord: "forerunner",
    options: {
      A: "Forefather",
      B: "Harbinger",
      C: "Worker",
      D: "Plunder"
    },
    answer: "B"
  },
  {
    id: 205,
    chapter: "Sir Alexander Fleming",
    author: "Patrick Pringle",
    question: "And in the same year he hit on penicillin.",
    underlinedWord: "hit on",
    options: {
      A: "Saw",
      B: "Controlled",
      C: "Listened",
      D: "Discovered"
    },
    answer: "D"
  },
  {
    id: 206,
    chapter: "Sir Alexander Fleming",
    author: "Patrick Pringle",
    question: "Penicillin had no toxic effect on leucocytes.",
    underlinedWord: "toxic",
    options: {
      A: "beneficial",
      B: "harmful",
      C: "unexpected",
      D: "amazing"
    },
    answer: "B"
  },
  {
    id: 207,
    chapter: "Sir Alexander Fleming",
    author: "Patrick Pringle",
    question: "Penicillin was hailed as a wonder drug.",
    underlinedWord: "hailed",
    options: {
      A: "cheered",
      B: "denounced",
      C: "welcomed",
      D: "sailed"
    },
    answer: "C"
  },
  {
    id: 208,
    chapter: "Sir Alexander Fleming",
    author: "Patrick Pringle",
    question: "Fleming made the discovery by what he modestly called an accident.",
    underlinedWord: "modestly",
    options: {
      A: "Anxiously",
      B: "proudly",
      C: "silently",
      D: "humbly"
    },
    answer: "D"
  },
  {
    id: 209,
    chapter: "Sir Alexander Fleming",
    author: "Patrick Pringle",
    question: "Fleming was not happy in the lime-light.",
    underlinedWord: "lime-light",
    options: {
      A: "money",
      B: "fame",
      C: "knowledge",
      D: "Publicity"
    },
    answer: "B"
  },
  {
    id: 210,
    chapter: "Sir Alexander Fleming",
    author: "Patrick Pringle",
    question: "Fleming protested that such gratitude was not due to him.",
    underlinedWord: "gratitude",
    options: {
      A: "Aptitude",
      B: "Curse",
      C: "Thanks",
      D: "Attitude"
    },
    answer: "C"
  },
  {
    id: 211,
    chapter: "Sir Alexander Fleming",
    author: "Patrick Pringle",
    question: "Fleming provoked other scientists to seek new antibiotics.",
    underlinedWord: "seek",
    options: {
      A: "search for",
      B: "need for",
      C: "reject",
      D: "depreciate"
    },
    answer: "A"
  },
  {
    id: 212,
    chapter: "Sir Alexander Fleming",
    author: "Patrick Pringle",
    question: "He was suffering from Catarrh.",
    underlinedWord: "Catarrh",
    options: {
      A: "Headache",
      B: "Ear pain",
      C: "Common cold",
      D: "Fever"
    },
    answer: "C"
  },
  {
    id: 213,
    chapter: "Sir Alexander Fleming",
    author: "Patrick Pringle",
    question: "Americans who visited the laboratory were amazed.",
    underlinedWord: "laboratory",
    options: {
      A: "practical room",
      B: "classroom",
      C: "living room",
      D: "sports room"
    },
    answer: "A"
  },
  {
    id: 214,
    chapter: "Sir Alexander Fleming",
    author: "Patrick Pringle",
    question: "Other bacteria stopped short, inhibited by its antibacterial action.",
    underlinedWord: "inhibited",
    options: {
      A: "Stood",
      B: "Kicked",
      C: "Catalysed",
      D: "Checked"
    },
    answer: "D"
  },
  {
    id: 215,
    chapter: "Sir Alexander Fleming",
    author: "Patrick Pringle",
    question: "Heat was used to sterilize instruments.",
    underlinedWord: "sterilize",
    options: {
      A: "Invent",
      B: "Waste",
      C: "Sharpen",
      D: "Disinfect"
    },
    answer: "D"
  },
  {
    id: 216,
    chapter: "Sir Alexander Fleming",
    author: "Patrick Pringle",
    question: "He sought to find a means to aid the leucocytes:",
    underlinedWord: "sought",
    options: {
      A: "Suggested",
      B: "Looked for",
      C: "Ignored",
      D: "Rejected"
    },
    answer: "B"
  },

  // Chapter 14: Louis Pasteur (Margaret Avery)
  {
    id: 217,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "His father won the cross of Legion of Honour on the field of battle for valour and fidelity.",
    underlinedWord: "fidelity",
    options: {
      A: "Bravery",
      B: "Loyalty",
      C: "Wisdom",
      D: "command"
    },
    answer: "B"
  },
  {
    id: 218,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "Pasteur was fortunate in possessing forbears of character and strength.",
    underlinedWord: "forbears",
    options: {
      A: "wealth",
      B: "descendant",
      C: "fellows",
      D: "ancestors"
    },
    answer: "D"
  },
  {
    id: 219,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "France and Germany plunged into war.",
    underlinedWord: "plunged into",
    options: {
      A: "avoided",
      B: "separated",
      C: "loved",
      D: "entered"
    },
    answer: "D"
  },
  {
    id: 220,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "Pasteur enrolled himself in the National Guard.",
    underlinedWord: "enrolled",
    options: {
      A: "Applied",
      B: "Registered",
      C: "Tested",
      D: "Enquired"
    },
    answer: "B"
  },
  {
    id: 221,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "Pasteur used to embarrass his teacher of Chemistry.",
    underlinedWord: "embarrass",
    options: {
      A: "Please",
      B: "Cure",
      C: "Confuse",
      D: "Hear"
    },
    answer: "C"
  },
  {
    id: 222,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "Pasteur was born in quite humble circumstances.",
    underlinedWord: "humble",
    options: {
      A: "extraordinary",
      B: "unusual",
      C: "low",
      D: "rich"
    },
    answer: "C"
  },
  {
    id: 223,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "Pasteur was filled with loathing of Germany.",
    underlinedWord: "loathing",
    options: {
      A: "hatred",
      B: "Hatred",
      C: "Affection",
      D: "Patriotism"
    },
    answer: "B"
  },
  {
    id: 224,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "Pasteur gives vent to his loathing for Germany by returning his degree.",
    underlinedWord: "loathing",
    options: {
      A: "Loyalty",
      B: "Devotion",
      C: "Patriotism",
      D: "Detestation"
    },
    answer: "D"
  },
  {
    id: 225,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "Today the sight of this parchment is odious to me.",
    underlinedWord: "odious",
    options: {
      A: "pleasant",
      B: "repulsive",
      C: "Hateful",
      D: "Precious"
    },
    answer: "B"
  },
  {
    id: 226,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "Pasteur proved that spontaneous generation was not a fact.",
    underlinedWord: "spontaneous",
    options: {
      A: "Active",
      B: "Inactive",
      C: "Irregular",
      D: "Automatic"
    },
    answer: "D"
  },
  {
    id: 227,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "Pasteur asked for arbitration for competition.",
    underlinedWord: "arbitration",
    options: {
      A: "punishment",
      B: "reward",
      C: "honour",
      D: "decision"
    },
    answer: "D"
  },
  {
    id: 228,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "Pasteur found the treatment of hydrophobia.",
    underlinedWord: "hydrophobia",
    options: {
      A: "flue",
      B: "cough",
      C: "rabies",
      D: "typhoid"
    },
    answer: "C"
  },
  {
    id: 229,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "He never shook off the physical effects of the disease.",
    underlinedWord: "shook off",
    options: {
      A: "Trembled",
      B: "Arranged",
      C: "Shivered",
      D: "Got rid of"
    },
    answer: "D"
  },
  {
    id: 230,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "The epidemic was devastating the silk industry.",
    underlinedWord: "devastating",
    options: {
      A: "destroying",
      B: "promoting",
      C: "encouraging",
      D: "checking"
    },
    answer: "A"
  },
  {
    id: 231,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "Pasteur revealed the true nature of the problem.",
    underlinedWord: "revealed",
    options: {
      A: "learnt",
      B: "disclosed",
      C: "covered",
      D: "pointed"
    },
    answer: "B"
  },
  {
    id: 232,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "Inflammation of wounds caused amputation necessary.",
    underlinedWord: "amputation",
    options: {
      A: "Cutting wings",
      B: "Cutting lands",
      C: "Cutting limbs",
      D: "Cutting things"
    },
    answer: "C"
  },
  {
    id: 233,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "Pasteur entered for the competition.",
    underlinedWord: "competition",
    options: {
      A: "Contest",
      B: "Show",
      C: "Speech",
      D: "Display"
    },
    answer: "A"
  },
  {
    id: 234,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "Malaria was rampant in England.",
    underlinedWord: "rampant",
    options: {
      A: "Confined",
      B: "Present",
      C: "Limited",
      D: "Widely spread"
    },
    answer: "D"
  },
  {
    id: 235,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "Pasteur arrived at the method of attenuating germs.",
    underlinedWord: "attenuating",
    options: {
      A: "Growing",
      B: "Killing",
      C: "Covering",
      D: "Weakening"
    },
    answer: "D"
  },
  {
    id: 236,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "It is impossible to catalogue the list of his discoveries.",
    underlinedWord: "catalogue",
    options: {
      A: "destroy",
      B: "compile",
      C: "raw",
      D: "produce"
    },
    answer: "B"
  },
  {
    id: 237,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "Formerly there was the eye with morbific powers.",
    underlinedWord: "morbific",
    options: {
      A: "Strong",
      B: "Causing disease",
      C: "Effective",
      D: "Defective"
    },
    answer: "B"
  },
  {
    id: 238,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "Pasteur institute was built in Paris with subscriptions.",
    underlinedWord: "subscriptions",
    options: {
      A: "Mud",
      B: "Cement",
      C: "Ideas",
      D: "Donations"
    },
    answer: "D"
  },
  {
    id: 239,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "It was earlier believed that the mysterious effect of the moon caused lunacy.",
    underlinedWord: "lunacy",
    options: {
      A: "Fever",
      B: "Madness",
      C: "Foolishness",
      D: "Blindness"
    },
    answer: "B"
  },
  {
    id: 240,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "Pasteur's father bought a small tannery.",
    underlinedWord: "tannery",
    options: {
      A: "A place where tanning is carried on",
      B: "Mental asylum",
      C: "Asylum",
      D: "Provision store"
    },
    answer: "A"
  },
  {
    id: 241,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "Malaria was banished by draining the Malarial Districts.",
    underlinedWord: "banished",
    options: {
      A: "Thrown Out",
      B: "Welcomed",
      C: "Invited",
      D: "Defeated"
    },
    answer: "A"
  },
  {
    id: 242,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "'A name doomed henceforward to execration.'",
    underlinedWord: "execration",
    options: {
      A: "Death",
      B: "Damnation",
      C: "Refinement",
      D: "Nation"
    },
    answer: "B"
  },
  {
    id: 243,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "Pasteur was exceedingly disappointed.",
    underlinedWord: "exceedingly",
    options: {
      A: "civilly",
      B: "embellishly",
      C: "excessively",
      D: "mildly"
    },
    answer: "C"
  },
  {
    id: 244,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "Pasteur discovered that an appalling number of women died from puerperal fever in Maternal Hospitals.",
    underlinedWord: "appalling",
    options: {
      A: "large",
      B: "appealing",
      C: "terrifying",
      D: "pleasant"
    },
    answer: "C"
  },
  {
    id: 245,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "He proceeded to inoculate various birds with dead or dying germs.",
    underlinedWord: "inoculate",
    options: {
      A: "collect",
      B: "damage",
      C: "inject",
      D: "separate"
    },
    answer: "C"
  },
  {
    id: 246,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "The malign influence of the moon caused lunacy.",
    underlinedWord: "malign",
    options: {
      A: "Maximum",
      B: "Good",
      C: "Evil",
      D: "Popular"
    },
    answer: "C"
  },
  {
    id: 247,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "Pasteur and his adversaries were to repeat their experiment.",
    underlinedWord: "adversaries",
    options: {
      A: "Fellows",
      B: "Friends",
      C: "Comrades",
      D: "Opponents"
    },
    answer: "D"
  },
  {
    id: 248,
    chapter: "Louis Pasteur",
    author: "Margaret Avery",
    question: "Besancon was a bigger place with better educational provision:",
    underlinedWord: "provision",
    options: {
      A: "Arrangement",
      B: "Hurdle",
      C: "Experiment",
      D: "Technique"
    },
    answer: "A"
  },

  // Chapter 15: Mustafa Kamal (Wilfrid F. Castle)
  {
    id: 249,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "Allied forces were supervising the police.",
    underlinedWord: "supervising",
    options: {
      A: "Controlling",
      B: "Protecting",
      C: "Warning",
      D: "Helping"
    },
    answer: "A"
  },
  {
    id: 250,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "The encounters caused consternation not only among the Allies but also in Istanbul itself.",
    underlinedWord: "consternation",
    options: {
      A: "Pleasure",
      B: "alarm",
      C: "Admiration",
      D: "Shock"
    },
    answer: "B"
  },
  {
    id: 251,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "In Eastern Anatolia week by week little encounters increased.",
    underlinedWord: "encounters",
    options: {
      A: "Functions",
      B: "Celebrations",
      C: "Skirmishes",
      D: "Distance"
    },
    answer: "C"
  },
  {
    id: 252,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "The delegates in Anatolia could transfer their activities to Istanbul.",
    underlinedWord: "delegates",
    options: {
      A: "enemies",
      B: "beguiles",
      C: "contemplates",
      D: "envoys"
    },
    answer: "D"
  },
  {
    id: 253,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "The Grand Turkish National Assembly gave the verdict.",
    underlinedWord: "verdict",
    options: {
      A: "decision",
      B: "statement",
      C: "promise",
      D: "policy"
    },
    answer: "A"
  },
  {
    id: 254,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "Every indication seemed to point to one man.",
    underlinedWord: "indication",
    options: {
      A: "Sign",
      B: "Dictation",
      C: "Order",
      D: "Application"
    },
    answer: "A"
  },
  {
    id: 255,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "The Turks were infuriated by the occupants.",
    underlinedWord: "infuriated",
    options: {
      A: "Stimulated",
      B: "Enraged",
      C: "Pleased",
      D: "Encouraged"
    },
    answer: "B"
  },
  {
    id: 256,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "A general massacre of the Armenians is expected.",
    underlinedWord: "massacre",
    options: {
      A: "Arrest",
      B: "Expulsion",
      C: "Management",
      D: "Genocide"
    },
    answer: "D"
  },
  {
    id: 257,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "Government at Istanbul was branded as Govt. of dotards.",
    underlinedWord: "dotards",
    options: {
      A: "mad",
      B: "wise",
      C: "sturdy",
      D: "winner"
    },
    answer: "A"
  },
  {
    id: 258,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "The Turks vowed that death was preferable to rule by Greeks.",
    underlinedWord: "vowed",
    options: {
      A: "Swore",
      B: "Said",
      C: "Repeated",
      D: "Requested"
    },
    answer: "A"
  },
  {
    id: 259,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "There was a disbanded Turkish army corps at Diyarbakir.",
    underlinedWord: "disbanded",
    options: {
      A: "Scattered",
      B: "Distributed",
      C: "United",
      D: "Hungry"
    },
    answer: "A"
  },
  {
    id: 260,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "Padishah himself was eager to collaborate with all Allies.",
    underlinedWord: "eager",
    options: {
      A: "Keen",
      B: "Angry",
      C: "Gloomy",
      D: "Happy"
    },
    answer: "A"
  },
  {
    id: 261,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "Turkish patriotism was no longer vague and undecided.",
    underlinedWord: "vague",
    options: {
      A: "Useless",
      B: "Fatigued",
      C: "Unclear",
      D: "Clear"
    },
    answer: "C"
  },
  {
    id: 262,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "The Padishah himself was eager to collaborate with the Allies.",
    underlinedWord: "collaborate",
    options: {
      A: "oppose",
      B: "resist",
      C: "co-operate",
      D: "fight"
    },
    answer: "C"
  },
  {
    id: 263,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "Mehmet IV tried to regain Anatolia by subtlety.",
    underlinedWord: "subtlety",
    options: {
      A: "Sagacity",
      B: "Threat",
      C: "Cunning",
      D: "Tolerating"
    },
    answer: "C"
  },
  {
    id: 264,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "It was flame of indignation.",
    underlinedWord: "indignation",
    options: {
      A: "Praise",
      B: "Honour",
      C: "Strict",
      D: "Resentment"
    },
    answer: "D"
  },
  {
    id: 265,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "Mustafa Kamal was making exceptionally good use of the freedom.",
    underlinedWord: "exceptionally",
    options: {
      A: "Frivolously",
      B: "Unusually",
      C: "Notoriously",
      D: "Promptly"
    },
    answer: "B"
  },
  {
    id: 266,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "The greater part of Izmir was reduced to ashes.",
    underlinedWord: "ashes",
    options: {
      A: "Dust",
      B: "Water",
      C: "Smoke",
      D: "Cloud"
    },
    answer: "A"
  },
  {
    id: 267,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "He proposed that the Sultanate must be abolished.",
    underlinedWord: "abolished",
    options: {
      A: "enriched",
      B: "prevailed",
      C: "eradicated",
      D: "decreased"
    },
    answer: "C"
  },
  {
    id: 268,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "The changes in all branches of Turkish life have been stupendous.",
    underlinedWord: "stupendous",
    options: {
      A: "Impressive",
      B: "Vindictive",
      C: "Unimpressive",
      D: "Indecent"
    },
    answer: "A"
  },
  {
    id: 269,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "By the unanimous vote of the Assembly Sultanate was abolished.",
    underlinedWord: "unanimous",
    options: {
      A: "respectable",
      B: "sacred",
      C: "united",
      D: "willing"
    },
    answer: "C"
  },
  {
    id: 270,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "Mustafa Kamal was the saviour of Turkey.",
    underlinedWord: "saviour",
    options: {
      A: "liberator",
      B: "Plunderer",
      C: "Minister",
      D: "Deliverer"
    },
    answer: "A"
  },
  {
    id: 271,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "To educate the people was a gigantic task.",
    underlinedWord: "gigantic",
    options: {
      A: "beautiful",
      B: "huge",
      C: "small",
      D: "tiny"
    },
    answer: "B"
  },
  {
    id: 272,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "Nor was Mustafa Kamal a lenient master.",
    underlinedWord: "lenient",
    options: {
      A: "kind",
      B: "harsh",
      C: "cruel",
      D: "soft"
    },
    answer: "D"
  },
  {
    id: 273,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "The nation's rights have been violated.",
    underlinedWord: "violated",
    options: {
      A: "accepted",
      B: "reported",
      C: "disregarded",
      D: "named"
    },
    answer: "C"
  },
  {
    id: 274,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "Mustafa Kamal inaugurated great schemes.",
    underlinedWord: "inaugurated",
    options: {
      A: "initiated",
      B: "abolished",
      C: "finished",
      D: "gave up"
    },
    answer: "A"
  },
  {
    id: 275,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "Among the Greeks, there was little enthusiasm for the Anatolian adventure.",
    underlinedWord: "enthusiasm",
    options: {
      A: "anxiety",
      B: "eagerness",
      C: "clumsiness",
      D: "patience"
    },
    answer: "B"
  },
  {
    id: 276,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "It was apparent that the Turks were steadily growing bolder.",
    underlinedWord: "apparent",
    options: {
      A: "Unclear",
      B: "Imminent",
      C: "Evident",
      D: "Fortunate"
    },
    answer: "C"
  },
  {
    id: 277,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "Padishah was eager to collaborate with the allies.",
    underlinedWord: "collaborate",
    options: {
      A: "Fight",
      B: "Co-operate",
      C: "Invite",
      D: "Conquer"
    },
    answer: "B"
  },
  {
    id: 278,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "Mustafa Kamal appointed representatives to form the centers of patriotic revolt.",
    underlinedWord: "revolt",
    options: {
      A: "Mutiny",
      B: "Love",
      C: "Hatred",
      D: "Attraction"
    },
    answer: "A"
  },
  {
    id: 279,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "The houses of the foreigners were ransacked.",
    underlinedWord: "ransacked",
    options: {
      A: "Searched",
      B: "Built",
      C: "Demolished",
      D: "Attacked"
    },
    answer: "A"
  },
  {
    id: 280,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "The authorities of Istanbul issued orders for the ship to be intercepted.",
    underlinedWord: "intercepted",
    options: {
      A: "broken",
      B: "sailed",
      C: "attacked",
      D: "obstructed"
    },
    answer: "D"
  },
  {
    id: 281,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "The last of the Sultan was on his way to exile.",
    underlinedWord: "exile",
    options: {
      A: "foreign",
      B: "mixing",
      C: "banishment",
      D: "excellent"
    },
    answer: "C"
  },
  {
    id: 282,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "At first, the British High commission demurred.",
    underlinedWord: "demurred",
    options: {
      A: "Reject",
      B: "objected",
      C: "Spoiled",
      D: "Praised"
    },
    answer: "B"
  },
  {
    id: 283,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "No less revolutionary was the abolition in 1925 of the national head dress.",
    underlinedWord: "abolition",
    options: {
      A: "promote",
      B: "Elimination",
      C: "Start",
      D: "Loath"
    },
    answer: "B"
  },
  {
    id: 284,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "A doctor chronicled the daily deterioration of the position of Anatolia.",
    underlinedWord: "chronicled",
    options: {
      A: "Published",
      B: "Described",
      C: "Narrated",
      D: "Wrote down"
    },
    answer: "D"
  },
  {
    id: 285,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "Some undefeated remnants began to obstruct the Allies.",
    underlinedWord: "remnants",
    options: {
      A: "Enemies",
      B: "Friends",
      C: "Remains",
      D: "Opponents"
    },
    answer: "D"
  },
  {
    id: 286,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "Mustafa Kamal was the savior of Turkey.",
    underlinedWord: "savior",
    options: {
      A: "Helper",
      B: "Liberator",
      C: "Fighter",
      D: "President"
    },
    answer: "B"
  },
  {
    id: 287,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "They evacuated the Baghdad Railway.",
    underlinedWord: "evacuated",
    options: {
      A: "Vacated",
      B: "Possessed",
      C: "Captured",
      D: "Conquered"
    },
    answer: "A"
  },
  {
    id: 288,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "Old script was abolished.",
    underlinedWord: "abolished",
    options: {
      A: "Enriched",
      B: "Decrease",
      C: "Increased",
      D: "Eradicated"
    },
    answer: "D"
  },
  {
    id: 289,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "Allies dissolved the national assembly.",
    underlinedWord: "dissolved",
    options: {
      A: "Meditated",
      B: "Discussed",
      C: "Set up",
      D: "Abolished"
    },
    answer: "D"
  },
  {
    id: 290,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "The guns began almost instantly.",
    underlinedWord: "instantly",
    options: {
      A: "Lately",
      B: "Slightly",
      C: "Constantly",
      D: "Immediately"
    },
    answer: "D"
  },
  {
    id: 291,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "Mustafa Kamal rejected Mehmet's peremptory command:",
    underlinedWord: "peremptory",
    options: {
      A: "Temporary",
      B: "Persistent",
      C: "Decisive",
      D: "Peculiar"
    },
    answer: "C"
  },
  {
    id: 292,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "This 'new woman' business, would repel him.",
    underlinedWord: "repel",
    options: {
      A: "Dislike",
      B: "Attract",
      C: "Tease",
      D: "Disturb"
    },
    answer: "A"
  },
  {
    id: 293,
    chapter: "Mustafa Kamal",
    author: "Wilfrid F. Castle",
    question: "He succeeded in convincing them that education would be useful to them.",
    underlinedWord: "convincing",
    options: {
      A: "Approaching",
      B: "Persuading",
      C: "Poaching",
      D: "Confiscating"
    },
    answer: "B"
  },

  // Chapter 16: Good-bye, Mr. Chips (James Hilton)
  {
    id: 294,
    chapter: "Good-bye, Mr. Chips",
    author: "James Hilton",
    question: "He had been there for more than a century.",
    underlinedWord: "century",
    options: {
      A: "Century",
      B: "Ten years",
      C: "Hundred years",
      D: "Fifty years"
    },
    answer: "C"
  },
  {
    id: 295,
    chapter: "Good-bye, Mr. Chips",
    author: "James Hilton",
    question: "Chips' voice had a good deal of liveliness.",
    underlinedWord: "liveliness",
    options: {
      A: "Liveliness",
      B: "Laziness",
      C: "Energy",
      D: "Sadness"
    },
    answer: "A"
  },
  {
    id: 296,
    chapter: "Good-bye, Mr. Chips",
    author: "James Hilton",
    question: "Merivale said to Mr. Chips: 'well, you rascal...'",
    underlinedWord: "rascal",
    options: {
      A: "singer",
      B: "hooligan",
      C: "villain",
      D: "puppy"
    },
    answer: "B"
  },
  {
    id: 297,
    chapter: "Good-bye, Mr. Chips",
    author: "James Hilton",
    question: "Chips was suffering from Anemia.",
    underlinedWord: "Anemia",
    options: {
      A: "old age",
      B: "lack of blood",
      C: "sickness",
      D: "fever"
    },
    answer: "B"
  },
  {
    id: 298,
    chapter: "Good-bye, Mr. Chips",
    author: "James Hilton",
    question: "He was taken to Great Exhibition.",
    underlinedWord: "Great",
    options: {
      A: "Small",
      B: "Big",
      C: "Huge",
      D: "Grand"
    },
    answer: "D"
  },
  {
    id: 299,
    chapter: "Good-bye, Mr. Chips",
    author: "James Hilton",
    question: "I am the only man who remembers...",
    underlinedWord: "remembers",
    options: {
      A: "frequent",
      B: "recalls",
      C: "forgets",
      D: "reminds"
    },
    answer: "B"
  },
  {
    id: 300,
    chapter: "Good-bye, Mr. Chips",
    author: "James Hilton",
    question: "Chips had a vivid recollection.",
    underlinedWord: "recollection",
    options: {
      A: "Pictures",
      B: "Memories",
      C: "Colors",
      D: "Dreams"
    },
    answer: "B"
  },
  {
    id: 301,
    chapter: "Good-bye, Mr. Chips",
    author: "James Hilton",
    question: "Brookfield is an old foundation.",
    underlinedWord: "foundation",
    options: {
      A: "institution",
      B: "school",
      C: "house",
      D: "college"
    },
    answer: "A"
  },
  {
    id: 302,
    chapter: "Good-bye, Mr. Chips",
    author: "James Hilton",
    question: "Chips remembered that event.",
    underlinedWord: "event",
    options: {
      A: "Event",
      B: "Accident",
      C: "Incident",
      D: "Trial"
    },
    answer: "C"
  },
  {
    id: 303,
    chapter: "Good-bye, Mr. Chips",
    author: "James Hilton",
    question: "The big hall was full of lusty youths.",
    underlinedWord: "lusty",
    options: {
      A: "Vigorous",
      B: "Weak",
      C: "Sick",
      D: "Lazy"
    },
    answer: "A"
  },
  {
    id: 304,
    chapter: "Good-bye, Mr. Chips",
    author: "James Hilton",
    question: "The boys looked like rascals.",
    underlinedWord: "rascals",
    options: {
      A: "Rascals",
      B: "Scoundrels",
      C: "Angels",
      D: "Saints"
    },
    answer: "B"
  },
  {
    id: 305,
    chapter: "Good-bye, Mr. Chips",
    author: "James Hilton",
    question: "The boys were in high spirits.",
    underlinedWord: "high spirits",
    options: {
      A: "Merciful",
      B: "Cheerful",
      C: "Fearful",
      D: "Dull"
    },
    answer: "B"
  },
  {
    id: 306,
    chapter: "Good-bye, Mr. Chips",
    author: "James Hilton",
    question: "Big hall full of lusty barbarians.",
    underlinedWord: "barbarians",
    options: {
      A: "Release",
      B: "Plunder",
      C: "Savages",
      D: "Students"
    },
    answer: "C"
  },
  {
    id: 307,
    chapter: "Good-bye, Mr. Chips",
    author: "James Hilton",
    question: "The East wind was cold.",
    underlinedWord: "cold",
    options: {
      A: "Harsh",
      B: "Gentle",
      C: "Mild",
      D: "Pleasant"
    },
    answer: "A"
  },
  {
    id: 308,
    chapter: "Good-bye, Mr. Chips",
    author: "James Hilton",
    question: "He remembered Brookfield.",
    underlinedWord: "Brookfield",
    options: {
      A: "Great",
      B: "Famous",
      C: "Renowned",
      D: "Well-known"
    },
    answer: "A"
  },
  {
    id: 309,
    chapter: "Good-bye, Mr. Chips",
    author: "James Hilton",
    question: "Mr. Chips had a sense of humour.",
    underlinedWord: "humour",
    options: {
      A: "thought",
      B: "wit",
      C: "seriousness",
      D: "gravity"
    },
    answer: "B"
  },
  {
    id: 310,
    chapter: "Good-bye, Mr. Chips",
    author: "James Hilton",
    question: "Chips had tea with Mrs. Wickett.",
    underlinedWord: "tea",
    options: {
      A: "Tea",
      B: "Coffee",
      C: "Water",
      D: "Milk"
    },
    answer: "A"
  },
  {
    id: 311,
    chapter: "Good-bye, Mr. Chips",
    author: "James Hilton",
    question: "Chips was quiet.",
    underlinedWord: "quiet",
    options: {
      A: "Calm",
      B: "Noisy",
      C: "Loud",
      D: "Shouting"
    },
    answer: "A"
  },
  {
    id: 312,
    chapter: "Good-bye, Mr. Chips",
    author: "James Hilton",
    question: "Baiting the new master was exciting.",
    underlinedWord: "Baiting",
    options: {
      A: "Teasing",
      B: "Praising",
      C: "Helping",
      D: "Obeying"
    },
    answer: "A"
  }
];

// Ensure target dir
const targetDir = path.join(__dirname, '..', 'src', 'data');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Add correct text to each question object
const enrichedQuestions = questions.map(q => ({
  ...q,
  correctText: q.options[q.answer]
}));

fs.writeFileSync(
  path.join(targetDir, 'questions.json'),
  JSON.stringify(enrichedQuestions, null, 2),
  'utf-8'
);

console.log(`Successfully generated ${enrichedQuestions.length} questions from the exam paper pictures into src/data/questions.json!`);
