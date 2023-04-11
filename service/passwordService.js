const bcrypt = require("bcrypt");

 async function passHash(pass){
     const salt = await bcrypt.genSalt(10);
  const passHashValue = await bcrypt.hash(pass,salt)
    return passHashValue
}

module.exports=passHash