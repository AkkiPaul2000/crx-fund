"use client"
import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { useForm } from 'react-hook-form'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from './ui/button'
import { Input } from './ui/input'
import { InputForm } from './InputForm'
import { ThemeProvider } from 'next-themes'
import ToastDemo from './ToastDemo'

// const FormSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// })

function FundingForm() {


  return (
    
    <div className='  flex items-center justify-center p-10 w-full'>
    <InputForm />
    </div>
    
  )
}

export default FundingForm