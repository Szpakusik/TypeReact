import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

interface IProps {
    firstName: string
    secondName: string
}

function Thanks({ firstName, secondName }: IProps) {
  return (
    <>
        <h1>Thanks {firstName} {secondName}</h1>
        <Link to={'/homepage'}>
            <button>Go to homepage</button>
        </Link>
    </>
  );
}

export default Thanks;
