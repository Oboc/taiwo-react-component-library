<<<<<<< HEAD

##Demo screenshot
###Button screenshot
<img width="952" height="438" alt="image" src="https://github.com/user-attachments/assets/3953a283-a1c3-47ba-94bd-1002a27f3fc6" />
###Input screenshot
<img width="953" height="438" alt="image" src="https://github.com/user-attachments/assets/39746e5e-669b-4b8c-9398-f83c3e5728fb" />


###Form screenshot
<img width="958" height="440" alt="image" src="https://github.com/user-attachments/assets/80d1283f-49b1-4b81-8482-6141eac23088" />



# React + Vite
=======
# 📘 Reusable React UI Component Library
>>>>>>> 5d8468e (Update README with screenshot project description)

## 📌 Project Overview

This project is a reusable UI component library built with React.  
It contains configurable and accessible UI components designed for form handling and consistent interface design.

The goal of this project is to build reusable components instead of repeating UI logic across pages.

---

## 🧩 Components Included

### 🔘 Button Component

A reusable button component with styling variants and sizes.

**Features**
- Multiple variants (primary, secondary, outline)
- Different sizes
- Disabled state
- Submit support
- Reusable CSS styling

**Props**
- variant
- size
- disabled
- type
- children / text

---

### 📝 Input Component

A reusable and accessible input field component.

**Features**
- Label support
- Error message display
- Required indicator
- Disabled state
- Controlled input pattern
- Accessibility attributes included

**Props**
- label
- type
- name
- value
- onChange
- placeholder
- required
- disabled
- error

**Accessibility Support**
- label linked with input using htmlFor
- error message linked using aria-describedby
- aria-invalid applied when error exists

---

### 📦 Form Component

Reusable form wrapper to handle submission and layout.

**Features**
- Handles form submission
- Accepts children components
- Central place for validation
- Reusable layout container

**Props**
- onSubmit
- children
- className

---

## 🧪 Demo Pages

The project includes demo pages to test components visually.

- ButtonDemo — shows all button variants and states
- InputDemo — shows different input types and errors
- FormDemo — shows validation behavior

---

## 🧠 Architecture Decisions

- Validation handled at form level
- Inputs receive error messages via props
- Components are controlled
- Accessibility built into components
- Styling separated into CSS files
- Props-driven configuration

---

## 🚀 How to Run the Project

```bash
npm install
npm run dev
