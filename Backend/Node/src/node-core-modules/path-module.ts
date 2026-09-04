import path from "node:path"

// my project root
console.log(process.cwd())
const projectRoot = process.cwd()

// assuming our path is  = /uploads/users/42/profilePhoto.png
// 42 here is dynamic path value
const userId  = "42"
const originalName = "profilePhoto.png"

const uploadFile = path.join(projectRoot,"uploads","useres",userId,originalName)
console.log(uploadFile)
// output - V:\vtslforge\Learning\Backend\Express_3\uploads\useres\42\profilePhoto.png

/* 
    Important concept path.join
    - its going to create path string 
    - it will not create the folder
    - it does not check file exist or not
*/

const filename  = path.basename(uploadFile)
console.log(filename)
// return the last part of the path

const pathExtension = path.extname(uploadFile)
console.log(pathExtension)
// output -> .png

const parentFolder = path.dirname(uploadFile)
console.log(parentFolder)
// output -> V:\vtslforge\Learning\Backend\Express_3\uploads\useres\42