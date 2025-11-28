import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import myIcon from '../../assets/images/icon.png';

export default function Sign_Up(){
  const [First_Name,SetFirstName]=useState('');
  const [Name,SetName]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword,setRepeatPassword]=useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSign_Up = async () => {
    if (!email || !password||!First_Name||!Name) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    setIsLoading(true);
    try {
          // TODO: Implement actual sign Up logic with backend
          // Example: await fetch('http://localhost:8080/api/login', { ... })
          console.log('Sign_In:', { email, password });
          
          // Simulated delay
          setTimeout(() => {
            setIsLoading(false);
            Alert.alert('Success', 'Your account was created 🥳');
          }, 1000);
        } catch (error) {
          setIsLoading(false);
               console.error('Sign uP error:', error);
               Alert.alert('Error', 'Sign Up failed. Please try again.');
        }
}
 return(
  <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>

       <StatusBar style="light" />
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              keyboardShouldPersistTaps="handled"
            >
           <View style={styles.header}>
                    <Image source={myIcon} style={styles.logo}/>
                     <Text style={styles.title}>Mobile Banking</Text>
                     <Text style={styles.subtitle}>Secure. Simple. Smart.</Text>
                   </View>
                   
            <View style={styles.formContainer}>
                      <View style={styles.inputGroup}>
                        <Text style={styles.label}>First Name</Text>
                        <TextInput
                          style={styles.input}
                          placeholder="Enter your First Name"
                          placeholderTextColor="#999"
                          value={First_Name}
                          onChangeText={SetFirstName}
                          keyboardType="default"
                          autoCapitalize="none"
                          autoComplete="off"
                          editable={!isLoading}
                        />
                     </View> 
                 
                   <View style={styles.inputGroup}>
                    <Text style={styles.label}>Name</Text>
                     <TextInput
                          style={styles.input}
                          placeholder="Enter Your Name"
                          placeholderTextColor="#999"
                          value={Name}
                          onChangeText={SetName}
                          keyboardType="default"
                          autoCapitalize="none"
                          autoComplete="email"
                          editable={!isLoading}
                        />
                   </View>
                  <View style={styles.inputGroup}>
                             <Text style={styles.label}>Email</Text>
                      <TextInput
                      style={styles.input}
                      placeholder="Enter your email"
                      placeholderTextColor="#999"
                      value={email}
                      onChangeText={setEmail}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoComplete="email"
                      editable={!isLoading}
                      />
                  </View>
                     <View style={styles.inputGroup}>
                             <Text style={styles.label}>Password</Text>
                      <TextInput
                      style={styles.input}
                      placeholder="Enter your password"
                      placeholderTextColor="#999"
                      value={password}
                      onChangeText={setPassword}
                      keyboardType="default"
                      autoCapitalize="none"
                      //autoComplete="none"
                      editable={!isLoading}
                      />
                  </View>
                  <View style={styles.inputGroup}>
                             <Text style={styles.label}>Repeat password</Text>
                      <TextInput
                      style={styles.input}
                      placeholder="Repeat your password"
                      placeholderTextColor="#999"
                      value={repeatPassword}
                      onChangeText={setRepeatPassword}
                      keyboardType="default"
                      autoCapitalize="none"
                      //autoComplete="none"
                      editable={!isLoading}
                      />
                  </View>
                  <TouchableOpacity
                      style={styles.signUpButton}
                              
                      onPress={handleSign_Up}
                      disabled={isLoading}>
                        <Text style={styles.signUpText}>Sign Up</Text>
                  </TouchableOpacity>
              </View>
              </ScrollView> 

      </KeyboardAvoidingView>
       
 )
 
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#1a1a2e',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  logo:{
    width:80,
    height:80,
    marginBottom:16,
  },
  title:{
       fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#a0a0b0',
  },
formContainer: {
width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
},
inputGroup: {
   marginBottom:20,
},
 label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#2a2a40',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#3a3a50',
  },
  signUpButton:{
    backgroundColor:'#400150ff',
     borderWidth: 2,
    borderColor: '#400150',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
  },
  signUpText:{
    //alignItems:'center',
    color:'#ffff',
    //flex:1,
    fontSize:20,
    fontWeight: '600',
  },
})