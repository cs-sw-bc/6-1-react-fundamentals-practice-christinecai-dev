import {MovieBanner} from './MovieBanner.jsx';
import {MovieDetails} from './MovieDetails.jsx';
import {CastList} from './CastList.jsx';
import {RatingsBox} from './RatingsBox.jsx';

export function MoviePage(){
    const movieTitle = "Interstellar";
    const bannerImage = "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg";
    const description = "A team of explorers travels through a wormhole in space to ensure humanity’s survival.";
    const year = 2014;
    const imdbRating = 8.7;
    const shortReview = "Epic, emotional sci-fi with stunning visuals and a powerful soundtrack."; 

    return(
        <div style = {{ maxWidth: 900, margin: "0 auto", padding: 16}}>
            <MovieBanner title={movieTitle} bannerImage={bannerImage}/>
            <RatingsBox rating={imdbRating} review={shortReview}/>
            <MovieDetails description = {description} year = {year}/>
            <CastList/>
        </div>
    );
}
