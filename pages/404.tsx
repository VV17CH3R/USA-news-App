import { Alert } from "react-bootstrap";

const err404 = () => {
    return ( 
        <>
            <div>
                <Alert variant="danger">
                    <h1>Not found | 404</h1>
                    <p>Looks like page don`t found</p>
                </Alert>
            </div>
        </>
     );
}
 
export default err404;