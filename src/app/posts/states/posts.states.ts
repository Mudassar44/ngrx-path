
export interface Post {
    id : number,
    title : string,
    description : string
}

export interface PostsState {
    posts : Post[];
}

export const initialState : PostsState = {
    posts : [
        {
            id : 1,
            title : 'Sample Title',
            description : 'Sample Description'
        },
        {
            id : 2,
            title : 'Sample Title 2',
            description : 'Sample Description 3'
        },
        {
            id : 2,
            title : 'Sample Title 2',
            description : 'Sample Description 3'
        },
        {
            id : 2,
            title : 'Sample Title 2',
            description : 'Sample Description 3'
        },
        {
            id : 2,
            title : 'Sample Title 2',
            description : 'Sample Description 3'
        },
        {
            id : 2,
            title : 'Sample Title 2',
            description : 'Sample Description 3'
        },
    ],
};