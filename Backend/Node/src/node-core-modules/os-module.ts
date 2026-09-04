import * as os from "node:os";

function runOsDemo(): void {
  console.log("flatform info : " + os.platform());
  console.log("arch info : " + os.arch());
  console.log("os type info : " + os.type());
  console.log("os release info : " + os.release());
  console.log("home dir info : " + os.homedir());
  console.log("temp dir info : " + os.tmpdir());
  console.log("memory info : " + os.totalmem(), os.freemem());
  // for cpu
  const cpus = os.cpus();
  console.log(cpus.length);
  if (cpus.length > 0) {
    console.log(
      "first cpu model : " + cpus[0].model,
      cpus[0].speed,
      cpus[0].times,
    );
  }
}
runOsDemo();
/* 
output ->

flatform info : win32
arch info : x64
os type info : Windows_NT
os release info : 10.0.26200
home dir info : C:\Users\Singh
temp dir info : C:\Users\Singh\AppData\Local\Temp
memory info : 16802910208 4963160064
12
first cpu model : 13th Gen Intel(R) Core(TM) i5-13420H 2611 { user: 5774609, nice: 0, sys: 6142093, idle: 59906140, irq: 909687 }

*/