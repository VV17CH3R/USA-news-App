import { Alert } from "react-bootstrap";

const err404 = () => {
    return ( 
        <>
            <div>
                <Alert variant="danger">
                    <h1>Страница не найдена | 404</h1>
                    <p>Похоже такой страницы не существует.</p>
                </Alert>
            </div>
        </>
     );
}
 
export default err404;