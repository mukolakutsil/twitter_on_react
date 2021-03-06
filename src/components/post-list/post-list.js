import AppHeader from '../app-header/app-header';
import PostListItem from '../post-list-item/post-list-item';

import './post-list.css';

const PostList = ({ posts, deletePost, onToggleLiked, onToggleImportant }) => {

    const elements = posts.map(item => {
        const { id, ...itemProps } = item;

        return (
            <li key={id} className="list-group-item">
                <PostListItem
                    {...itemProps}
                    deletePost={() => deletePost(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                />

            </li>
        )
    });

    return (
        <ul className="app-list list-group">

            {elements}

        </ul>
    )
}


export default PostList;