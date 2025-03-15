import './index.css';
import Link from 'next/link';
export default function Header(){
    return<>
        <div className="navbar">
            <div className="navbar-end-container">
                <button>
                    <Link href={'/create-post'}>
                        Create Post
                    </Link>
                </button>
                <button>Sign In</button>
            </div>
        </div>
    </>
}