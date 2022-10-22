import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from './auth';
import { blogdata } from './blogdata'

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const auth = useAuth();

  const blogpost = blogdata.find(post => post.slug === slug);

  //const canDelete = (auth.user ? auth.user.isAdmin : false) || (blogpost.author === auth.user ? auth.user.username : false);

  let canDelete = false;

  if (auth.user) {
    canDelete = auth.user.isAdmin || blogpost.author === auth.user.username;
  };

  const returnToBlog = () => {
    navigate('/blog');
  };
  
  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>

      {canDelete && (
        <button>Eliminar blogpost</button>
      )}
    </>
  );
}

export { BlogPost };