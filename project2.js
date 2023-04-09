import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView,StyleSheet,Image } from 'react-native';
import { db } from "../config";
import App from "../randomkural";
import { ref, set } from "firebase/database";

const AddData= () => {
  const [crno, setCrno] = useState(""); // State variable for crno input value
  const [Law, setLaw] = useState("");
  const [name, setname] = useState("");
  const [error, setError] = useState(""); // State variable for error message

  const handlePress = () => {
    // Validate if crno is not empty
    if (!crno || !Law || !name) {
      setError("This feild  is required!");
    }
    else {
      setError(""); // Reset error state variable
      // Call dataAddon function to add data to Firebase database
      dataAddon();
    }
  };

  const dataAddon = () => {
    set(ref(db, "posts/" + crno), {
      crno: crno,
      Law:Law,
     
    });
    setCrno("");
    setLaw("");
    setname("");
   
  };
  return (

       <ScrollView>
    <View style={styles.container}>
  
      <Image
          style={{ height:100, width:100 , marginLeft : 120 }}
          source={{uri:'https://upload.wikimedia.org/wikipedia/en/4/40/Tamil_Nadu_Police_Logo.png'}}
      />
       <App></App>
      <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold' ,color: '#030303'}}>திருநெல்வேலி காவல் துறை தரவு</Text>
      <Text style={styles.header}>----Please type N/A if it not Applicable </Text>
      <Text style={styles.header}>Add ** If the data is not sure ---- </Text>
      <TextInput
        value={crno}
        onChangeText={(text) => setCrno(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="CRNO"
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={Law}
        onChangeText={(text) => setLaw(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Selection of Law * "
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <TextInput
        value={name}
        onChangeText={(text) => setname(text)}
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Accused Name * "
        required
      />
      {error ? <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text> : null}
      <Button title="Submit" onPress={handlePress} />
    </View>
    </ScrollView>
  );
    // Assuming that you have already initialized your Firebase app and have a valid Firebase database reference (db) available

    // Set data to the Firebase database
    // You can use your own implementation here to set data to Firebase Realtime Database in React Native
    // Example: firebase.database().ref("posts/" + crno).set({ crno: crno })
    console.log("Data added successfully!");
    setCrno(""); // Reset crno state variable to an empty string
  };

  
export default AddData;const styles = StyleSheet.create({
  container: {
   
    
    
  },
  header: {
    fontSize: 15,
    textAlign: "center",
  },

  input: {
    
  },
  output:{
   height:100,
   width:100,
   alignItems:'center'

  }
  
  
});

