import './index.css';
export default function Footer(){

    const year = new Date().getFullYear()
    return <>
        <footer className='footer'>
            Copyright © {year} Mr. AJMAL.M
        </footer>
    </>
}