import {getBlogPosts} from '@/actions/action';
import './index.css';
export default async function Page(){
    const posts = await getBlogPosts();
    if(!posts){
        return "No posts"
    }
    return<>
            <div className='body-container'>
            {
                posts?.map((item, index) => (
                    <p key={index}>{item.content}</p>
                ))
            }
            </div>
    </>
}