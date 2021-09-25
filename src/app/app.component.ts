import {AfterViewInit, Component,OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  constructor(private renderer: Renderer2){}
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.loadScripts(); 
  }
//src/assets/js/ruang-admin.js
  public loadScripts() {
    this.renderExternalScript('assets/js/ruang-admin.js').onload = () => {
    }
  }
  public renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
    return script;
  }
  
  title = 'kcAdmin';
}
