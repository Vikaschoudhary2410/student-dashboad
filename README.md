# 🎓 Student Dashboard

A simple web-based Student Dashboard that allows users to add student names and marks, displays only passed students, and stores data persistently using `localStorage`.

---

## ✨ Features

- 📥 Add student name and marks through a form
- ✅ Display only passed students (marks > 35)
- 💾 Save all data in `localStorage` (remains after page refresh)
- 🔁 Automatically render students on every form submission
- 📃 Dynamically updates the list without refreshing the page

---

## 🛠️ Tech Used

- HTML
- CSS (optional basic styling)
- JavaScript (Vanilla)

---

## 🧠 How It Works

1. Fill in the **Name** and **Marks** in the form.
2. On submission:
   - The student is added to an array.
   - The array is saved in `localStorage`.
   - Only students with marks > 35 are rendered.
3. On page load, all previously saved students are shown automatically.

---

