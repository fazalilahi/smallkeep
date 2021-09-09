import { v4 as uuidv4 } from "uuid";

export const staticNotes = [
  {
    id: uuidv4(),
    title: "Hello World!",
    content: "hello smallcase",
    isArchived: false,
    createdDate: Date.now(),
    updatedDate: Date.now(),
  },
  {
    id: uuidv4(),
    title: "Stock trading!",
    content: "Learn about stock trading",
    isArchived: true,
    createdDate: Date.now(),
    updatedDate: Date.now(),
  },
];
