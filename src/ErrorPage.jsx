import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div className="flex h-[100vh] justify-center items-center">
            <p><span className="text-[500px] font-light">404</span>Page Not Found</p>
        </div>
    )
};

export default ErrorPage;