import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

const postes = [
    {
        id:'123',
        username: 'gilibert0',
        userImg: 'https://imgs.search.brave.com/7Rrjp0QTdesJGfQdKHG5amRm0wPtiXMUggxelsUNI14/rs:fit:325:376:1/g:ce/aHR0cHM6Ly93d3cu/ZGFpbHltb3NzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OC8wMS9jODhlODk0/NDE5NzRjMjFhYjI3/MzAwNDdmOTZjMzBk/MC5qcGc',
        img: 'https://imgs.search.brave.com/qTkHbxurj4NhzD2eF6egU5NSz5cONpnuaeKlhlmKdSk/rs:fit:817:572:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzE2MzQvMCpy/NmlRemxqaXVKYXZW/eFJN',
        caption: "So trueeeeeeeeeee",
    },
    {
        id:'123',
        username: 'randomUser',
        userImg: 'https://imgs.search.brave.com/JGwMM5yLfmlZYodra8QJQ81dsrFecIti-o4Xawj31v8/rs:fit:407:405:1/g:ce/aHR0cDovL3d3dy5x/dWlja21lbWUuY29t/L2ltZy9mNS9mNWY2/YzRhMTgzY2M2ZTJl/YzYwMGQyMGRjM2Ji/YzFkZmY2NjNiMzg1/ZTFhNzY2YzYzYzhh/NGQ5ZmFmNzc1NGY4/LmpwZw',
        img: 'https://imgs.search.brave.com/iCdRry3asdSfgfGTxW1hyZqX63IZa3rTKydTnWG6QIw/rs:fit:909:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/VndsbmJvQUlLU1Ju/T1NiUW4tVmp3SGFE/MyZwaWQ9QXBp',
        caption: "This is DOPE! So much pain",
    }
]


function Posts(){
    const [posts, setPosts] = useState([]);

    useEffect(
        () => 
            onSnapshot(
                query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
                (snapshot) => {
                    setPosts(snapshot.docs);
                }
            ),
        [db]
    );

    return (
        <div>
            {posts.map((post) => (
                
                <Post 
                    key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImg={post.data().profileImg}
                    img={post.data().image}
                    caption={post.data().caption}
                />
            ))}
            {postes.map((post) => (
                
                <Post 
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                />
            ))}
        </div>
    );
}

export default Posts;