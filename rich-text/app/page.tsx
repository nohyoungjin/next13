"use client"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/ui/form'

import React from 'react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import Tiptap from '@/components/Tiptap'

export default function Home() {

    const formSchema = z.object({
        title: z.string().min(5, { message: '제목이 너무 길지 않음' }),
        description: z.string().min(5, { message: 'Hey the title is not long enough' }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
            title: '',
            price: 29.99,
            description: '',
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        
    }

    return (
        <main className='p-24'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name='title'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>제목</FormLabel>
                                <FormControl>
                                    <Input placeholder='제목' {...field }></Input>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='description'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="mt-2">설명</FormLabel>
                                <FormControl>
                                    <Tiptap description={field.name} onChange={field.onChange} />
                                </FormControl>
                            </FormItem>
                        )}
                    />                   
                    <Button className="my-1" type="submit">보내기</Button>
                </form>
            </Form>
        </main>
    ) 
}