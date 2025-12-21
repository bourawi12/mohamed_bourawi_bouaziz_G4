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
const INITIAL_PROFILE: SignUpFormData = {
  imageUri: "",
  fullName: "Mohamed Bouaziz",
  email: "mohamed12bouaziz@gmail.com",
  password: "mohamed123",
  confirmPassword: "mohamed123",
};

export default function ProfileTemplate() {
  const navigation = useNavigation();
  const [seed, setSeed] = useState(getRandomSeed());

  // ✅ Saved profile (source of truth)
  const [profileData, setProfileData] = useState<SignUpFormData>({
    ...INITIAL_PROFILE,
    imageUri: getAvatarUrl(seed),
  });

  // ✅ Editable copy
  const [formData, setFormData] = useState<SignUpFormData>(profileData);

  const [isEditing, setIsEditing] = useState(false);

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
    setFormData(profileData); // reset form
    setIsEditing(true);
  };

  const cancelEditing = () => {
    setFormData(profileData); // discard changes
    setIsEditing(false);
  };

  const saveChanges = () => {
    setProfileData(formData); // save locally
    setIsEditing(false);
    console.log("Saved profile:", formData);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.iconBackground}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={25} style={styles.icon} />
      </TouchableOpacity>

      <Text style={styles.title}>Edit Profile</Text>

      {/* Avatar */}
      <Image source={{ uri: formData.imageUri }} style={styles.avatar} />

      <TouchableOpacity
        style={[styles.refreshButton, !isEditing && { opacity: 0.4 }]}
        onPress={refreshAvatar}
        disabled={!isEditing}
      >
        <Ionicons name="refresh" size={22} color="#fff" />
      </TouchableOpacity>

      <EditProfileForm
        formData={formData}
        setFormData={setFormData}
        isEditing={isEditing}
        onEdit={startEditing}
        onCancel={cancelEditing}
        onSave={saveChanges}
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
