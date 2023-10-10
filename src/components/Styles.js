const TSNormal = {
    width:'50%',
    textAlign: 'justify',
    hyphens: 'auto',
    textTransform: 'none',    
    fontWeight: 200,
    lineHeight: 2,
    color: 'text.primary',
};
const TSTitle1 = {
    fontWeight: 200,
    fontSize: '2rem',
    lineHeight: 2,
    letterSpacing: '0.08333em',
    textTransform: 'uppercase',
    color: 'text.primary',
};
const TSTitle2 = {
    fontWeight: 200,
    fontSize: '2rem',
    lineHeight: 2,
    letterSpacing: '0.08333em',
    textTransform: 'uppercase',
    color: 'text.secondary',
};
const BSSection1 = {
    width: 1,
    height: '95vh',
    backgroundColor: 'primary.main',
    display: 'flex',
    flexDirection: 'column',
};
const BSSection2 = {
    width: 1,
    height: '95vh',
    backgroundColor: 'secondary.main',
    display: 'flex',
    flexDirection: 'column',
};
const BSLogoSection = {
    height: '20%',
    aspectRatio: 1,
    marginTop: '2%',
    marginBottom: '2%',
    marginInline: 'auto',
    opacity: 0.7,
};
const BoxTextSection = {
    width: '50%',
    marginBottom: '2%',
    marginInline: 'auto',
    textAlign: 'left',
    color: 'text.text',
}
const BoxHeader = {
    width: 1,
    height: '10vh',
    backgroundColor: 'primary.main',
    display: 'flex',
    justifyContent: 'center',
}
const BoxHeaderLink = {
    height: '90%',
    width: 'auto',
    aspectRatio: 1,
    marginBlock: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}
const BoxHeaderLogo = {
    height: '90%',
    width: 'auto',
    aspectRatio: 1,
    marginBlock: 'auto',
    opacity: 0.7,
}
const BoxFabToTop = {
    position: 'fixed',
    bottom: 20,
    right: 20,
    transition: 'opacity 0.3s',
    color: 'text.primary',
}
const BoxFabTheme = {
    position: 'fixed',
    bottom: 20,
    left: 20,
    transition: 'opacity 0.3s'
}
const BoxEpisodesFrame = {
    width: '50%',
    aspectRatio: 1,
    margin: 'auto',
    marginTop: '10%',
    textAlign: 'left',
}

export {TSNormal, TSTitle1, TSTitle2, BSSection1, BSSection2, BSLogoSection, BoxTextSection, BoxHeader, BoxHeaderLink, BoxHeaderLogo, BoxFabToTop, BoxFabTheme, BoxEpisodesFrame}