import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from 'react';
import user from '../styles/user.module.css';

const displayCard = 20; // display 20 cards on button click
export const GET_USERS = gql`
    query($start: Int, $end: Int) {
        users(start: $start, end: $end) {
            id
            name
            address
            email
            phonenumber
        }
    }
`;

const Details = () => {
  const { fetchMore } = useQuery(GET_USERS, {
    variables: {
      start: 0,
      end: 0
    }
  });
  const [usersList, setUsersList] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
      handleloadmore();
  }, []);


  const handleloadmore = async () => {
    try {
      setLoading(true);
    const res = await fetchMore({
      variables: {
        start: usersList.length,
        end: usersList.length + displayCard,
      },
    })
    setError(null);
    setLoading(false);
    updateList(res.data);
  }
  catch(e){
    setLoading(false);
    setError(e);
  }
  }

  const updateList = (data) => {
    setUsersList((prev) => {
      const newState = [];
      const newItems = data?.users || [];
      newState.push(...prev, ...newItems );
      return newState;
  });
  }

  return (
    <div>
    {loading && <span className={user.loader}>Loading........</span>}
      {error ? <div>{error.message}</div> : null}
      <div className={user.container}>
        {usersList && usersList.map((item) =>
          <div key={item.id} className={user.tiles}>
            <h3>{item.id + 1} {item.name}</h3>
            <p>{item.address}</p>
            <p>{item.email}</p>
            <p>{item.phonenumber}</p>
          </div>
        )}
      </div>
      <button onClick={handleloadmore} className={user.load}>Load more...</button>
      
    </div>

  )
}

export default Details