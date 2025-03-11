// const router = require("express").Router();
// const User = require("../models/user");
// const Task = require("../models/task");
// const verifyToken = require("./auth");

//  CREATE TASK
// router.post("/create-task", verifyToken, async (req, res) => {
//   try {
//     const { title, desc } = req.body;
//     const userId = req.user.id; // Extract userId from token

//     if (!userId) {
//       return res.status(400).json({ message: "User ID not found in token" });
//     }

//     // Create task with userId
//     const newTask = new Task({ title, desc, userId });
//     const savedTask = await newTask.save();

//     // Add task to user's task list
//     await User.findByIdAndUpdate(userId, { $push: { tasks: savedTask._id } });

//     res.status(201).json({ message: "Task Created", task: savedTask });
//   } catch (error) {
//     console.error("Error creating task:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // ✅ GET ALL TASKS FOR A USER
// router.get("/get-all-task", verifyToken, async (req, res) => {
//   try {
//     const userId = req.user.userId;

//     if (!userId) {
//       return res.status(400).json({ message: "User ID not found in token" });
//     }

//     // Find user and populate tasks
//     const userData = await User.findById(userId).populate({
//       path: "tasks",
//       options: { sort: { createdAt: -1 } },
//     });

//     if (!userData) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({ tasks: userData.tasks });
//   } catch (error) {
//     console.error("Error fetching tasks:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// module.exports = router;

// const router = require("express").Router();
const User = require("../models/user");
const Task = require("../models/task");
const verifyToken = require("./auth");

router.post("/create-task", verifyToken, async (req, res) => {
  try {
    const { title, desc } = req.body;

    // Get userId from the token payload instead of headers
    const userId = req.user.id; // or req.user._id depending on what you stored in the token

    console.log("User ID from token:", userId);

    // Validate ID format
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create and save task
    const newTask = new Task({
      title: title,
      desc: desc,
      userId: userId,
    });

    const saveTask = await newTask.save();

    // Update user
    await User.findByIdAndUpdate(userId, { $push: { tasks: saveTask._id } });

    res.status(200).json({ message: "Task Created", task: saveTask });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});
module.exports = router;

//////////////////////////////////WORKING CREATED TASK//////////////////
const router = require("express").Router();
const mongoose = require("mongoose"); // Add this import
const User = require("../models/user");
const Task = require("../models/task");

//  CREATE TASK
router.post("/create-task", async (req, res) => {
  try {
    const { title, desc } = req.body;
    const { id } = req.headers;

    console.log("ID from headers:", id);

    // Check if ID is provided
    if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }

    // Check if user exists
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create and save task
    const newTask = new Task({
      title,
      desc,
      userId: id, // Make sure this is properly set
    });

    const saveTask = await newTask.save();

    // Update user
    await User.findByIdAndUpdate(id, { $push: { tasks: saveTask._id } });

    res.status(200).json({ message: "Task Created", task: saveTask });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
});



// //////////////////////////////////////


router.put("/update-task/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params; // Task ID
    const { title, desc } = req.body; // Extract values from request body
    const userId = req.user.id; // Get user ID from token

    // Validate Task ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid task ID format" });
    }

    // Check if the task exists and belongs to the user
    const task = await Task.findOne({ _id: id, userId });

    if (!task) {
      return res
        .status(404)
        .json({ message: "Task not found or unauthorized" });
    }

    // Update task fields (only update if provided)
    task.title = title || task.title;
    task.desc = desc || task.desc;

    // Save the updated task
    await task.save();

    res.status(200).json({ message: "Task updated successfully", task });
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
});

// IMportant task
router.put("/update-important-task/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params; // Task ID
    const userId = req.user.id; // Get user ID from token

    // Validate Task ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid task ID format" });
    }

    // First find the task to check if it exists and belongs to the user
    const taskCheck = await Task.findOne({ _id: id, userId });

    if (!taskCheck) {
      return res
        .status(404)
        .json({ message: "Task not found or unauthorized" });
    }

    // Get current important status
    const currentStatus = taskCheck.important || false;

    // Use findByIdAndUpdate to toggle the important field
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      {
        $set: {
          important: !currentStatus,
        },
      },
      { new: true } // Return the updated document
    );

    res.status(200).json({
      message: `Task marked as ${
        updatedTask.important ? "important" : "not important"
      }`,
      task: updatedTask,
    });
  } catch (error) {
    console.error("Error updating task importance status:", error);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
});

router.put("/update-complete-task/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params; // Task ID
    const userId = req.user.id; // Get user ID from token

    // Validate Task ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid task ID format" });
    }

    // First find the task to check if it exists and belongs to the user
    const taskCheck = await Task.findOne({ _id: id, userId });

    if (!taskCheck) {
      return res
        .status(404)
        .json({ message: "Task not found or unauthorized" });
    }

    // Get current completed status
    const currentStatus = taskCheck.completed || false;

    // Use findByIdAndUpdate to toggle the completed field
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      {
        $set: {
          completed: !currentStatus,
          completedAt: !currentStatus ? new Date() : null, // Set date if completing, null if unmarking
        },
      },
      { new: true } // Return the updated document
    );

    res.status(200).json({
      message: `Task marked as ${
        updatedTask.completed ? "completed" : "incomplete"
      }`,
      task: updatedTask,
    });
  } catch (error) {
    console.error("Error updating task completion status:", error);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
});

router.get("/get-important-tasks", verifyToken, async (req, res) => {
  try {
    const { id } = req.user;

    console.log("Fetching important tasks for User ID:", id); // Debug log

    const userData = await User.findOne({ _id: id }).populate({
      path: "tasks",
      match: { important: true }, // Filter only important tasks
      options: { sort: { createdAt: -1 } },
    });

    if (!userData) {
      console.log("User not found in DB");
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User found, returning important tasks:", userData.tasks);
    res.status(200).json({ data: userData.tasks });
  } catch (error) {
    console.error("Error fetching important tasks:", error);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
});

router.get("/get-complete-tasks", verifyToken, async (req, res) => {
  try {
    const { id } = req.headers;

    console.log("Fetching important tasks for User ID:", id); // Debug log

    const userData = await User.findById({ _id: id }).populate({
      path: "tasks",
      match: { complete: true }, // Filter only important tasks
      options: { sort: { createdAt: -1 } },
    });

    if (!userData) {
      console.log("User not found in DB");
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User found, returning completed tasks:", userData.tasks);
    res.status(200).json({ data: userData.tasks });
  } catch (error) {
    console.error("Error fetching important tasks:", error);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
});




module.exports = router;




