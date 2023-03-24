const express = require("express")
const passport = require("passport")

const router = express.Router()

const SamlStrategy = require("passport-saml").Strategy;

const samlConfig = {
    path: "/saml2/callback", // end point which is defined by you after call back
    entryPoint: process.env.SAML_PROVIDER, // IdP End point
    issuer: "http://localhost:8000", // Your api bash url where server is running
    protocol: "https://",
    cert: process.env.SAML_SSO_CERT || " ", // SAML CERT provided by IdP
}

/**
 * 
 * @param {*} samlUser | IdP will provide the parameter
 * @param {*} callback | Callback passport\
 */
const createUserOrUpdate = (samlUser, callback) => {
    // Modified your code to create or update the user

    // Passport serialized and deserialize the user
    passport.serializeUser((user, done) => {
        done(null, { ...user });
    });
    passport.deserializeUser((user, done) => {
        done(null, { ...user });
    });

    callback(null, samlUser)
}
passport.use(new SamlStrategy(samlConfig, createUserOrUpdate))


const loginMidd = (req, res, next) => {
    passport.authenticate("saml", { state: "yourExtraDataKeepInBase64" })(req, res, next)
}

router.get("/saml2/login", loginMidd);
router.post("/saml2/callback", passport.authenticate("saml"), createUserOrUpdate);

module.exports = router
