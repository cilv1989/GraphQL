import { Post } from "../model/dataModels";
import userServices from "../services/userServices";

let postList: Post[] =[
    {
        id: 1,
        title: "Graphql",
        content: "Graphql is a ....", 
        views: 0,
        user_id: 1
    },
    {
        id: 2,
        title: "REST API",
        content: "REST is a ....", 
        views: 0,
        user_id: 1
    }
]

const addPost=(post: Post)=> {
    try {
        postList.push(post)
        return postList.find((post:Post) => post.id === post.id)
    } catch (error) {
         throw new Error('Error: add new Post.');     
    }
}

const findPostById=(_id: number)=> {
    try {
        const post= postList.find((post:Post) => post.id === _id)
        return post ? {
                id: post.id,
                title: post.title,
                content: post.content,
                views: post.views,
                user: userServices.findUserById(post.user_id)
            } : undefined
    } catch (error) {
         throw new Error('Error: post not found.');     
    }
}

const findPostByUser=(idUser: number)=> {
    try {
        return postList.find((post:Post) => post.user_id === idUser)
    } catch (error) {
         throw new Error('Error: post not found');     
    }
}

const findAllPost=() => {
    try {
        const post= postList.map((post:Post)=> {
            return {
                id: post.id,
                title: post.title,
                content: post.content,
                views: post.views,
                user: userServices.findUserById(post.user_id)
            }
        })
        return post;
    } catch (error) {
         throw new Error('Error: post not found.');     
    }
}

const deletePost=(_id: number)=> {
    try {
        const totalPost= postList.length;
        const newPostList= postList.filter((post:Post)=> post.id !== _id)
        postList= newPostList;
        return totalPost > postList.length 
    } catch (error) {
         throw new Error('Error: delete Post.');     
    }
}



export default {
    addPost,
    findAllPost,
    findPostById,
    findPostByUser,
    deletePost
};