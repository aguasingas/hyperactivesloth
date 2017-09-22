var mongoose = require('mongoose');

var ingredientSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: {
            unique:true
        }
    }
});

module.exports = mongoose.model('Ingredient', ingredientSchema);
