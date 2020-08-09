import React from 'react'
import {render} from 'react-dom'

import {ApolloProvider} from 'react-apollo'
import apolloClient from './apolloClient'

import ListenPageRoot from './components/ListenPageRoot'
import ReactGA from 'react-ga'

(function() {

    window.onload = function() {

        var rootDiv = document.createElement("div");
        rootDiv.setAttribute("id", "root");

        var body = document.getElementsByTagName("body")[0];
        body.appendChild(rootDiv);


        render(
            <ApolloProvider client={apolloClient}>
                <ListenPageRoot />
            </ApolloProvider>,
            document.getElementById('root'),
        )

    }

}

})();