import {useDispatch} from 'react-redux'
import type {RootState, AppDispatch} from '../redux/store'


export const useAppDispatch: ()=> AppDispatch = useDispatch