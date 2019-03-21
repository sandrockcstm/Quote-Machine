import React, { Component } from "react";
import ReactFCCtest from "react-fcctest";

class App extends Component {
  render() {
    //Quotes and authors.  Quotes are matched with author by index.
    let quotes = [
      "\"Don't cry because it's over, smile because it happened.\"",
      '"Be yourself; everyone else is already taken."',
      '"You only live once, but if you do it right, once is enough."',
      '"If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals."',
      '"I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."'
    ];
    let author = [
      "Dr. Suess",
      "Oscar Wilde",
      "Mae West",
      "J.K. Rowling",
      "Maya Angelou"
    ];
    return <QuoteMachine quotes={quotes} author={author} />;
  }
}

//The Quote Machine Component
class QuoteMachine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: props.quotes,
      author: props.author,
      randomQuote: Math.floor(Math.random() * props.quotes.length) //Chooses a random index for our quote.
    };

    this.buttonHandler = this.buttonHandler.bind(this);
  }

  //Changes the quote by updating the state with a new quote index
  buttonHandler() {
    this.setState({
      randomQuote: Math.floor(Math.random() * this.props.quotes.length)
    });
    return;
  }

  render() {
    document.body.style = "background: beige;";

    return (
      <React.Fragment>
        {/* Page Title */}
        <nav className="navbar fixed-top navbar-dark bg-dark" id="title-box">
          <span className="navbar-brand mb-0 h1">Quote Machine</span>
        </nav>

        {/* Quote Box */}
        <div className="container">
          <div className="row">
            <div className="col-3" />
            <div className="card text-center col-md-6" id="quote-box">
              <blockquote id="text" className="blockquote mb-2">
                {this.state.quotes[this.state.randomQuote]}
              </blockquote>
              <footer id="author" className="blockquote-footer mb-2">
                {this.state.author[this.state.randomQuote]}
              </footer>

              {/* Button */}
              <div className="container">
                <div className="row">
                  <div className="col-3">
                    <a href="twitter.com/intent/tweet" id="tweet-quote">
                      <i className="fab fa-twitter col-3" />
                    </a>
                  </div>
                  <div className="col-4" />

                  <div className="col-5 mb-3">
                    <button
                      id="new-quote"
                      className="btn btn-primary"
                      onClick={this.buttonHandler}
                    >
                      Random Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
//yield;
