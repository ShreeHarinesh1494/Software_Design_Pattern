import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Check, X } from "lucide-react";
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
import { axiosInstance, fetchPolicies } from '../../services/api'; // Import axiosInstance and fetchPolicies

const AdminUsers = () => {
  const [open, setOpen] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    // Fetch policies on component mount
    fetchPoliciesList();
  }, []);

  const fetchPoliciesList = () => {
    fetchPolicies()
      .then(response => {
        setPolicies(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the policies!', error);
      });
  };

  const handleAccept = (policyNo) => {
    axiosInstance.put(`/customer-policies/${policyNo}/action`, { action: true })
      .then(() => {
        setPolicies(policies.map(policy =>
          policy.policyNo === policyNo ? { ...policy, status: "Accepted" } : policy
        ));
        toast.success(`Policy ${policyNo} accepted`);
        setOpen(false);
      })
      .catch(error => {
        console.error('There was an error accepting the policy!', error);
        toast.error('Failed to accept policy');
      });
  };

  const handleDeny = (policyNo) => {
    if (window.confirm(`Are you sure you want to deny policy ${policyNo}?`)) {
      axiosInstance.delete(`/customer-policies/${policyNo}`)
        .then(() => {
          setPolicies(policies.filter(policy => policy.policyNo !== policyNo));
          toast.error(`Policy ${policyNo} denied and deleted`);
          setOpen(false);
        })
        .catch(error => {
          console.error('There was an error denying the policy!', error);
          toast.error('Failed to deny policy');
        });
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
                <TableHead>Policy Duration</TableHead>
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
                  <TableCell>{policy.policyDuration} Months </TableCell>
                  <TableCell>{policy.policyHolderName}</TableCell>
                  <TableCell>{policy.aadharNo}</TableCell>
                  <TableCell>{policy.panCardNo}</TableCell>
                  <TableCell>{policy.nomineeName}</TableCell>
                  <TableCell className="text-right">{policy.policyAmount}</TableCell>
                  <TableCell className="text-right">
  {policy.status === "Accepted" && (
    <span className="text-green-500">Accepted</span>
  )}
  {policy.status === "Denied" && (
    <span className="text-red-500">Denied</span>
  )}
  {(!policy.status || policy.status === "") && (
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
                Plan (Months)
              </Label>
              <Input id="planMonths" value={selectedPolicy?.policyDuration || ''} Months  disabled className="col-span-3" />
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
              <Input id="policyHolderAadhar" value={selectedPolicy?.aadharNo || ''} disabled className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="policyHolderPAN" className="text-right">
                Policy Holder PAN No
              </Label>
              <Input id="policyHolderPAN" value={selectedPolicy?.panCardNo || ''} disabled className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nominee" className="text-right">
                Nominee
              </Label>
              <Input id="nominee" value={selectedPolicy?.nomineeName || ''} disabled className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                Amount
              </Label>
              <Input id="amount" value={selectedPolicy?.policyAmount || ''} disabled className="col-span-3" />
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