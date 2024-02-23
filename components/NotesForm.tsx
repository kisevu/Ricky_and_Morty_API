"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/modal.module.css";

const NotesForm = ({ isOpen, onClose }: any) => {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const initializeLocalStorage = () => {
      const storedData = localStorage.getItem("characterNotes");
      if (!storedData) {
        localStorage.setItem("characterNotes", JSON.stringify([]));
      }
    };
    initializeLocalStorage();
  }, []);

  if (!isOpen) return null;
  const handleAddNotes = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(notes);
    const characterNotes = localStorage.getItem("characterNotes");
    // const updatedNotes = [...characterNotes, notes];
    // Save notes to local storage
    localStorage.setItem("characterNotes", JSON.stringify([notes]));
    setNotes("");
  };

  return (
    <div>
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={onClose}>
            Close
          </button>
          <div className={styles.content}>
            <form onSubmit={handleAddNotes}>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                cols={50}
                placeholder="Enter Notes"
                className="border p-3 border-primary rounded-md"
              />
              <button className="flex justify-center items-center bg-boxdark text-whiten p-3 rounded-md w-36">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesForm;
