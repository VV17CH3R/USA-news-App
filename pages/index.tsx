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
				<title key="title">Breaking news - VV17CH3R</title>
			</Head>
			<main>
				<h1>Breaking news</h1>
				<Alert>
					This page uses <strong>getServerSideProps</strong> to fetch data server-side on every request.
					This allows search engines to crawl the page content and <strong>improves SEO</strong>.
				</Alert>
				<NewsElGrid articles={newsElems} />
			</main>
		</>
	)
}
