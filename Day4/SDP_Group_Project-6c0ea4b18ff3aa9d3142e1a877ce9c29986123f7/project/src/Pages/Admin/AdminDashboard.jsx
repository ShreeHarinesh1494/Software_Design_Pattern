import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { BarChart, Users, ClipboardCheck } from 'lucide-react';
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from '@/components/ui/table';

const AdminDashboard = () => {
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
          icon={<ClipboardCheck className="h-8 w-8 text-primary" />}
        />
        <DashboardCard
          title="Pending Claims"
          value="24"
          icon={<ClipboardCheck className="h-8 w-8 text-primary" />}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentPolicies />
       
      </div>
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

const RecentPolicies = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-lg font-bold">Recent Policies</CardTitle>
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Policy No</TableHead>
            <TableHead>Policy Name</TableHead>
            <TableHead>Policy Holder</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">POL001</TableCell>
            <TableCell>Life Coverage</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell className="text-right">$500,000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">POL002</TableCell>
            <TableCell>Health Coverage</TableCell>
            <TableCell>Alice Smith</TableCell>
            <TableCell className="text-right">$300,000</TableCell>
          </TableRow>
          
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);



export default AdminDashboard;