import React, { Children } from "react";

import { KeyboardAvoidingView,ScrollView,TouchableWithoutFeedback,Keyboard } from "react-native";

const KeyboardAvoidingWrapper = ({children}) => {
    return (
        <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}} >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
export default KeyboardAvoidingWrapper;