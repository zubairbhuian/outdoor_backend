const {Schema,default: mongoose} = require('mongoose');



const todoSchema=new Schema({
    title:{
        type:String,
        required:[true,'Title is missing'],
        trim:true, // empty space remove
        maxlenght:[31, 'Title should be under 31'],
    },
    description:{
        type:String,
        required:[true,'Description is missing'],
        trim:true,
        maxlenght:[200, 'Title should be under 31'],
    },
},
{timestamps :true}// when this data create or update
);


const TodoMolel =mongoose.model('Todos',todoSchema)


module.exports = TodoMolel;