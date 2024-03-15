import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import {
  CustomNavLink,
  Section,
  Img,
  Content,
  List,
  ListGenres,
  DescriptionOverview,
  Additional,
  UnderContent,
} from './MovieDetails.styled';
import { useEffect, useRef, useState } from 'react';
import movieRequest from 'services/movieRequest';
function MovieDetails() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const location = useLocation();
  const backLinkLocatuonRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        if (id) {
          const {
            poster_path,
            title,
            vote_average,
            release_date,
            overview,
            genres,
          } = await movieRequest({ id });
          setData({
            poster: poster_path,
            title: title,
            voteAverage: vote_average,
            releaseDate: release_date,
            overview: overview,
            genres: genres,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, [id]);
  const { poster, title, voteAverage, releaseDate, overview, genres } = data;
  const releaseYear = releaseDate ? releaseDate.slice(0, 4) : '';

  const resultAverage = Math.round(voteAverage * 10) + '%';
  const resultGenres =
    genres && genres.map(({ name, id }) => <li key={id}>{name}</li>);
  return (
    <Section>
      <CustomNavLink to={backLinkLocatuonRef.current}>Go back</CustomNavLink>
      <Content>
        <Img src={`https://image.tmdb.org/t/p/w300${poster}`} alt={title} />
        <List>
          <li>
            <b>
              {title} {releaseYear}
            </b>
          </li>
          <li>Use score: {resultAverage}</li>
          <li>
            <b>Overview</b>
            <DescriptionOverview>{overview}</DescriptionOverview>
          </li>
          <li>
            <b>Genres</b>
            <ListGenres>{resultGenres}</ListGenres>
          </li>
        </List>
      </Content>
      <UnderContent>
        <hr />
        <Additional>Additional information</Additional>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <div>
          <Suspense feedback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
        <hr />
      </UnderContent>
    </Section>
  );
}

export default MovieDetails;
