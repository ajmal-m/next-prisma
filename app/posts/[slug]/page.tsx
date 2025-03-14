import {prisma} from '@/lib/db';

export default async function PostDetail({ params }: { params: { slug: string } }){
    const { slug } = await params
    const post = await prisma.post.findFirst({
        where:{
            slug: slug
        }
    });
    
    return<>
        <div>
            <h1>{post?.title}</h1>
            <p>{post?.content}</p>
        </div>
    </>
}