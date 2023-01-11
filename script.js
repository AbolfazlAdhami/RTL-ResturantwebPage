function main() {
        const Icons = document.querySelectorAll(".section-1-icons i");
        let i = 1;
        setInterval(() => {
                i++;
                const icon = document.querySelector(".section-1-icons .change");
                icon.classList.remove("change");

                if (i > Icons.length) {
                        Icons[0].classList.add("change");
                        i = 1;
                } else {
                        icon.nextElementSibling.classList.add("change");
                }
        }, 2500);

        document.querySelector(".menu").addEventListener("click", () => {
                document.querySelectorAll(".target").forEach((item) => {
                        item.classList.toggle("change");
                });
        });
}

document.addEventListener("DOMContentLoaded", main());
