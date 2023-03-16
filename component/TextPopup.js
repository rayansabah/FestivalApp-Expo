import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Modal, StyleSheet , Text } from 'react-native';
import { Fontisto, Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

function TextPopup({ src }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.imagePopupButton}
        onPress={handleButtonClick}
      >
        <Fontisto name="bookmark" size={24} color="black" />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={showPopup}
        onRequestClose={handlePopupClose}
        transparent={true}
      >
        <BlurView intensity={100} style={styles.popupBackground}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={handlePopupClose}
          >
            <Ionicons name="close-outline" size={34} color="black" />
          </TouchableOpacity>
          <Text>{src}</Text>
        </BlurView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  imagePopupButton: {
  
  },
  image: {
    width: 50,
    height: 50,
  },
  popupBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  popupImage: {
    width: '100%',
    height: '50%',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 20,
    zIndex: 1,
  },
});

export default TextPopup;