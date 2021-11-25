import { Provider } from 'react-redux'
import storeConfig from './storeConfig/store'

const store = storeConfig()


ReactDOM.render(
    <React.StrictMode>
    <Provider store={store}>
            <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );

    