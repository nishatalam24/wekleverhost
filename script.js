const burger_icon = document.querySelector('[burger_icon]');
const navbarlistitems = document.querySelector('[navbarlistitems]');
const list_items_services = document.querySelector('[list_items_services]');
const list_items_expertise = document.querySelector('[list_items_expertise]');





const services_container = document.querySelector('[services_container]');
const expertise_container = document.querySelector('[expertise_container]');



services_container.addEventListener('mouseover', () => {
      list_items_services.style.display = 'block';
});

list_items_services.addEventListener('mouseover', () => {
  list_items_services.style.display = 'block';
});
list_items_services.addEventListener('mouseout', () => {
  list_items_services.style.display = 'none';
});

services_container.addEventListener('mouseout', () => {
      list_items_services.style.display = 'none';
      // console.log("hello")
});



expertise_container.addEventListener('mouseover', () => {
      list_items_expertise.style.display = 'block';
});

list_items_expertise.addEventListener('mouseover', () => {
      list_items_expertise.style.display = 'block'; 
});

list_items_expertise.addEventListener('mouseout', () => {
      list_items_expertise.style.display = 'none';
});

expertise_container.addEventListener('mouseout', () => {
      list_items_expertise.style.display = 'none';
});



// expertise_container.addEventListener('mouseenter', () => {
//     // container.classList.add('hover');
// });

// expertise_container.addEventListener('mouseleave', () => {
//     // container.classList.remove('hover');
// });



let burger_active=false;
burger_icon.addEventListener('click', function() {

if(!burger_active){
    burger_icon.classList.add('burger_icon_active');
    burger_active=true;
    navbarlistitems.classList.add('navbarlist_item_active');
}

else{
    burger_icon.classList.remove('burger_icon_active');
    burger_active=false;
    navbarlistitems.classList.remove('navbarlist_item_active');
}
    // myElement.classList.add('new-class')
  });

//   navbarlistitems.addEventListener('click', function() {

 
//   })

// send email function

function sendEmail() {
    // Replace 'recipient@example.com' with the actual email address
    var email = 'recipient@example.com';
    var subject = 'Subject of the email';
    var body = 'Body of the email';

    // Construct the mailto link
    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    // Open the user's default email client
    window.location.href = mailtoLink;
  }