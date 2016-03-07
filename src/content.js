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
$('html').addClass('griiid--body-override__a4b553ec');
$('body').addClass('griiid--body-override__a4b553ec');
$('body').wrapInner('<div class="griiid--position__00d7c199">');

/**
 * Create an element for React to mount into.
 */
const id = 'griiid__15054632';
$('body').append(`<div id="${id}"></div>`);
ReactDOM.render(<App />, document.getElementById(id));
