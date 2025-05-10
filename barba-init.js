document.addEventListener("DOMContentLoaded", function () {
    barba.init({
        transitions: [{
            name: 'fade',
            leave(data) {
                return gsap.to(data.current.container, { opacity: 0 });
            },
            enter(data) {
                return gsap.from(data.next.container, { opacity: 0 });
            }
        }]
    });

    // Replace buttons with onclick navigation to use barba.go()
    document.querySelectorAll('button.calculate, button.consultancybtn, button.cataloguebtn').forEach(button => {
        button.addEventListener('click', () => {
            const onclickAttr = button.getAttribute('onclick');
            if (onclickAttr) {
                const hrefMatch = onclickAttr.match(/location.href=['"]([^'"]+)['"]/);
                if (hrefMatch && hrefMatch[1]) {
                    barba.go(hrefMatch[1]);
                }
            }
        });
    });

    // Example for your Home button with class "btn-challenge"
    document.querySelectorAll('button.btn-challenge').forEach(button => {
        button.addEventListener('click', () => {
            barba.go('index.html');
        });
    });
});
