import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown[dropdownItems][dropdownHeader]',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() dropdownItems;
  @Input() dropdownHeader;

  @Output() clickOutput: EventEmitter<string> = new EventEmitter<string>();
  isDropdownOpen = false;

  itemClick(dropdownItem): void {
    this.clickOutput.emit(dropdownItem);
    this.isDropdownOpen = false;
  }

  dropdownToggle(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
