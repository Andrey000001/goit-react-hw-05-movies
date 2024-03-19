import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import castRequest from 'services/castRequest';
import { Item } from './Cast.styled';
function Cast() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchRequest = async () => {
      try {
        if (id) {
          const { cast } = await castRequest({
            id,
          });
          const formattedDate = cast.map(
            ({ original_name, character, profile_path, id }) => ({
              ids: id,
              name: original_name,
              character: character,
              profile_path: profile_path,
            })
          );
          setData(formattedDate);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchRequest();
  }, [id]);
  return (
    <>
      {data.length > 0 ? (
        <ul>
          {data.map(({ name, ids, character, profile_path }) => (
            <Item key={ids}>
              <img
                src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character} </p>
            </Item>
          ))}
        </ul>
      ) : (
        'Unfortunately, there is no information available for this film 😟'
      )}
    </>
  );
}

export default Cast;
