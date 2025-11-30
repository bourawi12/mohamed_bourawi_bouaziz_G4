import { PropsWithChildren, useRef, useState } from "react";
import { Text, TextInput, View, StyleSheet, Animated, TouchableOpacity, StatusBar } from "react-native";
import FormField from "../components/FormField";

export default function LoginTemplate(props: PropsWithChildren) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fadeAnim = useRef(new Animated.Value(0)).current;
  
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const onPressLoginButton = () => {
    console.log("You tapped the button!");
    console.log(`Email: ${email}, Password: ${password}`);
  };

  const handleForgotPassword = () => {
    console.log("Navigate to Forgot Password");
  };

  const handleRegister = () => {
    console.log("Navigate to Register");
  };

  const handleBack = () => {
    console.log("Navigate back");
  };

  return (
    <View style={styles.container}>
        {/* la place batterie et temps en haut */}
      <StatusBar barStyle="dark-content" backgroundColor="#FDB924" />
      
     
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>

      {/* blaset titre*/}
      <View style={styles.titleSection}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>
          welcome to my first App !! 
          where we gonna build using react native language 
        </Text>
      </View>

      {/* el formulaire */}
      <View style={styles.formSection}>
        <TextInput 
          placeholder="Username" 
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#999"
        />
        <TextInput 
          placeholder="Password" 
          secureTextEntry={true}
          style={styles.input}
          value={password}
          placeholderTextColor="#999"
          onChangeText={setPassword}
        />   
        
        <TouchableOpacity 
          style={styles.forgotPasswordContainer}
          onPress={handleForgotPassword}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity 
          style={styles.signInButton}
          onPress={() => { onPressLoginButton(); fadeIn(); }}
        >
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        {/* google , facebook*/}
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialIcon}>G</Text>
          <Text style={styles.socialButtonText}>Continue with </Text>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={[styles.socialIcon, styles.facebookIcon]}>f</Text>
          <Text style={styles.socialButtonText}>Continue with Facebook</Text>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  backButtonText: {
    fontSize: 24,
    color: "#000",
  },
  registerText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
  titleSection: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
    maxWidth: 280,
  },
  formSection: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  input: {
    width: "100%",
    height: 55,
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingHorizontal: 20,
    marginBottom: 15,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginBottom: 25,
    marginTop: 5,
  },
  forgotPasswordText: {
    color: "#666",
    fontSize: 14,
    fontWeight: "500",
  },
  signInButton: {
    width: "100%",
    height: 55,
    backgroundColor: "#000",
    borderRadius: 27.5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  signInButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 55,
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingHorizontal: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  socialIcon: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#DB4437",
    marginRight: 15,
  },
  facebookIcon: {
    color: "#1877F2",
  },
  socialButtonText: {
    flex: 1,
    fontSize: 15,
    color: "#000",
    fontWeight: "500",
  },
  arrow: {
    fontSize: 18,
    color: "#000",
  },
  bottomAccent: {
    height: 80,
    backgroundColor: "#FDB924",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
  },
});