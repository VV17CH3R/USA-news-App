import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import NewsElGrid from '../components/NewsElGrid';
import { NewsEl, NewsResponse } from "../models/NewsList";
import { Alert } from "react-bootstrap";

interface BreakingNewsPageProps {
	newsElems: NewsEl[],
}

export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async () => {
	const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.NEWS_API_KEY);
	const newsResponse: NewsResponse = await response.json();
	return {
		props: { newsElems: newsResponse.articles }
	}
}

export default function BreakingNewsPage({ newsElems }: BreakingNewsPageProps) {
	return (
		<>
			<Head>
				<title key="title">Новости из США - VV17CH3R PROD.</title>
			</Head>
			<main>
				<h1>Свежие новости из CША</h1>
				<Alert>
					Это приложение сделано <strong>Родионом Нараяновым</strong><br />
					Приложение работает с свежими данными из США. Для динамического перевода прямых новостей используйте специальное расширение в Вашем браузере.
					Например: QuickTranslator, uLanguage и др..
				</Alert>
				<NewsElGrid articles={newsElems} />
			</main>
		</>
	)
}
