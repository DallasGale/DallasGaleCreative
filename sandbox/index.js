"use strict";
import QuickList from "./quick-list/index.js";


const toggleBtn = document.querySelector("#toggle-mode");
const body = document.querySelector("body")
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
})

// const listly = new Listly("#form", "#container", "groceries", "ol");
const list = new QuickList("#form", ".my-input", "#container", {
  options: {
    listId: "groceries",
    listType: "ol",
    hasHeader: true,
    showMarker: false,
    showActions: true,
    // prefill: [
    //   {
    //     attrs: {
    //       0: {},
    //       1: {},
    //       2: {},
    //       3: {},
    //       4: {},
    //       5: {},
    //     },
    //     name: "name",
    //     dataset: {
    //       qwkInputLabel: "Name",
    //     },
    //     id: "name",
    //     type: "text",
    //     value: "Dallas",
    //   },
    //   {
    //     attrs: {
    //       0: {},
    //       1: {},
    //       2: {},
    //       3: {},
    //       4: {},
    //       5: {},
    //     },
    //     name: "occupation",
    //     dataset: {
    //       qwkInputLabel: "Occupation",
    //     },
    //     id: "occupation",
    //     type: "text",
    //     value: "Web developer",
    //   },
    //   {
    //     attrs: {
    //       0: {},
    //       1: {},
    //       2: {},
    //       3: {},
    //       4: {},
    //       5: {},
    //     },
    //     name: "relationship",
    //     dataset: {
    //       qwkInputLabel: "Relationship",
    //     },
    //     id: "relationship",
    //     type: "text",
    //     value: "Married",
    //   },
    //   {
    //     attrs: {
    //       0: {},
    //       1: {},
    //       2: {},
    //       3: {},
    //       4: {},
    //       5: {},
    //       6: {},
    //       7: {},
    //     },
    //     name: "importance",
    //     dataset: {
    //       qwkInputLabel: "Importance",
    //     },
    //     id: "importance",
    //     type: "number",
    //     value: "4",
    //   },
    //   {
    //     attrs: {
    //       0: {},
    //       1: {},
    //       2: {},
    //       3: {},
    //       4: {},
    //       5: {},
    //       6: {},
    //       7: {},
    //     },
    //     name: "dueDate",
    //     dataset: {
    //       qwkInputLabel: "Due date",
    //     },
    //     id: "date",
    //     type: "date",
    //     value: "",
    //   },
    // ],
  },
});

// const popover = document.getElementById("mypopover");

// document.addEventListener("keydown", (event) => {
//   console.log({event})
//   if (event.key === "h") {
//     popover.showPopover();
//   }
// });

// const updateButton = document.getElementById("updateDetails");
// const confirmButton = document.getElementById("submit");
// const cancelButton = document.getElementById("cancel");
// const dialog = document.getElementById("favDialog");
// const selectElement = document.getElementById("favAnimal");

// // Update button opens a modal dialog
// updateButton.addEventListener("click", () => {
//   dialog.showModal();
// });
