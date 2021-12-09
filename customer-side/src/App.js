import {Redirect, Switch, withRouter} from "react-router-dom";
import {createGlobalStyle, ThemeProvider} from "styled-components";
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
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Switch>
          <Redirect exact from="/" to="/home"/>
          <RouteWithLayout exact path="/home" layout={MainLayout} component={Home}/>
          <RouteWithLayout exact path="/favourite" layout={MainLayout} component={Favourite}/>
          <RouteWithLayout exact path="/menu" layout={MainLayout} component={Menu}/>
          <RouteWithLayout exact path="/coffee" layout={MainLayout} component={Coffee}/>
          <RouteWithLayout exact path="/not-found" layout={MainLayout} component={NotFound}/>
          <Redirect to="/not-found"/>
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default withRouter(App);
