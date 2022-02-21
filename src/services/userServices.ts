
const hello= (name:string):string => {
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



export default {
    hello,
    helloWorld
};