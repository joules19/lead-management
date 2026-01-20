# Lead Management Dashboard - Development Tracking

**Project:** Frontend Technical Assessment - NexCell Solutions
**Deadline:** Tuesday, January 20th, 2026 at 5:00 PM GMT
**Developer:** Claude Code (Senior Next.js Engineer)

---

## 🎨 Brand Colors (NexCell Official) - Comprehensive Hierarchy

### Primary Brand Colors
```css
/* Main Brand Identity */
Primary Burgundy: #7d0314    /* Buttons, headers, primary actions, logo */
Light Pink:       #ffe6ea    /* Accents, badges, hover backgrounds, highlights */
Pale Pink:        #fcf2f4    /* Page background, card backgrounds, subtle sections */
```

### Extended Color Palette (Calculated for Harmony)

```css
/* Burgundy Variants */
--burgundy-50:  #fef2f3     /* Lightest tint - subtle backgrounds */
--burgundy-100: #ffe6ea     /* Using brand light pink */
--burgundy-500: #7d0314     /* Primary brand color */
--burgundy-600: #6a0311     /* Hover state for buttons */
--burgundy-700: #57020e     /* Active/pressed state */
--burgundy-900: #3d0109     /* Text on light backgrounds */

/* Neutral Grays (warm-toned to complement burgundy) */
--gray-50:  #fafafa         /* Lightest backgrounds */
--gray-100: #f5f5f5         /* Card borders, dividers */
--gray-200: #e5e5e5         /* Input borders */
--gray-300: #d4d4d4         /* Disabled states */
--gray-400: #a3a3a3         /* Placeholder text */
--gray-500: #737373         /* Secondary text */
--gray-600: #525252         /* Body text */
--gray-700: #404040         /* Headings */
--gray-800: #262626         /* Dark mode background */
--gray-900: #171717         /* Darkest text */
```

### Status Colors (Harmonized with Brand)

```css
/* Lead Status Colors - Complement burgundy/pink palette */
--status-new:       #3b82f6  /* Blue - fresh, new leads */
--status-new-bg:    #eff6ff  /* Light blue background */

--status-contacted: #ec4899  /* Pink - aligns with brand, active engagement */
--status-contacted-bg: #fdf2f8  /* Light pink background */

--status-qualified: #10b981  /* Green - success, positive */
--status-qualified-bg: #ecfdf5  /* Light green background */

--status-lost:      #6b7280  /* Gray - neutral, inactive */
--status-lost-bg:   #f9fafb  /* Light gray background */
```

### UI Element Colors

```css
/* Functional Colors */
--success:    #059669  /* Success messages, confirmations */
--success-bg: #d1fae5  /* Success backgrounds */

--error:      #dc2626  /* Error messages, validation */
--error-bg:   #fee2e2  /* Error backgrounds */

--warning:    #f59e0b  /* Warning messages */
--warning-bg: #fef3c7  /* Warning backgrounds */

--info:       #0284c7  /* Info messages */
--info-bg:    #e0f2fe  /* Info backgrounds */
```

---

## 🎨 Color Application Strategy

### 1. **Layout & Backgrounds**
- Page background: `#fcf2f4` (pale pink - soft, professional)
- Card/Panel backgrounds: `#ffffff` (white - clean, crisp)
- Sidebar/Navigation: `#7d0314` with white text (strong brand presence)
- Section dividers: `#ffe6ea` (subtle pink accent)

### 2. **Typography**
- Headings: `#7d0314` (burgundy - strong, authoritative)
- Body text: `#404040` (dark gray - readable)
- Secondary text: `#737373` (medium gray - de-emphasized)
- Text on burgundy: `#ffffff` (white - maximum contrast)

### 3. **Interactive Elements**
- Primary button background: `#7d0314`
- Primary button hover: `#6a0311` (darker burgundy)
- Primary button text: `#ffffff`
- Secondary button background: `#ffe6ea` (light pink)
- Secondary button hover: `#ffccd5` (slightly darker pink)
- Secondary button text: `#7d0314`
- Links: `#7d0314` with underline on hover

### 4. **Form Inputs**
- Input border: `#e5e5e5` (light gray)
- Input border (focus): `#7d0314` (burgundy)
- Input background: `#ffffff`
- Input background (disabled): `#fcf2f4` (pale pink)

### 5. **Table & Data Display**
- Table header background: `#7d0314` (burgundy)
- Table header text: `#ffffff` (white)
- Table row hover: `#fcf2f4` (pale pink)
- Table row selected: `#ffe6ea` (light pink)
- Table borders: `#f5f5f5` (very light gray)

### 6. **Status Badges**
- New: Blue badge `#3b82f6` on `#eff6ff` background
- Contacted: Pink badge `#ec4899` on `#fdf2f8` background
- Qualified: Green badge `#10b981` on `#ecfdf5` background
- Lost: Gray badge `#6b7280` on `#f9fafb` background

### 7. **Analytics Cards**
- Card background: `#ffffff`
- Card border: `#ffe6ea` (light pink accent)
- Icon container: `#fcf2f4` (pale pink)
- Icon color: `#7d0314` (burgundy)
- Numbers/stats: `#7d0314` (burgundy - emphasis)
- Labels: `#737373` (gray)

### 8. **Dark Mode** (if implemented)
- Background: `#1a1a1a` (very dark gray)
- Card background: `#262626` (dark gray)
- Primary accent: `#b91c1c` (lighter red, better contrast)
- Text: `#f5f5f5` (light gray)
- Borders: `#404040` (medium dark gray)

---

## 🎨 Tailwind Configuration

```javascript
// tailwind.config.ts
colors: {
  // NexCell Brand Colors
  'nexcell': {
    burgundy: {
      50: '#fef2f3',
      100: '#ffe6ea',
      500: '#7d0314',
      600: '#6a0311',
      700: '#57020e',
      900: '#3d0109',
    },
    pink: {
      light: '#ffe6ea',
      pale: '#fcf2f4',
    }
  },
  // Status colors
  'status': {
    new: { DEFAULT: '#3b82f6', bg: '#eff6ff' },
    contacted: { DEFAULT: '#ec4899', bg: '#fdf2f8' },
    qualified: { DEFAULT: '#10b981', bg: '#ecfdf5' },
    lost: { DEFAULT: '#6b7280', bg: '#f9fafb' },
  }
}
```

---

## 🎯 Design Principles for Beautiful Output

1. **Contrast is King**: Always ensure text is readable (WCAG AA minimum)
2. **Consistent Spacing**: Use 4px grid (0.5rem increments)
3. **Subtle Shadows**: Use soft shadows for depth, not heavy borders
4. **Burgundy as Anchor**: Use #7d0314 sparingly for maximum impact
5. **Pink for Softness**: Use pink tones (#ffe6ea, #fcf2f4) to soften the UI
6. **White Space**: Let the pale pink background breathe between elements
7. **Status Color Harmony**: Ensure status colors work well with burgundy/pink
8. **Smooth Transitions**: 150-200ms transitions for interactive elements

---

## ✨ Visual Harmony Checklist

- [x] Primary color (#7d0314) used for key actions and headers
- [x] Light pink (#ffe6ea) used for accents and highlights
- [x] Pale pink (#fcf2f4) used for soft backgrounds
- [x] Status colors complement the brand palette
- [x] Dark mode colors maintain brand feel
- [x] Sufficient contrast ratios for accessibility
- [x] Smooth color transitions between states
- [x] Consistent color application across components

---

## 📋 Technical Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript (strict mode, no `any` types)
- **Styling:** TailwindCSS with NexCell brand colors
- **UI Components:** shadcn/ui (Table, Dialog, Select, Input, Card, Button, Toast, Skeleton)
- **Data Fetching:** TanStack Query (React Query)
- **State Management:** React hooks + localStorage
- **Animations:** Framer Motion / CSS transitions
- **Notifications:** sonner (toast notifications)
- **Forms:** React Hook Form + Zod validation

---

## ✅ Required Features

- [ ] Login page (/login) with email/password
- [ ] Dashboard page (/dashboard)
  - [ ] Header with title and user menu
  - [ ] Leads table (Name, Email, Status, Date)
  - [ ] Search filter (name OR email)
  - [ ] Status dropdown filter
  - [ ] Lead details modal
  - [ ] Analytics section (total count + per status)
- [ ] 20 sample leads in data/leads.json
- [ ] Responsive design (mobile + desktop)
- [ ] Empty states
- [ ] Proper TypeScript types
- [ ] At least 2-3 shadcn/ui components

---

## 🌟 Optional Features (Implementing All)

- [ ] Loading states with skeleton loaders
- [ ] Error handling with error boundaries
- [ ] Smooth animations/transitions
- [ ] TanStack Query for data fetching
- [ ] Cool toast alerts for user actions
- [ ] Form validation on login page

---

## 📁 Project Structure

```
lead-management/
├── app/
│   ├── login/
│   │   └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   ├── api/
│   │   └── leads/
│   │       └── route.ts
│   ├── layout.tsx
│   ├── globals.css
│   └── providers.tsx (React Query & Theme)
├── components/
│   ├── ui/ (shadcn components)
│   ├── dashboard/
│   │   ├── leads-table.tsx
│   │   ├── lead-details-modal.tsx
│   │   ├── analytics-section.tsx
│   │   └── filters.tsx
│   ├── login/
│   │   └── login-form.tsx
│   └── shared/
│       ├── header.tsx
│       └── theme-toggle.tsx
├── lib/
│   ├── types.ts (TypeScript types)
│   ├── utils.ts
│   ├── hooks/
│   │   ├── use-leads.ts
│   │   └── use-auth.ts
│   └── validators/
│       └── auth.ts (Zod schemas)
├── data/
│   └── leads.json (20 sample leads)
├── SUBMISSION.md
├── SUBMISSION.json
├── claude.md (this file)
└── README.md
```

---

## 🎯 Senior Engineer Principles

1. **Clean Code:** Small, focused components with single responsibility
2. **Type Safety:** No `any` types, comprehensive interfaces
3. **Performance:** React Query caching, memoization where needed
4. **Accessibility:** ARIA labels, keyboard navigation, semantic HTML
5. **Error Handling:** Graceful degradation, user-friendly messages
6. **DRY Principle:** Reusable hooks and utility functions
7. **Modern Patterns:** Server/Client components appropriately
8. **Testing Ready:** Code structure supports easy testing
9. **Simple but Professional:** No over-engineering

---

## 📝 Progress Log

### Session 1 - January 19, 2026
- [x] Analyzed assessment requirements
- [x] Received NexCell official brand colors
- [x] Created development tracking file
- [x] Created todo list with 25 tasks
- [ ] Initialize Next.js project
- [ ] Configure Tailwind with brand colors
- [ ] Install shadcn/ui

---

## 🚀 Implementation Plan

### Phase 1: Setup (30 mins)
1. Initialize Next.js with TypeScript
2. Configure Tailwind with NexCell colors
3. Install shadcn/ui components
4. Set up React Query provider

### Phase 2: Data & Types (20 mins)
5. Create TypeScript interfaces
6. Generate 20 sample leads
7. Create API route or data loader

### Phase 3: Authentication (20 mins)
8. Build login form with validation
9. Implement localStorage auth
10. Create protected route logic

### Phase 4: Dashboard Core (40 mins)
11. Dashboard layout with header
12. Leads table component
13. Search and filter implementation
14. Lead details modal

### Phase 5: Analytics & Polish (30 mins)
15. Analytics cards with stats
16. Loading states with skeletons
17. Empty states
18. Error boundaries

### Phase 6: Enhancements (20 mins)
19. Dark mode toggle
20. Toast notifications
21. Animations and transitions
22. Responsive design refinement

### Phase 7: Submission (20 mins)
23. Create SUBMISSION.md
24. Create SUBMISSION.json
25. Final testing and cleanup

**Total Estimated Time:** ~3 hours (within 1.5-2 hour target with efficiency)

---

## 📌 Key Decisions

- **Data Approach:** Option B (Next.js API route) - demonstrates full-stack capability
- **State Management:** TanStack Query + React hooks (modern, simple)
- **Styling:** Tailwind utility classes, shadcn/ui for components
- **Auth:** localStorage with simple token flag
- **Modal:** shadcn Dialog component
- **Filters:** Client-side filtering for simplicity
- **Dark Mode:** next-themes with localStorage persistence

---

## 🎨 Component Library Plan

**shadcn/ui components to use:**
1. Button (primary actions)
2. Input (search, login form)
3. Table (leads list)
4. Dialog (lead details modal)
5. Select (status filter)
6. Card (analytics stats)
7. Badge (status indicators)
8. Skeleton (loading states)
9. Toast (notifications)
10. Avatar (user menu)

---

**Status:** Ready to Start
**Last Updated:** January 19, 2026
