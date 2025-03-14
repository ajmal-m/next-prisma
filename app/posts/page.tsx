import {prisma} from '@/lib/db';
import Link from 'next/link';
import {createPost} from '@/actions/action';

export default async function Posts(){
    const user = await prisma.user.findUnique({
        where:{
            email:'john@gmail.com'
        },
        include:{
            post:true
        }
    })


    return<>
        <h1>Posts({user?.email})</h1>
        <ul>
            {
                user?.post.map((post) => 
                    <Link  key={post.id} href={`/posts/${post.slug}`}>
                        <li>{post.title}</li>
                    </Link>
                )
            }
        </ul>
        <form className="bg-white p-6 rounded-lg shadow-lg w-96" action={createPost}>
            <label className="block mb-2 text-gray-700">Title</label>
            <input 
                type="text" 
                name='title'
                placeholder="Enter your post Title" 
                className="w-full p-2 mb-4 text-[black] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <label className="block mb-2 text-gray-700">Content</label>
            <textarea 
                placeholder="Enter your content" 
                name='content'
                className="w-full text-[black] p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            
            <button 
                type="submit" 
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
    </>
}