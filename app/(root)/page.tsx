import {getBlogPosts} from '@/actions/action';
import './index.css';
export default async function Page(){
    const posts = await getBlogPosts();
    if(!posts){
        return "No posts"
    }
    return<>
            <div className='body-container'>
                <div className='card-main-container'>
                    {
                        posts?.map((item, index) => (
                            <div className='card-container' key={index}>
                                <h1>{item.title}</h1>
                                <p>{item.content}</p>
                                <button>Show More</button>
                            </div>
                        ))
                    }
                </div>
            </div>
    </>
}