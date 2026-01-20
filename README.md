# Lead Management Dashboard

A modern, responsive lead management system built with Next.js 15, TypeScript, and Tailwind CSS for NexCell Solutions.

## Features

- **NexCell Branding** - Official NexCell hexagonal logo with company name in header and login page
- **Authentication** - Simple email/password login with localStorage persistence
- **Lead Dashboard** - Clean, intuitive interface for managing leads
- **Pagination** - View 10 or 20 records per page with smart pagination controls
- **Search & Filter** - Real-time search by name/email and filter by status
- **Lead Details** - Click any lead to view detailed information in a modal
- **Analytics** - Visual stats cards showing lead distribution by status
- **Custom Date Format** - Dates displayed as "18th of Jan 2026" for better readability
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Loading States** - Skeleton loaders for better UX
- **Toast Notifications** - User-friendly feedback for actions
- **Sortable Table** - Click column headers to sort leads

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **UI Components:** shadcn/ui (Radix UI primitives)
- **State Management:** TanStack Query (React Query)
- **Form Validation:** React Hook Form + Zod
- **Icons:** Lucide React
- **Date Formatting:** Custom utility function
- **Notifications:** Sonner

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd lead-management
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Login

Use any email and password to login (demo authentication).

## Project Structure

```
lead-management/
├── app/                    # Next.js app directory
│   ├── api/leads/         # API routes
│   ├── dashboard/         # Dashboard page
│   ├── login/             # Login page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── providers.tsx      # React Query & Theme providers
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── dashboard/         # Dashboard-specific components
│   ├── login/             # Login components
│   └── shared/            # Shared components (Header, ThemeToggle)
├── lib/
│   ├── hooks/             # Custom React hooks
│   ├── validators/        # Zod schemas
│   ├── types.ts           # TypeScript types
│   └── utils.ts           # Utility functions
└── data/
    └── leads.json         # Sample lead data (20 leads)
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Design Decisions

### Color Scheme
The app uses NexCell Solutions' official brand colors:
- **Primary:** `#7d0314` (Burgundy) - Buttons, headers, primary actions
- **Accent:** `#ffe6ea` (Light Pink) - Badges, hover states
- **Background:** `#fcf2f4` (Pale Pink) - Page background

### Data Approach
Chose **Next.js API Route** (Option B) to demonstrate full-stack capability and proper API design patterns.

### Key Features Implemented

#### Required Features ✅
- Login page with email/password
- Dashboard with header and user menu
- Leads table with all required columns
- Search filter (name and email)
- Status dropdown filter
- Lead details modal
- Analytics section with stats
- Responsive design
- Empty states
- TypeScript with proper types
- 6+ shadcn/ui components used

#### Optional Features ✅
- Loading states with skeleton loaders
- Error handling with toast notifications
- Smooth animations and transitions
- TanStack Query for optimized data fetching
- Form validation (login page)
- Sortable table columns
- Pagination with configurable page sizes
- Custom date formatting
- Branded logo integration

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

This project is part of a technical assessment for NexCell Solutions.
