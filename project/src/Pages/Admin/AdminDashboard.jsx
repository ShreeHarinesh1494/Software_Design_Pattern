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
          title="Agents"
          value="350"
          icon={<Users className="h-8 w-8 text-primary" />}
        />
        <DashboardCard
          title="Pending Claims"
          value="24"
          icon={<ClipboardCheck className="h-8 w-8 text-primary" />}
        />
      </div>

      <RecentActivities />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentPolicies />
        <RecentClaims />
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

const RecentActivities = () => (
  <Card className="shadow-lg">
    <CardHeader className="bg-gradient-to-r from-primary to-secondary p-4 rounded-t-lg">
      <CardTitle className="text-lg font-bold text-white">Recent Activities</CardTitle>
    </CardHeader>
    <CardContent className="bg-gray-50 dark:bg-gray-900 p-4 rounded-b-lg">
      <ul className="space-y-2">
        <ActivityItem
          activity="Policy approved for John Doe"
          timestamp="2 hours ago"
        />
        <ActivityItem
          activity="New claim request from Alice Smith"
          timestamp="5 hours ago"
        />
        <ActivityItem
          activity="User registration: Bob Brown"
          timestamp="1 day ago"
        />
        {/* Add more activities as needed */}
      </ul>
    </CardContent>
  </Card>
);

const ActivityItem = ({ activity, timestamp }) => (
  <li className="flex justify-between items-center text-light-mode-text dark:text-dark-mode-text">
    <span>{activity}</span>
    <span className="text-sm text-muted">{timestamp}</span>
  </li>
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
          {/* Add more recent policies as needed */}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

const RecentClaims = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-lg font-bold">Recent Claims</CardTitle>
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Claim No</TableHead>
            <TableHead>Policy Name</TableHead>
            <TableHead>Claimant</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">CLM001</TableCell>
            <TableCell>Car Insurance</TableCell>
            <TableCell>Charlie Brown</TableCell>
            <TableCell className="text-right">$15,000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">CLM002</TableCell>
            <TableCell>Health Coverage</TableCell>
            <TableCell>Alice Smith</TableCell>
            <TableCell className="text-right">$20,000</TableCell>
          </TableRow>
          {/* Add more recent claims as needed */}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

export default AdminDashboard;
