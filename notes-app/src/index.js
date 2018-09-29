"use strict";

import { getNotes, createNote, removeNote, updateNote } from "./notes";
import { getFilters, setFilters } from "./filters";
// console.log(getNotes());

// createNote();

// removeNote();

// updateNote("17003f00-3ac6-456c-b284-fd6d01bb3d50", {
//     title: "My note title",
//     body: "Some body loves you"
// });

console.log(getFilters());
setFilters({
  searchText: "Office",
  sortBy: "byCreated"
});
console.log(getFilters());
