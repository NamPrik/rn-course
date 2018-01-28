import React from 'react';
import { 
    View, 
    Image, 
    Text, 
    Button, 
    StyleSheet
} from 'react-native';

const placeDetail = props => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeImage}/>
                <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
            <View>
                <Button title="Delete" color="red" onPress={props.onItemDeleted}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 22,
    },
    placeImage: {
        width: "100%",
        height: 200,
    },
    placeName: {
        fontWeight: 'bold',
        textAlign: "center",
        fontSize: 20,
    }
})

export default placeDetail;