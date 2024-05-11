import Assistant from "../model/assistant_model.js";

// Controller function to create a new assistant record
export const createAssistant = async (req, res) => {
    try {
        const existingAssistantByEmail = await Assistant.findOne({ email: req.body.email });
        if (existingAssistantByEmail) {
            return res.status(400).json({ error: 'Assistant with the same email already exists' });
        }

        const existingAssistantByName = await Assistant.findOne({ fullName: req.body.fullName });
        if (existingAssistantByName) {
            return res.status(400).json({ error: 'Assistant with the same name already exists' });
        }
        
        const assistant = await Assistant.create(req.body);
        res.status(201).json({ id: assistant._id });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map((val) => val.message);
            return res.status(400).json({ error: errors });
        }
        res.status(500).json({ error: 'Server error' });
    }
};

// Controller function to retrieve details of an assistant by ID
export const getAssistantById = async (req, res) => {
    try {
        const {id}=req.params;
        const assistant = await Assistant.findById(id);
        console.log("this is id",assistant);
        if (!assistant) {
            return res.status(404).json({ error: 'Assistant not found' });
        }
        res.json(assistant);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ error: 'Assistant not found' });
        }
        res.status(500).json({ error: 'Server error' });
    }
};

// Controller function to update details of an assistant by ID
export const updateAssistantById = async (req, res) => {
    try {
        const { id } = req.params;
        const assistant = await Assistant.findByIdAndUpdate(id, req.body, { new: true });
        if (!assistant) {
            return res.status(404).json({ error: 'Assistant not found' });
        }
        res.json({ message: 'Assistant updated successfully' });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map((val) => val.message);
            return res.status(400).json({ error: errors });
        }
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ error: 'Assistant not found' });
        }
        res.status(500).json({ error: 'Server error' });
    }
};


// Controller function to delete an assistant by ID
export const deleteAssistantById = async (req, res) => {
    try {
        const {id}=req.params;
        const assistant = await Assistant.findByIdAndDelete(id);
        if (!assistant) {
            return res.status(404).json({ error: 'Assistant not found' });
        }
        res.json({ message: 'Assistant deleted successfully' });
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ error: 'Assistant not found' });
        }
        res.status(500).json({ error: 'Server error' });
    }
};
