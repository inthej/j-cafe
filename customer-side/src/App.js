import {Redirect, Switch, withRouter} from "react-router-dom";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {HomeProvider} from "./context/home";
import RouteWithLayout from "./layouts";
import MainLayout from "./layouts/MainLayout";
import Coffee from "./pages/Coffee";
import Favourite from "./pages/Favourite";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    display: flex;
    justify-content: center;
    align-items:center;
    min-height: 100vh;
    
    background-color: ${theme.background.white}
  }
  
  ul {
    padding: 0;
    margin: 0;
  }
  
  li {
    padding: 0;
    margin: 0;
  }
`;

const App = () => {
  return (
    <>
      <HomeProvider>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
          <Switch>
            <Redirect exact from="/" to="/home"/>
            <RouteWithLayout path="/home" layout={MainLayout} component={Home}/>
            <RouteWithLayout path="/favourite/:id" layout={MainLayout} component={Favourite}/>
            <RouteWithLayout path="/favourite" layout={MainLayout} component={Favourite}/>
            <RouteWithLayout path="/menu" layout={MainLayout} component={Menu}/>
            <RouteWithLayout path="/coffee/:id" layout={MainLayout} component={Coffee}/>
            <RouteWithLayout path="/not-found" layout={MainLayout} component={NotFound}/>
            <Redirect to="/not-found"/>
          </Switch>
        </ThemeProvider>
      </HomeProvider>
    </>
  );
}

export default withRouter(App);
