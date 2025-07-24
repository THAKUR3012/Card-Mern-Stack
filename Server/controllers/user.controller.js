import userModel from "../models/user.model.js";
export const addUser = async (req, res) => {
    try {
        console.log(req.body)
        const { name, email, number, address, link, avatar } = req.body;
        console.log(name, email, address, link, number)

        const result = await userModel.create({ name, email, number, address, link, avatar })


        if (result) {
            return res.status(200).json({
                success: true,
                message: "User created successfully..."
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();

        return res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            data: users
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


export const editUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, number, address, link } = req.body;
        console.log(req.body)
        console.log(id)
        const updatedUser = await userModel.findByIdAndUpdate(
            id,
            { name, email, number, address, link },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: updatedUser
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
