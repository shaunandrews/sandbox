// Deprecated IndexedDB code
// DONT USE ME
//
//
export const dbName = 'TodayAppDB';

// Database version
const dbVersion = 1; // Increment this when you change the schema

// Open the database
export function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, dbVersion);

    request.onerror = (event) => {
      reject('Database error: ' + event.target.errorCode);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      // Create object stores if they don't exist
      if (!db.objectStoreNames.contains('goals')) {
        db.createObjectStore('goals', { keyPath: 'id', autoIncrement: true });
      }
      if (!db.objectStoreNames.contains('notes')) {
        db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
      }
      if (!db.objectStoreNames.contains('preferences')) {
        db.createObjectStore('preferences', { keyPath: 'id', autoIncrement: true });
      }
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };
  });
}

// Goals
// -----
// Add a goal
export function addGoal(goal) {
  return openDB().then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['goals'], 'readwrite');
      const store = transaction.objectStore('goals');
      const request = store.add(goal);

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        reject('Error adding the goal.');
      };
    });
  });
}

// Delete a goal
export function deleteGoal(id) {
  return openDB().then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['goals'], 'readwrite');
      const store = transaction.objectStore('goals');
      const request = store.delete(id);

      request.onsuccess = () => {
        resolve('Goal deleted');
      };

      request.onerror = () => {
        reject('Error deleting the goal.');
      };
    });
  });
}

// Fetch all goals
export function getAllGoals() {
  return openDB().then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['goals'], 'readonly');
      const store = transaction.objectStore('goals');
      const request = store.getAll();

      request.onsuccess = () => {
        resolve(request.result); // An array of all goals
      };

      request.onerror = () => {
        reject('Error fetching goals.');
      };
    });
  });
}

// Fetch a goal by id
export function getGoal(id) {
  return openDB().then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['goals'], 'readonly');
      const store = transaction.objectStore('goals');
      const numericId = Number(id); // Ensure the id is numeric
      const request = store.get(numericId);

      request.onsuccess = () => {
        if (request.result) {
          resolve(request.result);
        } else {
          reject('Goal not found.'); // Handle case where result is not found
        }
      };

      request.onerror = () => {
        reject('Error fetching the goal.');
      };
    });
  });
}

// Notes
// -----
// Add a note
export function addNote(note) {
    return openDB().then((db) => {
        return new Promise((resolve, reject) => {
        const transaction = db.transaction(['notes'], 'readwrite');
        const store = transaction.objectStore('notes');
        const request = store.add(note);
    
        request.onsuccess = () => {
            resolve(request.result);
        };
    
        request.onerror = () => {
            reject('Error adding the note.');
        };
        });
    });
}

// Fetch all notes
export function getAllNotes() {
    return openDB().then((db) => {
        return new Promise((resolve, reject) => {
        const transaction = db.transaction(['notes'], 'readonly');
        const store = transaction.objectStore('notes');
        const request = store.getAll();
    
        request.onsuccess = () => {
            resolve(request.result); // An array of all notes
        };
    
        request.onerror = () => {
            reject('Error fetching notes.');
        };
        });
    });
}