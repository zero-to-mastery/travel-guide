import React, { Component } from "react";

const contributors = [
  {
    name: "@paganim",
    link: "https://github.com/paganim"
  },
  {
    name: "@Anmol270900",
    link: "https://github.com/Anmol270900"
  },
  {
    name: "@Furkan Kursun",
    link: "https://github.com/soyu1234"
  },
  {
    name: "@ido-netaneli",
    link: "https://github.com/ido-netaneli"
  },
  {
    name: "@sandipguchait",
    link: "https://github.com/sandipguchait"
  },
  {
    name: "@rpaltayev",
    link: "https://github.com/rpaltayev"
  },
  {
    name: "@ngodi",
    link: "https://github.com/ngodi"
  },
  {
    name: "@Pierre Khoury",
    link: "https://github.com/PierreDeveloper18"
  },
  {
    name: "@mynaur",
    link: "https://github.com/mynaur"
  },
  {
    name: "@akashkann",
    link: "https://github.com/akashkann"
  },
  {
    name: "@alexacoronel",
    link: "https://github.com/alexacoronel"
  },
  {
    name: "@gabipfeffer",
    link: "https://github.com/gabipfeffer"
  },
  {
    name: "@Litchstarken",
    link: "https://github.com/Litchstarken"
  },
  {
    name: "@BLiTz3R",
    link: "https://github.com/BLiTz3R"
  },
  {
    name: "@peterson oaikhenah",
    link: "https://github.com/nextwebb"
  },
  {
    name: "@umanghans",
    link: "https://github.com/umanghans"
  },
  {
    name: "@dark-wonder",
    link: "https://github.com/dark-wonder"
  },
  {
    name: "@jawlee",
    link: "https://github.com/jawlee"
  },
  {
    name: "@siklinb01",
    link: "https://github.com/siklinb01"
  },
  {
    name: "@xFinality",
    link: "https://github.com/xFinality"
  },
  {
    name: "@SuperSafie",
    link: "https://github.com/SuperSafie"
  },
  {
    name: "@Veene",
    link: "https://github.com/Veene"
  },
  {
    name: "@jckonewalik",
    link: "https://github.com/jckonewalik"
  },
  {
    name: "@Lordberbeross",
    link: "https://github.com/lordberbeross"
  },
  {
    name: "@DanielMarcano",
    link: "https://github.com/DanielMarcano"
  },
  {
    name: "@AlexanderKruk",
    link: "https://github.com/AlexanderKruk"
  },
  {
    name: "@sidebone",
    link: "https://github.com/sidebone"
  },
  {
    name: "@ytrkptl",
    link: "https://github.com/ytrkptl"
  },
  {
    name: "@rezzco",
    link: "https://github.com/rezzco"
  },
  {
    name: "@liissaar",
    link: "https://github.com/liissaar"
  },
  {
    name: "@Arsen4ik",
    link: "https://github.com/Arsen4ik"
  },
  {
    name: "@AmujoDotun",
    link: "https://github.com/AmujoDotun"
  },
  {
    name: "@Jrejoire",
    link: "https://github.com/Jrejoire"
  },
  {
    name: "@Kingbee1",
    link: "https://github.com/Kingbee1"
  },
  {
    name: "@mishhubc",
    link: "https://github.com/mishhubc"
  },
  {
    name: "@cruzex100",
    link: "https://github.com/cruzex100"
  },
  {
    name: "@2neyadets",
    link: "https://github.com/2neyadets"
  },
  {
    name: "@ergonometry",
    link: "https://github.com/ergonometry"
  },
  {
    name: "@stefhangibson",
    link: "https://github.com/stefhangibson"
  },
  {
    name: "@Zeafromar",
    link: "https://github.com/Zeafromar"
  },
  {
    name: "@nsadev",
    link: "https://github.com/nsadev"
  },
  {
    name: "@giochajon",
    link: "https://github.com/giochajon"
  },
  {
    name: "@Gajhendran",
    link: "https://github.com/Gajhendran"
  },
  {
    name: "@01Clarian",
    link: "https://github.com/01Clarian"
  },
  {
    name: "@kweku76",
    link: "https://github.com/kweku76"
  },
  {
    name: "@mrzahidjabbar",
    link: "https://github.com/mrzahidjabbar"
  },
  {
    name: "@Vincent-Mpenyana",
    link: "https://github.com/Vincent-Mpenyana"
  },
  {
    name: "@Pourush1",
    link: "https://github.com/Pourush1"
  },
  {
    name: "@jgulbickyte",
    link: "https://github.com/jgulbickyte"
  },
  {
    name: "@Ron1722",
    link: "https://github.com/Ron1722"
  },
  {
    name: "@billshannon",
    link: "https://github.com/billshannon"
  },
  {
    name: "@marathohoho",
    link: "https://github.com/marathohoho"
  },
  {
    name: "@YasenPeev",
    link: "https://github.com/YasenPeev"
  },
  {
    name: "@JQuien",
    link: "https://github.com/JQuien"
  },
  {
    name: "@pedromzgrc",
    link: "http://github.com/pedromzgrc"
  },
  {
    name: "@kostispodaras",
    link: "https://github.com/kostisPodaras"
  },
  {
    name: "@sarizzuz",
    link: "https://github.com/sarizzuz"
  },
  {
    name: "@SimplyToCreate",
    link: "https://github.com/SimplyToCreate"
  },
  {
    name: "@mariyanyanakiev",
    link: "https://github.com/mariyanyanakiev"
  },
  {
    name: "@aditya1906",
    link: "https://github.com/aditya1906"
  },
  {
    name: "@clintonwuks",
    link: "https://github.com/clintonwuks"
  },
  {
    name: "@SudeepaGo",
    link: "https://github.com/SudeepaGo"
  },
  {
    name: "@connectthapa",
    link: "https://github.com/ThapaRahul"
  },
  {
    name: "@naftalib",
    link: "https://github.com/naftalib"
  },
  {
    name: "@BATMANGOO",
    link: "https://github.com/BATMANGOO"
  },
  {
    name: "@Pvanloon1983",
    link: "https://github.com/Pvanloon1983"
  },
  {
    name: "@rajat98dogra",
    link: "https://github.com/rajat98dogra"
  },
  {
    name: "@Satyaki233",
    link: "https://github.com/Satyaki233"
  },
  {
    name: "@Madgeniusblink",
    link: "https://github.com/Madgeniusblink"
  },
  {
    name: "@hamzamakk1",
    link: "https://github.com/hamzamakk1"
  },
  {
    name: "@hanthienduc",
    link: "https://github.com/hanthienduc"
  },
  {
    name: "@sevydev",
    link: "https://github.com/sevydev"
  },
  {
    name: "@chimachinedum",
    link: "https://github.com/chimachinedum"
  },
  {
    name: "@borason",
    link: "https://github.com/borason"
  },
  {
    name: "@Mirhatyasar",
    link: "https://github.com/Mirhatyasar"
  },
  {
    name: "@erics0n",
    link: "https://github.com/erics0n"
  },
  {
    name: "@nataschaluna",
    link: "https://github.com/nataschaluna"
  },
  {
    name: "@khasanovsm",
    link: "https://github.com/khasanovsm"
  },
  {
    name: "@Dorin-Ciora",
    link: "https://github.com/dorin-ciora"
  },
  {
    name: "@Devyani",
    link: "https://github.com/devyaniwaghmare"
  },
  {
    name: "@ruchirV",
    link: "https://github.com/ruchirV"
  },
  {
    name: "@khurram-syed",
    link: "https://github.com/khurram-syed"
  },
  {
    name: "@Arjun0o",
    link: "https://github.com/Arjun0o"
  },
  {
    name: "@famebyproxy",
    link: "https://github.com/famebyproxy"
  },
  {
    name: "@luis-escoto11",
    link: "https://github.com/luis-escoto11"
  },
  {
    name: "@benjohnsondev",
    link: "https://github.com/benjohnsondev"
  },
  {
    name: "@giulianocernada",
    link: "https://github.com/giulianocernada"
  },
  {
    name: "@vxsunstriderxv",
    link: "https://github.com/vxsunstriderxv"
  },
  {
    name: "@jqueijo",
    link: "https://github.com/jqueijo"
  },
  {
    name: "@Marius1388",
    link: "https://github.com/Marius1388"
  },
  {
    name: "@gandho12",
    link: "https://github.com/gandho12"
  },
  {
    name: "@pau-lo",
    link: "https://github.com/pau-lo"
  },
  {
    name: "@binyaalex",
    link: "https://github.com/binyaalex"
  },
  {
    name: "@tew9",
    link: "https://github.com/tew9"
  },
  {
    name: "@sjovanovic974",
    link: "https://github.com/sjovanovic974"
  },
  {
    name: "@AlexGithubbb",
    link: "https://github.com/AlexGithubbb"
  },
  {
    name: "@mwheatfill",
    link: "https://github.com/mwheatfill"
  },
  {
    name: "@webguy83",
    link: "https://github.com/webguy83"
  },
  {
    name: "@minshinkhant",
    link: "https://github.com/minshinkhant"
  }
];

class Credits extends Component {
  render() {
    return (
      <div>
        <h1 className="searchBox mt1">Credits</h1>
        <ul className="list">
          {contributors.map(c => (
            <a key={c.name} href={c.link} target="_blank" rel="noopener noreferrer">
              <div className="card">
                <div className="listContributors margin_left tc bg-black-20 code dib mb2 bw2 shadow-4 regionFlagContainer">
                  <p className="contributors">{c.name}</p>
                </div>
              </div>
            </a>
          ))}
        </ul>
      </div>
    );
  }
}

export default Credits;
