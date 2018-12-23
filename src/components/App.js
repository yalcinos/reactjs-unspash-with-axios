import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';


class App extends React.Component {

  state = {images: [] };

   onSubmitForm = async (term) => {
    const response= await unsplash.get('/search/photos',{
       params: {query: term },
    });
    console.log(this);
    this.setState ({ images: response.data.results });
  };

  render(){
    return(
      <div className="ui container" style={{marginTop:'10px'}}>
        <SearchBar onSubmit={this.onSubmitForm} />
        Found: {this.state.images.length } images
      </div>
      );
    }
}

export default App;
