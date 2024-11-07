const router = require("express").Router();
const volumeServicesRoute = require("../controllers/volumeSevices");

router.get("/volumeServices", volumeServicesRoute.getVolumeServices);

module.exports = router;
