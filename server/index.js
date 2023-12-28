const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express()
require('./db/connection')


const session = require('express-session')
const passport = require('passport')
const OAuth2Strategy = require('passport-google-oauth2').Strategy;

const userdb = require("./models/user")

const clientid = process.env.CLIENT_ID
const clientsecret = process.env.CLIENT_SECRET

//middleware
app.use(
    cors({
        origin:"http://localhost:5173",
        credentials:true,
        methods:"GET,POST,PUT,DELETE"
    }))

app.use(express.json())
// app.use('/', require('./routes/authRoutes'))

//setup session
app.use(session({
    secret:"sdjkasnfdjf213343",
    resave:false,
    saveUninitialized:true,
}))

//setup passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new OAuth2Strategy({
        clientID: clientid,
        clientSecret: clientsecret,
        callbackURL: "/auth/google/callback",
        scope:["profile","email"]
    },
    async(accessToken,refreshToken,profile,done) => {
        // console.log("profile", profile);
        try{
            let user = await userdb.findOne({googleID:profile.id})

            if(!user){
                user = new userdb({
                    googleID:profile.id,
                    userName: profile.displayName,
                    email:profile.emails[0].value,
                    profileImage:profile.photos[0].value
                });
                await user.save();
            }
            return done(null, user)
        }catch(err){
            return done(err, null)
        }
    }
    )
)

//setting up user data
 passport.serializeUser((user,done) => {
    done(null,user)
 })

 passport.deserializeUser((user,done) => {
    done(null,user)
 })

 // initial google oauth login
 app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

 app.get("/auth/google/callback",passport.authenticate("google",{
    successRedirect:"http://localhost:5173",
    failureRedirect:"http://localhost:5173/err"
 }))

 app.get("/login", async(req,res) => {
    console.log("req", req.user)

    if(req.user){
        res.status(200).json({message: "user Login", user:req.user})
    }else{
        res.status(400).json({message:"Not Authorized"})
    }
 })

 // for logout

 app.get("/logout", (req,res,next) => {
    req.logOut( (err) => {
        if(err){return next(err)}
        res.redirect("http://localhost:5173")
    })
 })


const PORT = 8000;
app.listen(PORT, () => console.log(`The server is running on Port ${PORT}`))