import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import NewsCard from '../components/NewsCard';

function BookmarksScreen({navigation}) {
  const bookmarks = useSelector(state => state.news.bookmarks);

  const renderItem = ({item}) => (
    <NewsCard
      title={item.title}
      description={item.description}
      imageUrl={item.urlToImage}
      onPress={() => navigation.navigate('NewsDetail', {article: item})}
    />
  );

  if (!bookmarks || bookmarks.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No bookmarks yet.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={bookmarks}
        keyExtractor={(item, index) => item.url || String(index)}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    paddingVertical: 8,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
});

export default BookmarksScreen;

