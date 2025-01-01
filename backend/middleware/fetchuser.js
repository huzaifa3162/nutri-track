const jwt = require("jsonwebtoken");

// Fix typo: Change "JWT_SECERET" to "JWT_SECERET"
const JWT_SECERET = "HARRYBHAI";

const fetchuser = (req, res, next) => {
    // Get the token from the header
    const token = req.header('auth-token');
    
    if (!token) {
        // Send an error response if token is missing
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }

    try {
        // Verify the token using the secret
        const data = jwt.verify(token, JWT_SECERET);
        req.user = data.user;  // Attach user info to the request object
        next();  // Proceed to the next middleware or route handler
        
    } catch (error) {
        // Handle error if token verification fails
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
};

module.exports = fetchuser;