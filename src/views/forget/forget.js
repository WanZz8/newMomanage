import React, { Component } from 'react';
import {
    Alert,
    ScrollView,
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    ImageBackground,
    Image,
    TextInput,
    Platform,
    Keyboard
} from 'react-native';
import { observer, inject } from 'mobx-react/native';
import Icons from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width; // 全屏宽高
const height = Dimensions.get('window').height; // 全屏宽高
const IMG = require('../../img/mine/lock.png');

const X_WIDTH = 375;
const X_HEIGHT = 812;

function isIphoneX() {
    return (
        (Platform.OS === 'ios'
            && ((height === X_HEIGHT
                && width === X_WIDTH)
                || (height === X_WIDTH
                    && width === X_HEIGHT)))
        || Platform.OS === 'android'
    );
}

class Forget extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '找回密码',
        headerLeft: (
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
                style={{
                    marginLeft: 15,
                    width: 25
                }}
            >
                <Icons name="ios-arrow-back" size={25} color="#FFF" />
            </TouchableOpacity>),
        headerRight: (
            <View>
                <Text style={{
                    fontSize: 18,
                    color: '#fff',
                    fontWeight: 'bold',
                    marginRight: 10
                }}
                />
            </View>),
        headerTitleStyle: {
            alignSelf: 'center',
            flex: 1,
            textAlign: 'center',
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bold'
        },
        headerStyle: {
            height: isIphoneX() ? 65 : 45,
            backgroundColor: '#292929',
            paddingTop: isIphoneX() ? 20 : 0,
            elevation: 0,
        }
    });

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this._keyboardDidShow.bind(this)
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide.bind(this)
        );
    }

    // 注销监听
    componentWillUnmount() {
        this.keyboardDidHideListener && this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener && this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow(e) {
        this.setState({
            keyboardHeight: e.endCoordinates.height
        });
    }


    键盘收起后执行

    _keyboardDidHide(e) {
        this.setState({
            keyboardHeight: 0
        });
    }

    render() {
        return (
            <View style={RegisterStyles.root}>
                <View style={RegisterStyles.mainContainer}>
                    <View style={{
                        flex: 2
                    }}
                    />
                    <View style={{
                        marginBottom: this.state.keyboardHeight,
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}
                    >
                        <View style={{
                            // flex: 1
                            marginBottom: 50,
                            width,
                            alignItems: 'center'
                        }}
                        >
                            <Image
                                source={IMG}
                                style={{
                                    width: 70,
                                    height: 80
                                }}
                            />
                        </View>
                        <View style={{
                            width,
                            alignItems: 'center',
                            height: 55,
                            marginBottom: 30,
                        }}
                        >
                            <TextInput
                                style={{
                                    borderColor: '#EDF0F3',
                                    borderWidth: 1,
                                    borderRadius: 30,
                                    height: 55,
                                    width: '80%'
                                }}
                                placeholder="手机号"
                                // onChangeText={(text) => {
                                //     text.length > 0
                                // ? this.setState({ buttonColor: true })
                                // : this.setState({ buttonColor: false });
                                //     this._address = text;
                                // }}
                            />
                        </View>
                        <View style={{
                            width,
                            alignItems: 'center',
                            height: 55,
                            marginBottom: 35,
                        }}
                        >
                            <TextInput
                                style={{
                                    borderColor: '#EDF0F3',
                                    borderWidth: 1,
                                    borderRadius: 30,
                                    height: 55,
                                    width: '80%'
                                }}
                                placeholder="密码"
                                // onChangeText={(text) => {
                                //     text.length > 0
                                // ? this.setState({ buttonColor: true })
                                // : this.setState({ buttonColor: false });
                                //     this._address = text;
                                // }}
                            />
                        </View>
                        <View
                            style={{
                                width,
                                alignItems: 'center',
                                height: 55,
                                marginBottom: 10,
                            }}
                        >
                            <TouchableOpacity style={{
                                width: '80%',
                                backgroundColor: '#333',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                height: 55,
                                borderRadius: 30
                            }}
                            >
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 18,
                                    fontWeight: 'bold'
                                }}
                                >
                                    下一步
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 3 }} />
                </View>
            </View>
        );
    }
}

export default Forget;

const RegisterStyles = StyleSheet.create({
    root: {
        flex: 1,
        width,
        height,
        backgroundColor: '#fff'
    },
    mainContainer: {
        width,
        height,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});