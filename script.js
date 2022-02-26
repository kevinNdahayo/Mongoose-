const mongoose = require("mongoose");
const mongodbUrl = "mongodb+srv://kevin:ndahayokevin2003@mongodb@cluster0.7fss6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const User = require("./user")
mongoose.connect(mongodbUrl, () => {
    console.log("Connected successfully"),
    error => {
        console.error(error);
    }
})
run()
async function run(){
    User.create()
    const user1 = new User({
    name: "Kevin",
    age: 26
})
  await user1.save()
  console.log(user1)
}
