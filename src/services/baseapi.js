import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getStorage } from './utils/storage';

export const baseApi =  createApi( {
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/',
prepareHeaders: (headers) => {
    const idToken = getStorage("idToken");
    if(idToken) {
        headers.set('authorization', `bearer ${idToken}`)
    }
    return headers;
}}),
    refetchOnMountOrArgChange: true,
    tagTypes: ['Employee'],
    endpoints: (builder) => ({
        getEmployee: builder.query({
            query: () => `Employee`,
            providesTags: ['Employee']
        }),

        createEmployee: builder.mutation({
        
            query: (post) => ({
            url: `Employee`,
            method: 'POST',
            body: post
          }),

        
        invalidatesTags: ['Employee'],
        
            
        }),

        updateEmployee: builder.mutation({
        
            query: ({ id, ...put }) => ({
            url: `Employee/${id}`,
            method: 'PUT',
            body: put
          }),
          
          
        invalidatesTags: ['Employee'],
          
        }),

        loginTo: builder.mutation({
        
            query: (post) => ({
            url: `Employee/login`,
            method: 'POST',
            body: post
          }),
          
          
        invalidatesTags: ['Employee'],
          
        }),

        deleteEmployee: builder.mutation({
        
            query: (id) => ({
            url: `Employee/${id}`,
            method: 'DELETE',
          
          }),
          
          invalidatesTags: ['Employee'],
          
        }),



        getEmployeeById: builder.query({
            query: (id) => `Employee/${id}`,
        }),
        

        
    })
})

export const { useGetEmployeeQuery, useCreateEmployeeMutation, useUpdateEmployeeMutation, useGetEmployeeByIdQuery, useDeleteEmployeeMutation, useLoginToMutation } = baseApi;