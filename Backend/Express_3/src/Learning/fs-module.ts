import path, { basename } from "node:path";
import fs from "node:fs";
import fspromise from "fs/promises";

type fileResult = {
  style: string;
  fileName: string;
  content: string;
  fileInBytes: number;
};

function ensure_Fs_sync_file(): void {
  if (!fs.existsSync(path_demo)) {
    // if not exist create sync_file.txt
    // recursive here create the full path
    fs.mkdirSync(path_demo, { recursive: true });
  }
}

const path_demo = path.join(process.cwd(), "File_system");
const sync_path = path.join(path_demo, "sync_file.txt");

const callback_path = path.join(path_demo, "callback_file.txt");
const promise_path = path.join(path_demo, "promise_file.txt");





// DONE USING SYNC FS

function fileSyncExample(): fileResult {
  // write content to the file
  // if file dosen't exit node create it if exist it will replace the content
  fs.writeFileSync(sync_path, "Created using sync file path", "utf-8");
  // appending in the end of text file
  fs.appendFileSync(sync_path, "appended using sync fs", "utf-8");
  // to read the content of the file
  const content = fs.readFileSync(sync_path, "utf-8");
  // to get the information about the file
  const fileStat = fs.statSync(sync_path);
  return {
    style: "sync",
    content,
    fileName: path.basename(sync_path),
    fileInBytes: fileStat.size,
  };
}





// CALLBACK BASED API IN NODE FS

function runCallbackExample(): Promise<fileResult> {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      callback_path,
      "created using callback fs api",
      "utf-8",
      (writeError) => {
        if (writeError) {
          reject(writeError);
          return;
        }
        fs.appendFile(
          callback_path,
          "appended through callback fs api",
          "utf-8",
          (appendError) => {
            if (appendError) {
              reject(appendError);

              return;
            }
            fs.readFile(callback_path, "utf-8", (readError, content) => {
              if (readError) {
                reject(readError);
                return;
              }
              fs.stat(callback_path, (statError, stat) => {
                if (statError) {
                  reject(statError);
                  return;
                }
                // this is also example of callback hell bad practice
                resolve({
                  style: "callback",
                  content,
                  fileInBytes: stat.size,
                  fileName: path.basename(callback_path),
                });
              });
            });
          },
        );
      },
    );
  });
}




// PROMISE BASED API IN NODE FS PROMISE

async function runPromiseExample(): Promise<fileResult> {
  await fspromise.writeFile(
    promise_path,
    "created using the node fs promise based api",
    "utf-8",
  );

  const content = await fspromise.readFile(promise_path, "utf-8");
  const stat = await fspromise.stat(promise_path);
  return {
    style: "promise",
    content,
    fileName: path.basename(promise_path),
    fileInBytes: stat.size,
  };
}




// MAIN

async function mainFileFn(): Promise<void> {
  try {
    /* 
      how to create folder
      - ensure_Fs_sync_file exist 
    */
    ensure_Fs_sync_file();
    const syncResult = fileSyncExample();
    const runCallbackExampleResult = await runCallbackExample();
    const promiseResult = await runPromiseExample();
    console.log([syncResult]); // done using file sync fs
    console.log([runCallbackExampleResult]); // done using callback can create callback hell bad practice
    console.log([promiseResult]); // done using promise better and clean and modern
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    console.log("file system error", message);
  }
}

mainFileFn();
