// const iconsOfImage = document.querySelectorAll(".icons img");
// iconsOfImage.forEach((img) => {
//     img.addEventListener("mouseenter", () => {
//         const textForComment = document.createElement('div');
//         textForComment.classList.add("comment");
//         if (img.alt.toLowerCase().includes("view")) {
//             textForComment.textContent = "View Product";
//             document.querySelectorAll(".comment").style.display = "block";

//         } else if (img.alt.toLowerCase().includes("favorite")) {
//             textForComment.textContent = "Add to wishlist";
//         } else if (img.alt.toLowerCase().includes("preview")) {
//             textForComment.textContent = "Preview";
//         }
//         img.parentElement.appendChild(textForComment);
//     });
//     img.addEventListener("mouseleave", () => {
//         const hideComment = img.parentElement.querySelector(".comment");
//         if (hideComment == true) {
//             hideComment.remove();
//         }
//     });
// });
