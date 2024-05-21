import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-no-content',
  standalone: true,
  imports: [],
  templateUrl: './no-content.component.html',
  styleUrls: ['./no-content.component.scss']
})
export class NoContentComponent {

  @Input() matIcon: string = 'loyalty';
  @Input() title: string = 'No Data Added Yet!';
  @Input() desc: string = 'Please add your your data to see here';


}
