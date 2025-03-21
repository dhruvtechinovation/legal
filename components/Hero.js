import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const HeroSection = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Unknown.png")}
        style={styles.image}
      />
       <Text style={styles.welcomeText}>Welcome to Law Suvidha!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  image: {
    width: 360,
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
  },
});

export default HeroSection;
// import React, { useState, useRef, useEffect } from 'react';
// import { 
//   View, 
//   Text, 
//   StyleSheet, 
//   Image, 
//   Dimensions, 
//   ScrollView, 
//   TouchableOpacity 
// } from 'react-native';

// const { width } = Dimensions.get('window');

// const Hero = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const scrollViewRef = useRef(null);
  
//   // Sample images - replace with your actual image paths
//   const images = [
//     { id: 1, uri: '../assets/Unknown.png', title: 'Amazing Product' },
//     { id: 2, uri: '../assets/Unknown.png', title: 'Exclusive Offer' },
//     { id: 3, uri: '../assets/Unknown.png', title: 'New Collection' },
//   ];

//   useEffect(() => {
//     // Auto-scroll the slider
//     const interval = setInterval(() => {
//       const nextIndex = (activeIndex + 1) % images.length;
//       setActiveIndex(nextIndex);
//       scrollViewRef.current?.scrollTo({ x: nextIndex * width, animated: true });
//     }, 3000);
    
//     return () => clearInterval(interval);
//   }, [activeIndex]);

//   const handleScroll = (event) => {
//     const scrollPosition = event.nativeEvent.contentOffset.x;
//     const index = Math.round(scrollPosition / width);
//     setActiveIndex(index);
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView
//         ref={scrollViewRef}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         onScroll={handleScroll}
//         scrollEventThrottle={16}
//       >
//         {images.map((image) => (
//           <View key={image.id} style={styles.slide}>
//             <Image source={{ uri: image.uri }} style={styles.image} />
//             <View style={styles.textContainer}>
//               <Text style={styles.title}>{image.title}</Text>
//               <TouchableOpacity style={styles.button}>
//                 <Text style={styles.buttonText}>Shop Now</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         ))}
//       </ScrollView>
      
//       <View style={styles.paginationContainer}>
//         {images.map((_, index) => (
//           <View
//             key={index}
//             style={[
//               styles.paginationDot,
//               index === activeIndex && styles.activeDot
//             ]}
//           />
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: 350,
//     backgroundColor: '#f5f5f5',
//   },
//   slide: {
//     width,
//     height: 350,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     position: 'absolute',
//   },
//   textContainer: {
//     backgroundColor: 'rgba(0, 0, 0, 0.4)',
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#ffffff',
//     marginBottom: 15,
//   },
//   button: {
//     backgroundColor: '#ffffff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 25,
//   },
//   buttonText: {
//     color: '#000000',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   paginationContainer: {
//     flexDirection: 'row',
//     position: 'absolute',
//     bottom: 20,
//     alignSelf: 'center',
//   },
//   paginationDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: 'rgba(255, 255, 255, 0.5)',
//     marginHorizontal: 5,
//   },
//   activeDot: {
//     backgroundColor: '#ffffff',
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//   },
// });

// export default Hero;
