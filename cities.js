const oklahomaCities = [
  "Quinton", "Ralston", "Ramona", "Ratliff City", "Rattan",
  "Red Oak", "Red Rock", "Ringling", "Ringold", "Ringwood",
  "Roff", "Rose", "Rush Springs", "Salina", "Sallisaw",
  "Sand Springs", "Sapulpa", "Sayre", "Schulter", "Seminole",
  "Sentinel", "Shattuck", "Shawnee", "Shidler", "Skiatook",
  "Slick", "Snyder", "South Coffeyville", "Spencer", "Sperry",
  "Spiro", "Springer", "Sterling", "Stidham", "Stigler",
  "Stillwater", "Stilwell", "Stratford", "Stroud", "Stuart",
  "Sulphur", "Tahlequah", "Talala", "Talihina", "Tecumseh",
  "Temple", "Terral", "Texhoma", "Thackerville", "Thomas",
  "Tishomingo", "Tonkawa", "Tulsa", "Turpin", "Tuttle",
  "Union City", "Valliant", "Velma", "Vian", "Vici",
  "Vinita", "Wagoner", "Walters", "Warner", "Washington",
  "Watonga", "Waukomis", "Wayne", "Waynoka", "Weatherford",
  "Welling", "Wellston", "Westville", "Wilburton", "Wilson",
  "Wister", "Woodward", "Wynnewood", "Yale", "Yukon",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < oklahomaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(oklahomaCities[i]);
}

module.exports = { batches };
