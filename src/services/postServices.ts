import { Post } from "../model/dataModels";
import userServices from "../services/userServices";
import {PostOutput} from "../resolvers/postResolvers/output/PostOutput";
import { PostInput } from "src/resolvers/postResolvers/input/PostInput";

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

const addNewPost=(post: PostInput)=> {
    try {
        const totalElements= postList.length;
        const newID=totalElements + 1;

        postList.push({
            id: newID,
            title: post.title,
            content: post.content, 
            views: 0,
            user_id: post.user_id
        })
        const newPost= postList.find((post:Post) => post.id ===newID)
        return newPost ? {
                id: newPost.id,
                title: newPost.title,
                content: newPost.content,
                views: newPost.views,
                user: userServices.findUserById(newPost.user_id)
            } : undefined

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
    addNewPost,
    findAllPost,
    findPostById,
    findPostByUser,
    deletePost
};