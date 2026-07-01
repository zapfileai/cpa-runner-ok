const oklahomaCities = [
  "Dewey", "Dibble", "Dill City", "Disney", "Douglas",
  "Drumright", "Duke", "Duncan", "Durant", "Dustin",
  "Edmond", "El Reno", "Elgin", "Elk City", "Elmer",
  "Elmore City", "Enid", "Eufaula", "Fairland", "Fairview",
  "Fargo", "Fletcher", "Fort Cobb", "Fort Gibson", "Fort Sill",
  "Foyil", "Frederick", "Freedom", "Garber", "Geary",
  "Geronimo", "Glencoe", "Glenpool", "Goltry", "Goodwell",
  "Gore", "Gould", "Gracemont", "Granite", "Greenfield",
  "Grove", "Guthrie", "Guymon", "Hanna", "Hardesty",
  "Harrah", "Haskell", "Haworth", "Healdton", "Heavener",
  "Hennepin", "Hennessey", "Henryetta", "Hinton", "Hobart",
  "Hodgen", "Holdenville", "Hominy", "Hooker", "Hugo",
  "Hulbert", "Hunter", "Hydro", "Idabel", "Indianola",
  "Inola", "Jay", "Jenks", "Jones", "Kansas",
  "Kellyville", "Ketchum", "Keyes", "Kiefer", "Kingfisher",
  "Kingston", "Kinta", "Kiowa", "Konawa", "Krebs",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < oklahomaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(oklahomaCities[i]);
}

module.exports = { batches };
