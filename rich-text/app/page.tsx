"use client"

import Nav from '@/components/Nav'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
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
        title: z.string().min(5, { message: '다섯자 이상 입력해 주세요 ~' }),
        description: z.string().min(5, { message: '길게 입력해 주세요 ~' }),
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
        console.log(values)
    }

    return (
        <main className='flex p-20 flex-col gap-8'>
            <Nav />

            <section>
                <h1 className="text-4xl font-bold">Shadcn UI</h1>
                <p className="text-2xl text-muted-foreground">공유 UI 컴포넌트</p>
            </section>

            <div className="flex gap-6 py-6">
                <Button variant={'secondary'}>더 알아보기</Button>
                <Button>지금 등록</Button>
            </div>

            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <FormField
                        control={form.control}
                        name='title'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>제목</FormLabel>
                                <FormControl>
                                    <Input placeholder='제목' {...field }></Input>
                                </FormControl>
                                <FormMessage />
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
                                <FormMessage />
                            </FormItem>
                        )}
                    />       
                    <div className="mt-4">        
                        <Button type="submit">보내기</Button>
                    </div>    
                </form>
            </Form>
        </main>
    ) 
}