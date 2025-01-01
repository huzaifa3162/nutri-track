const mongoose=require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
  },
  title:{
    type:String,
    require:true
  },
  describtion:{
    type:String,
    require:true,
  },
  date:{

    type:Date,
    default:Date.now,

  },
  });

const Notes = mongoose.model("Notes", UserSchema);
module.exports = Notes;

