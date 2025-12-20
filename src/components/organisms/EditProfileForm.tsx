import { StyleSheet, View } from "react-native";
import InputGroup from "../molecules/InputGroup";
import EmailInput from "../molecules/EmailInput";
import PasswordInput from "../molecules/PasswordInput";
import Button from "../atoms/Button";
import  SignUpFormData  from "../../types/SignUpFormData";
import { SPACING } from "../../constants/theme";

interface Props {
  formData: SignUpFormData;
  setFormData: (data: SignUpFormData) => void;
  isEditing: boolean;
  onEdit: () => void;
  onCancel: () => void;
  onSave: () => void;
}

export default function EditProfileForm({
  formData,
  setFormData,
  isEditing,
  onEdit,
  onCancel,
  onSave,
}: Props) {
  return (
    <View style={{ width: "100%", marginTop: SPACING.xl }}>
      <InputGroup label="Full Name:">
        <EmailInput
          value={formData.fullName}
          editable={isEditing}
          onChangeText={(text) =>
            setFormData({ ...formData, fullName: text })
          }
          placeholder="Your full name"
        />
      </InputGroup>

      <InputGroup label="Email:">
        <EmailInput
          value={formData.email}
          editable={isEditing}
          onChangeText={(text) =>
            setFormData({ ...formData, email: text })
          }
          placeholder="Your email"
        />
      </InputGroup>

      <InputGroup label="Password:">
        <PasswordInput
          value={formData.password}
          editable={isEditing}
          onChangeText={(text) =>
            setFormData({ ...formData, password: text })
          }
          placeholder="Your password"
        />
      </InputGroup>

      <InputGroup label="Confirm Password:">
        <PasswordInput
          value={formData.confirmPassword}
          editable={isEditing}
          onChangeText={(text) =>
            setFormData({ ...formData, confirmPassword: text })
          }
          placeholder="Your password"
        />
      </InputGroup>

      {/* EDIT BUTTON */}
      {!isEditing && (
        <Button
          style={styles.button}
          title="Edit Profile"
          onPress={onEdit}
        />
      )}

      {/* SAVE / CANCEL */}
      {isEditing && (
        <View style={styles.InRow}>
          <Button
            style={styles.button2}
            textStyle={styles.buttonText}
            title="Cancel"
            onPress={onCancel}
          />
          <Button
            style={styles.button3}
            title="Save Changes"
            onPress={onSave}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00582F",
  },
  button2: {
    backgroundColor: "#c5c5c5ff",
    flex: 1,
  },
  button3: {
    backgroundColor: "#00582F",
    flex: 1,
  },
  buttonText: {
    color: "#666666ff",
  },
  InRow: {
    flexDirection: "row",
    gap: SPACING.md,
  },
});
