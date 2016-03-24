let React = require ('react');
let ReactRedux = require('react-redux');

let Menu = require('./menu');
let Home = require('./home');
let About = require('./about');

let actions = require('./../actions');

let Page = React.createClass ({

  render() {
    const content = this.props.content;
    const switchLanguage = this.props.switchLanguage;

    if (content) {
      return (
        <div>
          <Menu data={content.page.menu} switchLanguage={switchLanguage}/>
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <Home data={content.page.home}/>
                <About data={content.page.about}/>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return;
    }
  }
});

module.exports = ReactRedux.connect(
  (state) => ({content: state.content}),
  (dispatch) => ({switchLanguage: (lang) => dispatch(actions.switchLanguage(lang))})
)(Page);
