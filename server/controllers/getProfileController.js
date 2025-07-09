import DeveloperProfile from '../models/profileModel.js';

export const getDeveloperInfo = async (req, res) => {
  try {
    const { userId } = req.query; 

    if (!userId) {
      return res.status(400).json({ message: 'User ID is required.' });
    }

    // Find the profile by userId
    const profile = await DeveloperProfile.findOne({ userId });

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found.' });
    }

    res.status(200).json({
      message: 'Profile fetched successfully.',
      profile,
    });
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

