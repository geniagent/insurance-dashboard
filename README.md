# Insurance Domain Dashboard

A comprehensive dashboard application for the insurance domain that provides role-based data visualization and search functionality. This application is built with Next.js 15 and integrates with Okta for authentication and Node.js Lambda functions for backend services.

## Features

- **Okta Authentication**: Secure SSO authentication with role-based access control
- **Role-Based UI**: Dynamic UI components based on user roles (IAC and IAC Admin)
- **Data Visualization**: Charts and data tables for insurance domain metrics
- **Advanced Search**: Filter data across multiple criteria
- **Serverless Backend**: Integration with Node.js Lambda functions for API services
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Authentication**: Okta SSO
- **API**: Node.js Lambda functions
- **Storage**: MongoDB (via Lambda)
- **Styling**: CSS Modules / Tailwind CSS

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- Okta developer account
- AWS account (for Lambda functions)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/geniagent/insurance-dashboard.git
   cd insurance-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your Okta and API configuration:
   ```
   # Okta Configuration
   OKTA_ISSUER=https://your-domain.okta.com/oauth2/default
   OKTA_CLIENT_ID=your-client-id
   OKTA_CLIENT_SECRET=your-client-secret
   OKTA_REDIRECT_URI=http://localhost:3000/auth/callback
   
   # API Configuration
   NEXT_PUBLIC_API_BASE_URL=https://your-lambda-api-gateway-url.amazonaws.com
   ```

## Running the Application

### Development Mode

```bash
npm run dev
# or
yarn dev
```

This will start the development server at http://localhost:3000.

### Production Build

```bash
# Build the application
npm run build
# or
yarn build

# Start the production server
npm start
# or
yarn start
```

## Directory Structure

```
insurance-dashboard/
├── .env.local                 # Environment variables (including Okta credentials)
├── .env.example               # Example env file for reference
├── .gitignore
├── package.json
├── README.md
├── next.config.js             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
├── middleware.ts              # Auth middleware for Okta session validation and redirects
│
├── public/                    # Static assets
│   ├── fonts/
│   ├── images/
│   └── favicon.ico
│
├── app/                       # App router structure
│   ├── layout.tsx             # Root layout with Okta provider
│   ├── page.tsx               # Landing page with Okta redirect
│   ├── error.tsx              # Error boundary
│   ├── loading.tsx            # Loading state
│   ├── not-found.tsx          # 404 page
│   ├── api/                   # Client-side API routes (proxies to Lambda)
│   ├── auth/                  # Authentication pages for Okta
│   └── dashboard/             # Main dashboard (unified for all roles)
│
├── components/                # Reusable components
│   ├── ui/                    # UI components (buttons, cards, etc.)
│   ├── layout/                # Layout components
│   ├── auth/                  # Auth-specific components
│   ├── charts/                # Chart components
│   ├── filters/               # Search and filter components
│   └── shared/                # Shared components
│
├── lib/                       # Utility functions and shared code
│   ├── okta/                  # Okta-specific utilities
│   ├── api/                   # API utilities for Lambda functions
│   ├── constants.ts           # Constants and config
│   ├── utils.ts               # General utilities
│   └── role-utils.ts          # Role-based utility functions
│
├── hooks/                     # Custom React hooks
│   ├── use-okta-auth.ts       # Okta authentication hook
│   ├── use-user-role.ts       # Hook to get user role from Okta claims
│   ├── use-api.ts             # Hook for API calls to Lambda functions
│   ├── use-filter.ts          # Filter state management
│   └── use-pagination.ts      # Pagination logic
│
├── types/                     # TypeScript type definitions
│   ├── okta.ts                # Okta-related types
│   ├── user.ts
│   ├── policy.ts
│   ├── claim.ts
│   ├── role.ts                # Role-related type definitions
│   └── dashboard.ts
│
├── contexts/                  # React context providers
│   ├── auth-context.tsx       # Authentication context for Okta
│   ├── role-context.tsx       # Role context for role-based UI
│   ├── theme-context.tsx      # Theme context
│   └── filter-context.tsx     # Global filter state
│
└── styles/                    # Global styles
    ├── globals.css
    └── variables.css
```

## Authentication Flow

1. User visits the application
2. If not authenticated, they are automatically redirected to Okta
3. After successful authentication, Okta redirects back to the application
4. User roles are retrieved from Okta claims
5. UI components are rendered based on the user's role

## Role-Based Access

The application supports two primary roles:
- **IAC**: Standard insurance agent role
- **IAC Admin**: Administrative role with additional privileges

UI components and data access are automatically adjusted based on the user's role, allowing for a unified interface with role-appropriate functionality.

## Lambda Integration

This application connects to serverless Lambda functions for all backend operations. API calls are proxied through Next.js API routes to the corresponding Lambda endpoints.

## Development Guidelines

- Use TypeScript for all new components and functions
- Follow the established directory structure for new features
- Use the RoleGate component to restrict access to role-specific UI elements
- Leverage the role-based hooks for conditional rendering

## License

[MIT License](LICENSE)