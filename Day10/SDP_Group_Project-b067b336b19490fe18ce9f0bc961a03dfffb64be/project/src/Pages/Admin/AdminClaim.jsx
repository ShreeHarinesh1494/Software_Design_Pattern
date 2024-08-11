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

const AdminClaim = () => {
  const [open, setOpen] = useState(false);
  const [selectedClaim, setSelectedClaim] = useState(null);
  const [claims, setClaims] = useState([
    {
      policyNo: "POL001",
      policyName: "Life Coverage",
      planMonths: 12,
      planYears: 1,
      policyHolderName: "John Doe",
      nominee: "Jane Doe",
      reasonForClaim: "Accidental Death",
      status: "", // "Will Contact Soon" or "Denied"
    },
    {
      policyNo: "POL002",
      policyName: "Health Coverage",
      planMonths: 24,
      planYears: 2,
      policyHolderName: "Alice Smith",
      nominee: "Bob Smith",
      reasonForClaim: "Hospitalization",
      status: "", 
    },
    {
      policyNo: "POL003",
      policyName: "Car Insurance",
      planMonths: 6,
      planYears: 0,
      policyHolderName: "Charlie Brown",
      nominee: "Lucy Brown",
      reasonForClaim: "Vehicle Theft",
      status: "", 
    },
    
  ]);

  const handleAccept = (claim) => {
    setSelectedClaim(claim);
    setOpen(true);
  };

  const handleDeny = (claimNo) => {
    if (window.confirm(`Are you sure you want to deny claim ${claimNo}?`)) {
      setClaims(claims.map(claim =>
        claim.policyNo === claimNo ? { ...claim, status: "Denied" } : claim
      ));
      toast.error(`Claim ${claimNo} denied`);
    }
  };

  const handleConfirm = () => {
    setClaims(claims.map(claim =>
      claim.policyNo === selectedClaim.policyNo ? { ...claim, status: "Accepted" } : claim
    ));
    toast.success(`Claim ${selectedClaim.policyNo} is Accepted`);
    setOpen(false);
  };

  return (
    <>
      <Card>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Claims</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Policy No</TableHead>
                <TableHead>Policy Name</TableHead>
                <TableHead>Plan (Months/Years)</TableHead>
                <TableHead>Policy Holder Name</TableHead>
                <TableHead>Nominee</TableHead>
                <TableHead>Reason for Claim</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {claims.map((claim) => (
                <TableRow key={claim.policyNo}>
                  <TableCell className="font-medium">{claim.policyNo}</TableCell>
                  <TableCell>{claim.policyName}</TableCell>
                  <TableCell>{claim.planMonths} Months / {claim.planYears} Years</TableCell>
                  <TableCell>{claim.policyHolderName}</TableCell>
                  <TableCell>{claim.nominee}</TableCell>
                  <TableCell>{claim.reasonForClaim}</TableCell>
                  <TableCell className="text-right">
                    {claim.status === "Accepted" && (
                      <span className="text-green-500">Accepted</span>
                    )}
                    {claim.status === "Denied" && (
                      <span className="text-red-500">Denied</span>
                    )}
                    {claim.status === "" && (
                      <>
                        <Button variant="ghost" size="icon" className="mr-2" onClick={() => handleAccept(claim)}>
                          <Check className="h-4 w-4 text-green-500" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-red-600" onClick={() => handleDeny(claim.policyNo)}>
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
            <SheetTitle>Claim Details</SheetTitle>
            <SheetDescription>
              Review the details of the selected claim and make your decision.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="policyNo" className="text-right">
                Policy No
              </Label>
              <Input id="policyNo" value={selectedClaim?.policyNo || ''} disabled className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="policyName" className="text-right">
                Policy Name
              </Label>
              <Input id="policyName" value={selectedClaim?.policyName || ''} disabled className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="planMonths" className="text-right">
                Plan (Months/Years)
              </Label>
              <Input id="planMonths" value={`${selectedClaim?.planMonths || ''} Months / ${selectedClaim?.planYears || ''} Years`} disabled className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="policyHolderName" className="text-right">
                Policy Holder Name
              </Label>
              <Input id="policyHolderName" value={selectedClaim?.policyHolderName || ''} disabled className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nominee" className="text-right">
                Nominee
              </Label>
              <Input id="nominee" value={selectedClaim?.nominee || ''} disabled className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="reasonForClaim" className="text-right">
                Reason for Claim
              </Label>
              <Input id="reasonForClaim" value={selectedClaim?.reasonForClaim || ''} disabled className="col-span-3" />
            </div>
          </div>
          <SheetFooter className='flex flex-col flex-1'>
            <Button className='w-1/2 bg-destructive hover:bg-destructive/80' onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="button" className='w-1/2' onClick={handleConfirm}>Confirm</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default AdminClaim;
