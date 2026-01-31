# Portfolio Content Editing Guide

This guide shows where to find and how to edit text content on your portfolio website.

## Quick Start

1. Open the file for the section you want to edit (see below)
2. Change the text between the quotes or tags
3. Save the file
4. Rebuild and deploy:
   ```bash
   npm run build
   cp -r dist/* docs/
   git add . && git commit -m "Update content" && git push
   ```

---

## Section-by-Section Guide

### Hero Section (Top of page)
**File:** `src/components/HeroSection.tsx`

| What to change | Line | Current text |
|----------------|------|--------------|
| Location | 14 | "Bloomington, Indiana" |
| First name | 19 | "Prabhakaran" |
| Last name | 22 | "Palanimuthu" |
| Job title | 28 | "Data Scientist & Analytics Engineer" |
| Tagline/description | 32 | "Enabling realized impact across..." |
| GitHub link | 38 | `href="https://github.com/prabha-07"` |
| LinkedIn link | 46 | `href="https://www.linkedin.com/in/prabhakaran-p-7b38ab164/"` |
| Email | 54 | `href="mailto:prpalan@iu.edu"` |

---

### Navbar
**File:** `src/components/Navbar.tsx`

| What to change | Line | Notes |
|----------------|------|-------|
| Logo text | 15 | "PP." - change the letters |
| Nav links | 4-7 | Add/remove/edit: About, Projects, Testimonials, Contact |

---

### About Section
**File:** `src/components/AboutSection.tsx`

| What to change | Line | Notes |
|----------------|------|-------|
| Stats (Years, Projects, etc.) | 3-7 | Edit `number` and `label` in the stats array |
| Main paragraph 1 | 21 | About your experience |
| Main paragraph 2 | 24 | LatentView / work experience |
| Main paragraph 3 | 27 | Skills and expertise |

---

### Projects Section
**File:** `src/components/ProjectsSection.tsx`

| What to change | Line | Notes |
|----------------|------|-------|
| Section description | 53 | "A selection of projects..." |
| Project list | 3-41 | Each project has: `title`, `description`, `tags`, `link` |
| To add a project | - | Copy a project object and edit the values |
| To remove a project | - | Delete the entire `{ ... },` block |
| To add "Ongoing" badge | - | Add `ongoing: true` and `link: "#"` |

---

### Skills Section
**File:** `src/components/SkillsSection.tsx`

Edit the skills arrays and certification data in the file.

---

### Experience Section
**File:** `src/components/ExperienceSection.tsx`

Edit job titles, companies, dates, and descriptions.

---

### Education Section
**File:** `src/components/EducationSection.tsx`

Edit degrees, schools, and dates.

---

### Testimonials Section
**File:** `src/components/TestimonialsSection.tsx`

Edit quote, author name, and LinkedIn link.

---

### Contact Section
**File:** `src/components/ContactSection.tsx`

| What to change | Line | Current |
|----------------|------|---------|
| Intro text | 14 | "I'm always open to discussing..." |
| Email | 20, 28 | prpalan@iu.edu |
| Phone | 32, 40 | (812) 391-3906 |
| Location | 51 | Bloomington, Indiana |
| GitHub link | 59 | https://github.com/prabha-07 |
| LinkedIn link | 67 | LinkedIn profile URL |

---

### Footer
**File:** `src/components/Footer.tsx`

Edit copyright text and any footer links.

---

## Updating the Resume PDF

1. Replace the file: `public/Resume-Prabhakaran-Palanimuthu.pdf`
2. Rebuild and copy to docs (see Quick Start above)

---

## Removing a Section Entirely

To hide a section without deleting the code, open `src/pages/Index.tsx` and comment out the component:

```tsx
{/* <TestimonialsSection /> */}
```

Or delete the line entirely to remove it from the page.
