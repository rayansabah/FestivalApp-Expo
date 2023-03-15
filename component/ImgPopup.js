import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Modal, StyleSheet , Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

function ImgPopup({ src }) {
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
        <Text>Hej</Text>
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
            <Text>Hej</Text>
          </TouchableOpacity>
          <Image source={{ uri: src }} style={styles.popupImage} />
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

export default ImgPopup;