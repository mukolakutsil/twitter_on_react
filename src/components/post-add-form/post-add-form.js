import React from 'react';

import './post-add-form.css';


const PostAddForm = ({ addPost }) => {

    const input = React.createRef();

    return (
        <div className="bottom-panel d-flex">
            <input
                type="text"
                ref={input}
                placeholder="про що ви думаєте зараз?"
                className="form-control new-post-label"
            />

            <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={() => {
                    addPost(input.current.value);
                    input.current.value = '';
                }}>
                Добавити
            </button>
        </div>
    )
}


export default PostAddForm;