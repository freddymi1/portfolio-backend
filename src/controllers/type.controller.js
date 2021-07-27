const db = require("../models")

const TypeModel = db.type;

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