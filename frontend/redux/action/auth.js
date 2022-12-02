import { AUTH } from '../actionTypes/actionTypes';
import * as api from '../../api/index';
import Link from 'next/link'


export const signin = (formData, Link) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
    <Link href="https://www.near.university/learn/with-our-team"/>

    //router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, Link) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });
    
    window.location.href = "https://www.near.university/";
    //router.push('/');
  } catch (error) {
    console.log(error);
  }
};