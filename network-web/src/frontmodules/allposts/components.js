import React, {useEffect, useState} from 'react';
import {lookupServer} from '../../actions';

export function handleLike(e) {
  console.log(e)
  const likedPost = (response, status) => {
    if (status === 200) {
      console.log(response)
    }
    else {
      console.log(response)
      alert(response.detail)
    }
  }
  lookupServer(likedPost, 'PUT', `restapi/post/${e.target.dataset.postid}/like`)
}

export function Sidebar() {
  return <div className="col-md-4">
    <div className="card my-4">
    <h5 className="card-header">Search</h5>
    <div className="card-body">
    <div className="input-group">
    <input type="text" className="form-control" placeholder="Search for..."></input>
    <span className="input-group-append">
    <button className="btn btn-success" type="button">Go!</button>
    </span>
    </div>
    </div>
  </div>
</div>
}

export function Button(props) {
    return <button data-postid={props.postId} onClick={handleLike} type="button" className={`btn btn-outline-${props.btnColor}`}>{props.textContent}</button>
}

export function Post(props) {
    const {post} = props

    return <div className="card border-primary mb-3">
        <div className="card-header bg-transparent border-primary text-dark"><strong>@{post.author}</strong> posted :</div>
        <div className="card-body text-primary">
        <p className="card-text">{post.content}</p>
        </div>
        <div className="btn-group mx-2 my-3">
          <Button postId={post.id} btnColor="primary" textContent="Like" />
          <Button postId={post.id} btnColor="danger" textContent="Delete" />
          <Button postId={post.id} btnColor="warning" textContent="Edit" />
        </div>
        <div className="card-footer bg-transparent border-primary"><strong className="text-dark">{post.likes.length} likes</strong> - <span className="text-muted">Posted on {post.timestamp}</span></div>
    </div>
}

export function RenderPosts(props) {
  const[posts, setPosts] = useState([])

  useEffect(() => {
    const postsItems = (response, status) => {
      if (status === 200) {
        setPosts(response)
      }
      else {
        alert(response.detail)
      }
    }
    lookupServer(postsItems, props.actionName, props.pathName)
  }, [])
  return posts.map((item, index) => {
    return <Post post={item} key={index}/>
  })
}

export function AllPostsView() {
  return <><h3 className="text-white pt-3">
  All Posts
  <div className="mb-3">
  <small className="text-muted">View all posts, from all users.</small>
  </div>
  </h3>
  <div className="container">
    <div className="row">
      <div className="col-md-8">
      <RenderPosts actionName='GET' pathName='restapi/posts' />
      </div>
      <Sidebar />
    </div>
  </div></>
}