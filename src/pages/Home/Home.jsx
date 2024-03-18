import { useEffect, useState } from 'react';
import mainRequestMovies from 'services/mainRequestMovies';
import { Title, List } from './Home.styled';
import { Link, useLocation } from 'react-router-dom';
function Home() {
  const [data, setData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const fetchMain = async () => {
      try {
        const { results } = await mainRequestMovies();
        setData([...results]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMain();
  }, []);

  return (
    <>
      <Title>Tranding today</Title>
      <List>
        {data.map(({ title, id }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </List>
    </>
  );
}
export default Home;
