import NewsElGrid from "@/components/NewsElGrid";
import { NewsEl, NewsResponse } from "@/models/NewsList";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Alert } from "react-bootstrap";

interface CategoryNewsPageProps {
    newsEls: NewsEl[],
}

export const getStaticPaths: GetStaticPaths = async () => {
    const categorySlugs = [ // this could be coming from an API
        "business",
        "entertainment",
        "general",
        "health",
        "science",
        "sports",
        "technology",
    ];

    const paths = categorySlugs.map(slug => ({ params: { category: slug } }));

    return {
        paths,
        fallback: false,
    }
    
}

export const getStaticProps: GetStaticProps<CategoryNewsPageProps> = async ({ params }) => {
    const category = params?.category?.toString();
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`);
    const newsResponse: NewsResponse = await response.json();
    return {
        props: { newsEls: newsResponse.articles },
        revalidate: 5 * 60,
    }
    // let error go to 500 page
}


const CategoryNewsPage = ({ newsEls }: CategoryNewsPageProps) => {
    const router = useRouter();
    const categoryName = router.query.category?.toString().toUpperCase();

    const title = categoryName + " NEWS";

    return (
        <>
            <Head>
                <title key="title">{`${title} - VV17CH3R`}</title>
            </Head>
            <main>
                <h1>{title}</h1>
                <Alert>
                    Приложение работает с свежими данными из США. Для динамического перевода прямых новостей используйте специальное расширение в Вашем браузере.
					Например: QuickTranslator, uLanguage и др..
                </Alert>
                <NewsElGrid articles={newsEls} />
            </main>
        </>
    );
}

export default CategoryNewsPage;