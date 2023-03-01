import * as ReactRouter from 'react-router-dom';
import '../styles/Error.css';
import '../styles/App.css';

function Error() {
    const error = ReactRouter.useRouteError();
    console.log(error);

    if(error.status === 404) {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Oops! Page not found!</h1>
                    <h2 className="Error-message">The requested content or ressource could not be found.</h2>
                    <h3 className="Error-paragraph">If you think this is an unexpected error, please report it to me!</h3>
                    <a className="Button Button-error" href="/">Go back Home</a>
                </header>
            </div>
        );
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Oops! An error occured!</h1>
                <h2 className="Error-message">Error: {error.error.message}</h2>
                <h2 className="Error-status">Status: <span className="Error-status-number">{error.status}</span></h2>
                <h3 className="Error-paragraph">If you think this is an unexpected error, please report it to me!</h3>
                <a className="Button Button-error" href="/">Go back Home</a>
            </header>
        </div>
    );
}

export default Error;