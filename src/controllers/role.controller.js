const db = require("../models")

const RoleModel = db.role;

exports.AddRole = async (req, res) => {
    try{
        const type = await RoleModel({
            name: req.body.name
        })
        const ls = await type.save();
        res.status(200).json(ls)
    }catch(err){
        console.log(err)
    }
}


exports.getAllRoles = async (req, res) => {
    try{
        await RoleModel.find({}, (err, data)=>{
            if(err) res.status(400).json("Erreur de chargement");
            res.status(200).json(data)
        });
    }catch(err){
        res.send({status: 500, message: "Data vide"})
    }
}

exports.getOneRole = async (req, res) =>{
    try{
        const role = await RoleModel.findById(req.params.id)
        res.status(200).json(role)
    }catch(err){
        res.status(500).json("Erreur de chargement de donnee")
    }
}

exports.UpdateRole = async (req, res) => {
    try{
        await RoleModel.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, {new: true})
        res.status(200).json("Role modifier avec succes")
    }catch(err){
        res.status(500).json("Role deja existe ou verifier si le champs est bien rempli SVP")
    }
}

exports.DeleteRole = async (req, res) => {
    try{
        const role = await RoleModel.findById(req.params.id);
        try{
            await RoleModel.findByIdAndDelete(req.params.id)
            res.status(200).json("Role supprimee avec succes")
        }catch(err){
            res.status(400).json("Erreu de la suppression")
        }
    }catch(err){
        res.status(500).json("Erreur de la suppression")
    }
}