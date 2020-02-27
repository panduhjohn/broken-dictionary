const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
    word: { type: String, lowercase: true, unique: true, default: '' },
    definition: { type: String, lowercase: true, trim: true, default: '' }
});

module.exports = mongoose.model('word', WordSchema);
