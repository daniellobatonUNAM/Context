import createDataContext from './createDataContext';

//const BlogContext = React.createContext(); //Mueve información del provider a un Componente específico

const BlogReducer = (state, action) => {

    switch(action.type){

        case 'add_blogpost':
            return [...state, {idPost: state.length + 1, title: `BlogPost #${state.length + 1}`}];
        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.idPost !== action.payload);

        default:
            return state;
    
    }

}

const addBlogPost = dispatch => {

    return () => {

        dispatch({type: 'add_blogpost'});

    }

}
const deleteBlogPost = dispatch => {

    return id => {

        dispatch({type: 'delete_blogpost', payload: id});

    }

}
const updateBlogPost = dispatch => {

    return () => {

        dispatch({type: 'update_blogpost'});

    }

}
const readBlogPost = dispatch => {

    return () => {

        dispatch({type: 'read_blogpost'});

    }

}

/*export const BlogProvider = ({children}) => { //Componente provider

    //Cuando el reducer termina su ejecución, se vuelve a renderizar el componente
    const [blogPosts, dispatch] = useReducer(BlogReducer, []);//state es el estado actual del objeto y dispatch ejecuta el reducer

    
    // const blogPosts = [

    //     {title: 'Blog post 1'},
    //     {title: 'Blog post 2'},
    //     {title: 'Blog post 3'},

    // ]

    return (

        <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>

            {children}

        </BlogContext.Provider>

    )

}*/
//export default BlogContext;

export const {Context, Provider} = createDataContext(
                                        BlogReducer, 
                                        {
                                            addBlogPost, 
                                            readBlogPost, 
                                            updateBlogPost, 
                                            deleteBlogPost
                                        }, 
                                        []
                                    );