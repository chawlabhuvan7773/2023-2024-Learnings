const express = require("express");
const {
  getContact,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/ContactControler");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();
router.use(validateToken);
router.route("/").get(getContact);

router
  .route("/:id")
  .get(getSingleContact)
  .put(updateContact)
  .delete(deleteContact);

router.route("/").post(createContact);

module.exports = router;
