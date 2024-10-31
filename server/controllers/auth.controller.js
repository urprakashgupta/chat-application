import { asyncHandler } from '../utils/asyncHandler.js';

export const signup = asyncHandler(async(req,res) => {
   res.json({
    data: "You hit the signup end point"
   });
})
export const login = asyncHandler(async(req,res) => {
    res.json({
     data: "You hit the login end point"
    });
 })
 export const logout = asyncHandler(async(req,res) => {
    res.json({
     data: "You hit the logout end point"
    });
 })