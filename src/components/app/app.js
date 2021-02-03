import React from 'react';
import AppHeader from '../app-header/app-header';
import PostAddForm from '../post-add-form/post-add-form';
import PostList from '../post-list/post-list';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import SearchPanel from '../search-panel/search-panel';

import './app.css';

const App = () => {

    const data = [
        { label: 'Hi!', important: true, id: 1 },
        { label: 'My name if Mykola', important: false, id: 2 },
        { label: 'I write code', important: true, id: 3 },
    ]
    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddForm />
        </div>
    )

};

export default App;