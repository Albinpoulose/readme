const User = require("../models/userModel");


module.exports = {
  doSignup: (userData) => {
    return new Promise(async (resolve, reject) => {
      const { name, email, password } = userData;

      if (!name || !email || !password) {
        //reject();
        console.log("Fill out all the fields");
      } else {
        const user = new User({ name, email, password });
        const insertedUser = await user.save();
        if (insertedUser) {
          console.log("user details inserted", insertedUser._id);
          resolve(insertedUser);
        } else {
          console.log("User did not inserted");
        }
      }
    });
  },

  doLogin : (userData)=>{
        // console.log("userData:",userData);
       return new Promise(async(resolve,reject)=>{
       const userExist= await User.findOne({ email: userData.email}).exec()
      //  console.log("userexist",userExist);
       if(userExist){
         if(userExist.password === userData.password){
           console.log("login sucess");
           resolve(userExist);
         }else{
           console.log("incorrect password");
         }
       }else{ 
         console.log("incorrect email id ");
       }
       })
  }
};
