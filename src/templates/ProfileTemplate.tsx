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

export default function ProfileTemplate() {
  const [seed, setSeed] = useState(getRandomSeed());
 const navigation = useNavigation();
  const [formData, setFormData] = useState<SignUpFormData>({
    imageUri: getAvatarUrl(seed),
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

  const saveChanges = () => {
    console.log("Saved profile:", formData);
    setIsEditing(false);
    // 👉 API call here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.iconBackground} onPress={() => navigation.goBack()}>
                  <Ionicons name='arrow-back' size={25} style={styles.icon}
                            />
      </TouchableOpacity>
      <Text style={styles.title}>Edit Profile</Text>
      {/* Avatar */}
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />

      <TouchableOpacity
        style={[
          styles.refreshButton,
          !isEditing && { opacity: 0.4 },
        ]}
        onPress={refreshAvatar}
        activeOpacity={0.7}
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
