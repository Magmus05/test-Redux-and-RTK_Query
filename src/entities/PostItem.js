import React from 'react'
import { Link} from 'react-router-dom'

function PostItem({post}) {

	// const navigate=React.useNavigate()

	return (
        <li className='container__postItem'>
            <div>№ {post.id}</div>
            <div className='postitem__title'>Заголовок: {post.title}</div>
            <div  className='postitem__body'>
             Текст: {post.body.length>20?post.body.substring(0,30)+'...':post.body}
            </div>
						<button><Link to={`${post.id}`}>Подробнее</Link></button>
        </li>
	)
}

export default PostItem