import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  // 📌 User I D
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  // 🧑 Basic Info
  name: { type: String, required: true },
  bio: { type: String },
  about: { type: String },
  profilePic: { type: String }, // URL

  // 🔗 External Links
  links: {
    github: { type: String },
    linkedin: { type: String },
    leetcode: { type: String }
  },

  // 🎓 Education & Certificates
  education: [{
    degree: String,
    institution: String,
    year: Number,
    cgpa: String
  }],
  certificates: [{
    title: String,
    platform: String,
    issueDate: Date,
    credentialUrl: String
  }],

  // 💼 Experience
  experience: [{
    company: String,
    role: String,
    duration: String, // e.g. Jan 2023 – Present
    description: String
  }],

  // 🛠️ Projects
  projects: [{
    title: { type: String },
    description: { type: String },
    techStack: [String],
    githubLink: { type: String },
    liveLink: { type: String },
    thumbnail: { type: String } // optional
  }],

  // 🧠 DSA/Problem Solving Stats
  problemSolving: {
    totalSolved: { type: Number, default: 0 },
    easySolved: { type: Number, default: 0 },
    mediumSolved: { type: Number, default: 0 },
    hardSolved: { type: Number, default: 0 },
    languagesUsed: [String] // e.g. ['C++', 'Java', 'Python']
  },

  // Meta
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const DeveloperProfile = mongoose.models.DeveloperProfile || mongoose.model("DeveloperProfile", profileSchema);
export default DeveloperProfile;
