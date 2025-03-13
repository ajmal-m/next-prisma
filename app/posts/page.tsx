import {prisma} from '@/lib/db';
import Link from 'next/link';

export default async function Posts(){
    const data = await  prisma.post.findMany({
        orderBy:{
            createdAt:'asc'
        },
        select:{
            id:true,
            title:true,
            slug:true
        }
    });
    return<>
        <h1>Posts(0)</h1>
        <ul>
            {
                data.map((post) => 
                    <Link  key={post.id} href={`/posts/${post.slug}`}>
                        <li>{post.title}</li>
                    </Link>
                )
            }
        </ul>
    </>
}