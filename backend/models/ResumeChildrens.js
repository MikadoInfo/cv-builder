const mongoose = require("mongoose")

// Child documents
const AddressSchema = new mongoose.Schema({
  addressLine: {
    type: String,
    required: [true, "Must provide field"],
    trim: true,
    maxlength: [50, "the name is too long"],
  },
  link: {
    type: Boolean,
    default: false,
  },
})

const SkillSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, "Must provide field"],
    trim: true,
    maxlength: [50, "the field is too long"],
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
    maxlength: [15, "the field is too long"],
  },
})

const ExperienceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, "Must provide field"],
    trim: true,
    maxlength: [50, "the field is too long"],
  },
  period: {
    type: String,
    required: [true, "Must provide field"],
    trim: true,
    maxlength: [50, "the field is too long"],
  },
  description: {
    type: String,
    required: [true, "Must provide field"],
    trim: true,
    maxlength: [500, "the field is too long"],
  },
})

const EducationSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "Must provide field"],
    trim: true,
    maxlength: [50, "the field is too long"],
  },
  period: {
    type: String,
    required: [true, "Must provide field"],
    trim: true,
    maxlength: [50, "the field is too long"],
  },
})

const ImageSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    maxlength: [25, "the field is too long"],
  },
  imagePath: {
    type: String,
    required: true,
  },
})

module.exports = {
  AddressSchema,
  SkillSchema,
  LanguageSchema,
  ExperienceSchema,
  EducationSchema,
  ImageSchema,
}
