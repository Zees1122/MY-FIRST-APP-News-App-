import React from 'react'; 
import {View, Text, StyleSheet, Image, ScrollView, Linking, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux'; 
import {addBookmark} from '../store/newsSlice';
import MyButton from '../components/MyButton';

function NewsDetailScreen({route}) {
  const {article} = route.params;
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.news.bookmarks);
  const isBookmarked = bookmarks.some((savedItem) => savedItem.url === article.url);

  const onBookmark = () => {
    if (!isBookmarked) {
      dispatch(addBookmark(article));
      Alert.alert('Saved!', 'Article added to your bookmarks.');
    } else {
      Alert.alert('Info', 'This article is already bookmarked.');
    }
  };

  const onReadMore = () => {
    if (article.url) {
      Linking.openURL(article.url).catch(() =>
        Alert.alert('Error', 'Could not open the news source.')
      );
    } else {
      Alert.alert('Error', 'No link available for this article.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      {article.urlToImage && (
        <Image source={{uri: article.urlToImage}} style={styles.image} />
      )}
      
      <View style={styles.content}>
        <Text style={styles.title}>{article.title}</Text>
        
        {article.description && (
          <Text style={styles.description}>{article.description}</Text>
        )}
        
        {article.content && (
          <Text style={styles.body}>{article.content}</Text>
        )}

        <View style={styles.buttonContainer}>
          <MyButton 
            title={isBookmarked ? "✓ Bookmarked" : "Save to Bookmarks"} 
            onPress={onBookmark}
            disabled={isBookmarked} 
          />
          
          <View style={{height: 10}} /> 
          
          <MyButton 
            title="Read Full Article" 
            onPress={onReadMore} 
            color="#1e90ff" 
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  image: { width: '100%', height: 240 },
  content: { padding: 16 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
  description: { fontSize: 16, marginBottom: 8, color: '#444', fontStyle: 'italic' },
  body: { fontSize: 15, marginBottom: 16, color: '#555', lineHeight: 22 },
  buttonContainer: { marginTop: 10, marginBottom: 30 },
});

export default NewsDetailScreen;