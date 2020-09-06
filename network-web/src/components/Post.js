import React, {useState} from 'react';
import axios from 'axios';

export default function Post(props) {
  const isLogged = localStorage.getItem("Token");

  const handleLike = () => {
    axios.put(`http://127.0.0.1:8000/restapi/post/${post.id}/like`, {}, {
      headers: {
        Authorization: localStorage.getItem("Token")
      }
    })
      .then(res => {
        console.log(localStorage.getItem("Token"))
        setPost(res.data)
      })
  }

  const [post, setPost] = useState(props.item)

  return <div className="card border-primary mb-3">
      <div className="card-header bg-transparent border-primary text-dark"><strong>@{post.author}</strong> posted :</div>
      <div className="card-body text-primary">
      <p className="card-text">{post.content}</p>
      </div>
      {isLogged ? <div className="btn-group mx-2 my-3">
        <button onClick={() => handleLike()} data-postid={post.id} type="button" className="btn btn-outline-primary">Like</button>
        <button onClick={() => handleLike()} data-postid={post.id} type="button" className="btn btn-outline-danger">Delete</button>
        <button onClick={() => handleLike()} data-postid={post.id} type="button" className="btn btn-outline-warning">Edit</button>
      </div> : null}
      <div className="card-footer bg-transparent border-primary"><strong className="text-dark">{post.likes.length} likes</strong> - <span className="text-muted">Posted on {post.timestamp}</span></div>
  </div>
}