const { Router } = require("express");
const router = Router();  //PODREMOS DEFINIR UNA URL

const { renderIndex, renderAbout } = require("../controllers/index.controller");

router.get("/", renderIndex);

router.get("/about", renderAbout);

module.exports = router;