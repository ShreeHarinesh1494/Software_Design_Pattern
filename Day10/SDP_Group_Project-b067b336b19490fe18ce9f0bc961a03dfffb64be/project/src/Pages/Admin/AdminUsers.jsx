import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Check, X, Plus } from "lucide-react";
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

const AdminUsers = () => {
  const [open, setOpen] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [policies, setPolicies] = useState([
    {
      policyNo: "POL001",
      policyName: "Life Coverage",
      planMonths: 12,
      planYears: 1,
      policyHolderName: "John Doe",
      policyHolderAadhar: "1234 5678 9012",
      policyHolderPAN: "ABCDE1234F",
      nominee: "Jane Doe",
      amount: "$500,000",
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
      amount: "$300,000",
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
      amount: "$150,000",
      status: "",
    },
    
  ]);

  const handleAccept = (policyNo) => {
    setPolicies(policies.map(policy =>
      policy.policyNo === policyNo ? { ...policy, status: "Accepted" } : policy
    ));
    toast.success(`Policy ${policyNo} accepted`);
    setOpen(false);
  };

  const handleDeny = (policyNo) => {
    if (window.confirm(`Are you sure you want to deny policy ${policyNo}?`)) {
      setPolicies(policies.map(policy =>
        policy.policyNo === policyNo ? { ...policy, status: "Denied" } : policy
      ));
      toast.error(`Policy ${policyNo} denied`);
      setOpen(false);
    }
  };

  const openSheetWithPolicy = (policy) => {
    setSelectedPolicy(policy);
    setOpen(true);
  };

  return (
    <>
      <Card>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Policies</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Policy No</TableHead>
                <TableHead>Policy Name</TableHead>
                <TableHead>Plan (Months/Years)</TableHead>
                <TableHead>Policy Holder Name</TableHead>
                <TableHead>Policy Holder Aadhar No</TableHead>
                <TableHead>Policy Holder PAN No</TableHead>
                <TableHead>Nominee</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right">Actions</TableHead>
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
                    {policy.status === "Accepted" && (
                      <span className="text-green-500">Accepted</span>
                    )}
                    {policy.status === "Denied" && (
                      <span className="text-red-500">Denied</span>
                    )}
                    {policy.status === "" && (
                      <>
                        <Button variant="ghost" size="icon" className="mr-2" onClick={() => openSheetWithPolicy(policy)}>
                          <Check className="h-4 w-4 text-green-500" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-red-600" onClick={() => handleDeny(policy.policyNo)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </>
                    )}
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
            <SheetTitle>Policy Details</SheetTitle>
            <SheetDescription>
              Review the details of the selected policy and make your decision.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="policyNo" className="text-right">
                Policy No
              </Label>
              <Input id="policyNo" value={selectedPolicy?.policyNo || ''} disabled className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="policyName" className="text-right">
                Policy Name
              </Label>
              <Input id="policyName" value={selectedPolicy?.policyName || ''} disabled className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="planMonths" className="text-right">
                Plan (Months/Years)
              </Label>
              <Input id="planMonths" value={`${selectedPolicy?.planMonths || ''} Months / ${selectedPolicy?.planYears || ''} Years`} disabled className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="policyHolderName" className="text-right">
                Policy Holder Name
              </Label>
              <Input id="policyHolderName" value={selectedPolicy?.policyHolderName || ''} disabled className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="policyHolderAadhar" className="text-right">
                Policy Holder Aadhar No
              </Label>
              <Input id="policyHolderAadhar" value={selectedPolicy?.policyHolderAadhar || ''} disabled className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="policyHolderPAN" className="text-right">
                Policy Holder PAN No
              </Label>
              <Input id="policyHolderPAN" value={selectedPolicy?.policyHolderPAN || ''} disabled className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nominee" className="text-right">
                Nominee
              </Label>
              <Input id="nominee" value={selectedPolicy?.nominee || ''} disabled className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                Amount
              </Label>
              <Input id="amount" value={selectedPolicy?.amount || ''} disabled className="col-span-3" />
            </div>
          </div>
          <SheetFooter className='flex flex-col flex-1'>
            <Button className='w-1/2 bg-destructive hover:bg-destructive/80' onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="button" className='w-1/2' onClick={() => handleAccept(selectedPolicy?.policyNo)}>Accept</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      
      <ToastContainer />
    </>
  );
};

export default AdminUsers;
