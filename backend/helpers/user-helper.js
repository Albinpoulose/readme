const User = require("../models/userModel");

module.exports = {
  doSignup: (userData) => {
    return new Promise(async (resolve, reject) => {
      const { name, email, password } = userData;

      if (!name || !email || !password) {
         reject(); 
      } else {
        const user = new User({ name, email, password });
        const insertedUser = await user.save();
        if(insertedUser){   
            console.log('user details inserted',insertedUser._id);
        }

        resolve({login:"Sucess"});
      }
    });
  },
};
