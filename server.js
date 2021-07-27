const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

const dbConfig = require("./config/db.config")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./src/models");

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




const option = {
    origin: "http://localhost:3000",
}

app.use(cors(option));




const authRoute = require("./src/routes/auth.route")
const userRoute = require("./src/routes/user.route")

app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept",
      "Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE"
    );
    next();
});


const PORT = process.env.PORT || 5000

app.use("/api/auth/", authRoute)
app.use("/api/users/", userRoute)


app.get("/", (req, res)=>{
    res.send("Hello world");
})

app.listen(PORT, ()=>{
    console.log("Serveur lancer sur le port: ", PORT)
})

