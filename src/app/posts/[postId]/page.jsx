import Posts from '../page'
import {Suspense} from 'react'

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  return data
}

async function Page({ params }) {  
  const post = await loadPost(params.postId)

  return (
    <div>
      Detalles:
      <h1>{post.id} {post.title}</h1>
      <p>{post.body}</p>

      <h3>Otras publicaciones</h3>

      <Suspense fallback={<div>
        Loading...
      </div>}>
          <Posts/>
      </Suspense>
      
    </div>
  )
}

export default Page