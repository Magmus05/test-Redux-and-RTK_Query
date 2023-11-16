import React from 'react'

function Comments({comment}) {
	return (
		<li className='comment'>
			<h3 className='comment__name'>{comment.name}</h3>
			<p className='comment__email'>{comment.email}</p>
			<p className='comment__body'>{comment.body}</p>
		</li>
	)
}

export default Comments