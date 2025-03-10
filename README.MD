app/
│── pentest-notes/
│   ├── page.tsx  (Main page listing categories and filtering options)
│   ├── [category]/
│   │   ├── page.tsx (Displays notes related to the selected category)
│   │   ├── [notes]/
│   │   │   ├── page.tsx (Displays specific note details)

Final Behavior
/pentest-notes/ → Lists all categories.
/pentest-notes/scr → Lists all notes under SCR.
/pentest-notes/scr/cheatsheet → Displays SCR Cheatsheet content.