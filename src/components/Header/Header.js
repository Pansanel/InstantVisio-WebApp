import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'

import InstantVisioLogo from '../../styles/assets/images/Favicon_InstantVisio_Titre.png'
import InstantVisioLogoMobile from '../../styles/assets/images/Favicon_InstantVisio_Titre_mobile.png'
import HeaderStyled from './Header.styled.js'


const Header = () => (
    <HeaderStyled>
        <Container className="header">
            <img
                src={InstantVisioLogo}
                alt="logo de Instant Visio, représentant un écran de téléphone portable bleu où apparaît un visage sous forme de cercle orange, discutant en visio avec le propriétaire du téléphone, dont le visage apparaît sous la forme d'un cercle aux contours oranges."
                className="NewCall-logo"
            />
            <img
                src={InstantVisioLogoMobile}
                alt="logo de Instant Visio, représentant un écran de téléphone portable bleu où apparaît un visage sous forme de cercle orange, discutant en visio avec le propriétaire du téléphone, dont le visage apparaît sous la forme d'un cercle aux contours oranges."
                className="NewCall-logo-mobile"
            />
            <Container className="header-baseline">
                <p className="header-baseline-content">Joignez un proche en visio, en un clic, gratuitement.</p>
            </Container>
        </Container>
    </HeaderStyled>
)

export default Header