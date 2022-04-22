import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    let postName = "Неназванный пост";
    if (props.postName) {
         postName = props.postName;
    }
    let postText = "Неназванный пост";
    if (props.children) {
        postText = props.children;
    }

    return (
        <div>
            <h2 className={styles.redded}>{postName}</h2>
            <p>{postText}</p>
        </div>
    );
};

export default Post;