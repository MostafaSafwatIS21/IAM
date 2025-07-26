export const getAllAdminPanel = async (req, res) => {
  try {
    res.json({ message: "Admin Panel data will be fetched here" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createAdminPanel = async (req, res) => {
  try {
    res.status(201).json({ message: "Admin Panel created successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateAdminPanel = async (req, res) => {
  try {
    res.json({ message: "Admin Panel data will be updated here" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteAdminPanel = async (req, res) => {
  try {
    res.json({ message: "Admin Panel data will be deleted here" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
