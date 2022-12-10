import { AUTH } from '../actionTypes/actionTypes';
import * as api from '../../api/index';


export const signin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
    window.location.href = "https://www.near.university/learn/with-our-team";
    
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });
    console.log(formData)
    //window.location.href = "https://www.near.university/learn/with-our-team";

  } catch (error) {
    console.log(error);
  }
};
