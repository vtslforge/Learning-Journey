const crypto = require('crypto');

const randomZero = crypto.randomUUID();
console.log(randomZero);
// example of uuid - ae7f29cd-c48c-41c4-8c69-2b805b19ac89

const randomByte  = crypto.randomBytes(16).toString("hex")
// will print 32 character it's 16 bytes hexa decimal string
console.log(randomByte)

// hashing is one way means if i have a input that become hash i cant convert that hash back to same origina input correct
// Aman -> convert to harsh = now can't convert back to original
const hashName = "Vatsalya singh"
const hash = crypto.createHash('sha-256').update('hashName').digest('hex')
console.log(hash)
// output -> 8fc9fe5650c5446edecce45c14135db6ad4af07f48abc97f9cf65282d663a031

const secret = "my-super-secret"
const message = "user_id=1"
const signature = crypto.createHmac('sha-256', secret).update(message).digest('hex')
console.log(signature)
// example - 77f7ee4ced2f09748b5760b5abe78879f5008ff9986d7f0be7f57d96b5573c7a

const signatureVerify = crypto.createHmac('sha-256', secret).update(message).digest('hex')
console.log(signature === signatureVerify)
// output -> true
//used for web hooks and signed tockens