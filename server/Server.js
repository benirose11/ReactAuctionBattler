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

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
server.listen(8000, () => {
  console.log("server is running on port 8000");
});

let gamesize = 2;
let bank = 5;

const startingGameState = {
  1: { seatfilled: false, draftedguys: [], username: "", bank },
  2: { seatfilled: false, draftedguys: [], username: "", bank },
  3: { seatfilled: false, draftedguys: [], username: "", bank },
  4: { seatfilled: false, draftedguys: [], username: "", bank },
  5: { seatfilled: false, draftedguys: [], username: "", bank },
  6: { seatfilled: false, draftedguys: [], username: "", bank },
  7: { seatfilled: false, draftedguys: [], username: "", bank },
  8: { seatfilled: false, draftedguys: [], username: "", bank },
  global: {
    gamePhase: "notStarted",
    players: {},
    warriorlist: [],
    turnorder: [],
    maxbid: 1,
    guyontheblock: [],
    gamesize,
    winningseat: null,
  },
};

let serverSeatState = {
  1: { seatfilled: false, draftedguys: [], username: "", bank },
  2: { seatfilled: false, draftedguys: [], username: "", bank },
  3: { seatfilled: false, draftedguys: [], username: "", bank },
  4: { seatfilled: false, draftedguys: [], username: "", bank },
  5: { seatfilled: false, draftedguys: [], username: "", bank },
  6: { seatfilled: false, draftedguys: [], username: "", bank },
  7: { seatfilled: false, draftedguys: [], username: "", bank },
  8: { seatfilled: false, draftedguys: [], username: "", bank },
  global: {
    gamePhase: "notStarted",
    players: {},
    warriorlist: [],
    turnorder: [],
    maxbid: 1,
    guyontheblock: [],
    gamesize,
    winningseat: null,
  },
};

class warrior {
  constructor(name) {
    this.name = "Warrior " + `${name}`;
    this.hp = 50 + Math.floor(Math.random() * 50);
    this.damage = 20 + Math.floor(Math.random() * 60);
    this.damagetype = "melee";
    this.ability = noabilityobj;
  }
}

class archer {
  constructor(name) {
    this.name = "Archer " + `${name}`;
    this.hp = 10 + Math.floor(Math.random() * 50);
    this.damage = 70 + Math.floor(Math.random() * 50);
    this.damagetype = "piercing";
    this.ability = abilitygenerator(25, 5);
  }
}

class mage {
  constructor(name) {
    this.name = "Mage " + `${name}`;
    this.hp = 10 + Math.floor(Math.random() * 40);
    this.damage = 25 + Math.floor(Math.random() * 40);
    this.damagetype = "magic";
    // this.ability = abilitygenerator(60, 25)
    this.ability = lamepropsobj[2];
  }
}

class commander {
  constructor(name) {
    this.name = "Commander " + `${name}`;
    this.hp = 1 + Math.floor(Math.random() * 99);
    this.damage = 1 + Math.floor(Math.random() * 99);
    this.damagetype = "melee";
    this.ability = abilitygenerator(21, 80);
  }
}

const specialpropsobj = {
  0: {
    abilityname: "Damage Aura 50%",
    code: (melee, pierce, magic, defense) => {
      melee = melee * 1.5;
      pierce = pierce * 1.5;
      magic = magic * 1.5;
      return { melee, pierce, magic, defense };
    },
    propskey: 0,
  },

  1: {
    abilityname: "Defense Aura 30%",
    code: (melee, pierce, magic, defense) => {
      defense = defense * 1.3;
      return { melee, pierce, magic, defense };
    },
    propskey: 1,
  },

  2: {
    abilityname:
      "Magical amplifier, if you have at least 100 magic damage, +250 magic damage",
    code: (melee, pierce, magic, defense) => {
      if (magic >= 100) magic = magic + 250;
      return { melee, pierce, magic, defense };
    },
    propskey: 2,
  },
};

const lamepropsobj = {
  0: {
    abilityname: "Melee damage aura 15%",
    code: (melee, pierce, magic, defense) => {
      melee = Math.floor(melee * 1.15);
      return { melee, pierce, magic, defense };
    },
    propskey: 0,
  },

  1: {
    abilityname:
      "Piercing melee weapons, 100% team melee damage converted to piercing",
    code: (melee, pierce, magic, defense) => {
      pierce = melee + pierce;
      melee = 0;
      return { melee, pierce, magic, defense };
    },
    propskey: 1,
  },

  2: {
    abilityname:
      "Glass Cannon, melee damage reduced 85%, magic+ranged damage +50%, defense -10%",
    code: (melee, pierce, magic, defense) => {
      melee = melee * 0.15;
      pierce = pierce * 1.5;
      magic = magic * 1.5;
      defense = defense * 0.9;
      return { melee, pierce, magic, defense };
    },
    propskey: 2,
  },
};

const noabilityobj = {
  abilityname: "None",
  code: (melee, pierce, magic, defense) => {
    return { melee, pierce, magic, defense };
  },
  propskey: null,
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
  } else return noabilityobj;
};

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("New user connected with" + socket.id);

  socket.on("SandLatestSeatingToServer", (updatedSeating) => {
    serverSeatState = updatedSeating;
    io.emit("updatedSeating", serverSeatState);
  });

  socket.on("newChat", (username, chatText) => {
    io.emit("message", chatText, username);
  });

  socket.on("getInitialSeating", () => {
    io.emit("updatedStateFromServer", serverSeatState);
  });

  socket.on("Reset", (playername) => {
    serverSeatState = startingGameState;
    io.emit("clearChat");
    io.emit("message", playername + " called for a reset");
    io.emit("updatedStateFromServer", startingGameState);
  });

  socket.on("disconnect", () => {
    console.log("user disconected", socket.id);
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
      for (let i = 0; i < numplayers * 2; i++) {
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
      countdown(5000, serverSeatState.global.maxbid, activeseat);
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
      countdown(5000, serverSeatState.global.maxbid, seat);
    }

    io.emit("message", `${seat}`);
  });

  const draftOver = () => {
    calcwinner();
    io.emit("message", "draft over reached");
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
    // if (
    //   serverSeatState[winningseat].draftedguys.length ===
    //   serverSeatState.global.gamesize
    // ) {
    //   io.emit("message", "maxguyshit");
    // }

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
      countdown(5000, serverSeatState.global.maxbid, activeseat);
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
    io.emit("message", "calc winner called");
  };

  // socket.on("SocketChoseUsername", (userdata) => {
  //   console.log("test hit");
  //   console.log(userdata);
  //   if (UsersSocketIdKey[userdata.userName]) {
  //     socket.emit("message", "username already taken");
  //   } else {
  //     UsersSocketIdKey[userdata.userName] = userdata.socket_id;
  //     socket.emit(
  //       "message",
  //       "Succesfully entered game as " +
  //         userdata.userName +
  //         " with socket id " +
  //         userdata.socket_id
  //     );
  //   }
  // });

  // socket.emit("your id", socket.id);
  // socket.on("send message", body => {
  //     io.emit("message", body)
  // })
});
