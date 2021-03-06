import React, { useEffect } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import './App.scss'
import {
    Home,
    VideoCall,
    LegalMentions,
    PersonalData,
    Blog,
    Credits,
} from '../../pages'

const App = () => {
    const { t } = useTranslation()

    useEffect(() => {
        // when using vh and vw units in css:
        // to make sure the height taken into account
        // is the whole window size,
        // not the visible window size
        // (critical on mobile, where, on click on the contact form inputs,
        // the keyboard appears and takes half of the window size,
        // which shrinks the form size - unpleasant user experience)
        if (!window.location.pathname.includes('visio')) {
            setTimeout(() => {
                const viewheight = window.innerHeight
                const viewwidth = window.innerWidth
                const viewport = document.querySelector('meta[name=viewport]')
                viewport.setAttribute(
                    'content',
                    `height=${viewheight}px, width=${viewwidth}px, initial-scale=1.0`
                )
            }, 300)
        }
    }, [])

    return (
        <div className="App">
            <Route path="/" exact component={Home} />
            <Route
                path={`/${t('url.video-call')}/:videoName`}
                component={VideoCall}
            />
            <Route
                path={`/${t('url.legal-mentions')}`}
                exact
                component={LegalMentions}
            />
            <Route
                path={`/${t('url.personal-data')}`}
                exact
                component={PersonalData}
            />
            <Route path={`/${t('url.blog')}`} exact component={Blog} />
            <Route path={`/${t('url.blog')}/:post`} exact component={Blog} />
            <Route path={`/${t('url.credits')}`} exact component={Credits} />
        </div>
    )
}

// withRouter to pass props to components
export default withRouter(App)
