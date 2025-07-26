
export const getAllSupport = async (req, res) => {
  try {
    res.json({ message: "Support data will be fetched here" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createSupport = async (req, res) => {
  try {
    res.status(201).json({ message: "Support created successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateSupport = async (req, res) => {
  try {
    res.json({ message: "Support data will be updated here" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteSupport = async (req, res) => {
  try {
    res.json({ message: "Support data will be deleted here" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
