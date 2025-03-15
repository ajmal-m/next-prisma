import './index.css';
import { Form } from '@/components/reusable/Form/index';
import {CreateBlog} from '@/actions/action';
export default function CreatePost(){
    return <>
        <div className="body-container">
        <Form submit={CreateBlog}/>
        </div>
    </>
}