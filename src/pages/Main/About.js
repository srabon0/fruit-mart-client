import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadFruitData from '../../redux/thunk/fetchFruits';

const About = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(loadFruitData())
    },[dispatch])
    const fruitState = useSelector((state)=>state) //only frut state
    console.log("whole stt", fruitState);
    const fruits = fruitState.fruitState.fruits


    return (
        <div>
            Total : {fruits.length}
        </div>
    );
};

export default About;