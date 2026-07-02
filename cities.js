const oklahomaCities = [
  "Kremlin", "Lane", "Langley", "Langston", "Laverne",
  "Lawton", "Lexington", "Lindsay", "Locust Grove", "Lone Grove",
  "Luther", "Macomb", "Madill", "Mangum", "Mannford",
  "Mannsville", "Marietta", "Marlow", "Maud", "Maysville",
  "Mcalester", "Mcloud", "Mead", "Medford", "Meeker",
  "Meno", "Miami", "Milburn", "Minco", "Moodys",
  "Mooreland", "Morris", "Morrison", "Mounds", "Mountain View",
  "Muldrow", "Mulhall", "Muskogee", "Mustang", "Nardin",
  "Newalla", "Newcastle", "Newkirk", "Nicoma Park", "Ninnekah",
  "Noble", "Norman", "Nowata", "Ochelata", "Oilton",
  "Okarche", "Okay", "Okeene", "Okemah", "Oklahoma City",
  "Okmulgee", "Oktaha", "Omega", "Oologah", "Orlando",
  "Owasso", "Park Hill", "Pauls Valley", "Pawhuska", "Pawnee",
  "Peggs", "Perkins", "Perry", "Picher", "Piedmont",
  "Pocola", "Ponca City", "Pond Creek", "Porter", "Porum",
  "Poteau", "Prague", "Pryor", "Purcell", "Quapaw",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < oklahomaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(oklahomaCities[i]);
}

module.exports = { batches };
