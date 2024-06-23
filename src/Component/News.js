import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spin from './Spin';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  constructor(props) {
    super(props);
    console.log("this is cons");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    }
    document.title = `Adinews- ${this.props.category}`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(30);
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.props.setProgress(75);
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    this.props.setProgress(100);
  }


  async componentDidMount() {
    this.updateNews();
  }
  // handlePrevClick = async () => {
  //   this.setState({ page: this.state.page - 1 })
  //   this.updateNews();
  // }

  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 })
  //   this.updateNews();
  // }

  fetchMoreData = async() => {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7cd70400e89546d1b59274f57b1539ed&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({page:this.state.page+1})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: this.state.articles.concat(parsedData.articles),
       totalResults: parsedData.totalResults })
  };


  render() {
    return (
      <>
        <h1 className="text-center">AdiNews - Top Headlines on {this.props.category}</h1>
        {this.state.loading && <Spin/>}

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spin/>}>
              <div className="container">


        <div className="row">

            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
            </div>
        </div>
          </InfiniteScroll>
       </>
        
    )
  }
}

export default News



// https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7cd70400e89546d1b59274f57b1539ed