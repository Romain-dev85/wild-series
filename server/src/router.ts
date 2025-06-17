import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/items", itemActions.browse);
router.get("/items/:id", itemActions.read);
router.post("/items", itemActions.add);

// Define program-related routes
import programActions from "./modules/program/programActions";

router.get("/programs", programActions.browse);
router.get("/programs/:id", programActions.read);

/* ************************************************************************* */

// Declaration of a "Welcome" route

import sayActions from "./modules/say/sayActions";

router.get("/", sayActions.sayWelcome);

// Declaration of a category route

import categoryActions from "./modules/category/categoryActions";

router.get("/categories", categoryActions.browse);
router.get("/categories/:id", categoryActions.read);

/* ************************************************************************* */

export default router;
