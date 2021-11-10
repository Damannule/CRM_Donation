const mongoose = require('mongoose');

const Schema = mongoose.Schema

const User = new Schema(
    {
        nom: { type: String, required: true },
        prenom: { type: String, required: true },
        email: { type: String, required: true },
        motdepasse: { type: String, required: true },
        telephone: { type: String, required: true },
        rue: { type: String, required: true },
        codePostal: { type: String, required: true },
        ville: { type: String, required: true },
        montant: { type: Number, required: true },
        dateDon: { type: Date, required: true },
        newsletter: { type: Boolean, required: true },
        actif: { type: Boolean, required: true },
    }
);

module.exports = mongoose.model('users', User);