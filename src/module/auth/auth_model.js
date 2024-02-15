const { Schema, default: mongoose } = require('mongoose');
const bcrypt = require('bcrypt');



const authSchema = new Schema({
    email: {
        type: String,
        required: [true, 'User email is missing'],
        trim: true, // empty space remove
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'User password is missing'],
        minlenght: [6, 'User password should be under 31'],
        maxlenght: [13, 'User password should be under 31'],
        set: (value) => bcrypt.hashSync(value, bcrypt.genSaltSync(10)),
    },
},
    { timestamps: true }// when this data create or update
);

// Add comparePassword method
authSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw new Error(error);
    }
};

const authMolel = mongoose.model('users', authSchema)


module.exports = authMolel;