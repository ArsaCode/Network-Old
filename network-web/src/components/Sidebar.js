import React from 'react'

export default function Sidebar() {
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