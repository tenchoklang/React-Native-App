import React from 'react';
import axios from 'axios';

const NewsContext = React.createContext();

export const NewsConsumer = NewsContext.Consumer;

export class NewsProvider extends React.Component{
    constructor(props){
        super(props);
        this.state =  {
            news:'News Here'
            // news: [],
            // search: ''
        }
        this.getNews = this.getNews.bind(this);
    }

    getNews = (query) => {
        const baseUrl = 'https://newsapi.org/v2/everything';
        const apiKey = '1a66e2c2ee0f4395932f309848d94a95';
        const sortBy = 'popularity';
        const language = 'en';
        const url = `${baseUrl}?q=${query}&sortby=${sortBy}&language=${language}&apiKey=${apiKey}`;
    
        // this.setState({
        //     news: "Updated NOW"
        // });

        axios.get(url)
        .then((response) => {
           
            this.setState({
                news:  response.data.articles
            });
            console.warn(this.state);
        })
        .catch(function (error) {
    
        });
    }

    render(){
        return(
            <NewsContext.Provider 
                value={{...this.state, getNews: this.getNews}}>
                {this.props.children}
            </NewsContext.Provider>
        )
    }
}
