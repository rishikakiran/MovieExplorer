export interface Movie{
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
    vote_count: number;
    vote_average:number;
    comments: string;
    userId: string;
};

export interface RetrievedMovie{
    movieId: number;
    name: string;
    posterPath: string;
    overview: string;
    releaseDate: string;
    voteCount: number;
    voteAverage:number;
    comments: string;
    userId: string;
};