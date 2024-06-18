// installare multer per salvare img: https://www.npmjs.com/package/multer
const mongoose = require("mongoose")

// Child documents
const AddressSchema = new mongoose.Schema({
  addressLine: {
    type: String,
    required: [true, "Must provide field"],
    trim: true,
    maxlength: [20, "the name is too long"],
  },
  link: {
    type: Boolean,
    default: false,
  },
})

const SkillSchema = mongoose.Schema({
  category: {
    type: String,
    required: [true, "Must provide field"],
    trim: true,
    maxlength: [25, "the field is too long"],
  },
  skill: {
    type: [String],
    required: true,
    validate: {
      validator: function (v) {
        return v && v.length > 0
      },
      message: props => `Must provide ${props.value} `,
    },
  },
})

const LanguageSchema = new mongoose.Schema({
  language: {
    type: String,
    required: [true, "Must provide field"],
    trim: true,
    maxlength: [20, "the field is too long"],
  },
  level: {
    type: String,
    required: [true, "Must provide field"],
    trim: true,
    maxlength: [10, "the field is too long"],
  },
})

const ExperienceSchema = mongooseSchema({
  company: {
    type: String,
    required: [true, "Must provide field"],
    trim: true,
    maxlength: [20, "the field is too long"],
  },
  period: {
    type: String,
    required: [true, "Must provide field"],
    trim: true,
    maxlength: [20, "the field is too long"],
  },
  description: {
    type: String,
    required: [true, "Must provide field"],
    trim: true,
    maxlength: [500, "the field is too long"],
  },
})

const EducationSchema = mongooseSchema({
  school: {
    type: String,
    required: [true, "Must provide field"],
    trim: true,
    maxlength: [20, "the field is too long"],
  },
  period: {
    type: String,
    required: [true, "Must provide field"],
    trim: true,
    maxlength: [20, "the field is too long"],
  },
})

// Parent document
const ResumeSchema = new mongoose.Schema({
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
