import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {NewsConsumer} from '../store/News'

export default class Search extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }

    onSubmit = (getNews) => {
        getNews(this.state.search);
        this.setState({search:'SUBMITTED'});
        //navigate to the newslist component after user enters a query
        this.props.navigation.navigate('NewsList');
    }

    render() {
      return (
        <NewsConsumer>
        {({news, getNews})=>(
            <View style={styles.container}>
                <Text>Search For something </Text>
                <TextInput 
                style={{height: 40,width:200 ,borderColor: 'gray', borderWidth: 1}}
                onSubmitEditing={()=> this.onSubmit(getNews)}
                onChangeText={(search) => this.setState({search})}
                value={this.state.search}></TextInput>

            </View>
        )}
        </NewsConsumer>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


//   <NewsConsumer>
            // {(stateValue)=>(
            //     <View style={styles.container}>
            //         <Text>Search Component: {stateValue}</Text>
            //     </View>
            // )}
//         </NewsConsumer>    
