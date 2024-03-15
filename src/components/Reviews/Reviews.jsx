import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Author, List, Content } from './Reviews.styled';
import reviews from 'services/reviewsRequest';
function Reviews() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchRequest = async () => {
      if (id) {
        const data = await reviews({ id });
        const fullResultData = data.results.map(item => item);
        setData(fullResultData);
      }
    };
    fetchRequest();
  }, [id]);
  return (
    <>
      <List>
        {data.length > 0 &&
          data.map(({ author, content, id }) => (
            <li key={id}>
              <Author>{author}</Author>
              <Content>{content}</Content>
            </li>
          ))}
      </List>
    </>
  );
}
export default Reviews;
