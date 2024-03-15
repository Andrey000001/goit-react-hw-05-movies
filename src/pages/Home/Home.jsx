import { useEffect, useState } from 'react';
import mainRequestMovies from 'services/mainRequestMovies';
import { Title, List } from './Home.styled';
import { Link } from 'react-router-dom';
function Home() {
  const [data, setData] = useState([]);

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
          <li>
            <Link key={id} to={`movies/${id}`}>
              {title}
            </Link>
          </li>
        ))}
      </List>
    </>
  );
}
export default Home;
