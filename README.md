# Component Library

A reusable React component library built with Vite and documented with Storybook.  
Includes accessible and customizable UI components.

## Components

- Button (variants supported)
- Input (text, password, email)
- Form wrapper

## Tech Stack

- React
- Vite
- Storybook
- ARIA accessibility attributes

## Installation

```bash
npm install component-library

## Usage

```jsx
import { Button, Input, Form } from "component-library-ui";

function Demo() {
  return (
    <Form>
      <Input placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button variant="primary">Submit</Button>
    </Form>
  );
}
```



## Storybook Documentation

This component library is fully documented using Storybook for interactive component previews and prop controls.

Run Storybook locally:

```bash
npm run storybook
```

Then open in your browser:

```
http://localhost:6006
```

Storybook includes:

- Component variants
- Live prop controls
- Visual testing previews
- Usage demonstrations



## Build Library

To build the reusable component package:

```bash
npm run build
```

The compiled output will be generated inside:

```
dist/
```

This folder is what gets published and distributed.



## Package Test (Local Install Simulation)

To generate a local installable package archive:

```bash
npm pack
```

This creates a `.tgz` package file which can be installed locally for testing.



## Accessibility

This component library follows accessibility best practices:

- Proper label + input association
- ARIA attributes for error states
- Keyboard navigable controls
- Screen reader friendly validation messages
- Buttons usable without mouse
- Error states announced with aria-describedby
- aria-invalid applied when needed



## Project Structure

```
src/
  Components/
    Button/
    Input/
    Form/
  index.js

.storybook/
dist/
```



## Author

 OLORUNSOLA, Taiwo Joshua
Built with React + Vite + Storybook