import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Something Went Wrong!!</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>go back &larr;</button>
    </div>
  );
}

export default Error;
