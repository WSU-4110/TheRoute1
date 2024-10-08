import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, ScrollView, StyleSheet } from 'react-native';
import { createTripTable, insertTrip, getTrips } from './database';

const App = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [tripList, setTripList] = useState([]);

  useEffect(() => {
    createTripTable();
    loadTrips();
  }, []);

  const loadTrips = () => {
    getTrips(trips => setTripList(trips));
  };

  const handleSaveTrip = () => {
    insertTrip(destination, startDate, endDate, description);
    setDestination('');
    setStartDate('');
    setEndDate('');
    setDescription('');
    loadTrips();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Add New Trip</Text>
      <TextInput
        style={styles.input}
        placeholder="Destination"
        value={destination}
        onChangeText={setDestination}
      />
      <TextInput
        style={styles.input}
        placeholder="Start Date"
        value={startDate}
        onChangeText={setStartDate}
      />
      <TextInput
        style={styles.input}
        placeholder="End Date"
        value={endDate}
        onChangeText={setEndDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Save Trip" onPress={handleSaveTrip} />

      <Text style={styles.header}>Saved Trips</Text>
      {tripList.map(trip => (
        <View key={trip.id} style={styles.tripItem}>
          <Text>{trip.destination} - {trip.startDate} to {trip.endDate}: {trip.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  tripItem: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default App;
