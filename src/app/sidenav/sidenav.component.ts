import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  //   $(document).ready(function () {
  //     $('#sidebarCollapse').on('click', function () {
  //         $('#sidebar').toggleClass('active');
  //     });
  // })(jQuery);
  // }
  }
   openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

   closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
}

