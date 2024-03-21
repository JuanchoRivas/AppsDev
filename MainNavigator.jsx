import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import TabNavigator from './TabNavigator';
import AuthStack from './AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileImageQuery } from '../src/services/shopService';
import { setProfileImage } from '../src/components/features/auth/authSlice';


const MainNavigator = () => {
  const {user, localId} = useSelector(state => state.authReducer.value)
  const {data, error, isLoading} = useGetProfileImageQuery(localId)
  const dispatch = useDispatch()

  useEffect(()=> {
    if(data) {
      dispatch(setProfileImage(data.image))
    }
  }, [data])

  return(
    <NavigationContainer>{user ? <TabNavigator /> : <AuthStack />}</NavigationContainer> 
    );
  };


export default MainNavigator;

const styles = StyleSheet.create({})