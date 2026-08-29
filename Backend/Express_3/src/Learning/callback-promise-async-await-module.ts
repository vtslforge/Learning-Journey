type user = {
  id: number;
  name: string;
  role: "user" | "super_admin";
};

const users: user[] = [
  {
    id: 11,
    name: "Raghu",
    role: "super_admin",
  },
  {
    id: 12,
    name: "naman",
    role: "user",
  },
  {
    id: 13,
    name: "Savad",
    role: "super_admin",
  },
  {
    id: 14,
    name: "Roger",
    role: "user",
  },
];

// callback is a func - this func u r passing to a diff func
// callback( error, result) -> most important concept also classic node js pattern

// important as per interview to learn api call with no async await

// FETCHING DATA USING CLASSIC CALLBACK 

function FindUserWithCallback(
  user_id: number, // function expects you to pass a user ID as a number when calling it
  callback: (error: Error | null, user?: user) => void,
): void {
  setTimeout(() => {
    // the actual api call here
    const user = users.find((currentUser) => currentUser.id === user_id);
    if (!user) {
      callback(new Error(`user with this id ${user_id} is not found`));
      return;
    }
    callback(null, user);
  }, 2000);
}
FindUserWithCallback(12, (error, user) => {
  if (error) {
    console.log("callback error", error.message);
  }
  console.log("callback result : ", user?.id, user?.name, user?.role);
});

// USING PROMISE TO FETCH API DATA

function FindUserWithPromise(user_id: number): Promise<user> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((currentUser) => currentUser.id === user_id);
      if (!user) {
        reject(new Error(`user with this id ${user_id} is not found`));
        return;
      }
      resolve(user);
    }, 2000);
  });
}
FindUserWithPromise(13)
  .then((user) => {
    console.log("Promise result : ", user.id, user.name, user.role);
  })
  .catch((error: Error) => {
    console.log("promise error", error.message);
  });


  // FETCHING DATA USING ASYNC AND AWAIT MODERN

async function FindUserWithAsyncAwait(user_id: number): Promise<void> {
  try {
    const user  = await FindUserWithPromise(user_id)
    // const user = await users.find((currentUser) => currentUser.id === user_id);
    console.log("Async Await result : ", user?.id, user?.name, user?.role);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.log("async error", message);
  }
}
FindUserWithAsyncAwait(14);
