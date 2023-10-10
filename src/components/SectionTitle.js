//Material
import { Link } from "@mui/material";

const Style1 = {
    fontWeight: 200,
    fontSize: '2rem',
    lineHeight: 2,
    letterSpacing: '0.08333em',
    textTransform: 'uppercase',
    color: 'text.primary',
};
const Style2 = {
    fontWeight: 200,
    fontSize: '2rem',
    lineHeight: 2,
    letterSpacing: '0.08333em',
    textTransform: 'uppercase',
    color: 'text.secondary',
};

function SectionTitle({section, primaryStyle}) {
    const scrollToSection = (event) => {
        event.preventDefault();
        const target = document.querySelector(event.target.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth',
            });
        }
    };
    return (
        <Link variant='overline' underline='none' href={'#' + section.toLowerCase().split(" ").join("")} onClick={scrollToSection}
            sx={primaryStyle ? Style1 : Style2}>
            {section}
        </Link>  
    );
}

export default SectionTitle