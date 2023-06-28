import React, { useState, useEffect } from 'react';
import { View, Image, Button, StyleSheet, Text } from 'react-native';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Simulating an API call to fetch the image URL
    // Replace this with your actual API call or image source logic
    const fetchImageUrl = async () => {
      // Simulated API response delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Set the image URL
      setImageUrl(
        'https://www.adorama.com/alc/wp-content/uploads/2017/11/shutterstock_114802408.jpg'
      );
    };

    fetchImageUrl();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Image and Hooks</Text>
      </View>
      <View style={styles.imageContainer}>
        {imageUrl ? (
          <>
            <Image
              source={{ uri: imageUrl }}
              style={[styles.image, styles.imageBorder]}
            />
            <Text style={styles.skyText}>
              The sky is a beautiful expanse that stretches above us, showcasing a myriad of colors and formations. It can be serene and calm, or dramatic and awe-inspiring. Whether it's a clear blue sky, a vibrant sunset, or a starry night, the sky never fails to captivate our imagination.
            </Text>
          </>
        ) : (
          <Button title="Loading..." disabled />
        )}
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>muqadsazahen123@</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  imageBorder: {
    borderWidth: 2,
    borderColor: 'black',
  },
  skyText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  footer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
