import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
    staff: [
        {
            "id": "1",
            "name": "Darlene Robertson",
            "email": "trungkienspktnd@gmail.com",
            "status": "Free",
            "role": "Reporter",
            "avatar": "https://randomuser.me/api/portraits/women/79.jpg"
        },
        {
            "id": "2",
            "name": "Devon Lane",
            "email": "tranthuy.nute@gmail.com",
            "status": "Busy",
            "role": "Bot Analyst",
            "avatar": "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            "id": "3",
            "name": "Cody Fisher",
            "email": "tienlapspktnd@gmail.com",
            "status": "Workin",
            "role": "Sales Manager",
            "avatar": "https://randomuser.me/api/portraits/men/12.jpg"
        },
        {
            "id": "4",
            "name": "Theresa Webb",
            "email": "thuhang.nute@gmail.com",
            "status": "Free",
            "role": "Broadcaster",
            "avatar": "https://randomuser.me/api/portraits/women/18.jpg"
        },
        {
            "id": "5",
            "name": "Savannah Nguyen",
            "email": "manhhackt08@gmail.com",
            "status": "Workin",
            "role": "Marketer",
            "avatar": "https://randomuser.me/api/portraits/women/50.jpg"
        },
        {
            "id": "6",
            "name": "Eleanor Pena",
            "email": "vuhaituongnute@gmail.com",
            "status": "On Vacation",
            "role": "Analytics Admin",
            "avatar": "https://randomuser.me/api/portraits/women/65.jpg"
        },
        {
            "id": "7",
            "name": "Jenny Wilson",
            "email": "danghoang87hl@gmail.com",
            "status": "Busy",
            "role": "Bot Editor",
            "avatar": "https://randomuser.me/api/portraits/women/30.jpg"
        },
        {
            "id": "8",
            "name": "Marvin McKinney",
            "email": "binhan628@gmail.com",
            "status": "Free",
            "role": "Team Editor",
            "avatar": "https://randomuser.me/api/portraits/men/15.jpg"
        },
        {
            "id": "9",
            "name": "Cameron Williamson",
            "email": "ckctm12@gmail.com",
            "status": "Working",
            "role": "PPC Expert",
            "avatar": "https://randomuser.me/api/portraits/men/20.jpg"
        },
        {
            "id": "10",
            "name": "Jerome Bell",
            "email": "nvt.isst.nute@gmail.com",
            "status": "Busy",
            "role": "Team Owner",
            "avatar": "https://randomuser.me/api/portraits/men/42.jpg"
        }
    ],
    loading: false,
    error: null,
}

const staffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        fetchStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchSuccess(state, action) {
            state.loading = false;
            state.staff = action.payload;
        },
        fetchError(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        deleteStaff(state, action) {
            state.staff = state.staff.filter(employee => employee.id !== action.payload);
        },
        createStaff(state, action) {
            const newEmployee = {
                id: nanoid(),
                ...action.payload
            };
            state.staff.push(newEmployee);
        },
        editStaff(state, action) {
            const { id, updatedData } = action.payload;
            const employeeIndex = state.staff.findIndex(employee => employee.id === id);
            if (employeeIndex !== -1) {
                state.staff[employeeIndex] = { ...state.staff[employeeIndex], ...updatedData };
            }
        }
    }
});
const staffReducer = staffSlice.reducer;
export const { fetchStart, fetchSuccess, fetchError,deleteStaff, createStaff, editStaff } = staffSlice.actions;
export default staffReducer;