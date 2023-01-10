import mongoose from "mongoose";

const VendorMis = mongoose.Schema({
    Month:{
        type: String,
        required: true
    },
    LoanNo:{
        type: String,
        required: true
    },
    Custname:{
        type: String,
        required: true
    },
    DisbDate:{
        type: String,
        required: true
    },
    LoanApplied:{
        type: String,
        required: true
    },
    LoanAmt:{
        type: String,
        required: true
    },
    Remark1:{
        type: String,
        required: true
    },
    DisbCity:{
        type: String,
        required: true
    },
    ActualDibursalMonth:{
        type: String,
        required: true
    },
    MatchQfile:{
        type: String,
        required: true
    },
    Confirmwith:{
        type: String,
        required: true
    },
    Remark2:{
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
    Rate:{
        type: String,
        required: true
    },
    Subvention:{
        type: String,
        required: true
    },
    Addition:{
        type: String,
        required: true
    },
    Payout:{
        type: String,
        required: true
    },
    GST:{
        type: String,
        required: true
    },
    Cr:{
        type: String,
        required: true
    },
    PaymentMade:{
        type: String,
        required: true
    },
    Balance:{
        type: String,
        required: true
    }
});

export default mongoose.model('vendormis', VendorMis);