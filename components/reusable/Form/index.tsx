import './index.css'
export function Form({submit} : any){
    return <>
        <form className="form" action={submit}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
            <label htmlFor="content">Content</label>
            <textarea rows={5} name="content" id="content" />
            <button type="submit">Submit</button>
        </form>
    </>
}