const oklahomaCities = [
  "Ada", "Afton", "Albion", "Alderson", "Alex",
  "Altus", "Alva", "Amber", "Amorita", "Anadarko",
  "Antlers", "Apache", "Arcadia", "Ardmore", "Atoka",
  "Atwood", "Avant", "Barnsdall", "Bartlesville", "Beaver",
  "Beggs", "Bethany", "Big Cabin", "Billings", "Bison",
  "Bixby", "Blackwell", "Blanchard", "Boise City", "Boswell",
  "Boynton", "Braman", "Bristow", "Broken Arrow", "Broken Bow",
  "Buffalo", "Burneyville", "Cache", "Caddo", "Calera",
  "Cameron", "Canadian", "Caney", "Canton", "Carnegie",
  "Carney", "Cartwright", "Cashion", "Catoosa", "Chandler",
  "Chattanooga", "Checotah", "Chelsea", "Cherokee", "Chickasha",
  "Choctaw", "Chouteau", "Claremore", "Clayton", "Cleveland",
  "Clinton", "Coalgate", "Colcord", "Coleman", "Collinsville",
  "Colony", "Comanche", "Commerce", "Concho", "Copan",
  "Cordell", "Corn", "Coweta", "Coyle", "Crescent",
  "Crowder", "Cushing", "Custer City", "Davenport", "Davis",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < oklahomaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(oklahomaCities[i]);
}

module.exports = { batches };
