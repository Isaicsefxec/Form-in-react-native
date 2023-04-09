import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import { db } from './config';
import { ref, onValue } from 'firebase/database';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const starCountRef = ref(db, 'posts/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const newPosts = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
      setData(newPosts);
    });
  }, []);

  const filteredData = data.filter(item => {
    const regex = new RegExp(searchQuery, 'gi');
    return (
      regex.test(item.crno) ||
      regex.test(item.body) ||
      regex.test(item.name) ||
      regex.test(item.address)
    );
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Fetch Data</Text>
      <TextInput
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search"
      />
      {filteredData.map(item => (
        <View style={styles.item} key={item.id}>
          <Text>Cr No. : {item.crno}</Text>
          <Text> Selection Of Law:  {item.body}</Text>
          <Text>Accuse Name: {item.name}</Text>
          <Text>Accuse address: {item.address}</Text>
          <Text>Accused Date of Arrest: {item.dateofarrest}</Text>
          <Text>Accused Date of Remand: {item.dateofremand}</Text>
          <Text>Accused Phone Number 1:{item.accusedphno1}</Text>
          <Text>Accused Phone Number 2:{item.accusedphno2}</Text>
          <Text>Accused Aadhar Number:{item.aadhar}</Text>
          <Text>Accused  PAN Card  Number:{item.PAN_NO}</Text>
          <Text>Accused  MailID:{item.Mailid}</Text>
          <Text>Accused  Bank Account details & Card  Numbe:{item.Bankdeatils}</Text>
          <Text>Accused Location Lat,Long:{item.Location}</Text>
          <Text>Accused  Photo:{item.Accusedphoto}</Text>
          <Text>Accused Father number 1:{item.accusedFatherMobileNo1}</Text>
          <Text>Accused Father number 2:{item.accusedFatherMobileNo2}</Text>
          <Text>Accused  Mother number 1:{item.accusedMotherMobileNo1}</Text>
          <Text>Accused  Mother number 2:{item.accusedMotherMobileNo2}</Text>
          <Text>Accused  wife number 1:{item.accusedwifeMobileNo1}</Text>
          <Text>Accused  wife number 2:{item.accusedwifeMobileNo2}</Text>
          <Text>Accused  Friend number 1:{item.accusedfriendMobileNo1}</Text>
          <Text>Accused  Friend number 2:{item.accusedfriendMobileNo2}</Text>
          <Text>Accused Contac:{item.accusedcontact}</Text>
          <Text>Accused  Social media page 1:{item.accusedsocialmediapage1}</Text>
          <Text>Accused  Social media page 2:{item.accusedsocialmediapage2}</Text>
          <Text>Accused  Social media page 3:{item.accusedsocialmediapage3}</Text>
          <Text></Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#afeeee',
    borderRadius: 20,
    margin: 20,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    width: '100%',
  },
  item: {
    backgroundColor: '#6495ed',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default FetchData;