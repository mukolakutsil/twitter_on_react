import React, { Component } from 'react';
import AppHeader from '../app-header/app-header';
import PostAddForm from '../post-add-form/post-add-form';
import PostList from '../post-list/post-list';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import SearchPanel from '../search-panel/search-panel';
import nextId from "react-id-generator";

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { label: 'Hi!', important: false, like: false, id: "dwa" },
                { label: 'My name is Mykola', important: false, like: false, id: "eeq" },
                { label: 'I write code', important: false, like: false, id: "aaf" },
            ],
            term: '',
            filter: 'all'
        }
    }

    deletePost = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(item => item.id === id);
            const newArr = [...data.splice(0, index), ...data.splice(index + 1)];
            return {
                data: newArr
            }
        })
    }

    addPost = (body) => {

        if (body) {
            const newPost = {
                label: body,
                important: false,
                like: false,
                id: nextId()
            }

            this.setState(({ data }) => {
                let newArr = [...data, newPost];

                return {
                    data: newArr
                }
            })
        } else {
            alert('Введіть текст')
        }
    }


    onToggleImportant = (id) => {
        this.setState(({ data }) => {

            const index = data.findIndex(item => item.id === id);

            const old = data[index];

            const newItem = { ...old, important: !old.important };

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })

    }

    onToggleLiked = (id) => {

        this.setState(({ data }) => {
            const index = data.findIndex(item => item.id === id);

            const old = data[index];

            const newItem = { ...old, like: !old.like };

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })

    }


    onUpdateSearch = (term) => {
        this.setState({ term })
    }

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.label.indexOf(term) > -1
        });
    }

    filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter })
    }

    render() {
        const { data, term, filter } = this.state;
        const allPosts = data.length;
        const liked = data.filter(item => item.like).length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app">
                <AppHeader
                    allPosts={allPosts}
                    liked={liked}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                    posts={visiblePosts}
                    deletePost={this.deletePost}
                />
                <PostAddForm addPost={this.addPost} />
            </div>
        )
    }
}








