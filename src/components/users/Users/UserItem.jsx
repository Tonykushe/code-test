import React from 'react'

const UserItem = ({user}) => {
    return (
      <div className="container">
            <div className="row">
                <div className="col-lg-4 mt-4 ml-auto mr-auto">
                    <div className="card">
                        <div className="card-body bg-light ">
                            <h5 className="card-title">Name: {user.name}</h5>
                            <h5 className="card-title">Occupation: {user.occupation}</h5>
                            <h5 className="card-title">Email: {user.email}</h5>
                            <p className="card-text">Bio: {user.bio}</p>
                           
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
}

export default UserItem
