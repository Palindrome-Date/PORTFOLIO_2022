export default function sortData(users,posts){
   return users.map(elem => {
    return {
        ...elem,
        posts:userPost(posts,elem.id)
    }
   })
}

function userPost(posts,id) {
    return posts.filter(elem => {
        return elem.userId == id
    })
}