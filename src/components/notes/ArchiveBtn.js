import React from "react";

function ArchiveBtn({ handleToggleArchive, isArchived }) {
  return (
    <button
      onClick={handleToggleArchive}
      className="px-2 py-1 p-6 hover:bg-blue-50 rounded-full h-8 w-8 flex items-center justify-center"
    >
      {isArchived && (
        <img
          src="images/unarchive.svg"
          alt="Un-archive icon to un-archive note"
        />
      )}
      {!isArchived && (
        <img src="images/archive.svg" alt="archive icon to archive note" />
      )}
    </button>
  );
}

export default ArchiveBtn;
