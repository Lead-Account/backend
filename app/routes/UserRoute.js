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
    getProcessTableData
} from "../controllers/UserController.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.json("Home Bakcend");
});
router.get('/bankmisdata', getBankMisData);
router.get('/vendormis', getVendorMisData);
router.get('/processdatas', getProcessDataData);
router.get('/processdata/:id', getProcessDataDataId);
router.get('/getonevendor/:id', getVendorMisDataSingle);
router.get('/processdatatable', getProcessTableData);
// router.post('/users', saveUser);
router.put('/vendormis/:LoanNo', updateUser);
router.delete('/vendormis/:id', deleteUser);

export default router;