import {useReducer} from 'react';
import {Easing, useSharedValue, withTiming} from 'react-native-reanimated';

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FOCUSED':
      return {...state, focused: action.payload};
    case 'SET_VISIBLE':
      return {...state, visible: !state.visible};
    default:
      return state;
  }
};

const useTextInputAnimation = () => {
  const [state, dispatch] = useReducer(inputStateReducer, {
    focused: null,
    visible: false,
    animatedFocus: useSharedValue(0),
    animatedLabel: useSharedValue(10),
    animatedError: useSharedValue(0),
  });

  return {
    ...state,
    bind: {
      onFocus: () => {
        dispatch({type: 'SET_FOCUSED', payload: true});
        state.animatedFocus.value = withTiming(1, {
          duration: 300,
          easing: Easing.out(Easing.exp),
        });
        state.animatedLabel.value = withTiming(0, {
          duration: 300,
          easing: Easing.out(Easing.exp),
        });
        state.animatedError.value = withTiming(30, {
          duration: 300,
          easing: Easing.out(Easing.exp),
        });
      },
      onBlur: () => {
        dispatch({type: 'SET_FOCUSED', payload: false});
        state.animatedFocus.value = withTiming(0, {
          duration: 300,
          easing: Easing.out(Easing.exp),
        });
        state.animatedLabel.value = withTiming(30, {
          duration: 300,
          easing: Easing.out(Easing.exp),
        });
        state.animatedError.value = withTiming(0, {
          duration: 300,
          easing: Easing.out(Easing.exp),
        });
      },
    },
    toggleVisibility: () => dispatch({type: 'SET_VISIBLE'}),
  };
};
export default useTextInputAnimation;
