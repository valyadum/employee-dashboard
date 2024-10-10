import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchError, fetchStart, fetchSuccess } from './slice';

export const getStaff = createAsyncThunk(
    'staff/getStuff',
    async (_, { dispatch, getState, rejectWithValue }) => {
        try {
            dispatch(fetchStart());

            const { staff } = getState().staff;

            await new Promise((resolve) => setTimeout(resolve, 1000));

            dispatch(fetchSuccess(staff));
        } catch (error) {
            return rejectWithValue(dispatch(fetchError(error.message)));
        }
    }
);
export const deleteStaff = createAsyncThunk(
    'staff/deleteStaff',
    async (id, { dispatch, getState, rejectWithValue }) => {
        try {
            dispatch(fetchStart());

            const { staff } = getState().staff;


            const updatedStaff = staff.filter(employee => employee.id !== id);

            dispatch(deleteStaff(updatedStaff)); 

            dispatch(fetchSuccess(updatedStaff));
        } catch (error) {
            return rejectWithValue(dispatch(fetchError(error.message)));
        }
    }
);
export const createStaff = createAsyncThunk(
    'staff/createStaff',
    async (newEmployee, { dispatch, getState, rejectWithValue }) => {
        try {
            dispatch(fetchStart());

            const { staff } = getState().staff;

            await new Promise((resolve) => setTimeout(resolve, 1000));

            const updatedStaff = [...staff, { ...newEmployee, id: String(staff.length + 1) }];

            dispatch(fetchSuccess(updatedStaff));
        } catch (error) {
            return rejectWithValue(dispatch(fetchError(error.message)));
        }
    }
);

export const editStaff = createAsyncThunk(
    'staff/editStaff',
    async (updatedEmployee, { dispatch, getState, rejectWithValue }) => {
        try {
            dispatch(fetchStart());

            const { staff } = getState().staff;

            await new Promise((resolve) => setTimeout(resolve, 1000));

            const updatedStaff = staff.map(employee =>
                employee.id === updatedEmployee.id ? updatedEmployee : employee
            );

            dispatch(fetchSuccess(updatedStaff));
        } catch (error) {
            return rejectWithValue(dispatch(fetchError(error.message)));
        }
    }
);