import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'TripDB',
    location: 'default',
  },
  () => {
    console.log('Database opened');
  },
  error => {
    console.log('Error opening database:', error);
  }
);

export const createTripTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS trips (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         destination TEXT,
         startDate TEXT,
         endDate TEXT,
         description TEXT
       )`,
      [],
      (tx, result) => {
        console.log('Table created successfully');
      },
      error => {
        console.log('Error creating table:', error);
      }
    );
  });
};

export const insertTrip = (destination, startDate, endDate, description) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO trips (destination, startDate, endDate, description) VALUES (?, ?, ?, ?)`,
      [destination, startDate, endDate, description],
      (tx, result) => {
        console.log('Trip inserted successfully');
      },
      error => {
        console.log('Error inserting trip:', error);
      }
    );
  });
};

export const getTrips = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM trips`,
      [],
      (tx, results) => {
        let trips = [];
        for (let i = 0; i < results.rows.length; i++) {
          trips.push(results.rows.item(i));
        }
        callback(trips);
      },
      error => {
        console.log('Error retrieving trips:', error);
      }
    );
  });
};
