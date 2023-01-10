import mongoose from "mongoose";

const BankMis = mongoose.Schema({
    SrNo:{
        type: String,
        required: true
    },
    Month:{
        type: String,
        required: true
    },
    LoanAcNo:{
        type: String,
        required: true
    },
    CustomerIDAPAC:{
        type: String,
        required: true
    },
    LOSnoAPACReff:{
        type: String,
        required: true
    },
    CustomerName:{
        type: String,
        required: true
    },
    DisbDate:{
        type: String,
        required: true
    },
    DisbLoanAmount:{
        type: String,
        required: true
    },
    InsuranceAmt:{
        type: String,
        required: true
    },
    VLIAddPayouton:{
        type: String,
        required: true
    },
    PayoutRate:{
        type: String,
        required: true
    },
    AddiSubvPayout:{
        type: String,
        required: true
    },
    AddiSubvAmt:{
        type: String,
        required: true
    },
    City:{
        type: String,
        required: true
    },
    CircleCluster:{
        type: String,
        required: true
    },
    State:{
        type: String,
        required: true
    },
    PaidRate:{
        type: String,
        required: true
    },
    Team:{
        type: String,
        required: true
    },
    TME:{
        type: String,
        required: true
    },
    Remark:{
        type: String,
        required: true
    },
    GSTstatus:{
        type: String,
        required: true
    },
    BilledOn:{
        type: String,
        required: true
    },
    BankNBFCName:{
        type: String,
        required: true
    },
    Product:{
        type: String,
        required: true
    },
    SubProduct:{
        type: String,
        required: true
    },
    Amt:{
        type: String,
        required: true
    },
    GST:{
        type: String,
        required: true
    },
    Total:{
        type: String,
        required: true
    },
    BillNo:{
        type: String,
        required: true
    },
    BillDate:{
        type: String,
        required: true
    },
    ReceivedDate:{
        type: String,
        required: true
    },
    Proper:{
        type: String,
        required: true
    },
    ReceivedAmt:{
        type: String,
        required: true
    },
    diff:{
        type: String,
        required: true
    },
    FinalRate:{
        type: String,
        required: true
    },
});

export default mongoose.model("mis", BankMis);