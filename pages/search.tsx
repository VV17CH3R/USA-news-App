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
                <title key="title">Поиск - VV17CH3R PROD.</title>
            </Head>

            <main>
                <h1>Искать новости</h1>
                <Alert>
                    Приложение работает с свежими данными из США. Для динамического перевода прямых новостей используйте специальное расширение в Вашем браузере. 
                    Например: QuickTranslator, uLanguage и др.. 
				</Alert>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="seacrch-input">
                        <Form.Label>Поисковый запрос:</Form.Label>
                        <Form.Control
                            name="searchQuery"
                            placeholder="Например: bitkoin, sport, LadyGaGa..."
                        />
                    </Form.Group>
                    <Button type="submit" className="mb-3" disabled={serachResultsLoading}>
                        Поиск
                    </Button>
                </Form>


                <div className="d-flex flex-column align-items-center">
                    {serachResultsLoading && <Spinner animation="border" />}
                    {serachResultsLoadingIsError &&
                        <Alert variant="danger"> Что-то пошло не так. Попробуйте снова. </Alert>
                    }
                    {serachResults?.length === 0 &&
                        <Alert variant="dark"> По данному запроу ничего не найдено. </Alert>
                    }
                    {serachResults && <NewsElGrid articles={serachResults} />
                    }
                </div>
            </main>
        </>
    );
}

export default SearchNewsPage;