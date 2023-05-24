import { NewsEl } from "../models/NewsList";
import { Row, Col } from "react-bootstrap";
import NewsElEntry from "./NewsElEntry";

interface NewsElGridProps {
    articles: NewsEl[],
}

const NewsElGrid = ({ articles } : NewsElGridProps ) => {
    return ( 
        <Row xs={1} sm={2} xl={3} className="g-4">
            {articles.map(el => (
                <Col key={el.url}>
                    <NewsElEntry article={el}/>
                </Col>
            ))}
        </Row>
    );
}
 
export default NewsElGrid;