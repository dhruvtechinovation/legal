import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef } from 'react'; // Import useRef
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width, height: screenHeight } = Dimensions.get('window');

const slides = [
  {
    key: '1',
    title: 'Welcome to Law Suvidha',
    description: 'Your digital companion for navigating the complex world of law with confidence and clarity.',
    image: require('../assets/images.jpeg'),
  },
  {
    key: '2',
    title: 'Personalized Legal Insights',
    description: 'Access tailored legal information and analysis relevant to your specific needs and circumstances.',
    image: require('../assets/icon.png'),
  },
  {
    key: '3',
    title: 'Connect with Legal Experts',
    description: 'Seamlessly connect with qualified attorneys who specialize in your area of legal concern.',
    image: require('../assets/icon.png'),
  },
  {
    key: '4',
    title: 'Begin Your Legal Journey',
    description: 'Start exploring the world of law with comprehensive resources at your fingertips.',
    image: require('../assets/icon.png'),
  },
];

const Onboarding = () => {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();
  const carouselRef = useRef(null); // Create carousel ref

  const handleNext = () => {
    if (index < slides.length - 1) {
      console.log(carouselRef.current);
      carouselRef.current.next(); // Call snapToNext()
    } else {
      navigation.navigate("Main");
    }
  };

  const handleSkip = () => {
    navigation.navigate("Main");
  };

  
  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef} // Attach ref
        loop={false}
        width={width}
        height={screenHeight * 0.7}
        data={slides}
        scrollAnimationDuration={300}
        onSnapToItem={setIndex}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} resizeMode="cover" />
            <Text style={styles.slideIndicator}>Step {index + 1} of {slides.length}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {index === slides.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.progressContainer}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={[styles.progressDot, { backgroundColor: i === index ? '#1E50A0' : '#D1D5DB' }]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 200, // Increased marginTop
    marginBottom: 20,
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'space-around', // Adjusted justifyContent
    padding: 20,
    flex: 1, // Added flex: 1
  },
  image: {
    width: '80%',
    height: '50%',
    marginTop: 60, // Increased marginTop
    marginBottom: 20,
    borderRadius:10
  },
  slideIndicator: {
    fontSize: 12,
    color: '#1E50A0',
    backgroundColor: 'rgba(30, 80, 160, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#4B5563',
    marginBottom: 20,
    lineHeight: 22,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  skipButton: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButtonText: {
    fontSize: 16,
    color: '#6B7280',
  },
  nextButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default Onboarding;