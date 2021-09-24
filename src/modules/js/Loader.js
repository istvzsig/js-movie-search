import Element from './Element.js';

export default class Loader {
      constructor(idx=null, cls=null) {
            this.element = new Element();

            if(idx) this.element.id = idx;
            if(cls) this.element.className = cls;
      }

      start(parent=null) {
            document.body.appendChild(this.element);
            // this.element.classList.add('fadein');
            //try {}
            //catch {}

      }

      finish(parent=null) {
            
            console.log('Finished fetching...')
            // this.element.classList.remove('fadein');
            // this.element.classList.add('fadeout');
            this.element.remove();
            //try {}
            //catch {}
      }
}