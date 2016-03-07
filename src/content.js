import { Provider } from 'react-redux';
import Root from 'app/root';
import Store from 'app/store';
import './styles/index.css';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Root />
      </Provider>
    );
  }
}

/**
 * Override the default margin and padding on html\body and
 * Wrap the entire side in a container div. Because reasons.
 */
$('html').addClass('griiid__body-override');
$('body').addClass('griiid__body-override');

/**
 * Attempting to iframe the content
 */


/**
 * Create an element for React to mount into.
 */
const id = 'griiid__layout';
$('body').html('').append(`<div id="${id}"></div>`).append(`<iframe src="${window.location.href}" id="griiid__iframe"></iframe>`);
ReactDOM.render(<App />, document.getElementById(id));
