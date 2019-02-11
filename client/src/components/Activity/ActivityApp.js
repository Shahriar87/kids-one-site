import React, { Component } from "react";
import Highlight from './Highlight';
import { BookList } from './BookList';
import { Favorites } from './Favorites';
import { Menu } from './Menu';
import axios from 'axios';

const styles = {
  body: {
    background: "#e8eaf6"
  },
};


class ActivityApp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [
        null
      ],
      highlight: null,
      visibility: {
        highlight: false,
        booklist: false,
        favorites: false
      },
      favorites: [
        null
      ]
    }
    this.updateQuery = this.updateQuery.bind(this);
    this.updateHighlight = this.updateHighlight.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.updateFavoriteHighlight = this.updateFavoriteHighlight.bind(this);
    this.updateVisibility = this.updateVisibility.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
  }

  // ----- Fetch data from activity API
  fetchQuery() {
    axios.get('api/activity')
      .then((res) => {
        // console.log(res);
        res.data.forEach((item, i) => {
          let element = {};
          element.title = item.title;
          element.imageLink = item.imageLink;
          element.link = item.link;

          this.setState(this.state.items.splice(i, 1, element));
          // console.log(element);
        })

      }).catch((err) => {
        console.error('There was an error fetching data', err);
      });
  }

  // ----- Updating the query based on query type selected
  updateQuery(queryObject) {
    this.setState({
      queryObject: queryObject,
      visibility: {
        highlight: false,
        booklist: true,
        favorites: false
      }
    }, () => {
      this.fetchQuery();
    });
  }

  // ----- Detail info about selected books
  updateHighlight(highlight) {
    console.log(highlight.highlight)
    // console.log(this.state.items[highlight.highlight])
    this.setState({
      highlight: highlight.highlight,
      visibility: {
        highlight: true,
        booklist: true,
        favorites: false
      }
    });
  }

  updateFavoriteHighlight(highlight) {
    this.setState({
      highlight: highlight.highlight,
      visibility: {
        highlight: true,
        booklist: false,
        favorites: true
      }
    });
  }

  addFavorite(data) {
    this.setState({
      items: this.state.items.filter((item, i) => i !== this.state.highlight),
      visibility: {
        highlight: false,
        booklist: false,
        favorites: true
      },
      favorites: [...this.state.favorites, data]
    });

    // ----- Adding Favourites
    axios.post('/api/favorites', data)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  removeFavorite(data) {
    const remove = this.state.favorites;
    remove.splice(this.state.highlight, 1);
    this.setState({
      visibility: {
        highlight: false,
        booklist: false,
        favorites: true
      },
      favorites: [...remove]
    });

    axios.delete(`/api/favorites/${data._id}`, data)
      .then(function (res) {
        console.log(res);
      }).catch(function (err) {
        console.error(err);
      })
  }

  componentDidMount() {

    // ----- Run Scraping
    this.updateQuery();

    // ----- Fetching favourites
    axios.get('/api/favorites')
      .then(response => {
        // console.log('Fetched from mongo', response.data);
        this.setState({
          favorites: response.data
        })
      }).catch(err => {
        console.error(err);
      });
  }

  // ----- Update visibility with state
  updateVisibility(setVisibility) {
    this.setState({
      visibility: {
        highlight: setVisibility.highlight,
        booklist: setVisibility.booklist,
        favorites: setVisibility.favorites
      }
    });
  }

  render() {

    console.log(this.state.favorites[this.state.highlight])

    return (
      <div className="app jumbotron text-center" style={styles.body}>
        {this.state.items[this.state.highlight] ?
          <Highlight
            data={
              this.state.visibility.favorites ?
                this.state.favorites[this.state.highlight] :
                this.state.items[this.state.highlight]}

            visibility={this.state.visibility}
            addFavorite={this.addFavorite}
            removeFavorite={this.removeFavorite}
          /> :
          null}

        <div className="card">
          <ul className="list-group list-group-flush">
            <BookList
              data={this.state.items}
              highlight={this.updateHighlight}
              visibility={this.state.visibility.booklist} />
          </ul>
        </div>


        <div className="card">
          <ul className="list-group list-group-flush">
            <Favorites
              data={this.state.favorites}
              highlight={this.updateFavoriteHighlight}
              visibility={this.state.visibility.favorites} />
          </ul>
        </div>

        <br />

        <Menu setVisibility={this.updateVisibility}
          visibility={this.state.visibility} />

      </div >
    )
  }
}

export { ActivityApp };
