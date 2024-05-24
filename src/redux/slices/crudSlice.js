import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
v4
const initialState = {
    tasks : [
        {
            "title": "Navbar",
            "author": "Ali",
            "assigned_to": "Ahmet",
            "end_date": "2024-05-03",
            "id": "db652023-3b10-42cc-8d68-734e803d85c7"
        },
        {
            "title": "İş",
            "author": "İlker",
            "assigned_to": "İdris",
            "end_date": "2024-05-05",
            "id": "8bd4c2e4-6125-4f93-ad9e-f84d43dc2c8d"
        },
        {
            "title": "Deneme",
            "author": "Mehmet",
            "assigned_to": "Rıza",
            "end_date": "2024-05-11",
            "id": "8b87ee27-b417-4710-8ec5-2cdd3f8a33f8"
        }
    ],
};
// toolkit ile birlikte slice'daki state'de tutulan herhangi bir veriyi doğrudan güncelleyebiliyoruz. burda örneğin bir dizideki elemeanı güncellemesi gerektiğinde map yerine splice eklenmesi gerektiğinde concat yerine push kullanmamızın önünü açar

const crudSlice = createSlice({
    name: 'crud',
    initialState,
    reducers: {
        //1) yeni görev ekle
        addTask: (state, {payload}) => {
        // a) göreve id değeri ekle
        payload.id = v4();
        //b) görevi state deki tasks dizisine ekle
        state.tasks.push(payload);
        },

        // görevi kaldır
        deleteTask: (state, { payload }) => {
            // a ) kaldırırlacak elemanın dizideki sırasını bul 
            const index = state.tasks.findIndex((i) => i.id === payload) ;
            // elemanı sil 
            state.tasks.splice(index, 1);
        },
        editTask : (state,{payload}) => {
                // düzenlenecek elemanın sırasını bul 
                const index = state.tasks.findIndex((i) => i .id === payload.id);
                
                //dizideki elemanı güncelle
                state.tasks.splice(index, 1, payload);
        },
    },
});
 // store a tanıtmak için reducer export edilir
export default crudSlice.reducer;

 //projede kullanabilmek için aksiyonları export edeceğiz
 export const { addTask, deleteTask, editTask } = crudSlice.actions;