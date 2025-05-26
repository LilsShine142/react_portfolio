import config from "../config";

// Pages
import Home from "../pages/Home";
interface RouteConfig {
  path?: string;
  component?: React.ComponentType<any>;
  element?: React.ReactNode;
  children?: RouteConfig[];
  isPrivate?: boolean;
  index?: boolean;
}

// Public routes
const publicRoutes: RouteConfig[] = [
    {
        path: config.routes.home, 
        element: <Home />,
    },
  
];


// Private routes
const privateRoutes: RouteConfig[] = [
  // Thêm các route yêu cầu đăng nhập ở đây
];

export { publicRoutes, privateRoutes };