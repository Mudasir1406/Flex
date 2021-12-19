import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';

const {width, height} = Dimensions.get('window');
import {colors} from '../constants';

const Block = ({
  contentContainerStyle,
  justifyContent,
  alignItems,
  children,
  backgroundColor,
  scrollStyle,
  withoutScroll,
  navigation,
}) => {
  const externalStyle = {
    justifyContent: justifyContent || 'flex-start',
    alignItems: alignItems || 'stretch',
    backgroundColor: backgroundColor || colors.white,
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={1}
      style={[{flex: 1}, externalStyle]}>
      {withoutScroll ? (
        <View style={{flex: 1}}>{children}</View>
      ) : (
        <ScrollView
          style={[scrollStyle, {flex: 1}]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[contentContainerStyle, {paddingBottom: 20}]}
          keyboardShouldPersistTaps="handled">
          {children}
        </ScrollView>
      )}
    </KeyboardAvoidingView>
  );
};

export default Block;
