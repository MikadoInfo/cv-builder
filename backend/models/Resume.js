const mongoose = require("mongoose")
// Child documents
const {
  AddressSchema,
  SkillSchema,
  LanguageSchema,
  ExperienceSchema,
  EducationSchema,
  ImageSchema,
} = require("./ResumeChildrens")

// Parent document
const ResumeSchema = new mongoose.Schema({
  image: ImageSchema,
  name: {
    type: String,
    required: [true, "Must provide name"],
    trim: true,
    maxlength: [25, "the name is too long"],
  },
  introTitle: {
    type: String,
    required: [true, "Must provide field"],
    trim: true,
    maxlength: [25, "the field is too long"],
  },
  intro: {
    type: String,
    required: [true, "Must provide field"],
    trim: true,
    maxlength: [180, "the field is too long"],
  },
  personalInfoTitle: {
    type: String,
    required: [true, "Must provide field"],
    trim: true,
    maxlength: [25, "the field is too long"],
  },
  addressLines: [AddressSchema],
  skills: {
    type: String,
    required: [true, "Must provide field"],
    trim: true,
    maxlength: [25, "the field is too long"],
  },
  skillsList: [SkillSchema],
  languageTitle: {
    type: String,
    required: [true, "Must provide field"],
    trim: true,
    maxlength: [25, "the field is too long"],
  },
  languageList: [LanguageSchema],
  experienceTitle: {
    type: String,
    required: [true, "Must provide field"],
    trim: true,
    maxlength: [25, "the field is too long"],
  },
  experienceList: [ExperienceSchema],
  educationTitle: {
    type: String,
    required: [true, "Must provide field"],
    trim: true,
    maxlength: [25, "the field is too long"],
  },
  educationList: [EducationSchema],
})

module.exports = mongoose.model("Resume", ResumeSchema)
