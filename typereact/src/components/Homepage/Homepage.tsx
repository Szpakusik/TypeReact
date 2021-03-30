import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

function Homepage() {
  return (
    <>
        <h1>Homepage</h1>
        <Link to={'/form'}>
            <button>Show me the form</button>
        </Link>
    </>
  );
}

export default Homepage;
