import NewsElGrid from "@/components/NewsElGrid";
import Head from "next/head";
import { FormEvent, useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { NewsEl } from "../models/NewsList";

const SearchNewsPage = () => {
    const [serachResults, setSerachResults] = useState<NewsEl[] | null>(null);
    const [serachResultsLoading, setSerachResultsLoading] = useState(false);
    const [serachResultsLoadingIsError, setSerachResultsLoadingIsError] = useState(false);

    async function handleSubmit(sE: FormEvent<HTMLFormElement>) {
        sE.preventDefault();
        const formData = new FormData(sE.target as HTMLFormElement);
        const searchQuery = formData.get("searchQuery")?.toString().trim();

        if (searchQuery) {
            try {
                setSerachResults(null);
                setSerachResultsLoadingIsError(false);
                setSerachResultsLoading(true);

                const response = await fetch("api/search-news?q=" + searchQuery);
                const newsElements: NewsEl[] = await response.json();
                setSerachResults(newsElements);

            } catch (error) {
                console.error(error);
                setSerachResultsLoadingIsError(true);
            } finally {
                setSerachResultsLoading(false);
            }
        }
    }


    return (
        <>
            <Head>
                <title key="title">Search - VV17CH3R</title>
            </Head>

            <main>
                <h1>Search News</h1>
                <Alert>
					This page uses <strong>getServerSideProps</strong> to fetch data server-side on every request.
					This allows search engines to crawl the page content and <strong>improves SEO</strong>.
				</Alert>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="seacrch-input">
                        <Form.Label>Search query</Form.Label>
                        <Form.Control
                            name="searchQuery"
                            placeholder="E.g. polytics, bitcoin, sport, ..."
                        />
                    </Form.Group>
                    <Button type="submit" className="mb-3" disabled={serachResultsLoading}>
                        Search
                    </Button>
                </Form>


                <div className="d-flex flex-column align-items-center">
                    {serachResultsLoading && <Spinner animation="border" />}
                    {serachResultsLoadingIsError &&
                        <Alert variant="danger"> Something went wrong. Please try again. </Alert>
                    }
                    {serachResults?.length === 0 &&
                        <Alert variant="dark"> No news found. Try another query. </Alert>
                    }
                    {serachResults && <NewsElGrid articles={serachResults} />
                    }
                </div>
            </main>
        </>
    );
}

export default SearchNewsPage;