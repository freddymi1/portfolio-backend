const db = require('../models')

const langueModel = db.langue;

exports.AddLangue = async (req, res) => {
    try{
        const langue = await langueModel({
            title: req.body.title,
            level: req.body.level
        })
        const l = await langue.save();
        res.status(200).json(l)
    }catch(err){
        console.log(err)
    }
}

exports.getAllLangue = async (req, res) => {
    try{
        await langueModel.find({}, (err, data)=>{
            if(err) res.status(400).json("Erreur de chargement")
            res.status(200).json(data)
        })
    }catch(err){
        res.status(500).json("Erreur d'enregistrement")
    }
}

exports.getOneLangue =  async (req, res) => {
    try{
        const data = await langueModel.findById(req.params.id);
        res.status(200).json(data)
    }catch(err){
        res.status(500).json("Erreur de collection de donnee")
    }
}

exports.deleteLangue = async (req, res) => {
    try{
        await langueModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Langue bien supprimer")
    }catch(err){
        res.status(400).json("Erreu de suppression")
    }
}

exports.updateLangue = async (req, res) =>{
    try{
        await langueModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json("Langue modifier avec succes")
    }catch(err){
        res.status(500).json("Erreur de modification")
    }
}