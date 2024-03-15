import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import searchMovies from 'services/serchMovies';
import { Content, List, Item } from './Movies.styled';
const Movies = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieParams = searchParams.get('quary') ?? '';

  useEffect(() => {
    if (!movieParams) return;
    try {
      async function fetchMovies() {
        const { results } = await searchMovies({ movieParams });
        setData(results);
      }
      fetchMovies();
    } catch (error) {
      console.error(error);
    }
  }, [movieParams, searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    const valueMovie = e.target.elements.query.value.trim();
    if (valueMovie === '') {
      toast.info('Вы ничего не ввели');
    } else {
      setSearchParams({ quary: valueMovie });
    }
  };
  const hanldeChange = e => {
    if (e.target.value === '') {
      setSearchParams({});
    }
  };
  return (
    <>
      <Content>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            defaultValue={movieParams}
            onChange={hanldeChange}
          />
          <button type="submit">Search</button>
        </form>
      </Content>
      <div>
        <List>
          {data.length > 0 &&
            data.map(({ title, id }) => (
              <Item>
                <Link key={id} to={`/movies/${id}`}>
                  {title}
                </Link>
              </Item>
            ))}
        </List>
      </div>
    </>
  );
};

export default Movies;
