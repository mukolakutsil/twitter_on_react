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
                { label: 'Hi!', important: true, id: "dwa" },
                { label: 'My name is Mykola', important: false, id: "eeq" },
                { label: 'I write code', important: true, id: "aaf" },
            ]
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

    render() {
        return (
            <div className="app">
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList
                    posts={this.state.data}
                    deletePost={this.deletePost} />
                <PostAddForm addPost={this.addPost} />
            </div>
        )
    }
}








