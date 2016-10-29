var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: {
            unique:true
        }
    }
});

module.exports = mongoose.model('Recipe', recipeSchema);
