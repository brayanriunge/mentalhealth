export type AuthPosts = {
    email: string,
    id: string
    image:string
    name: string
    posts:{
        createdAt: string
        id: string
        title: string
        comment:{
            createdAt: string
            id: string
            postId: string
            message: string
            userId: string
        }[]
    }[]

}
