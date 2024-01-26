import Script from "next/script"
const navbarScript = ()=> {
    return (
        <script>
            {`
                let timVine = document.getElementById("mainNav");
                let navbar = document.getElementById("mainNav");
                let logo = document.getElementById("brandLogo");
                
                
                let navPos = navbar.getBoundingClientRect().top;
                
                window.addEventListener("scroll", e => {
                  let scrollPos = window.scrollY;
                  if (scrollPos > navPos) {
                    navbar.classList.add('navbar-fixed-top');
                    logo.classList.add('bg-blue');
                    
                  } else {
                    navbar.classList.remove('navbar-fixed-top');
                    logo.classList.remove('bg-blue');
                  }
                });
            `}
        </script>
    )
}

export default navbarScript