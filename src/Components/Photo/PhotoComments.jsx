import React, { useContext } from 'react'
import PhotoCommentsForm from './PhotoCommentsForm';

import styles from './PhotoComment.module.css';

import { useSelector } from 'react-redux';

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  
  const { data } = useSelector(state => state.user);

  return (
    <>
      <ul className={`${styles.comments}  ${props.single ? styles.single : ''}`}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {data && <PhotoCommentsForm single={props.single} id={props.id} setComments={setComments} />}
    </>
  );
};   

export default PhotoComments