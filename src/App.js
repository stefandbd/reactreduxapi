import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PostsPage from './containers/PostsPage';
import EditPostsPage from './containers/EditPostPage';
import AddPostsPage from './containers/AddPostPage';
import './styles/App.css';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faNewspaper,faPlusCircle)


const App = () => {

    return (



<Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav className='nav-style'
                onSelect={(selected) => {
                    const to = selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="/">
                    <NavItem eventKey="/">
                        <NavIcon>
                            <FontAwesomeIcon icon="newspaper" style={{ fontSize: '1.75em' }}/>
                        </NavIcon>
                        <NavText>
                            All Posts
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="add">
                        <NavIcon>
                         <FontAwesomeIcon icon="plus-circle" style={{ fontSize: '1.75em' }}/>
                        </NavIcon>
                        <NavText>
                            Add Post
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <main>
            <Route exact path="/" component={PostsPage}/>
                    <Route path="/add" component={AddPostsPage}/>
                    <Route path="/edit/:id" component={EditPostsPage}/>
            </main>
        </React.Fragment>
    )}
    />
</Router>
    );
};

export default App;
