import React,{ useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import sortData from '../../helper/sortData';
import { asyncPostsFetch } from '../../redux/postsSlice';
import { asyncUsersFetch } from '../../redux/usersSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons';

import './Users.scss'
import { Link } from 'react-router-dom';

function Users({ data }) {
 const dispatch = useDispatch();


 useEffect(() => {
  dispatch(asyncPostsFetch('https://jsonplaceholder.typicode.com/posts'))
  dispatch(asyncUsersFetch('https://jsonplaceholder.typicode.com/users'))
 },[])

   return (
    <div className='Users'>           
      {data.map(elem => {
        return <Link key={elem.id} className='Users-Item' to={`/user/${elem.id}`}>
          <div className='Users-Item-Info'>
          <div className='Users-Item-Info-Name'>{elem.name}</div>
          <div>
            <span>email:</span>
            {elem.email}
          </div>
          <div>
            <span>city:</span>
            {elem.address.city}
          </div>
          <div>
            <span>posts:</span>
            {elem.posts.length}
          </div>
          <div>
            <span>company:</span>
            {elem.company.name}
           </div>

          </div>

          <div className='Users-Item-Icon'>
           <FontAwesomeIcon icon={faUser} />
          </div>
        </Link>
      })}
    </div>
  )
}

export const mapStateToProps = (state) => {
  const { users,posts } = state
  const result = sortData(users,posts)
  return {
    data:[...result]
  }
}


export default connect(mapStateToProps)(Users)

