'use server';
import {prisma} from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function createPost(formData: FormData){
    try {
        await prisma.post.create({
            data:{
                title:formData.get("title") as string,
                slug: (formData.get("title") as string).replace(/\s+/g, "-").toLowerCase() ,
                content:formData.get('content') as string,
                author:{
                    connect:{
                        email:"john@gmail.com"
                    }
                }
            }
        })
        revalidatePath("/posts");
    } catch (error) {
        console.log(error);
    }
}


// Edit post
export async function editPost(formData:FormData, id: string){
    try {
        await prisma.post.update({
            where:{id},
            data:{
                title:formData.get("title") as string,
                slug: (formData.get("title") as string).replace(/\s+/g, "-").toLowerCase() ,
                content:formData.get('content') as string
            }
        })
    } catch (error) {
        console.log(error);
    }
}


// Delete post
export async function deletePost(id : string){
    try {
        await prisma.post.delete({
            where:{id}
        })
    } catch (error) {
        console.log(error);
    }
}