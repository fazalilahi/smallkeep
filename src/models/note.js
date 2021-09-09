import { v4 as uuidv4 } from "uuid";

export default function Note(
  id = uuidv4(),
  title = "",
  content = "",
  isArchived = false,
  imageData = undefined,
  createdDate = Date.now(),
  updatedDate = Date.now()
) {
  this.id = id;
  this.title = title;
  this.content = content;
  this.isArchived = isArchived;
  this.imageDate = imageData;
  this.imageData = undefined;
  this.createdDate = createdDate;
  this.updatedDate = updatedDate;
}
