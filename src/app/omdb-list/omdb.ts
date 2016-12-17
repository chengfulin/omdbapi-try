export interface OmdbItem {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
}

export interface OmdbResponse {
    totalResults: string;
    Search: OmdbItem[];
}