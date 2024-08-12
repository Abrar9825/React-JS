import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div>
            <h1>Error 404</h1>
            <h3>This page doesn't exist</h3>
            <Link to='/recipe-list'>Go to Recipe List Page</Link>
        </div>
    );
}
