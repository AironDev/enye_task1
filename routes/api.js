const router = require("express").Router();

const exchangeRateController = require("../controllers/exchangeRateController");



// Single configurable  route to get all comments, flagged and unflagged comments
// My intention was to use express-validate package, but couldn't get to work, I will look at this in the future
router.get("", exchangeRateController.getRate);

module.exports = router;
