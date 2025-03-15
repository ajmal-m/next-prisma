'use server';
import {prisma} from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/dist/server/api-utils';

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



// Sign in
export async function signInUser(formData: FormData){
    try {
        const user = await prisma.user.findUnique({
            where:{
                email: formData.get("email") as string
            }
        });

        // User is not found
        if(!user) return { success: false, message: 'Email is Not Found'};

        // Check password is same
        const checkPassword =  ( user.hashedPassword == formData.get("password") as string);


        // Password is not correct
        if(!checkPassword){
            return {success:false, message:"Enter password is Wrong"};
        }

        return { success: true, message: "Sign In Successfully"}

    } catch (error) {
        return { success: false, message: 'Error while signIn'  }
    }
}


// Blog post
export async function getBlogPosts(){
    try {
        const posts = await prisma.blog.findMany();
        return posts
    } catch (error) {
        console.log(error);
    }
}


// Create Blog post
export async function CreateBlog(formData: FormData){
    try {
        console.log("form", formData);
        await prisma.blog.create({
            data:{
                title: formData.get("title") as string,
                content: formData.get("content") as string
            }
        })
    } catch (error) {
        console.log(error);
    }
}