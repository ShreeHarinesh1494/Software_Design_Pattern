import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserDashboard = () => {
  const [open, setOpen] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [action, setAction] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const policies = [
    {
      policyNo: "POL001",
      policyName: "Life Coverage",
      planMonths: 12,
      planYears: 1,
      policyHolderName: "John Doe",
      policyHolderAadhar: "1234 5678 9012",
      policyHolderPAN: "ABCDE1234F",
      nominee: "Jane Doe",
      amount: "₹750",
      status: "", 
    },
    {
      policyNo: "POL002",
      policyName: "Health Coverage",
      planMonths: 24,
      planYears: 2,
      policyHolderName: "Alice Smith",
      policyHolderAadhar: "9876 5432 1098",
      policyHolderPAN: "XYZAB5678C",
      nominee: "Bob Smith",
      amount: "₹1000",
      status: "", 
    },
    {
      policyNo: "POL003",
      policyName: "Car Insurance",
      planMonths: 6,
      planYears: 0,
      policyHolderName: "Charlie Brown",
      policyHolderAadhar: "1357 2468 9023",
      policyHolderPAN: "LMNOP1234D",
      nominee: "Lucy Brown",
      amount: "₹900",
      status: "", 
    },
  ];

  useEffect(() => {
    validateForm();
  }, [formValues]);

  const openSheetWithPolicy = (policy, actionType) => {
    setSelectedPolicy(policy);
    setAction(actionType);
    setOpen(true);
    setFormValues({});
    setFormErrors({});
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const validateForm = () => {
    const errors = {};
    const requiredFields = action === 'Claim'
      ? ['claimReason', 'additionalDetails', 'dateOfIncident']
      : ['cardNumber', 'cname', 'expirydate', 'cvv'];

    requiredFields.forEach(field => {
      if (!formValues[field]) {
        errors[field] = 'This field is required';
      }
    });

    setFormErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = () => {
    if (action === 'Claim') {
      toast.info("Your claim is being processed. You will be notified shortly.");
    } else {
      toast.success("Payment successful", {
        icon: "✔️",
      });
    }
    setOpen(false);
  };

  

  return (
    <>
      <Card>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle> My Policies</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Policy No</TableHead>
                <TableHead>Policy Name</TableHead>
                <TableHead>Duration (Months/Years)</TableHead>
                <TableHead>Policy Holder Name</TableHead>
                <TableHead>Policy Holder Aadhar No</TableHead>
                <TableHead>Policy Holder PAN No</TableHead>
                <TableHead>Nominee</TableHead>
                <TableHead>Amount (per month)</TableHead>
                <TableHead className="text-center w-[200px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {policies.map((policy) => (
                <TableRow key={policy.policyNo}>
                  <TableCell className="font-medium">{policy.policyNo}</TableCell>
                  <TableCell>{policy.policyName}</TableCell>
                  <TableCell>{policy.planMonths} Months / {policy.planYears} Years</TableCell>
                  <TableCell>{policy.policyHolderName}</TableCell>
                  <TableCell>{policy.policyHolderAadhar}</TableCell>
                  <TableCell>{policy.policyHolderPAN}</TableCell>
                  <TableCell>{policy.nominee}</TableCell>
                  <TableCell className="text-right">{policy.amount}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="mr-2 bg-customGreen rounded-3xl" onClick={() => openSheetWithPolicy(policy, 'Claim')}>
                      Claim
                    </Button>
                    <Button variant="ghost" size="sm" className="bg-customGreen rounded-3xl" onClick={() => openSheetWithPolicy(policy, 'Pay')}>
                      Pay Now
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Sheet open={open} onOpenChange={() => setOpen(false)}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{action === 'Claim' ? 'Claim Policy' : 'Pay Policy'}</SheetTitle>
            <SheetDescription>
              {action === 'Claim' ? 'Provide details for your claim.' : 'Enter payment details.'}
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            {selectedPolicy && (
              <>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="policyNo" className="text-right">
                    Policy No
                  </Label>
                  <Input id="policyNo" value={selectedPolicy.policyNo} disabled className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="policyName" className="text-right">
                    Policy Name
                  </Label>
                  <Input id="policyName" value={selectedPolicy.policyName} disabled className="col-span-3" />
                </div>

                {action === 'Claim' && (
                  <>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="claimReason" className="text-right">
                        Claim Reason
                      </Label>
                      <Input
                        id="claimReason"
                        className={`col-span-3 ${formErrors.claimReason ? 'border-red-500' : ''}`}
                        placeholder="Enter reason for claim"
                        value={formValues.claimReason || ''}
                        onChange={handleInputChange}
                      />
                      {formErrors.claimReason && <span className="col-span-3 text-red-500">{formErrors.claimReason}</span>}
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="additionalDetails" className="text-right">
                        Incident Description
                      </Label>
                      <Input
                        id="additionalDetails"
                        className={`col-span-3 ${formErrors.additionalDetails ? 'border-red-500' : ''}`}
                        placeholder="Enter Incident description"
                        value={formValues.additionalDetails || ''}
                        onChange={handleInputChange}
                      />
                      {formErrors.additionalDetails && <span className="col-span-3 text-red-500">{formErrors.additionalDetails}</span>}
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="dateOfIncident" className="text-right">
                        Date of incident
                      </Label>
                      <Input
                        id="dateOfIncident"
                        type="date"
                        className={`col-span-3 ${formErrors.dateOfIncident ? 'border-red-500' : ''}`}
                        value={formValues.dateOfIncident || ''}
                        onChange={handleInputChange}
                      />
                      {formErrors.dateOfIncident && <span className="col-span-3 text-red-500">{formErrors.dateOfIncident}</span>}
                    </div>
                  </>
                )}

                {action === 'Pay' && (
                  <>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="cardNumber" className="text-right">
                        Card Number
                      </Label>
                      <Input
                        id="cardNumber"
                        className={`col-span-3 ${formErrors.cardNumber ? 'border-red-500' : ''}`}
                        placeholder="Enter Card Number"
                        value={formValues.cardNumber || ''}
                        onChange={handleInputChange}
                      />
                      {formErrors.cardNumber && <span className="col-span-3 text-red-500">{formErrors.cardNumber}</span>}
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="cname" className="text-right">
                        Name on Card
                      </Label>
                      <Input
                        id="cname"
                        className={`col-span-3 ${formErrors.cname ? 'border-red-500' : ''}`}
                        placeholder="Enter Card Holder Name"
                        value={formValues.cname || ''}
                        onChange={handleInputChange}
                      />
                      {formErrors.cname && <span className="col-span-3 text-red-500">{formErrors.cname}</span>}
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="expirydate" className="text-right">
                        Expiry date
                      </Label>
                      <Input
                        id="expirydate"
                        type="text"
                        placeholder="MM/YY"
                        className={`col-span-3 ${formErrors.expirydate ? 'border-red-500' : ''}`}
                        value={formValues.expirydate || ''}
                        onChange={handleInputChange}
                      />
                      {formErrors.expirydate && <span className="col-span-3 text-red-500">{formErrors.expirydate}</span>}
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="cvv" className="text-right">
                        CVV
                      </Label>
                      <Input
                        id="cvv"
                        type="password"
                        className={`col-span-3 ${formErrors.cvv ? 'border-red-500' : ''}`}
                        placeholder="Enter CVV"
                        value={formValues.cvv || ''}
                        onChange={handleInputChange}
                      />
                      {formErrors.cvv && <span className="col-span-3 text-red-500">{formErrors.cvv}</span>}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          <SheetFooter className='flex flex-col flex-1'>
            <Button className='w-1/2 bg-destructive hover:bg-destructive/80' onClick={() => setOpen(false)}>Cancel</Button>
            <Button
              type="button"
              className='w-1/2'
              onClick={handleSubmit}
              disabled={!isFormValid}
            >
              {action === 'Claim' ? 'Submit Claim' : 'Pay Now'}
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <ToastContainer />
    </>
  );
};

export default UserDashboard;
