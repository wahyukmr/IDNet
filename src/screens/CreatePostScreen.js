import React, {useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {LoadContent} from '../components';

const user = {
  id: 'u1',
  image:
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
  name: 'Vadim Savin',
};

const CreatePostScreen = () => {
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadingImage, setLoadingImage] = useState(true);

  const onPost = () => {
    setDescription('');
  };

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, response => {
      response.errorMessage
        ? Alert.alert(response.errorMessage)
        : setSelectedImage(response.uri || response.assets?.[0]?.uri);
    });
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Image source={{uri: user.image}} style={styles.userImage} />
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{user.name}</Text>
        {!selectedImage && (
          <TouchableHighlight
            underlayColor="lightgrey"
            onPress={openImagePicker}
            style={styles.imageIconWrapper}>
            <Icon name="image-plus" size={22} />
          </TouchableHighlight>
        )}
      </View>

      <View style={{flex: 1, marginBottom: 30}}>
        {!selectedImage ? (
          <TextInput
            placeholder="What's on your mind?"
            value={description}
            onChangeText={text => setDescription(text)}
            multiline
            style={styles.textInput}
          />
        ) : (
          <ScrollView>
            <TextInput
              placeholder="What's on your mind?"
              value={description}
              onChangeText={text => setDescription(text)}
              multiline
              style={styles.textInput}
            />

            <View style={{paddingHorizontal: 20}}>
              <ImageBackground
                source={{uri: selectedImage}}
                resizeMode="contain"
                style={styles.selectedImage}
                onLoadEnd={() => setLoadingImage(false)}>
                {loadingImage ? (
                  <LoadContent message="Loading Image..." />
                ) : (
                  <Pressable onPress={() => setSelectedImage(null)}>
                    <View style={styles.TrashIcon}>
                      <Icon name="delete" size={24} color="#fff" />
                    </View>
                  </Pressable>
                )}
              </ImageBackground>
            </View>
          </ScrollView>
        )}
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{bottom: 20}}>
        <TouchableNativeFeedback
          onPress={onPost}
          disabled={!description && !selectedImage}
          useForeground>
          <View
            style={{
              ...styles.btnPost,
              backgroundColor:
                description || selectedImage ? 'purple' : 'gainsboro',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: description || selectedImage ? '#fff' : 'grey',
              }}>
              Post
            </Text>
          </View>
        </TouchableNativeFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginRight: 10,
  },
  imageIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    letterSpacing: 0.3,
    textAlignVertical: 'top',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  selectedImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  TrashIcon: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    elevation: 10,
  },
  btnPost: {
    width: 200,
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 50 / 2,
    elevation: 4,
    overflow: 'hidden',
  },
});
