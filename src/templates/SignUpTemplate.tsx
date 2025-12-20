import React, { useState } from "react";
import {
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getAvatarUrl, getRandomSeed } from "../utils/avatar";
import EditProfileForm from "../components/organisms/EditProfileForm";
import  SignUpFormData  from "../types/SignUpFormData";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from '../types/navigation';
import SignupForm from "../components/organisms/SignUpForm";

export default function SignUpTemplate() {
    
  const [seed, setSeed] = useState(getRandomSeed());
const navigation = useNavigation<NavigationProp>();
  const [formData, setFormData] = useState<SignUpFormData>({
  imageUri: getAvatarUrl(seed), // always a string
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
});


  const [isEditing, setIsEditing] = useState(false);
  const [originalData, setOriginalData] =
    useState<SignUpFormData | null>(null);

  const avatarUrl = getAvatarUrl(seed);

  const refreshAvatar = () => {
    if (!isEditing) return;

    const newSeed = getRandomSeed();
    setSeed(newSeed);

    setFormData((prev) => ({
      ...prev,
      imageUri: getAvatarUrl(newSeed),
    }));
  };

  const startEditing = () => {
    setOriginalData(formData);
    setIsEditing(true);
  };

  const cancelEditing = () => {
    if (originalData) {
      setFormData(originalData);
    }
    setIsEditing(false);
  };




  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.iconBackground} onPress={() => navigation.goBack()}>
                  <Ionicons name='arrow-back' size={25} style={styles.icon}
                            />
      </TouchableOpacity>
      <Text style={styles.title}>Sign Up</Text>
     
      

      <SignupForm
  formData={formData}
  setFormData={setFormData}
  onSubmit={() => {
    console.log("Sign Up submitted:", formData);
    navigation.navigate("Home"); // <-- use navigate instead of replace
  }}
/>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 24,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#E5E7EB",
  },
  refreshButton: {
    marginTop: 16,
    backgroundColor: "#0B6E4F",
    width: 35,
    height: 35,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 60,
    marginBottom: 16,
    fontSize: 20,
    fontWeight: "600",
  },
  iconBackground: {
    position: "absolute",
    top: 50,
    left: 15,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
   
  },
  icon : {
    
    color: "#00512C"
  }
});
