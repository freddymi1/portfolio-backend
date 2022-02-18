const db = require("../models")

const TypeModel = db.type;

exports.AddType = async (req, res) => {
    try{
        const type = await TypeModel({
            name: req.body.name
        })
        const ls = await type.save();
        res.status(200).json(ls)
    }catch(err){
        console.log(err)
    }
}


exports.getAllType = async (req, res) => {
    try{
        await TypeModel.find({}, (err, data)=>{
            if(err) res.status(400).json("Erreur de chargement");
            res.status(200).json(data)
        });
    }catch(err){
        res.send({status: 500, message: "Data vide"})
    }
}

exports.getOneType = async (req, res) =>{
    try{
        const type = await TypeModel.findById(req.params.id)
        res.status(200).json(type)
    }catch(err){
        res.status(500).json("Erreur de chargement de donnee")
    }
}

exports.UpdateType = async (req, res) => {
    try{
        await TypeModel.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, {new: true})
        res.status(200).json("Type modifier avec succes")
    }catch(err){
        res.status(500).json("Type deja existe ou verifier si le champs est bien rempli SVP")
    }
}

exports.DeleteType = async (req, res) => {
    try{
        const type = await TypeModel.findById(req.params.id);
        try{
            await TypeModel.findByIdAndDelete(req.params.id)
            res.status(200).json("Type supprimee avec succes")
        }catch(err){
            res.status(400).json("Erreu de la suppression")
        }
    }catch(err){
        res.status(500).json("Erreur de la suppression")
    }
}