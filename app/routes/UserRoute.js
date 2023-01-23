import express from "express";
import { 
    getBankMisData, 
    getVendorMisData,
    // saveUser,
    updateUser,
    deleteUser,
    getVendorMisDataSingle,
    getProcessDataData,
    getProcessDataDataId,
    getProcessTableData,
    getProcessDataSingleId,
    updateDupliacteValue,
    getDuplicateDataList,
    uploadBankCSV,
    uploadVendorCSV,
    updateBankUser,
    deleteBankUser
} from "../controllers/UserController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get('/', (req, res) => {
    res.json("Home Bakcend");
});
router.get('/bankmisdata', getBankMisData);
router.get('/vendormis', getVendorMisData);
router.get('/processdatas', getProcessDataData);
router.get('/processdata/:id', getProcessDataDataId);
router.get('/getonevendor/:id', getVendorMisDataSingle);
router.get('/processdatatable', getProcessTableData);
router.get('/processCsvData/:id', getProcessDataSingleId);
// Duplicate Data Routes
router.get('/duplicatedata/:id', updateDupliacteValue);
router.get('/duplicatedatalist', getDuplicateDataList);
// Upload CSV
router.post("/uploadBankCSV", upload.single("file"), uploadBankCSV)
router.post("/uploadVendorCSV", upload.single("file"), uploadVendorCSV)
router.put('/bankmis/:LoanNo', updateBankUser);
router.delete('/bankmis/:id', deleteBankUser);

// router.post('/users', saveUser);
router.put('/vendormis/:LoanNo', updateUser);
router.delete('/vendormis/:id', deleteUser);

export default router;