export interface NewsEl {

    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage?: string,
    publishedAt: string,
    content: string,

}

export interface NewsResponse {
    articles : NewsEl[],
}