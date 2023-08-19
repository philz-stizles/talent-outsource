import { Schema, model } from 'mongoose';

const profileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true
    },
    title: { type: String, trim: true },
    yearsOfExperience: { type: Number, default: 0, required: true },
    skills: {
      type: [String],
      required: true,
    },
    bio: {
      type: String,
    },
    annualSalary: {},
    experience: [
      {
        title: {
          type: String,
          required: true,
        },
        company: {
          type: String,
          required: true,
        },
        location: {
          type: String,
        },
        industry: {
          type: String,
        },
        from: {
          type: Date,
          required: true,
        },
        to: {
          type: Date,
        },
        current: {
          type: Boolean,
          default: false,
        },
        description: {
          type: String,
        },
        skills: [{ type: String }],
      },
    ],
    education: [
      {
        school: {
          type: String,
          required: true,
        },
        degree: {
          type: String,
          required: true,
        },
        fieldOfStudy: {
          type: String,
          required: true,
        },
        fromDate: {
          type: Date,
          required: true,
        },
        toDate: {
          type: Date,
        },
        current: {
          type: Boolean,
          default: false,
        },
        description: {
          type: String,
        },
      },
    ],
    social: {
      youtube: {
        type: String,
      },
      twitter: {
        type: String,
      },
      facebook: {
        type: String,
      },
      linkedin: {
        type: String,
      },
      instagram: {
        type: String,
      },
      website: {
        type: String,
      },
    },
    languages: [{ name: String, fluency: String }],
    projects: [
      {
        title: String,
        description: String,
        link: String,
        startDate: Date,
        endDate: Date,
      },
    ],
  },
  { timestamps: true }
);

const Profile = model('Profile', profileSchema);

export default Profile;
