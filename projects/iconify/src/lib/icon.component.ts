import { Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { normalize, SVG } from './svg';

@Component({
  selector: 'ic-icon',
  template: ``
})
export class IconComponent implements OnInit, OnChanges {

  @Input() icon: object;

  // Optional Properties
  @Input() color: string;
  @Input() inline: boolean;
  @Input() box: boolean;

  // Dimensions and Alignment
  @Input() width = '1em';
  @Input() height = '1em';
  @Input() align: string;

  // Transformations
  @Input() hFlip: boolean;
  @Input() vFlip: boolean;
  @Input() flip: string;
  @Input() rotate = 0;

  @HostBinding('innerHTML')
  iconHTML: SafeHtml;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.updateIcon();
    }
  }

  updateIcon() {
    if (typeof this.icon !== 'object') {
      throw new Error('[Iconify]: No icon provided');
    }

    // Get SVG data
    const svg = new SVG(normalize(this.icon));

    // Generate SVG
    this.iconHTML = this.domSanitizer.bypassSecurityTrustHtml(svg.getSVG({
      width: this.width,
      height: this.height,
      color: this.color,
      inline: this.inline,
      box: this.box,
      align: this.align,
      hFlip: this.hFlip,
      vFlip: this.vFlip,
      flip: this.flip,
      rotate: this.rotate
    }));
  }
}
