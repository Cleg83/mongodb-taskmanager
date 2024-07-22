document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav, {edge: "right"});
 
    let collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible);

    let tooltip = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltip);
    
  });