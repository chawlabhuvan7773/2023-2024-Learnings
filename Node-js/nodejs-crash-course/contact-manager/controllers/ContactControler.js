//@desc get all contacts
//@route GET /api/contacts
//@access public

const Contact = require("../models/contactModels");
const asyncHandler = require("express-async-handler");

const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = await req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All Fields are mandatory!");
  }
  console.log(req, "req");
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });
  res.status(200).json(contact);
});
const getSingleContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.statusCode(404);
    throw new Error("Contact Not Found");
  }
  res.status(200).json(contact);
});
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.statusCode(404);
    throw new Error("Contact Not Found");
  }
  console.log(contact, "contact");
  if (contact.user_id.toString() !== req.user.id) {
    res.statusCode(403);
    throw new Eror("User don't have permission to update other user contacts");
  }
  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true, // This option update the response after update
      runValidators: true, // This option runs validators to check the updated
    }
  );
  res.status(200).json(updateContact);
});
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.statusCode(404);
    throw new Error("Contact Not Found");
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.statusCode(403);
    throw new Error("User dont have permission to update other user contact");
  }
  await contact.deleteOne({ _id: req.params.id }); // Delete one method is updated in new mongoose version
  res.status(200).json(contact);
});

module.exports = {
  getContact,
  createContact,
  getSingleContact,
  updateContact,
  deleteContact,
};
