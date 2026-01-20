# Frontend Assessment Submission

## Candidate information
**Name:** Ayodele Babafemi
**Email:** babafemiayodele@gmail.com
**Time spent:** 180 minutes

---

## What I delivered

A fully functional lead management dashboard with advanced features including NexCell branding with logo, pagination (10/20 records per page), real-time search, status filtering, sortable tables, loading states, and a beautiful UI that adheres to NexCell's brand guidelines with custom date formatting.

---

## How to run locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000

# Login with any email and password (demo auth)
```

---

## Technical decisions

**Data approach:**
Option B (Next.js API route) - I chose the API route approach to demonstrate full-stack capability and proper separation of concerns. The API route includes simulated loading delays and proper error handling, showcasing real-world API patterns.

**Key UI decisions:**
- Integrated official NexCell hexagonal logo (PNG format) with company name text in header and login page for professional branding
- Used NexCell's official brand colors (#7d0314, #ffe6ea, #fcf2f4) throughout the design for brand consistency
- Implemented a burgundy table header with white text for strong visual hierarchy
- Added subtle pink (#fcf2f4) background to create a soft, professional atmosphere
- Used harmonized status colors (blue, pink, green, gray) that complement the burgundy/pink palette
- Implemented smooth hover states and transitions (150-200ms) for polished interactions
- Added skeleton loaders instead of spinners for better perceived performance
- Implemented pagination with configurable page sizes (10/20 records) for better data management
- Custom date formatting ("18th of Jan 2026" style) for enhanced readability

**How filtering works:**
The filtering system uses React's useMemo hook for optimized performance. Search filters leads by checking if the query matches either the name OR email (case-insensitive). Status filtering works independently and can be combined with search. Both filters update in real-time as you type, providing instant feedback. The analytics cards automatically recalculate to show stats for the currently filtered leads. Pagination is implemented with default 10 records per page, with an option to switch to 20 records. The table includes smart pagination controls with page numbers and previous/next navigation.

**Shadcn/ui components used:**
- Button (primary actions, sorting, pagination)
- Input (search, login form)
- Card (analytics, table container)
- Table (leads display)
- Dialog (lead details modal)
- Select (status filter, page size selector)
- Badge (status indicators)
- Avatar (user menu)
- DropdownMenu (user menu)
- Label (form labels)
- Skeleton (loading states)

---

## Reflection

**If I had 1 more hour, I would:**
Implement CSV export functionality, add unit tests for critical components, create a lead creation/editing feature with form validation, and add advanced filtering options like date range selection.

**One thing I kept intentionally simple and why:**
Authentication - I used a simple localStorage-based approach without JWT or session management because the assessment explicitly stated "no real authentication required". This allowed me to focus on the core dashboard features while still demonstrating proper auth flow patterns.

**Biggest risk or known bug:**
The localStorage approach means authentication state is lost when opening the app in a new browser/private mode. For production, I would implement proper JWT-based authentication. Also, the API route simulates a delay - in production, this would be actual database queries with proper caching strategies.

---

## AI usage

**Did you use AI tools?** Yes

**If yes, which ones and for what?**
Claude Code (AI-powered development assistant) for:
- Project scaffolding and boilerplate setup
- TypeScript type definitions and interfaces
- shadcn/ui component implementation
- Tailwind CSS class combinations and responsive design patterns
- Zod validation schemas
- React Hook Form integration
- Code organization and best practices
- All code is fully understood and can be explained in detail during interview
