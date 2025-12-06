// Getting the textarea and buttons
const notesArea = document.getElementById("notesArea");
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const clearBtn = document.getElementById("clearBtn");

// Load saved notes when the page opens
window.addEventListener("load", () => {
    const saved = localStorage.getItem("userNotes");
    if (saved) notesArea.value = saved;
});

// Save notes (only if there's actual text)
saveBtn.addEventListener("click", () => {
    const text = notesArea.value.trim();
    if (text === "") {
        alert("Please write something before saving.");
        return;
    }
    localStorage.setItem("userNotes", text);
    alert("Notes saved!");
});

// Load notes on button click
loadBtn.addEventListener("click", () => {
    const stored = localStorage.getItem("userNotes");
    if (stored) {
        notesArea.value = stored;
    } else {
        alert("No notes found.");
    }
});

// Clear stored notes + textarea
clearBtn.addEventListener("click", () => {
    localStorage.removeItem("userNotes");
    notesArea.value = "";
    alert("Notes cleared.");
});
