var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mealSchema = mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    recipe: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
        required: true
    }
});

module.exports = mongoose.model('Meal', mealSchema);
