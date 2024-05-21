const HireFreelancer = require("../models/clientModels/hirefreelancerModel");

// Create a new hiring record
exports.createHiringRecord = async (req, res) => {
  const { freelancerId, clientId, jobId } = req.body;

  try {
    const hiringRecord = new HireFreelancer({
      freelancerId,
      clientId,
      jobId,
    });

    await hiringRecord.save();
    res
      .status(201)
      .json({ message: "Hiring record created successfully", hiringRecord });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all hiring records
exports.getAllHiringRecords = async (req, res) => {
  try {
    const hiringRecords = await HireFreelancer.find();
    res.status(200).json(hiringRecords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get hiring record by ID
exports.getHiringRecordById = async (req, res) => {
  const { id } = req.params;

  try {
    const hiringRecord = await HireFreelancer.findById(id);
    if (!hiringRecord) {
      return res.status(404).json({ message: "Hiring record not found" });
    }
    res.status(200).json(hiringRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete hiring record by ID
exports.deleteHiringRecordById = async (req, res) => {
  const { id } = req.params;

  try {
    const hiringRecord = await HireFreelancer.findByIdAndDelete(id);
    if (!hiringRecord) {
      return res.status(404).json({ message: "Hiring record not found" });
    }
    res.status(200).json({ message: "Hiring record deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
