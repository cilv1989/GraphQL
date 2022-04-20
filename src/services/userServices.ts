import { User } from "../model/dataModels";

export let userList: User[] =[
    {
        id: 1,
        firstName: "Tabare",
        lastName: "Lacerda",
        isActive: true
    },
    {
        id: 2,
        firstName: "Alvaro",
        lastName: "Munoz",
        isActive: true
    }
]

const helloWithName= (name:string):string => {
    try {
        return `Hello ${name}`
    } catch {
        throw new Error('Any error message');        
    }
}

const helloWorld= ():string => {
    try {
        return "Hello wordl!!"
    } catch {
        throw new Error('Any error message');        
    }
}

const addUser=(user: User)=> {
    try {
        userList.push(user)
        return userList.find((usr:User) => usr.id === user.id)
    } catch (error) {
         throw new Error('Error: add new User.');     
    }
}

const findUserById=(_id: number)=> {
    try {
        return userList.find((user:User) => user.id === _id)
    } catch (error) {
         throw new Error('Error: add new User.');     
    }
}

const findAllUser=()=> {
    try {
        return userList;
    } catch (error) {
         throw new Error('Error: add new User.');     
    }
}

const deleteUser=(_id: number)=> {
    try {
        const totalUser= userList.length;
        const newUserList= userList.filter((usr:User)=> usr.id !== _id)
        userList= newUserList;
        return totalUser > userList.length 
    } catch (error) {
         throw new Error('Error: add new User.');     
    }
}


export default {
    helloWithName,
    helloWorld,
    addUser,
    findUserById,
    findAllUser,
    deleteUser,
    userList    
};