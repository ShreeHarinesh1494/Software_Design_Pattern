import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { BarChart, User2, FileText, Plus, Edit, Trash2 } from 'lucide-react';
import {
  Table, TableBody, TableHead, TableHeader, TableRow, TableCell
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter
} from "@/components/ui/sheet";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminDashboard = () => {
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [newPolicy, setNewPolicy] = useState({
    policyName: '',
    duration: '',
    amount: '',
  });
  const [policies, setPolicies] = useState([
    { policyNo: 'POL001', policyName: 'LifePlus Term Insurance', duration: '240', amount: '₹500,000' },
    { policyNo: 'POL002', policyName: 'LifePlus Whole Life Insurance', duration: '360', amount: '₹750,000' },
    { policyNo: 'POL003', policyName: 'LifePlus Universal Insurance', duration: '180', amount: '₹400,000' },
    { policyNo: 'POL004', policyName: 'LifePlus Variable Life Insurance', duration: '300', amount: '₹600,000' },
    { policyNo: 'POL005', policyName: 'LifePlus Final Expense Insurance', duration: '120', amount: '₹1000,000' },
    { policyNo: 'POL005', policyName: 'LifePlus Retirement Plan', duration: '480', amount: '₹100,000' },
    { policyNo: 'POL005', policyName: 'LifePlus Child Education Plan', duration: '180', amount: '₹200,000' },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPolicy({ ...newPolicy, [name]: value });
  };

  const handleAddPolicy = () => {
    const newPolicyNo = `POL${(policies.length + 1).toString().padStart(3, '0')}`;
    setPolicies([...policies, { policyNo: newPolicyNo, ...newPolicy }]);
    toast.success(`Policy ${newPolicyNo} added successfully`);
    setOpen(false);
    setNewPolicy({ policyName: '', duration: '', amount: '' });
  };

  const handleDeletePolicy = (policy) => {
    if (window.confirm(`Are you sure you want to delete the policy ${policy.policyName}?`)) {
      setPolicies(policies.filter(p => p.policyNo !== policy.policyNo));
      toast.error(`Policy ${policy.policyName} successfully deleted`);
    }
  };

  const openEditSheet = (policy) => {
    setEditMode(true);
    setSelectedPolicy(policy);
    setNewPolicy({
      policyName: policy.policyName,
      duration: policy.duration,
      amount: policy.amount,
    });
    setOpen(true);
  };

  const handleEditPolicy = () => {
    setPolicies(policies.map(policy =>
      policy.policyNo === selectedPolicy.policyNo ? { ...selectedPolicy, ...newPolicy } : policy
    ));
    toast.success(`Policy ${selectedPolicy.policyName} successfully updated`);
    setOpen(false);
    setEditMode(false);
    setNewPolicy({ policyName: '', duration: '', amount: '' });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Total Users"
          value="120"
          icon={<BarChart className="h-8 w-8 text-primary" />}
        />
        <DashboardCard
          title="Total Policies"
          value="5"
          icon={<User2 className="h-8 w-8 text-primary" />}
        />
        <DashboardCard
          title="Pending Claims"
          value="24"
          icon={<FileText className="h-8 w-8 text-primary" />}
        />
      </div>
      <Card>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>User Policies</CardTitle>
          <Button onClick={() => {
            setEditMode(false);
            setOpen(true);
          }}>
            <Plus className='h-5 w-5 mr-2' /> Add Policy
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Policy No</TableHead>
                <TableHead>Policy Name</TableHead>
                <TableHead>Duration (Months)</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {policies.map((policy) => (
                <TableRow key={policy.policyNo}>
                  <TableCell className="font-medium">{policy.policyNo}</TableCell>
                  <TableCell>{policy.policyName}</TableCell>
                  <TableCell>{policy.duration}</TableCell>
                  <TableCell className="text-right">{policy.amount}</TableCell>
                  <TableCell className="text-right">
                    {/* <Button variant="ghost" size="icon" className="mr-2" onClick={() => openEditSheet(policy)}>
                      <Edit className="h-4 w-4 text-blue-500" />
                    </Button> */}
                    <Button variant="ghost" size="icon" className="text-red-600" onClick={() => handleDeletePolicy(policy)}>
                      <Trash2 className="h-4 w-4" />
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
            <SheetTitle>{editMode ? "Edit Policy" : "Add New Policy"}</SheetTitle>
            <SheetDescription>
              {editMode ? "Update the details below to edit the policy." : "Fill out the details below to add a new policy."}
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="policyName" className="text-right">
                Policy Name
              </Label>
              <Input
                id="policyName"
                name="policyName"
                value={newPolicy.policyName}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="duration" className="text-right">
                Duration (Months)
              </Label>
              <Input
                id="duration"
                name="duration"
                value={newPolicy.duration}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                Amount
              </Label>
              <Input
                id="amount"
                name="amount"
                value={newPolicy.amount}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
          </div>
          <SheetFooter className='flex flex-col flex-1'>
            <Button className='w-1/2 bg-destructive hover:bg-destructive/80' onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="button" className='w-1/2' onClick={editMode ? handleEditPolicy : handleAddPolicy}>
              {editMode ? "Edit" : "Submit"}
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <ToastContainer />
    </div>
  );
};

const DashboardCard = ({ title, value, icon }) => (
  <Card className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
    <CardHeader className="flex flex-row justify-between items-center">
      <CardTitle className="text-xl font-bold">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-extrabold">{value}</div>
    </CardContent>
  </Card>
);

export default AdminDashboard;
