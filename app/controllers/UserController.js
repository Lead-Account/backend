import BankMis from "../models/BankMis.js";
import VendorMis from "../models/VendorMis.js";
import ProcessData from "../models/ProcessData.js";

// Get All Bank MIS Data from DB
export const getBankMisData = async (req, res) => {
  try {
    const users = await BankMis.find();
    res.json(users);
    //functionGet();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get  All Vendor MIS Data From DB
export const getVendorMisData = async (req, res) => {
  try {
    const users = await VendorMis.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get  All Processdata MIS Data From DB
export const getProcessDataData = async (req, res) => {
  try {
    const functionGet = () =>
      VendorMis.aggregate([
        {
          $lookup: {
            from: "mis",
            localField: "LoanNo",
            foreignField: "LOSnoAPACReff",
            as: "bankmis",
          },
        },
        {
          $match: { bankmis: { $ne: [] } },
        },{
          $out: "processdatastas",
        }
      ]).exec((err, result) => {
        if (err) {
          console.log("error", err);
        }
        if (result) {
          res.json(result);
          ProcessData.find(result);
        }
      });
    functionGet();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get  All Vendor MIS Data From DB
export const getProcessTableData = async (req, res) => {
  try {
    const users = await ProcessData.find()
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get Data With Bank MIS Same Loan Reference No.

// Get Single Data WIth the Help of ID and this api for edit button click
export const getVendorMisDataSingle = async (req, res) => {
  try {
    const id = req.params.id;
    VendorMis.findById(id).then((e) => {
      if (!e)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else {
        res.send(e);
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Matched Single Data WIth the Help of ID and this api for edit button click
export const getProcessDataDataId = async (req, res) => {
  try {
    const id = req.params.id;
    ProcessData.findById(id).then((e) => {
      if (!e)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else {
        res.json(e);
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Any Single Record
export const updateUser = async (req, res) => {
  try {
    const updateduser = await VendorMis.updateOne(
      { LoanNo: req.params.LoanNo },
      { $set: req.body }
    );
    res.status(200).json(updateduser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Any Single Record
export const deleteUser = async (req, res) => {
  try {
    const deleteduser = await VendorMis.deleteOne({
      id: req.params._id,
    });
    res.status(200).json(deleteduser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
