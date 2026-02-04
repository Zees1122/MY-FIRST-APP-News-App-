import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

function NewsCard({title, description, imageUrl, onPress}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {imageUrl ? <Image source={{uri: imageUrl}} style={styles.image} /> : null}
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        {description ? (
          <Text style={styles.description} numberOfLines={3}>
            {description}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default NewsCard;

