import { View, Text, StyleSheet, TextInput, Button ,Image, Alert, ScrollView} from "react-native";
import React, { useState } from "react";
import App from "../randomkural";
import { db } from "../config";
import { ref, set } from "firebase/database";




const AddData = ({navigation}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [dateofremand, setdateofremand] = useState("");
  const [accusedphno1, setaccusedphno1] = useState("");
  const [accusedphno2, setaccusedphno2] = useState("");
  const [dateofarrest, setdateofarrest] = useState("");
  const [aadhar, setaadhar] = useState("");
  const [PAN_NO, setPAN_NO] = useState("");
  const [Mailid, setMailid] = useState("");
  const [Bankdeatils, setBankdeatils] = useState("");
  const [Location, setLocation] = useState("");
  const [Accusedphoto, setAccusedphoto] = useState("");
  const [accusedFatherMobileNo1, setaccusedFatherMobileNo1] = useState("");
  const [accusedFatherMobileNo2, setaccusedFatherMobileNo2] = useState("");
  const [accusedMotherMobileNo1, setaccusedMotherMobileNo1] = useState("");
  const [accusedMotherMobileNo2, setaccusedMotherMobileNo2] = useState("");
  const [accusedwifeMobileNo1, setaccusedwifeMobileNo1] = useState("");
  const [accusedwifeMobileNo2, setaccusedwifeMobileNo2] = useState("");
  const [accusedfriendMobileNo1, setaccusedfriendMobileNo1] = useState("");
  const [accusedfriendMobileNo2, setaccusedfriendMobileNo2] = useState("");
  const [accusedcontact, setaccusedcontact] = useState("");
  const [accusedsocialmediapage1, setaccusedsocialmediapage1] = useState("");
  const [accusedsocialmediapage2, setaccusedsocialmediapage2] = useState("");
  const [accusedsocialmediapage3, setaccusedsocialmediapage3] = useState("");

  // function to add data to firebase realtime db
  const dataAddon = () => {
    set(ref(db, "posts/" + title), {
      title: title,
      body: body,
      name: name,
      address: address,
      dateofarrest: dateofarrest,
      dateofremand: dateofremand,
      accusedphno1: accusedphno1,
      accusedphno2: accusedphno2,
      aadhar: aadhar,
      PAN_NO: PAN_NO,
      Mailid: Mailid,
      Bankdeatils: Bankdeatils,
      Location: Location,
      Accusedphoto: Accusedphoto,
      accusedFatherMobileNo1: accusedFatherMobileNo1,
      accusedFatherMobileNo2: accusedFatherMobileNo2,
      accusedMotherMobileNo1: accusedMotherMobileNo1,
      accusedMotherMobileNo2: accusedMotherMobileNo2,
      accusedwifeMobileNo1: accusedwifeMobileNo1,
      accusedwifeMobileNo2: accusedwifeMobileNo2,
      accusedfriendMobileNo1: accusedfriendMobileNo1,
      accusedfriendMobileNo2: accusedfriendMobileNo2,
      accusedcontact: accusedcontact,
      accusedsocialmediapage1: accusedsocialmediapage1,
      accusedsocialmediapage2: accusedsocialmediapage2,
      accusedsocialmediapage3: accusedsocialmediapage3,
    });
    setTitle("");
    setBody("");
    setname("");
    setaddress("");
    dateofarrest("");
    dateofremand("");
    accusedphno1("");
    accusedphno2("");
    aadhar("");
    PAN_NO("");
    Mailid("");
    Bankdeatils("");
    Location("");
    setAccusedphoto("");
    accusedFatherMobileNo1("");
    setaccusedFatherMobileNo2("");
    setaccusedMotherMobileNo1("");
    setaccusedMotherMobileNo2("");
    setaccusedwifeMobileNo1("");
    setaccusedwifeMobileNo2("");
    setaccusedfriendMobileNo1("");
    setaccusedfriendMobileNo2("");
    setaccusedcontact("");
    setaccusedsocialmediapage1("");
    setaccusedsocialmediapage2("");
    setaccusedsocialmediapage3("");
  };
  const checkTextInputs = () => {
    //Check for the Name TextInput
    checkTextInput();
    dataAddon();
   
    }
  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!title.trim()) {
      alert('Please Enter Name');
      return;
    }
   
    //Check for the Email TextInput
   
    //Checked Successfully
    //Do whatever you want
    alert('Success');
  };

 
  return (
    <ScrollView>
    <View style={styles.container}>
  
      <Image
          style={{ height:100, width:100 , marginLeft : 76 }}
          source={{uri:'https://upload.wikimedia.org/wikipedia/en/4/40/Tamil_Nadu_Police_Logo.png'}}
      />
       <App></App>
      <Text style={{textAlign:'center',fontSize:17,fontWeight:'bold' ,color: '#030303'}}>திருநெல்வேலி காவல் துறை தரவு</Text>
      <Text style={styles.header}>----Please type N/A if it not Applicable </Text>
      <Text style={styles.header}>Add ** If the data is not sure ---- </Text>

      <TextInput
        placeholder="Cr. No"
        value={title}
        maxLength={10} 
        onChangeText={(text) => setTitle(text)}
        style={styles.input}></TextInput>
      
      <TextInput
        placeholder="Selection of Law"
        value={body}
        maxLength={10}
        onChangeText={(text) => setBody(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accuse Name"
        value={name}
        maxLength={16} 
        onChangeText={(text) => setname(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accuse address"
        value={address}
        maxLength={20} 
        onChangeText={(text) => setaddress(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused Date of Arrest"
        value={dateofarrest}
        maxLength={10} 
        onChangeText={(text) => setdateofarrest(text)}
        style={styles.input}
        
      />
      <TextInput
        placeholder="Accused Date of Remand"
        value={dateofremand}
        maxLength={10} 
        onChangeText={(text) => setdateofremand(text)}
        style={styles.input}></TextInput>
      
      <TextInput
        placeholder="Accused Phone Number 1"
        value={accusedphno1}
        maxLength={10} 
        onChangeText={(text) => setaccusedphno1(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused Phone Number 2"
        value={accusedphno2}
        maxLength={10} 
        onChangeText={(text) => setaccusedphno2(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused Aadhar Number"
        value={aadhar}
        maxLength={10} 
        onChangeText={(text) => setaadhar(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused  PAN Card  Number"
        value={PAN_NO}
        maxLength={10} 
        onChangeText={(text) => setPAN_NO(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused  MailID"
        value={Mailid}
        maxLength={10} 
        onChangeText={(text) => setMailid(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused  Bank Account details & Card  Number"
        value={Bankdeatils}
        maxLength={20} 
        onChangeText={(text) => setBankdeatils(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused Location Lat,Long"
        value={Location}
        maxLength={16} 
        onChangeText={(text) => setLocation(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused  Photo"
        value={Accusedphoto}
        onChangeText={(text) => setAccusedphoto(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused Father number 1"
        value={accusedFatherMobileNo1}
        maxLength={10} 
        onChangeText={(text) => setaccusedFatherMobileNo1(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused Father number 2"
        value={accusedFatherMobileNo2}
        maxLength={10} 
        onChangeText={(text) => setaccusedFatherMobileNo2(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused  Mother number 1"
        value={accusedMotherMobileNo1}
        maxLength={10} 
        onChangeText={(text) => setaccusedMotherMobileNo1(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused  Mother number 2"
        value={accusedMotherMobileNo2}
        maxLength={10} 
        onChangeText={(text) => setaccusedMotherMobileNo2(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused  wife number 1"
        value={accusedwifeMobileNo1}
        maxLength={10} 
        onChangeText={(text) => setaccusedwifeMobileNo1(text)}
        style={styles.input}
      />
       <TextInput
        placeholder="Accused  wife number 2"
        value={accusedwifeMobileNo2}
        maxLength={10} 
        onChangeText={(text) => setaccusedwifeMobileNo2(text)}
        style={styles.input}
      />
       <TextInput
        placeholder="Accused  Friend number 1"
        value={accusedfriendMobileNo1}
        maxLength={10} 
        onChangeText={(text) => setaccusedfriendMobileNo1(text)}
        style={styles.input}
      />
       <TextInput
        placeholder="Accused  friend number 2"
        value={accusedfriendMobileNo2}
        maxLength={10} 
        onChangeText={(text) => setaccusedfriendMobileNo2(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused Contact"
        value={accusedcontact}
        maxLength={10} 
        onChangeText={(text) => setaccusedcontact(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused  Social media page 1"
        value={accusedsocialmediapage1}
        maxLength={10} 
        onChangeText={(text) => setaccusedsocialmediapage1(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused Social media page 2"
        value={accusedsocialmediapage2}
        maxLength={10} 
        onChangeText={(text) => setaccusedsocialmediapage2(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Accused Social media page 3"

        value={accusedsocialmediapage3}
        maxLength={10} 
        onChangeText={(text) => setaccusedsocialmediapage3(text)}
        style={styles.input}
      />
      <Button title="Add Data" onPress={checkTextInputs}  color='#a0522d' />
      <Button title="Review"
      onPress={()=>navigation.navigate('RECHECKING')} color='#DF3939'></Button>
      
    </View>
    </ScrollView>
  );
};


export default AddData;

const styles = StyleSheet.create({
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
