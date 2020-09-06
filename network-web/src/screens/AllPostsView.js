import React, {useState, useEffect} from 'react';
import Sidebar from '../components/Sidebar';
import Post from '../components/Post';

import axios from 'axios';

export default function AllPostsViews() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/restapi/posts', {}, {
      headers:
      {
        Authorization: localStorage.getItem("Token")
      }
    })
    .then(res => {
      setPosts(res.data)
    })
  }, [])

  return <><div className="container">
              <div className="row mb-3">
                <div className="col">
                  <h3 className="text-white pt-3">
                  All Posts
                  <div className="mb-3">
                  <small className="text-muted">View all posts, from all users.</small>
                  </div>
                  </h3>
                  <form className="text-primary">
                  <div className="form-group">
                    <label htmlFor="newPost">Create a new post</label>
                    <input name="content" type="textarea" className="form-control" id="newPost"  placeholder="Enter email"></input>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  {posts.length > 0 && posts.map((item, key) => (
                    <Post item={item} key={key} />
                  ))}
                </div>
                <Sidebar />
              </div>
            </div></>
}