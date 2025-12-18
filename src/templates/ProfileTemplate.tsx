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
import SignUpForm from "../components/organisms/SignUpForm";
import { SignUpFormData } from "../types/SignUpFormData";
import EditProfileForm from "../components/organisms/EditProfileForm";

export default function ProfileTemplate() {
  const [seed, setSeed] = useState(getRandomSeed());

  const [formData, setFormData] = useState<SignUpFormData>({
    imageUri: getAvatarUrl(seed),
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const avatarUrl = getAvatarUrl(seed);

  const refreshAvatar = () => {
    const newSeed = getRandomSeed();
    setSeed(newSeed);

    setFormData((prev) => ({
      ...prev,
      imageUri: getAvatarUrl(newSeed),
    }));
  };

  const handleSubmit = () => {
    console.log("Updated profile:", formData);
    // 👉 call API here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Avatar */}
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />

      <TouchableOpacity
        style={styles.refreshButton}
        onPress={refreshAvatar}
        activeOpacity={0.7}
      >
        <Ionicons name="refresh" size={22} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>Edit Profile</Text>

      {/* Editable form */}
      <EditProfileForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
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
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 24,
    marginBottom: 16,
    fontSize: 20,
    fontWeight: "600",
  },
});
