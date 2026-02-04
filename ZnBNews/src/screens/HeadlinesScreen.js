import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import NewsCard from '../components/NewsCard';

const CATEGORIES = [
  {label: 'Tech', value: 'technology'},
  {label: 'Sports', value: 'sports'},
  {label: 'Health', value: 'health'},
  {label: 'Science', value: 'science'},
  {label: 'Business', value: 'business'},
  {label: 'Games', value: 'games'},
];
const COUNTRIES = [
  {label: 'United States', value: 'us'},
  {label: 'Pakistan', value: 'pk'},
  {label: 'United Kingdom', value: 'gb'},
  {label: 'Australia', value: 'au'},
  {label: 'France', value: 'fr'},
  {label: 'Canada', value: 'ca'},
];

function HeadlinesScreen({navigation}) {
  const [category, setCategory] = useState('technology');
  const [country, setCountry] = useState('us');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const apiKey = 'a40c6a12af5b42aebbc8e70223d56c0b';
       let url = '';

    if (country === 'pk') {
      url = `https://newsapi.org/v2/everything?q=${category} Pakistan&apiKey=${apiKey}`;
    } else if (country === 'gb') {
      url = `https://newsapi.org/v2/everything?q=${category} UK&apiKey=${apiKey}`;
    } else if (country === 'au') {
      url = `https://newsapi.org/v2/everything?q=${category} AustraliaS&apiKey=${apiKey}`;
    } else if (country === 'fr') {
      url = `https://newsapi.org/v2/everything?q=${category} France&apiKey=${apiKey}`;
    } else if (country === 'ca') {
      url = `https://newsapi.org/v2/everything?q=${category} Canada&apiKey=${apiKey}`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
    }
        const response = await fetch(url);
        const json = await response.json();
        setArticles(json.articles ?? []);
      } catch (e) {
        console.warn('Failed to fetch news', e);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, country]);

  const renderItem = ({item}) => (
    <NewsCard
      title={item.title}
      description={item.description}
      imageUrl={item.urlToImage}
      onPress={() => navigation.navigate('NewsDetail', {article: item})}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.filters}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}>
          {CATEGORIES.map(cat => {
            const isActive = cat.value === category;
            return (
              <TouchableOpacity
                key={cat.value}
                style={[
                  styles.categoryButton,
                  isActive && styles.categoryButtonActive,
                ]}
                onPress={() => setCategory(cat.value)}>
                <Text
                  style={[
                    styles.categoryText,
                    isActive && styles.categoryTextActive,
                  ]}>
                  {cat.label.toUpperCase()}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <Picker
          selectedValue={country}
          onValueChange={setCountry}
          style={styles.picker}>
          {COUNTRIES.map(c => (
            <Picker.Item key={c.value} label={c.label} value={c.value} />
          ))}
        </Picker>
      </View>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#1e90ff" />
        </View>
      ) : (
        <FlatList
          data={articles}
          keyExtractor={(item, index) => item.url || String(index)}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  filters: {
    backgroundColor: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 8,
    elevation: 2,
  },
  categoriesContainer: {
    paddingHorizontal: 4,
  },
  categoryButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 4,
  },
  categoryButtonActive: {
    backgroundColor: '#1e90ff',
    borderColor: '#1e90ff',
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
  },
  categoryTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
  picker: {
    marginTop: 4,
  },
  listContent: {
    paddingVertical: 8,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HeadlinesScreen;

