import React, {useState, useEffect} from 'react'
import Post from '../components/Post';
import Sidebar from '../components/Sidebar';
import axios from 'axios'

export default function FollowingsView() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/restapi/posts', {
        "Authorization": localStorage.getItem("Token")
        })
        .then(res => {
        setPosts(res.data)
        })
    }, [])

    return <><h3 className="text-white pt-3">
    Followings Posts
    <div className="mb-3">
    <small className="text-muted">View the posts from the users you are following.</small>
    </div>
    </h3>
    <div className="container">
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