"use client"

import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { showSuccessMessage } from '@/lib/ShowSonner'

const formSchema = z.object({
    first_name: z.string().min(1, "Ce champ est obligatoire").max(50),
    email: z.string().email("Veuillez founir une adresse email valide").min(2).max(50),
    content: z.string().min(1, "Ce champ est obligatoire").max(300),
})

export const Formulaire = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            first_name: "",
            email: "",
            content: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        showSuccessMessage('prenom ' + values.first_name + ' email ' + values.email + 'message ' + values.content)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='heading_h5'>Votre prénom</FormLabel>
                            <FormControl>
                                <Input placeholder="Entrer votre prénom" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='heading_h5'>Votre adresse email</FormLabel>
                            <FormControl>
                                <Input placeholder="Entrer votre adresse email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='heading_h5'>Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Saisissez votre message"
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Envoyer</Button>
            </form>
        </Form>
    )
}
