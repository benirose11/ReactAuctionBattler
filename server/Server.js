// const io = require('socket.io')(5000)

// io.on('connection', socket => {
//     const id = socket.handshake.query.id
//     socket.join(id)
// })

// const server = app.listen(8000, () => console.log("server is running on port 8000"))

const http = require("http");
const express = require("express");
const { Server } = require("socket.io");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}

// http://localhost:3000

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

let gamesize = 3;
let guystobeplayed = 2;
let bank = 100;
let countdowntime = 1000;

const startingGameState = {
  1: {
    seatfilled: false,
    draftedguys: [],
    username: "",
    bank,
    selectedguys: [],
  },
  2: {
    seatfilled: false,
    draftedguys: [],
    username: "",
    bank,
    selectedguys: [],
  },
  3: {
    seatfilled: false,
    draftedguys: [],
    username: "",
    bank,
    selectedguys: [],
  },
  4: {
    seatfilled: false,
    draftedguys: [],
    username: "",
    bank,
    selectedguys: [],
  },
  5: {
    seatfilled: false,
    draftedguys: [],
    username: "",
    bank,
    selectedguys: [],
  },
  6: {
    seatfilled: false,
    draftedguys: [],
    username: "",
    bank,
    selectedguys: [],
  },
  7: {
    seatfilled: false,
    draftedguys: [],
    username: "",
    bank,
    selectedguys: [],
  },
  8: {
    seatfilled: false,
    draftedguys: [],
    username: "",
    bank,
    selectedguys: [],
  },
  global: {
    gamePhase: "notStarted",
    players: {},
    warriorlist: [],
    turnorder: [],
    maxbid: 1,
    guyontheblock: [],
    gamesize,
    guystobeplayed,
    winningseat: null,
    numberofrosterssubmitted: 0,
  },
};

let serverSeatState = {
  1: {
    seatfilled: false,
    draftedguys: [],
    username: "",
    bank,
    selectedguys: [],
  },
  2: {
    seatfilled: false,
    draftedguys: [],
    username: "",
    bank,
    selectedguys: [],
  },
  3: {
    seatfilled: false,
    draftedguys: [],
    username: "",
    bank,
    selectedguys: [],
  },
  4: {
    seatfilled: false,
    draftedguys: [],
    username: "",
    bank,
    selectedguys: [],
  },
  5: {
    seatfilled: false,
    draftedguys: [],
    username: "",
    bank,
    selectedguys: [],
  },
  6: {
    seatfilled: false,
    draftedguys: [],
    username: "",
    bank,
    selectedguys: [],
  },
  7: {
    seatfilled: false,
    draftedguys: [],
    username: "",
    bank,
    selectedguys: [],
  },
  8: {
    seatfilled: false,
    draftedguys: [],
    username: "",
    bank,
    selectedguys: [],
  },
  global: {
    gamePhase: "notStarted",
    players: {},
    warriorlist: [],
    turnorder: [],
    maxbid: 1,
    guyontheblock: [],
    gamesize,
    guystobeplayed,
    winningseat: null,
    numberofrosterssubmitted: 0,
  },
};

class warrior {
  constructor(name) {
    this.name = "Warrior " + `${name}`;
    this.defense = 50 + Math.floor(Math.random() * 50);
    this.damage = 20 + Math.floor(Math.random() * 60);
    this.damagetype = "melee";
    this.ability = noabilityobj[0];
    this.selected = false;
  }
}

class archer {
  constructor(name) {
    this.name = "Archer " + `${name}`;
    this.defense = 10 + Math.floor(Math.random() * 50);
    this.damage = 70 + Math.floor(Math.random() * 50);
    this.damagetype = "piercing";
    this.ability = abilitygenerator(25, 5);
    this.selected = false;
  }
}

class mage {
  constructor(name) {
    this.name = "Mage " + `${name}`;
    this.defense = 10 + Math.floor(Math.random() * 40);
    this.damage = 25 + Math.floor(Math.random() * 40);
    this.damagetype = "magic";
    // this.ability = abilitygenerator(60, 25)
    this.ability = lamepropsobj[2];
    this.selected = false;
  }
}

class commander {
  constructor(name) {
    this.name = "Commander " + `${name}`;
    this.defense = 1 + Math.floor(Math.random() * 99);
    this.damage = 1 + Math.floor(Math.random() * 99);
    this.damagetype = "melee";
    this.ability = abilitygenerator(21, 80);
    this.selected = false;
  }
}

const specialpropsobj = {
  0: {
    abilityname: "Damage Aura 50%",
    func: function (melee, pierce, magic, defense) {
      melee = melee * 1.5;
      pierce = pierce * 1.5;
      magic = magic * 1.5;
      return { melee, pierce, magic, defense };
    },
    propskey: 0,
    abilitytype: "special",
  },

  1: {
    abilityname: "Defense Aura 30%",
    func: function (melee, pierce, magic, defense) {
      defense = defense * 1.3;
      return { melee, pierce, magic, defense };
    },
    propskey: 1,
    abilitytype: "special",
  },

  2: {
    abilityname:
      "Magical amplifier, if you have at least 100 magic damage, +250 magic damage",
    func: function (melee, pierce, magic, defense) {
      if (magic >= 100) magic = magic + 250;
      return { melee, pierce, magic, defense };
    },
    propskey: 2,
    abilitytype: "special",
  },
};

const lamepropsobj = {
  0: {
    abilityname: "Melee damage aura 15%",
    func: function (melee, pierce, magic, defense) {
      melee = Math.floor(melee * 1.15);
      return { melee, pierce, magic, defense };
    },

    propskey: 0,
    abilitytype: "lame",
  },

  1: {
    abilityname: "Piercing melee, 100% melee damage to piercing",
    func: function (melee, pierce, magic, defense) {
      pierce = melee + pierce;
      melee = 0;
      return { melee, pierce, magic, defense };
    },
    propskey: 1,
    abilitytype: "lame",
  },

  2: {
    abilityname: "Glass Cannon, melee-85%, magic+ranged+50%, defense-10%",
    func: function (melee, pierce, magic, defense) {
      melee = melee * 0.15;
      pierce = pierce * 1.5;
      magic = magic * 1.5;
      defense = defense * 0.9;
      return { melee, pierce, magic, defense };
    },
    propskey: 2,
    abilitytype: "lame",
  },
};

const noabilityobj = {
  0: {
    abilityname: "None",
    func: function (melee, pierce, magic, defense) {
      return { melee, pierce, magic, defense };
    },
    propskey: 0,
    abilitytype: "none",
  },
};

const abilitygenerator = (chanceforlame, chanceforspecial) => {
  let luckryroll = Math.random() * 100;
  let special =
    specialpropsobj[
      Math.floor(Math.random() * Object.keys(specialpropsobj).length)
    ];
  let lame =
    lamepropsobj[Math.floor(Math.random() * Object.keys(lamepropsobj).length)];
  if (luckryroll < chanceforspecial) {
    return special;
  } else {
    luckryroll - special;
  }
  if (luckryroll < chanceforlame) {
    return lame;
  } else return noabilityobj[0];
};

io.on("connection", (socket) => {
  console.log("New user connected with" + socket.id);

  socket.on("sendLatestSeatingToServer", (updatedSeating) => {
    serverSeatState = updatedSeating;

    io.emit("updatedStateFromServer", serverSeatState);
  });

  socket.on("newChat", (username, chatText) => {
    io.emit("message", chatText, username);
  });

  socket.on("getInitialSeating", () => {
    io.emit("updatedStateFromServer", serverSeatState);
  });

  socket.on("Reset", (playername) => {
    startingGameState.global.gamePhase = "notStarted";
    serverSeatState = startingGameState;
    io.emit("clearChat");
    io.emit("message", playername + " called for a reset");
    io.emit("updatedStateFromServer", startingGameState);
  });

  socket.on("disconnect", () => {
    console.log("user disconected", socket.id);
  });

  socket.on("rosterSubmitted", (id) => {
    let numplayers = Object.keys(serverSeatState.global.players).length;
    io.emit("message", serverSeatState[id].username + " submitted a roser");
    serverSeatState.global.numberofrosterssubmitted =
      serverSeatState.global.numberofrosterssubmitted + 1;
    io.emit("updatedStateFromServer", serverSeatState);

    io.emit(
      "message",
      `rostersubmit logic, rosters submitted = ${serverSeatState.global.numberofrosterssubmitted} and numplayers = ${numplayers}`
    );
    if (serverSeatState.global.numberofrosterssubmitted == numplayers)
      calcwinner();
  });

  socket.on("startGame", () => {
    serverSeatState.global.gamePhase = "drafting";
    serverSeatState.global.turnorder = [];
    serverSeatState.global.warriorlist = [];
    serverSeatState.global.maxbid = 1;
    serverSeatState.global.guyontheblock = [];

    for (let i = 1; i < 9; i++) {
      if (serverSeatState[i]["seatfilled"]) {
        serverSeatState.global.players[i] = serverSeatState[i];
      }
    }

    let numplayers = Object.keys(serverSeatState.global.players).length;
    if (numplayers > 0) {
      for (let key in serverSeatState.global.players) {
        serverSeatState.global.turnorder.push(key);
      }
      io.emit(
        "message",
        `round starting, please do not refresh until completed! playing with ${numplayers} players`
      );
      for (let i = 0; i < numplayers * serverSeatState.global.gamesize; i++) {
        let dudegenerator = Math.random() * 100;
        let guy;
        if (dudegenerator < 35) guy = new warrior(`${i + 1}`);
        else if (dudegenerator < 65) guy = new archer(`${i + 1}`);
        else if (dudegenerator < 85) guy = new mage(`${i + 1}`);
        else guy = new commander(`${i + 1}`);

        serverSeatState.global.warriorlist.push(guy);
      }
      serverSeatState.global.guyontheblock.push(
        serverSeatState.global.warriorlist.pop()
      );

      let activeseat = serverSeatState.global.turnorder.pop();

      serverSeatState.global.maxbid = 1;
      countdown(countdowntime, serverSeatState.global.maxbid, activeseat);
      serverSeatState.global.turnorder.unshift(activeseat);

      io.emit("updatedStateFromServer", serverSeatState);
    } else {
      io.emit(
        "message",
        `No players in seats, please take a seat before starting a round`
      );
    }
  });

  socket.on("bid", (seat) => {
    let numguysdrafted = serverSeatState[seat].draftedguys.length;

    if (
      serverSeatState.global.gamePhase == "drafting" &&
      serverSeatState.global.guyontheblock[0] &&
      numguysdrafted < serverSeatState.global.gamesize &&
      serverSeatState[seat].bank +
        numguysdrafted -
        serverSeatState.global.gamesize +
        1 >
        serverSeatState.global.maxbid
    ) {
      serverSeatState.global.maxbid++;
      io.emit("updatedStateFromServer", serverSeatState);
      countdown(countdowntime, serverSeatState.global.maxbid, seat);
    }

    io.emit("message", `${seat}`);
  });

  const draftOver = () => {
    serverSeatState.global.gamePhase = "selecting";
    io.emit(
      "message",
      `Draft complete! Please select ${serverSeatState.global.guystobeplayed} of your ${serverSeatState.global.gamesize} drafted Squishmallows for battle!`
    );
    io.emit("updatedStateFromServer", serverSeatState);
  };

  const resolveWonAuction = (winningseat) => {
    io.emit(
      "message",
      `${serverSeatState[winningseat].username} won ${serverSeatState.global.guyontheblock[0].name} for $${serverSeatState.global.maxbid}`
    );
    serverSeatState[winningseat].draftedguys.push(
      serverSeatState.global.guyontheblock.pop()
    );

    serverSeatState[winningseat].bank =
      serverSeatState[winningseat].bank - serverSeatState.global.maxbid;

    io.emit("updatedStateFromServer", serverSeatState);

    if (serverSeatState.global.warriorlist.length > 0) {
      serverSeatState.global.guyontheblock.push(
        serverSeatState.global.warriorlist.pop()
      );

      let activeseat = serverSeatState.global.turnorder.pop();
      while (
        serverSeatState[activeseat].draftedguys.length ==
        serverSeatState.global.gamesize
      ) {
        activeseat = serverSeatState.global.turnorder.pop();
      }

      serverSeatState.global.maxbid = 1;
      countdown(countdowntime, serverSeatState.global.maxbid, activeseat);
      serverSeatState.global.turnorder.unshift(activeseat);
    } else {
      draftOver();
    }
  };

  const countdown = (timeout, bidamount, activeseat) => {
    if (timeout === 0) {
      resolveWonAuction(activeseat);
    } else if (bidamount === serverSeatState.global.maxbid) {
      const username = serverSeatState[activeseat].username;
      const secondsremaining = timeout / 1000;

      io.emit(
        "message",
        `${username} is currently winning with a bid of $${bidamount}. ${secondsremaining} seconds remaining`
      );
      setTimeout(() => {
        countdown(timeout - 1000, bidamount, activeseat);
      }, 1000);
    }
  };

  const calcwinner = () => {
    serverSeatState.global.gamePhase = "Game Completed";
    io.emit("updatedStateFromServer", serverSeatState);
    let resultsobj = {};
    let winningseat;
    let highestdmgseen = 0;
    for (let key in serverSeatState.global.players) {
      resultsobj[key] = calcrosterdamage(serverSeatState[key].selectedguys);
    }

    for (let key in resultsobj) {
      io.emit(
        "message",
        `${serverSeatState[key].username} had a total damage output of ${resultsobj[key]}`
      );

      if (resultsobj[key] > highestdmgseen) {
        highestdmgseen = resultsobj[key];
        winningseat = key;
      }
    }

    serverSeatState.global.winningseat = winningseat;
    io.emit(
      "message",
      `${serverSeatState[winningseat].username} is the winner with a total damage output of ${resultsobj[winningseat]}`
    );

    io.emit("message", "calc winner called");
  };

  const calcrosterdamage = (roster) => {
    let defense = 0;
    let melee = 0;
    let pierce = 0;
    let magic = 0;
    let abilities = [];

    for (let key in roster) {
      let curguy = roster[key];
      defense = defense + curguy.defense;
      if (curguy.damagetype === "piercing") {
        pierce = pierce + curguy.damage;
      }
      if (curguy.damagetype === "melee") {
        melee = melee + curguy.damage;
      }
      if (curguy.damagetype === "magic") {
        magic = magic + curguy.damage;
      }
      abilities.push(curguy.ability);
    }

    let { totmelee, totpierce, totmagic, totdefense } = calcmods(
      melee,
      pierce,
      magic,
      defense,
      abilities
    );

    let totalrosterdmg =
      (totmelee + totpierce + totmagic) *
      (totdefense / 100 / serverSeatState.global.guystobeplayed);

    return totalrosterdmg;
  };

  const calcmods = (
    totmelee,
    totpierce,
    totmagic,
    totdefense,
    abilityorder
  ) => {
    if (abilityorder.length === 0)
      return { totmelee, totpierce, totmagic, totdefense };
    let mod = abilityorder.pop();
    let modfunc;
    if (mod.abilitytype === "none") {
      modfunc = noabilityobj[mod.propskey].func;
    }
    if (mod.abilitytype === "lame") {
      modfunc = lamepropsobj[mod.propskey].func;
    }
    if (mod.abilitytype === "special") {
      modfunc = specialpropsobj[mod.propskey].func;
    }

    let { melee, pierce, magic, defense } = modfunc(
      totmelee,
      totpierce,
      totmagic,
      totdefense
    );

    return calcmods(melee, pierce, magic, defense, abilityorder);
  };
});
