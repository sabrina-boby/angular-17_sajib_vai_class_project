import {Component, inject} from '@angular/core';
import {UiService} from '../../services/core/ui.service';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly uiService = inject(UiService);


  showMessage(message: string, type: 'success' | 'warn' | 'wrong') {
    this.uiService.message(message, type)
  }

  downloadImage() {
    const element = document.getElementById('htmlContent'); // ID of the HTML element to be converted

    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'htmltoimage.png';
      link.href = imgData;
      link.click();
    });
  }
}
