import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import gsap from 'gsap';

@Component({
	selector: 'spleet-screen',
	templateUrl: './spleet-screen.component.html',
  imports: [CommonModule, RouterModule],
  standalone: true
})

export class SpleetScreenComponent {
  lineTimeline = gsap.timeline({paused: true})
  tlTo = gsap.quickTo(this.lineTimeline, "progress", {duration: 0.6, ease: "power3"})

  ngOnInit(){
    this.createMenuAnim()
  }

  handleMouseMove = (event: MouseEvent) => {
    const progress = event.clientX / window.innerWidth
    this.tlTo(Number(progress.toFixed(3)))
  }

  createMenuAnim(){
    this.lineTimeline.set("#split", {
      left:'0',
      skewX: -10,
    }, 0)
    this.lineTimeline.to("#split", {
      left: '78%',
      skewX: 10,
      ease: 'power1.inOut'
    })
    this.lineTimeline.progress(0.5)
    window.addEventListener('mousemove', this.handleMouseMove)
  }
};
