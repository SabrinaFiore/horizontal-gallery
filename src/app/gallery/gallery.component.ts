import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { ServiceService } from './service.service';
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  data: any;

  @ViewChild('swiper', { static: true}) swiper!: ElementRef<any>;

  ngAfterViewInit(): void {
    this.importImg();
  }

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    this.data = [
        {
          "alt": null,
          "src": "https://www.datocms-assets.com/40484/1620817348-holliefgucci18032119.jpeg?auto=format",
          "srcSet": "https://www.datocms-assets.com/40484/1620817348-holliefgucci18032119.jpeg?auto=format&dpr=0.17&w=1200 200w,\nhttps://www.datocms-assets.com/40484/1620817348-holliefgucci18032119.jpeg?auto=format&dpr=0.34&w=1200 400w,\nhttps://www.datocms-assets.com/40484/1620817348-holliefgucci18032119.jpeg?auto=format&dpr=0.67&w=1200 800w,\nhttps://www.datocms-assets.com/40484/1620817348-holliefgucci18032119.jpeg?auto=format&dpr=1&w=1200 1200w",
          "aspectRatio": 1.3333333333333333
        },
        {
          "alt": null,
          "src": "https://www.datocms-assets.com/40484/1620817340-holliefgucci18032117-3.jpeg?auto=format",
          "srcSet": "https://www.datocms-assets.com/40484/1620817340-holliefgucci18032117-3.jpeg?auto=format&dpr=0.17&w=1200 200w,\nhttps://www.datocms-assets.com/40484/1620817340-holliefgucci18032117-3.jpeg?auto=format&dpr=0.34&w=1200 400w,\nhttps://www.datocms-assets.com/40484/1620817340-holliefgucci18032117-3.jpeg?auto=format&dpr=0.67&w=1200 800w,\nhttps://www.datocms-assets.com/40484/1620817340-holliefgucci18032117-3.jpeg?auto=format&dpr=1&w=1200 1200w",
          "aspectRatio": 0.75
        },
        {
          "alt": null,
          "src": "https://www.datocms-assets.com/40484/1620817344-holliefgucci18032118xxx-2.jpeg?auto=format",
          "srcSet": "https://www.datocms-assets.com/40484/1620817344-holliefgucci18032118xxx-2.jpeg?auto=format&dpr=0.17&w=1200 200w,\nhttps://www.datocms-assets.com/40484/1620817344-holliefgucci18032118xxx-2.jpeg?auto=format&dpr=0.34&w=1200 400w,\nhttps://www.datocms-assets.com/40484/1620817344-holliefgucci18032118xxx-2.jpeg?auto=format&dpr=0.67&w=1200 800w,\nhttps://www.datocms-assets.com/40484/1620817344-holliefgucci18032118xxx-2.jpeg?auto=format&dpr=1&w=1200 1200w",
          "aspectRatio": 0.75
        },
        {
          "alt": null,
          "src": "https://www.datocms-assets.com/40484/1620817318-holliefgucci18032111.jpeg?auto=format",
          "srcSet": "https://www.datocms-assets.com/40484/1620817318-holliefgucci18032111.jpeg?auto=format&dpr=0.17&w=1200 200w,\nhttps://www.datocms-assets.com/40484/1620817318-holliefgucci18032111.jpeg?auto=format&dpr=0.34&w=1200 400w,\nhttps://www.datocms-assets.com/40484/1620817318-holliefgucci18032111.jpeg?auto=format&dpr=0.67&w=1200 800w,\nhttps://www.datocms-assets.com/40484/1620817318-holliefgucci18032111.jpeg?auto=format&dpr=1&w=1200 1200w",
          "aspectRatio": 0.75
        },
        {
          "alt": null,
          "src": "https://www.datocms-assets.com/40484/1620817309-holliefgucci18032109.jpeg?auto=format",
          "srcSet": "https://www.datocms-assets.com/40484/1620817309-holliefgucci18032109.jpeg?auto=format&dpr=0.17&w=1200 200w,\nhttps://www.datocms-assets.com/40484/1620817309-holliefgucci18032109.jpeg?auto=format&dpr=0.34&w=1200 400w,\nhttps://www.datocms-assets.com/40484/1620817309-holliefgucci18032109.jpeg?auto=format&dpr=0.67&w=1200 800w,\nhttps://www.datocms-assets.com/40484/1620817309-holliefgucci18032109.jpeg?auto=format&dpr=1&w=1200 1200w",
          "aspectRatio": 1.3333333333333333
        },
        {
          "alt": null,
          "src": "https://www.datocms-assets.com/40484/1620817285-holliefgucci18032103.jpeg?auto=format",
          "srcSet": "https://www.datocms-assets.com/40484/1620817285-holliefgucci18032103.jpeg?auto=format&dpr=0.17&w=1200 200w,\nhttps://www.datocms-assets.com/40484/1620817285-holliefgucci18032103.jpeg?auto=format&dpr=0.34&w=1200 400w,\nhttps://www.datocms-assets.com/40484/1620817285-holliefgucci18032103.jpeg?auto=format&dpr=0.67&w=1200 800w,\nhttps://www.datocms-assets.com/40484/1620817285-holliefgucci18032103.jpeg?auto=format&dpr=1&w=1200 1200w",
          "aspectRatio": 0.75
        },
        {
          "alt": null,
          "src": "https://www.datocms-assets.com/40484/1620817314-holliefgucci18032110.jpeg?auto=format",
          "srcSet": "https://www.datocms-assets.com/40484/1620817314-holliefgucci18032110.jpeg?auto=format&dpr=0.17&w=1200 200w,\nhttps://www.datocms-assets.com/40484/1620817314-holliefgucci18032110.jpeg?auto=format&dpr=0.34&w=1200 400w,\nhttps://www.datocms-assets.com/40484/1620817314-holliefgucci18032110.jpeg?auto=format&dpr=0.67&w=1200 800w,\nhttps://www.datocms-assets.com/40484/1620817314-holliefgucci18032110.jpeg?auto=format&dpr=1&w=1200 1200w",
          "aspectRatio": 0.75
        },
        {
          "alt": null,
          "src": "https://www.datocms-assets.com/40484/1620817309-holliefgucci18032109.jpeg?auto=format",
          "srcSet": "https://www.datocms-assets.com/40484/1620817309-holliefgucci18032109.jpeg?auto=format&dpr=0.17&w=1200 200w,\nhttps://www.datocms-assets.com/40484/1620817309-holliefgucci18032109.jpeg?auto=format&dpr=0.34&w=1200 400w,\nhttps://www.datocms-assets.com/40484/1620817309-holliefgucci18032109.jpeg?auto=format&dpr=0.67&w=1200 800w,\nhttps://www.datocms-assets.com/40484/1620817309-holliefgucci18032109.jpeg?auto=format&dpr=1&w=1200 1200w",
          "aspectRatio": 1.3333333333333333
        },
        {
          "alt": null,
          "src": "https://www.datocms-assets.com/40484/1620817285-holliefgucci18032103.jpeg?auto=format",
          "srcSet": "https://www.datocms-assets.com/40484/1620817285-holliefgucci18032103.jpeg?auto=format&dpr=0.17&w=1200 200w,\nhttps://www.datocms-assets.com/40484/1620817285-holliefgucci18032103.jpeg?auto=format&dpr=0.34&w=1200 400w,\nhttps://www.datocms-assets.com/40484/1620817285-holliefgucci18032103.jpeg?auto=format&dpr=0.67&w=1200 800w,\nhttps://www.datocms-assets.com/40484/1620817285-holliefgucci18032103.jpeg?auto=format&dpr=1&w=1200 1200w",
          "aspectRatio": 0.75
        },
        {
          "alt": null,
          "src": "https://www.datocms-assets.com/40484/1620817314-holliefgucci18032110.jpeg?auto=format",
          "srcSet": "https://www.datocms-assets.com/40484/1620817314-holliefgucci18032110.jpeg?auto=format&dpr=0.17&w=1200 200w,\nhttps://www.datocms-assets.com/40484/1620817314-holliefgucci18032110.jpeg?auto=format&dpr=0.34&w=1200 400w,\nhttps://www.datocms-assets.com/40484/1620817314-holliefgucci18032110.jpeg?auto=format&dpr=0.67&w=1200 800w,\nhttps://www.datocms-assets.com/40484/1620817314-holliefgucci18032110.jpeg?auto=format&dpr=1&w=1200 1200w",
          "aspectRatio": 0.75
        }
    ]
  }

  importImg() {
    console.log("[debug] this.swiper", this.swiper)
    console.log("[debug] this.swiper.nativeElement.scrollWidth", this.swiper.nativeElement.scrollWidth)
    console.log("[debug] document.documentElement.clientWidth", document.documentElement.clientWidth)

    document.querySelectorAll(".img-box").forEach(img => {
      console.log("[debug] img", img)
      const scrollBox = gsap.timeline({
        scrollTrigger: {
          trigger: img,
          invalidateOnRefresh: true,
          pin: true,
          scrub: 1,
          end: () => "+=" + this.swiper.nativeElement.offsetWidth
        }
      });

      scrollBox.from(img, { y: 30, opacity: 1 });
    });
  }
}
