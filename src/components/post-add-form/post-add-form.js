import React, { Component } from 'react';

import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addPost(this.state.text);
        this.setState({
            text: ''
        })
    }

    render() {

        return (
            <form
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="про що ви думаєте зараз?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />

                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                >
                    Добавити
            </button>
            </form>
        )
    }

}



// const PostAddForm = ({ addPost }) => {

//     const input = React.createRef();

//     return (
//         <div className="bottom-panel d-flex">
//             <input
//                 type="text"
//                 ref={input}
//                 placeholder="про що ви думаєте зараз?"
//                 className="form-control new-post-label"
//             />

//             <button
//                 type="submit"
//                 className="btn btn-outline-secondary"
//                 onClick={() => {
//                     addPost(input.current.value);
//                     input.current.value = '';
//                 }}>
//                 Добавити
//             </button>
//         </div>
//     )
// }

