import { Component } from '@angular/core';

@Component({
    selector: 'ngx-footer',
    styleUrls: ['./footer.component.scss'],
    template: `
    <span class="created-by">By Dario Gonzalez for Telxius<b> 27-02-2020 </b> (Based on ngx-admin by Arkveo)</span>
    <div class="socials">
      <a href="https://github.com/dglezgall" target="_blank" class="ion ion-social-github"></a>
      <a href="https://linkedin.com/in/d-glez-gallego" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
