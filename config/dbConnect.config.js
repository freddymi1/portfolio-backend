const db = require("../src/models");
const dbConfig = require("./db.config")

const Role = db.role;

db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connexion avec la base de donnee etablit");
    initial();
}).catch(err=>{
    console.log("Erreur de connexion");
    process.exit();
})

function initial(){
    Role.estimatedDocumentCount((err, count) => {
        if(!err && count === 0){
            new Role({
                name: "user"
            }).save(err => {
                if(err){
                    console.log("error", err)
                }
                console.log("User ajouter dans le role")
            });
            new Role({
                name: "moderator"
            }).save(err => {
                if(err){
                    console.log("Error", err)
                }
                console.log("moderator bien ajouter dans le role")
            });

            new Role({
                name: "admin"
            }).save(err => {
                if(err){
                    console.log("error", err)
                }
                console.log("Admin ajouter dans le role")
            });
        }
    })
}
