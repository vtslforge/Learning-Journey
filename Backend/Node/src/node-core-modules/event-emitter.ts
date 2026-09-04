import EventEmitter from "node:events";
// this things we will perform when dealing with database

type users = {
  id: number;
  email: string;
};

const appEvent = new EventEmitter();

// A listner with method on
appEvent.on("user:regisUser", (user: users) => {
  console.log(`user is registered of email : ${user.email}`);
});

// A listner with method once
appEvent.once("userOnce:start", (userOnce: users) => {
  console.log("event ran once");
});

function registerUser(): void {
  const user = {
    id: 1,
    email: "vtsl@gmail.com",
  };
  console.log("user saved");
  appEvent.emit("user:regisUser", user);
  // here user is the payload
  appEvent.emit("userOnce:start", user);
  appEvent.emit("userOnce:start", user); // running twice but registered only once
}

registerUser();
registerUser();

/* 
  output -> 

  user saved
  user is registered of email : vtsl@gmail.com
  event ran once
  user saved
  user is registered of email : vtsl@gmail.com

*/
