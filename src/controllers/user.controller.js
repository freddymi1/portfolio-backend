const db = require('../models')
const bcrypt = require("bcryptjs")

const UserModel = db.user
exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};

exports.getAllUsers = async (req, res) => {
    try{
        await UserModel.find({}, (err, data)=>{
            if(err) res.status(400).json("Erreur de chargement");
            res.status(200).json(data)
        });
    }catch(err){
        res.send({status: 500, message: "Data vide"})
    }
}

exports.getOneUser = async (req, res) => {
    try{
        const user = await UserModel.findById(req.params.id);
        const { password, ...others} = user._doc;
        res.status(200).json(others);
    }catch(err){
        res.send({status: 500, message: "Cette user n'existe pas"})
    }
}

exports.UpdateUser = async (req, res) => {
    // try{
    //     const updateUser = await UserModel.findByIdAndUpdate(req.params.id, {
    //         $set: req.body,
    //     }, {new: true})
    //     res.status(200).json(updateUser)
    // }catch(err){
    //     res.status(500).json("Pas de donne valable")
    // }

    try{
        const updateUser = await UserModel.findByIdAndUpdate(req.params.id ,{
            $set: req.body,
            password: bcrypt.hashSync(req.body.password, 8)
        }, {new: true})
        res.status(200).json("User bien modifier")
    }catch(err){
        res.status(400).json("Erreu de modification")
    }
}

exports.deleteUser = async (req, res) => {
    try{
        const ab = await UserModel.findById(req.params.id);
        try{
            await UserModel.findByIdAndDelete(req.params.id)
            res.status(200).json("User bien supprimer")
        }catch(err){
            res.status(400).json("Erreu de suppression")
        }
    }catch(err){
        res.status(500).json("Pas de donne valable")
    }
}