import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

//Auth user & get token
//route POST/api/users/login
//Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if ( user && (await user.matchPassword(password))) {
        generateToken(res, user._id);

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }

});
//register user
//route POST/api/users
//Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        name,
        email,
        password,
    });

    if (user) {
        generateToken(res, user._id);

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data')
    }
});
//Logout user / clear cookie
//route POST/api/users/logout
//Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});
//Get user Profile
//route GEt/api/users/profile
//Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("user profile");
});
//Update user Profile
//route PUT/api/users/profile
//Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

// Get users
//route GET/api/users
//Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

// Delete users
//route DELETE/api/users/:id
//Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete User");
});

// Get User By ID
//route Get/api/users/:id
//Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("Get user By ID");
});

// Update User
//route PUT/api/users/:id
//Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("Update User");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
