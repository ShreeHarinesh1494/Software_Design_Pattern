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
import { fetchClaims } from '@/services/api';
import { axiosInstance } from '../../services/api';
const AdminClaim = () => {
  const [open, setOpen] = useState(false);
  const [selectedClaim, setSelectedClaim] = useState(null);
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    const getClaims = async () => {
      try {
        const response = await fetchClaims();
        setClaims(response.data);
      } catch (error) {
        toast.error("Failed to fetch claims");
      }
    };

    getClaims();
  }, []);

  const handleAccept = (claim) => {
    setSelectedClaim(claim);
    setOpen(true);
  };

  const handleDeny = (claimNo) => {
    if (window.confirm(`Are you sure you want to deny policy ${claimNo}?`)) {
      axiosInstance.delete(`/claims/${claimNo}`)
        .then(() => {
          setClaims(claims.filter(claim => claim.claimNo !== claimNo));
          toast.error(`Claim ${claimNo} denied and deleted`);
          setOpen(false);
        })
        .catch(error => {
          console.error('There was an error denying the Claim!', error);
          toast.error('Failed to deny claim');
        });
    }
  };

  const handleConfirm = (claimNo) => {
    
     axiosInstance.put(`/claims/${selectedClaim.claimNo}/action`, { action: true })
     .then(()=>{

       setClaims(claims.map(claim =>
         claim.claimNo === claimNo ? {...claim,status:"Accepted"}:claim
       ));
       toast.success(`Claim ${selectedClaim.claimNo} is Accepted`);
       setOpen(false);
     })
    . catch (error=> {
      console.error("There was a error accepting the claim",error);
      toast.error("Failed to update claim");
    });
    
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
                <TableHead className="w-[100px]">Claim No</TableHead>
                <TableHead>Policy Name</TableHead>
                <TableHead>Policy Holder Name</TableHead>
                <TableHead>Nominee</TableHead>
                <TableHead>Reason for Claim</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {claims.map((claim) => (
                <TableRow key={claim.claimNo}>
                  <TableCell className="font-medium">{claim.claimNo}</TableCell>
                  <TableCell>{claim.customerPolicy.policyName}</TableCell>
                  <TableCell>{claim.customerPolicy.policyHolderName}</TableCell>
                  <TableCell>{claim.customerPolicy.nomineeName}</TableCell>
                  <TableCell>{claim.claimReason}</TableCell>
                  <TableCell className="text-right">
  {claim.status === "Accepted" && (
    <span className="text-green-500">Accepted</span>
  )}
  {claim.status === "Denied" && (
    <span className="text-red-500">Denied</span>
  )}
  {(!claim.status || claim.status === "") && (
    <>
      <Button variant="ghost" size="icon" className="mr-2" onClick={() => handleAccept(claim)}>
        <Check className="h-4 w-4 text-green-500" />
      </Button>
      <Button variant="ghost" size="icon" className="text-red-600" onClick={() => handleDeny(claim.claimNo)}>
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
              <Label htmlFor="claimNo" className="text-right">
                Claim No
              </Label>
              <Input id="claimNo" value={selectedClaim?.claimNo || ''} disabled className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="policyName" className="text-right">
                Policy Name
              </Label>
              <Input id="policyName" value={selectedClaim?.customerPolicy.policyName || ''} disabled className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="policyHolderName" className="text-right">
                Policy Holder Name
              </Label>
              <Input id="policyHolderName" value={selectedClaim?.customerPolicy.policyHolderName || ''} disabled className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nominee" className="text-right">
                Nominee
              </Label>
              <Input id="nominee" value={selectedClaim?.customerPolicy.nomineeName || ''} disabled className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="claimReason" className="text-right">
                Reason for Claim
              </Label>
              <Input id="claimReason" value={selectedClaim?.claimReason || ''} disabled className="col-span-3" />
            </div>
          </div>
          <SheetFooter className='flex flex-col flex-1'>
            <Button className='w-1/2 bg-destructive hover:bg-destructive/80' onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="button" className='w-1/2' onClick={()=>handleConfirm(selectedClaim?.claimNo)}>Confirm</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default AdminClaim;
