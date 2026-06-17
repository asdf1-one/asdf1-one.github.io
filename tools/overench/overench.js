// 43個
const enchants = [
  "aqua_affinity",
  "binding_curse",
  "bane_of_arthropods",
  "blast_protection",
  "breach",
  "channeling",
  "density",
  "depth_strider",
  "efficiency",
  "feather_falling",
  "fire_aspect",
  "fire_protection",
  "flame",
  "fortune",
  "frost_walker",
  "impaling",
  "infinity",
  "knockback",
  "looting",
  "loyalty",
  "luck_of_the_sea",
  "lunge",
  "lure",
  "mending",
  "multishot",
  "piercing",
  "power",
  "projectile_protection",
  "protection",
  "punch",
  "quick_charge",
  "respiration",
  "riptide",
  "sharpness",
  "silk_touch",
  "smite",
  "soul_speed",
  "sweeping_edge",
  "swift_sneak",
  "thorns",
  "unbreaking",
  "vanishing_curse",
  "wind_burst",
]

function seisei() {
  const id = document.getElementById("id").value;
  if (id === "") {
    document.getElementById("error").textContent = "idを入力してください";
    return;
  }
  const name = document.getElementById("name").value;
  let count;
  if (["1", ""].includes(document.getElementById("count").value)) {
    count = "";
  } else {
    count = parseInt(document.getElementById("count").value);
  }

  let components = [];
  if (name !== "") components.push(`item_name="${name}"`);

  let cmdenchjson = "{";
  for (let i = 0; i < enchants.length; i++) {
    cmdenchjson += `${enchants[i]}:255`;
    if (i < enchants.length - 1) cmdenchjson += ",";
  }
  cmdenchjson += "}";
  components.push(`enchantments=${cmdenchjson}`);
  let cmdcomponents = "";
  if (components.length >= 1) {
    cmdcomponents = `[${components.join(",")}]`;
  } else {
    cmdcomponents = "";
  }
  let result = "";
  
  result += `/give @p ${id}${cmdcomponents} ${count}`;

  document.getElementById("result").textContent = result;
  document.getElementById("error").textContent = "";
}

function copyresult() {
  const result = document.getElementById("result").textContent;
  if (result === "") {
    document.getElementById("error").textContent = "コピーできません";
    return;
  }
  navigator.clipboard.writeText(result).then(() => {
    document.getElementById("error").textContent = "出力をコピーしました";
  }).catch((err) => {
    document.getElementById("error").textContent = "コピーに失敗しました: " + err;
  });
}

function copycmdblock() {
  navigator.clipboard.writeText("/give @p command_block").then(() => {
    document.getElementById("error").textContent = "コマンドをコピーしました";
  }).catch((err) => {
    document.getElementById("error").textContent = "コピーに失敗しました: " + err;
  });
}
