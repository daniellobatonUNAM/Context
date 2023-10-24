import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons'; 


const IndexScreen = () => {

    const {state, addBlogPost, deleteBlogPost} = useContext(Context);

    return (

        <View>
            
            <Button
                title='Add post'
                onPress={addBlogPost}
            />

            {state && <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({item}) => {
                    return (
                        <View style={styles.containerPost}>
                            <Text style={styles.fontPost}>{item.title}</Text>
                            <TouchableOpacity onPress={() => {
                                    deleteBlogPost(item.idPost);
                                    //console.log(item.id);
                                }}
                            >
                                <Feather name="trash" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />}


        </View>

    )

}

const styles = StyleSheet.create({
    containerPost:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderStyle: 'solid',
        borderColor: 'black',
        borderTopWidth: 1,
        paddingHorizontal: 8,
        paddingVertical: 14
    },
    fontPost:{  
        fontSize: 18,
    }
});

export default IndexScreen