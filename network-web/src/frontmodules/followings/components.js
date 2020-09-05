import React from 'react'
import {RenderPosts, Sidebar} from '../allposts/components'

export function FollowingsView() {
    return <><h3 className="text-white pt-3">
    Followings Posts
    <div className="mb-3">
    <small className="text-muted">View the posts from the users you are following.</small>
    </div>
    </h3>
    <div className="container">
      <div className="row">
        <div className="col-md-8">
        <RenderPosts actionName='GET' pathName='restapi/user/arsa' />
        </div>
        <Sidebar />
      </div>
    </div></>
}