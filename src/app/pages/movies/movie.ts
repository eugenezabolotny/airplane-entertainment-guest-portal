export class Movie {
    id: number;
    genre: string;
    poster: string;
    title: string;
    age: string;
    director: string;
    writers: string;
    stars: string;
    duration: string;
    description: string;

    constructor(id: number,
                genre: string,
                poster: string,
                title: string,
                age: string,
                director: string,
                writers: string,
                stars: string,
                duration: string,
                description: string) {
        this.id = id;
        this.genre = genre;
        this.poster = poster;
        this.title = title;
        this.age = age;
        this.director = director;
        this.writers = writers;
        this.stars = stars;
        this.duration = duration;
        this.description = description;
    }
}
