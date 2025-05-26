import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App as AntdApp, ConfigProvider } from "antd";
import { publicRoutes } from "./routes/routes";

const App = () => {
  return (
    <BrowserRouter basename="/react_portfolio">
      <ConfigProvider>
        <AntdApp>
        <Routes>
          {/* Route cha với MainLayout */}
            {publicRoutes.map((route, index) => {
              if (route.element) {
                return (
                  <Route key={index} path={route.path} element={route.element}>
                    {route.children?.map((child, childIndex) => (
                      <Route
                        key={childIndex}
                        path={child.path}
                        index={child.index}
                        element={child.element}
                      />
                    ))}
                  </Route>
                );
              }

              // Nếu route không có layout
              if (route.component) {
                const Component = route.component;
                return (
                  <Route key={index} path={route.path} element={<Component />} />
                );
              }

              return null;
            })}
        </Routes>
        </AntdApp>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default App;