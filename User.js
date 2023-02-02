import React from 'react'
import { connect } from 'react-redux'
import { useParams,useNavigate } from 'react-router'
import { mapStateToProps } from '../Users/Users'


import './User.scss'

 function User({data}) {
   const id = useParams().id
   const myUser = data.find(elem => {
     return elem.id == id
   })
   const posts = myUser.posts
   const navigate = useNavigate()

   function name(){
    let x = myUser.name.indexOf(' ') + 1
    return `${myUser.name.charAt(0)} ${myUser.name.charAt(x)}`
   }

  return (
    <section className='User'>
        <div className='User-Content'>
            <div className='User-Content-Info'>
                <div className='User-Content-Info-Name'>
                    <span>{name()}</span>
                    <span>{myUser.name}</span>
                </div>
                <div className='User-Content-Info-Other'>
                    <span>
                        <span>user id:</span>
                        {posts[0].userId}
                    </span>
                    <span>
                        <span>username:</span>
                        {myUser.username}
                    </span>
                    <span>
                        <span>email:</span>
                        {myUser.email}
                    </span>
                    <span>
                        <span>phone:</span>
                        {myUser.phone}
                    </span>
                    <span>
                        <span>website:</span>
                        {myUser.website}
                    </span>
                    <span>
                        <span>city:</span>
                        {myUser.address.city}
                    </span>
                    <span>
                        <span>company:</span>
                        {myUser.company.name}
                    </span>
                    <span>
                        <span>street:</span>
                        {myUser.address.street}
                    </span>
                </div>

            </div>
        </div>
        <div className='User-Posts'>
            <button className='User-Posts-Button'
            onClick={() => navigate('/')}>Back</button>
            <div className='User-Posts-Block'>
                <div className='User-Posts-Block-Title'>
                    <h1>Posts</h1>
                </div>
                    {posts.map(elem => {
                      return  <div key={elem.id} className='User-Posts-Block-Item'>
                        <h2>{elem.title}</h2>
                        <p>{elem.body}</p>
                        <span>{elem.id}</span>
                      </div>
                    })}
                </div>
        </div>
    </section>
  )
}


export default connect(mapStateToProps)(User)