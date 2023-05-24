import { NewsEl } from "../models/NewsList";
import { Card } from "react-bootstrap";
import Image from "next/image";
import imagePalceholder from "../assets/images/newsarticle_placeholder.jpg";
import styles from "../styles/NewsElEntry.module.css";

interface NewsElEntryProps {
    article: NewsEl,
}

const NewsElEntry = ({article : {title, description, url, urlToImage}}: NewsElEntryProps) => {

    const validImageURL = (urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://")) 
    ? urlToImage 
    : undefined

    return ( 
        <a href={url}>
            <Card className="h-100">
                <Image 
                    src={validImageURL || imagePalceholder}
                    alt="News Element Image"
                    width={500}
                    height={200}
                    className={`card-img-top ${styles.elImage}`}
                />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </a>
     );
}
 
export default NewsElEntry;