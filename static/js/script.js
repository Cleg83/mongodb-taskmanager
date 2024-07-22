document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav, {edge: "right"});
 
    let collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible);

    let tooltip = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltip);

    let select = document.querySelectorAll('select');
    M.FormSelect.init(select);

    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmm yyyy",
      yearRange: 3,
      showClearBtn: true,
      i18n: {done: "Select"},
    });
    
  });