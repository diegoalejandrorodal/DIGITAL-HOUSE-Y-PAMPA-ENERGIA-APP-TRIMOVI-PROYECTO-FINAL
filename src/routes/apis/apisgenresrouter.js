const router = require(express).Router();
const controller = require("../../controllers/Apis/apisgenrescontroller");

router.get("/all", controller.all);