// Sample data for Insurance Dashboard 
export interface Policy {
  id: string;
  policyNumber: string;
  customerName: string;
  type: 'Auto' | 'Home' | 'Life' | 'Health';
  startDate: string;
  endDate: string;
  premium: number;
  status: 'Active' | 'Pending' | 'Expired' | 'Cancelled';
  riskLevel: 'Low' | 'Medium' | 'High';
}

export interface Claim {
  id: string;
  claimNumber: string;
  policyId: string;
  policyNumber: string;
  customerName: string;
  type: 'Auto' | 'Home' | 'Life' | 'Health';
  dateSubmitted: string;
  dateResolved?: string;
  amount: number;
  status: 'New' | 'Under Review' | 'Approved' | 'Denied' | 'Closed';
  description: string;
  assignedTo?: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  registrationDate: string;
  activePolicies: number;
  openClaims: number;
  lifetimeValue: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'IAC' | 'IAC Admin';
  department: string;
  joinDate: string;
  status: 'Active' | 'Inactive';
}

export interface ChartData {
  name: string;
  value: number;
}

export interface RetentionData {
  cohort: string;
  month0: number;
  month1: number;
  month2: number;
  month3: number;
  month4: number;
  month5: number;
  month6: number;
  totalUsers: number;
}

// Sample policies
export const policies: Policy[] = [
  {
    id: '1',
    policyNumber: 'POL-001-2023',
    customerName: 'John Smith',
    type: 'Auto',
    startDate: '2023-01-15',
    endDate: '2024-01-14',
    premium: 1250.50,
    status: 'Active',
    riskLevel: 'Low'
  },
  {
    id: '2',
    policyNumber: 'POL-002-2023',
    customerName: 'Sarah Johnson',
    type: 'Home',
    startDate: '2023-02-20',
    endDate: '2024-02-19',
    premium: 950.75,
    status: 'Active',
    riskLevel: 'Medium'
  },
  {
    id: '3',
    policyNumber: 'POL-003-2023',
    customerName: 'Michael Brown',
    type: 'Life',
    startDate: '2023-03-10',
    endDate: '2024-03-09',
    premium: 3500.00,
    status: 'Active',
    riskLevel: 'Low'
  },
  {
    id: '4',
    policyNumber: 'POL-004-2023',
    customerName: 'Emily Davis',
    type: 'Health',
    startDate: '2023-01-05',
    endDate: '2024-01-04',
    premium: 4250.25,
    status: 'Active',
    riskLevel: 'Medium'
  },
  {
    id: '5',
    policyNumber: 'POL-005-2023',
    customerName: 'Robert Wilson',
    type: 'Auto',
    startDate: '2022-11-12',
    endDate: '2023-11-11',
    premium: 1100.00,
    status: 'Expired',
    riskLevel: 'Medium'
  },
  {
    id: '6',
    policyNumber: 'POL-006-2023',
    customerName: 'Jennifer Miller',
    type: 'Home',
    startDate: '2023-04-18',
    endDate: '2024-04-17',
    premium: 1025.50,
    status: 'Active',
    riskLevel: 'Low'
  },
  {
    id: '7',
    policyNumber: 'POL-007-2023',
    customerName: 'David Garcia',
    type: 'Auto',
    startDate: '2023-05-22',
    endDate: '2024-05-21',
    premium: 1350.75,
    status: 'Active',
    riskLevel: 'High'
  },
  {
    id: '8',
    policyNumber: 'POL-008-2023',
    customerName: 'Lisa Rodriguez',
    type: 'Health',
    startDate: '2022-12-03',
    endDate: '2023-12-02',
    premium: 3950.25,
    status: 'Active',
    riskLevel: 'Medium'
  },
  {
    id: '9',
    policyNumber: 'POL-009-2023',
    customerName: 'James Martinez',
    type: 'Life',
    startDate: '2023-02-14',
    endDate: '2024-02-13',
    premium: 2750.00,
    status: 'Cancelled',
    riskLevel: 'Low'
  },
  {
    id: '10',
    policyNumber: 'POL-010-2023',
    customerName: 'Patricia Hernandez',
    type: 'Home',
    startDate: '2023-06-08',
    endDate: '2024-06-07',
    premium: 975.25,
    status: 'Pending',
    riskLevel: 'Medium'
  }
];

// Sample claims
export const claims: Claim[] = [
  {
    id: '1',
    claimNumber: 'CLM-001-2023',
    policyId: '1',
    policyNumber: 'POL-001-2023',
    customerName: 'John Smith',
    type: 'Auto',
    dateSubmitted: '2023-06-18',
    amount: 3500.00,
    status: 'Under Review',
    description: 'Car accident, damage to front bumper and hood',
    assignedTo: 'David Lee'
  },
  {
    id: '2',
    claimNumber: 'CLM-002-2023',
    policyId: '2',
    policyNumber: 'POL-002-2023',
    customerName: 'Sarah Johnson',
    type: 'Home',
    dateSubmitted: '2023-05-22',
    dateResolved: '2023-06-15',
    amount: 12000.00,
    status: 'Approved',
    description: 'Water damage from burst pipe in kitchen',
    assignedTo: 'Maria Rodriguez'
  },
  {
    id: '3',
    claimNumber: 'CLM-003-2023',
    policyId: '4',
    policyNumber: 'POL-004-2023',
    customerName: 'Emily Davis',
    type: 'Health',
    dateSubmitted: '2023-07-01',
    amount: 5000.00,
    status: 'New',
    description: 'Hospital stay for emergency appendectomy'
  },
  {
    id: '4',
    claimNumber: 'CLM-004-2023',
    policyId: '7',
    policyNumber: 'POL-007-2023',
    customerName: 'David Garcia',
    type: 'Auto',
    dateSubmitted: '2023-06-10',
    dateResolved: '2023-06-25',
    amount: 7500.00,
    status: 'Denied',
    description: 'Vehicle theft claim',
    assignedTo: 'James Wilson'
  },
  {
    id: '5',
    claimNumber: 'CLM-005-2023',
    policyId: '8',
    policyNumber: 'POL-008-2023',
    customerName: 'Lisa Rodriguez',
    type: 'Health',
    dateSubmitted: '2023-05-15',
    dateResolved: '2023-06-20',
    amount: 8500.00,
    status: 'Approved',
    description: 'Surgery and follow-up treatment',
    assignedTo: 'Robert Johnson'
  },
  {
    id: '6',
    claimNumber: 'CLM-006-2023',
    policyId: '6',
    policyNumber: 'POL-006-2023',
    customerName: 'Jennifer Miller',
    type: 'Home',
    dateSubmitted: '2023-07-05',
    amount: 2500.00,
    status: 'Under Review',
    description: 'Roof damage from fallen tree',
    assignedTo: 'Susan Martinez'
  },
  {
    id: '7',
    claimNumber: 'CLM-007-2023',
    policyId: '3',
    policyNumber: 'POL-003-2023',
    customerName: 'Michael Brown',
    type: 'Life',
    dateSubmitted: '2023-06-02',
    dateResolved: '2023-07-01',
    amount: 250000.00,
    status: 'Closed',
    description: 'Life insurance claim',
    assignedTo: 'Thomas Wilson'
  }
];

// Sample customers
export const customers: Customer[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'johnsmith@example.com',
    phone: '(555) 123-4567',
    address: '123 Main St, Anytown, CA 90210',
    registrationDate: '2022-01-10',
    activePolicies: 1,
    openClaims: 1,
    lifetimeValue: 3750.00
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarahjohnson@example.com',
    phone: '(555) 234-5678',
    address: '456 Oak Ave, Somewhere, NY 10001',
    registrationDate: '2022-02-15',
    activePolicies: 1,
    openClaims: 0,
    lifetimeValue: 2850.00
  },
  {
    id: '3',
    name: 'Michael Brown',
    email: 'michaelbrown@example.com',
    phone: '(555) 345-6789',
    address: '789 Pine St, Nowhere, TX 75001',
    registrationDate: '2022-03-05',
    activePolicies: 1,
    openClaims: 0,
    lifetimeValue: 7000.00
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emilydavis@example.com',
    phone: '(555) 456-7890',
    address: '321 Elm St, Anyplace, FL 33101',
    registrationDate: '2022-01-03',
    activePolicies: 1,
    openClaims: 1,
    lifetimeValue: 12750.00
  },
  {
    id: '5',
    name: 'Robert Wilson',
    email: 'robertwilson@example.com',
    phone: '(555) 567-8901',
    address: '654 Maple Dr, Somewhere, IL 60601',
    registrationDate: '2021-11-20',
    activePolicies: 0,
    openClaims: 0,
    lifetimeValue: 2200.00
  },
  {
    id: '6',
    name: 'Jennifer Miller',
    email: 'jennifermiller@example.com',
    phone: '(555) 678-9012',
    address: '987 Cedar Ln, Anytown, WA 98101',
    registrationDate: '2022-04-12',
    activePolicies: 1,
    openClaims: 1,
    lifetimeValue: 3075.00
  },
  {
    id: '7',
    name: 'David Garcia',
    email: 'davidgarcia@example.com',
    phone: '(555) 789-0123',
    address: '147 Birch Rd, Nowhere, AZ 85001',
    registrationDate: '2022-05-18',
    activePolicies: 1,
    openClaims: 0,
    lifetimeValue: 2700.00
  },
  {
    id: '8',
    name: 'Lisa Rodriguez',
    email: 'lisarodriguez@example.com',
    phone: '(555) 890-1234',
    address: '258 Walnut Ct, Somewhere, CO 80202',
    registrationDate: '2021-12-07',
    activePolicies: 1,
    openClaims: 0,
    lifetimeValue: 11850.00
  },
  {
    id: '9',
    name: 'James Martinez',
    email: 'jamesmartinez@example.com',
    phone: '(555) 901-2345',
    address: '369 Oak Dr, Anyplace, GA 30301',
    registrationDate: '2022-02-25',
    activePolicies: 0,
    openClaims: 0,
    lifetimeValue: 2750.00
  },
  {
    id: '10',
    name: 'Patricia Hernandez',
    email: 'patriciahernandez@example.com',
    phone: '(555) 012-3456',
    address: '753 Pine Ave, Nowhere, OH 44101',
    registrationDate: '2022-06-02',
    activePolicies: 1,
    openClaims: 0,
    lifetimeValue: 975.00
  }
];

// Sample users
export const users: User[] = [
  {
    id: '1',
    name: 'David Lee',
    email: 'davidlee@insurance.com',
    role: 'IAC',
    department: 'Claims',
    joinDate: '2020-03-15',
    status: 'Active'
  },
  {
    id: '2',
    name: 'Maria Rodriguez',
    email: 'mariarodriguez@insurance.com',
    role: 'IAC',
    department: 'Claims',
    joinDate: '2021-02-10',
    status: 'Active'
  },
  {
    id: '3',
    name: 'James Wilson',
    email: 'jameswilson@insurance.com',
    role: 'IAC',
    department: 'Underwriting',
    joinDate: '2019-08-22',
    status: 'Active'
  },
  {
    id: '4',
    name: 'Susan Martinez',
    email: 'susanmartinez@insurance.com',
    role: 'IAC',
    department: 'Customer Service',
    joinDate: '2022-01-05',
    status: 'Active'
  },
  {
    id: '5',
    name: 'Robert Johnson',
    email: 'robertjohnson@insurance.com',
    role: 'IAC Admin',
    department: 'Management',
    joinDate: '2018-06-15',
    status: 'Active'
  },
  {
    id: '6',
    name: 'Thomas Wilson',
    email: 'thomaswilson@insurance.com',
    role: 'IAC Admin',
    department: 'Management',
    joinDate: '2017-11-03',
    status: 'Active'
  },
  {
    id: '7',
    name: 'Jennifer Garcia',
    email: 'jennifergarcia@insurance.com',
    role: 'IAC',
    department: 'Underwriting',
    joinDate: '2021-04-12',
    status: 'Inactive'
  }
];

// Analytics data
export const policyDistribution: ChartData[] = [
  { name: 'Auto', value: 30 },
  { name: 'Home', value: 25 },
  { name: 'Life', value: 15 },
  { name: 'Health', value: 30 }
];

export const claimStatusDistribution: ChartData[] = [
  { name: 'New', value: 15 },
  { name: 'Under Review', value: 30 },
  { name: 'Approved', value: 40 },
  { name: 'Denied', value: 10 },
  { name: 'Closed', value: 5 }
];

export const premiumTrends = [
  { month: 'Jan', auto: 125000, home: 98000, life: 75000, health: 145000 },
  { month: 'Feb', auto: 130000, home: 102000, life: 78000, health: 150000 },
  { month: 'Mar', auto: 132000, home: 105000, life: 80000, health: 155000 },
  { month: 'Apr', auto: 135000, home: 108000, life: 82000, health: 160000 },
  { month: 'May', auto: 140000, home: 110000, life: 85000, health: 165000 },
  { month: 'Jun', auto: 142000, home: 115000, life: 87000, health: 170000 }
];

export const retentionData: RetentionData[] = [
  {
    cohort: 'Jan',
    month0: 100,
    month1: 88.8,
    month2: 79.5,
    month3: 74.2,
    month4: 68.2,
    month5: 65.4,
    month6: 59.4,
    totalUsers: 2854
  },
  {
    cohort: 'Feb',
    month0: 100,
    month1: 89.2,
    month2: 80.6,
    month3: 72.1,
    month4: 65.3,
    month5: 62.3,
    month6: 55.7,
    totalUsers: 2960
  },
  {
    cohort: 'Mar',
    month0: 100,
    month1: 90.1,
    month2: 81.3,
    month3: 75.4,
    month4: 70.2,
    month5: 65.8,
    month6: 0,
    totalUsers: 3104
  },
  {
    cohort: 'Apr',
    month0: 100,
    month1: 91.5,
    month2: 83.9,
    month3: 76.8,
    month4: 0,
    month5: 0,
    month6: 0,
    totalUsers: 3266
  },
  {
    cohort: 'May',
    month0: 100,
    month1: 92.3,
    month2: 0,
    month3: 0,
    month4: 0,
    month5: 0,
    month6: 0,
    totalUsers: 3401
  }
];

// Current logged in user (for simulation purposes)
export const currentUser: User = {
  id: '5',
  name: 'Robert Johnson',
  email: 'robertjohnson@insurance.com',
  role: 'IAC Admin',
  department: 'Management',
  joinDate: '2018-06-15',
  status: 'Active'
};