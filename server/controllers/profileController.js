import DeveloperProfile from "../models/profileModel.js";

// Controller to create or update developer profile
export const setDeveloperInfo = async (req, res) => {
  try {
    const {
      email, // Use this as unique identifier
      name,
      bio,
      about,
      profilePic,
      links,
      education,
      certificates,
      experience,
      projects,
      problemSolving
    } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required.' });
    }

    // Check if profile exists
    let profile = await DeveloperProfile.findOne({ email });

    if (profile) {
      // Update existing profile
      profile.name = name || profile.name;
      profile.bio = bio || profile.bio;
      profile.about = about || profile.about;
      profile.profilePic = profilePic || profile.profilePic;
      profile.links = links || profile.links;
      profile.education = education || profile.education;
      profile.certificates = certificates || profile.certificates;
      profile.experience = experience || profile.experience;
      profile.projects = projects || profile.projects;
      profile.problemSolving = problemSolving || profile.problemSolving;
      profile.updatedAt = new Date();

      await profile.save();
      return res.status(200).json({ message: 'Profile updated successfully.', profile });
    } else {
      // Create new profile
      const newProfile = new DeveloperProfile({
        email,
        name,
        bio,
        about,
        profilePic,
        links,
        education,
        certificates,
        experience,
        projects,
        problemSolving
      });

      await newProfile.save();
      return res.status(201).json({ message: 'Profile created successfully.', profile: newProfile });
    }
  } catch (error) {
    console.error('Error in setDeveloperInfo:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
