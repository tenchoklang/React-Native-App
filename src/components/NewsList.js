import React from 'react';
import { FlatList, Button, Linking, Image, StyleSheet, Text, View } from 'react-native';
import {NewsConsumer} from '../store/News'

const onButtonPressed = ()=>{
    console.warn('Button Pressed');
}

const renderItem = ({item}) => {
    return (
      <View style={styles.row}>
        <Text>
            TITLE: {item.title}
        </Text>
        <Text>
            AUTHOR: {item.title}
        </Text>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: item.urlToImage}}
        />
        <Text>
            DESCRIPTION: {item.content}
        </Text>
        <Button
            onPress={()=>Linking.openURL(item.url)}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
}

const extractKey = (item, index) => `list-item-${index}`


const NewsList = ()=>(
    <NewsConsumer>
    {({news})=>(
        <FlatList
            style={styles.container}
            data={news}
            renderItem={renderItem}
            keyExtractor={extractKey}
        />

        // <View style={styles.container}>
        //     <Text>News Length: {news.length}</Text>
        // </View>
    )}
    </NewsConsumer>
)

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      flex: 1,
    },
    row: {
      padding: 15,
      marginBottom: 5,
      backgroundColor: 'skyblue',
    },
  })

export default NewsList;