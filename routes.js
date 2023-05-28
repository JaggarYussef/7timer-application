import {
  createLocation,
  getLocation,
  deleteLocation,
  updateLocation,
  getAllLocations,
} from "./controllers/location.js";

import { Router } from "express";

const router = Router();

//Location CRUD routes
// prettier-ignore
router.post("/addLocation/latitude=:latitude&longitude=:longitude", createLocation);
router.get("/getLocation/slugname=:slugname&id:id", getLocation);
router.delete("/deleteLocation/id=:id&slugname=:slugname", deleteLocation);
// prettier-ignore
router.put("/updateLocation/oldname=:oldname&newname=:newname", updateLocation);
router.get("/getAllLocations", getAllLocations);

export default router;
