import React from 'react'
import Enviar from '../../Assets/enviar.svg'; 

import UseFetch from '.././Hooks/useFetch';
import { COMMENT_POST } from '../Hooks/Api';

import styles from './PhotoCommentsForm.module.css';
import Error from '.././Helper/Error';

const PhotoCommentsForm = ({id, setComments, single}) => {
    const [comment, setComment] = React.useState('');
    const {request, error } = UseFetch();

    const  handleSubmit = async (event) => {
        event.preventDefault();
        const {url, options} = COMMENT_POST(id, {comment});

        const { response, json } = await request(url, options);
        if(response.ok) {
            setComment('');
            setComments((comments) => [...comments, json]);
        }
        console.log(json);
    }
    
  return (
    <form onSubmit={handleSubmit} className={`${styles.form}  ${single ? styles.single : ''}`}>
      <textarea
        className={styles.textarea}
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        id={comment}
        name={comment}
        placeholder="Comente..."
      />

      <button className={styles.button}>
        {" "}
        <img src={Enviar} />
      </button>
      <Error error={error} />
    </form>
  );
}

export default PhotoCommentsForm;