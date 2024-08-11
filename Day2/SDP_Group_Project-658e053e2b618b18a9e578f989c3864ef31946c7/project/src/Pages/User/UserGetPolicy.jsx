import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const policies = [
  { name: 'Policy A', duration: '6 Months', amount: '1000' },
  { name: 'Policy B', duration: '12 Months', amount: '1800' },
  { name: 'Policy C', duration: '24 Months', amount: '3200' },
];

const UserGetPolicy = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    planName: '',
    secondMonthPeriod: '',
    amount: '',
    PolicyHolderName: '',
    dateOfBirth: '',
    aadharCardNo: '',
    panCardNo: '',
    phoneNumber: '',
    address: '',
    email: '',
    nomineeName: '',
    nomineeAadharCardNo: '',
    nomineePanCardNo: '',
    nomineeRelationship: '',
    cardNo: '',
    pinNo: '',
  });
  const [errors, setErrors] = useState({});

  const handlePolicyChange = e => {
    const selectedPolicy = policies.find(policy => policy.name === e.target.value);
    setFormData(prevData => ({
      ...prevData,
      planName: selectedPolicy.name,
      secondMonthPeriod: selectedPolicy.duration,
      amount: selectedPolicy.amount,
    }));
  };

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.planName) newErrors.planName = "Please select a policy.";
      if (!formData.secondMonthPeriod) newErrors.secondMonthPeriod = "Duration is required.";
      if (!formData.amount) newErrors.amount = "Amount is required.";
    } else if (step === 2) {
      const requiredFields = ['PolicyHolderName', 'dateOfBirth', 'aadharCardNo', 'panCardNo', 'phoneNumber', 'address', 'email'];
      requiredFields.forEach(field => {
        if (!formData[field]) {
          newErrors[field] = `Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}.`;
        }
      });
    } else if (step === 3) {
      const requiredFields = ['nomineeName', 'nomineeAadharCardNo', 'nomineePanCardNo', 'nomineeRelationship'];
      requiredFields.forEach(field => {
        if (!formData[field]) {
          newErrors[field] = `Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}.`;
        }
      });
    } else if (step === 4) {
      if (!formData.planName || !formData.secondMonthPeriod || !formData.amount) {
        newErrors.checkDetails = "Please check all your details.";
      }
    } else if (step === 5) {
      if (!formData.cardNo) newErrors.cardNo = "Card number is required.";
      if (!formData.pinNo) newErrors.pinNo = "Pin number is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(prevStep => prevStep + 1);
    } else {
      toast.error("Please fix the errors in the form.");
    }
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validateStep()) {
      toast.success("Policy will be added soon");
      // Simulate an API call
      setTimeout(() => {
        alert("Payment Successful");
        // Reset the form and go back to step 1
        setFormData({
          planName: '',
          secondMonthPeriod: '',
          amount: '',
          PolicyHolderName: '',
          dateOfBirth: '',
          aadharCardNo: '',
          panCardNo: '',
          phoneNumber: '',
          address: '',
          email: '',
          nomineeName: '',
          nomineeAadharCardNo: '',
          nomineePanCardNo: '',
          nomineeRelationship: '',
          cardNo: '',
          pinNo: '',
        });
        setStep(1);
      }, 1000);
    } else {
      toast.error("Please fix the errors in the form.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-light dark:bg-dark">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-4xl bg-card text-card-foreground border border-black dark:border-white">
        
        <h1 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h1>

        <div className="flex justify-between mb-8">
          {/* Progress Steps */}
          
          {['Plan Information', 'Personal Information', 'Nominee Details', 'Check Your Details', 'Payment'].map((label, index) => (
            <div key={index} className={`flex items-center ${step >= index + 1 ? 'text-primary' : 'text-secondary'}`}>
              <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= index + 1 ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                {index + 1}
              </div>
              <span className="ml-2 text-lg font-medium">{label}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-black dark:text-white">Select Policy <span className="text-red-500">*</span></label>
                <select
                  name="planName"
                  value={formData.planName}
                  onChange={handlePolicyChange}
                  className="w-full p-2 mt-1 border border-black dark:border-white rounded bg-transparent text-black dark:text-white"
                >
                  <option value="">Select a policy</option>
                  {policies.map((policy, index) => (
                    <option key={index} value={policy.name}>
                      {policy.name}
                    </option>
                  ))}
                </select>
                {errors.planName && <p className="text-red-500">{errors.planName}</p>}
              </div>
              <div>
                <label className="block text-black dark:text-white">Duration(Month/Year) <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="secondMonthPeriod"
                  value={formData.secondMonthPeriod}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border border-black dark:border-white rounded bg-transparent text-black dark:text-white"
                  placeholder="Duration"
                  readOnly
                />
                {errors.secondMonthPeriod && <p className="text-red-500">{errors.secondMonthPeriod}</p>}
              </div>
              <div>
                <label className="block text-black dark:text-white">Amount <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border border-black dark:border-white rounded bg-transparent text-black dark:text-white"
                  placeholder="Amount"
                  readOnly
                />
                {errors.amount && <p className="text-red-500">{errors.amount}</p>}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-black dark:text-white">Policy Holder Name <span className="text-red-500">*</span></label>
                <input type="text" name="PolicyHolderName" value={formData.PolicyHolderName} onChange={handleChange} className="w-full p-2 mt-1 border border-black dark:border-white rounded bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="Policy Holder Name" />
                {errors.PolicyHolderName && <p className="text-red-500">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-black dark:text-white">Date of Birth <span className="text-red-500">*</span></label>
                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="w-full p-2 mt-1 border border-black dark:border-white rounded bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400" />
                {errors.dateOfBirth && <p className="text-red-500">{errors.dateOfBirth}</p>}
              </div>
              <div>
                <label className="block text-black dark:text-white">Aadhar Card No <span className="text-red-500">*</span></label>
                <input type="text" name="aadharCardNo" value={formData.aadharCardNo} onChange={handleChange} className="w-full p-2 mt-1 border border-black dark:border-white rounded bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="Aadhar Card No" />
                {errors.aadharCardNo && <p className="text-red-500">{errors.aadharCardNo}</p>}
              </div>
              <div>
                <label className="block text-black dark:text-white">PAN Card No <span className="text-red-500">*</span></label>
                <input type="text" name="panCardNo" value={formData.panCardNo} onChange={handleChange} className="w-full p-2 mt-1 border border-black dark:border-white rounded bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="PAN Card No" />
                {errors.panCardNo && <p className="text-red-500">{errors.panCardNo}</p>}
              </div>
              <div>
                <label className="block text-black dark:text-white">Phone Number <span className="text-red-500">*</span></label>
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full p-2 mt-1 border border-black dark:border-white rounded bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="Phone Number" />
                {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
              </div>
              <div className="col-span-2">
                <label className="block text-black dark:text-white">Address <span className="text-red-500">*</span></label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full p-2 mt-1 border border-black dark:border-white rounded bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="Address" />
                {errors.address && <p className="text-red-500">{errors.address}</p>}
              </div>
              <div>
                <label className="block text-black dark:text-white">Email ID <span className="text-red-500">*</span></label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 mt-1 border border-black dark:border-white rounded bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="Email ID" />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-black dark:text-white">Nominee Name <span className="text-red-500">*</span></label>
                <input type="text" name="nomineeName" value={formData.nomineeName} onChange={handleChange} className="w-full p-2 mt-1 border border-black dark:border-white rounded bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="Nominee Name" />
                {errors.nomineeName && <p className="text-red-500">{errors.nomineeName}</p>}
              </div>
              <div>
                <label className="block text-black dark:text-white">Nominee Aadhar Card No <span className="text-red-500">*</span></label>
                <input type="text" name="nomineeAadharCardNo" value={formData.nomineeAadharCardNo} onChange={handleChange} className="w-full p-2 mt-1 border border-black dark:border-white rounded bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="Nominee Aadhar Card No" />
                {errors.nomineeAadharCardNo && <p className="text-red-500">{errors.nomineeAadharCardNo}</p>}
              </div>
              <div>
                <label className="block text-black dark:text-white">Nominee PAN Card No <span className="text-red-500">*</span></label>
                <input type="text" name="nomineePanCardNo" value={formData.nomineePanCardNo} onChange={handleChange} className="w-full p-2 mt-1 border border-black dark:border-white rounded bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="Nominee PAN Card No" />
                {errors.nomineePanCardNo && <p className="text-red-500">{errors.nomineePanCardNo}</p>}
              </div>
              <div>
                <label className="block text-black dark:text-white">Nominee Relationship <span className="text-red-500">*</span></label>
                <input type="text" name="nomineeRelationship" value={formData.nomineeRelationship} onChange={handleChange} className="w-full p-2 mt-1 border border-black dark:border-white rounded bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="Nominee Relationship" />
                {errors.nomineeRelationship && <p className="text-red-500">{errors.nomineeRelationship}</p>}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Please review your details:</h2>
              <div className="space-y-4">
                <div><strong>Policy Name:</strong> {formData.planName}</div>
                <div><strong>Duration:</strong> {formData.secondMonthPeriod}</div>
                <div><strong>Amount:</strong> {formData.amount}</div>
                <div><strong>Policy Holder Name:</strong> {formData.firstName}</div>
                <div><strong>Date of Birth:</strong> {formData.dateOfBirth}</div>
                <div><strong>Aadhar Card No:</strong> {formData.aadharCardNo}</div>
                <div><strong>PAN Card No:</strong> {formData.panCardNo}</div>
                <div><strong>Phone Number:</strong> {formData.phoneNumber}</div>
                <div><strong>Address:</strong> {formData.address}</div>
                <div><strong>Email ID:</strong> {formData.email}</div>
                <div><strong>Nominee Name:</strong> {formData.nomineeName}</div>
                <div><strong>Nominee Aadhar Card No:</strong> {formData.nomineeAadharCardNo}</div>
                <div><strong>Nominee PAN Card No:</strong> {formData.nomineePanCardNo}</div>
                <div><strong>Nominee Relationship:</strong> {formData.nomineeRelationship}</div>
              </div>
              {errors.checkDetails && <p className="text-red-500">{errors.checkDetails}</p>}
            </div>
          )}

{step === 5 && (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-4">Payment</h2>
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-black dark:text-white"><strong>Policy Name:</strong> {formData.planName}</p>
      </div>
      <div>
        <p className="text-black dark:text-white"><strong>Month Duration:</strong> {formData.secondMonthPeriod}</p>
      </div>
      <div>
        <p className="text-black dark:text-white"><strong>Amount:</strong> {formData.amount}</p>
      </div>
      <div>
        <label className="block text-black dark:text-white">Card No <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="cardNo"
          value={formData.cardNo}
          onChange={handleChange}
          className="w-full p-2 mt-1 border border-black dark:border-white rounded bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          placeholder="Card No"
        />
      </div>
      <div>
        <label className="block text-black dark:text-white">3-digit Pin No <span className="text-red-500">*</span></label>
        <input
          type="password"
          name="pinNo"
          value={formData.pinNo}
          onChange={handleChange}
          className="w-full p-2 mt-1 border border-black dark:border-white rounded bg-transparent text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          placeholder="3-digit Pin No"
        />
      </div>
    </div>
  </div>
)}

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Back
              </button>
            )}
            <button
              type="button"
              onClick={step === 5 ? handleSubmit : nextStep}
              className="bg-blue-500 text-white p-2 rounded"
            >
              {step === 5 ? 'Submit' : 'Next'}
            </button>
          </div>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default UserGetPolicy;
