#  Color Toggler

A simple **Dark/Light Mode Toggle Switch** built using pure **HTML**, **CSS**, and **JavaScript**.

This project lets users switch the website background color from light to dark using a smooth toggle switch UI.

---

##  Features

- Toggle button made from a hidden checkbox + styled label
- Smooth animations using CSS transitions
- Simple, beginner-friendly logic
- Fully responsive switch layout

---

##  How It Works

- A checkbox (`#switch`) is visually hidden using CSS (`display: none`).
- A `label` element is styled to look like a toggle switch.
- A `::after` pseudo-element creates the toggle **knob**.
- When the checkbox is checked:
  - The label’s background becomes white (light mode).
  - The knob slides to the right and changes to black (contrast).
  - JS toggles a `.dark` class on the `<body>` to switch background color.

---
