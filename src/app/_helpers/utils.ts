export function copyTextAreaToClipBoard(message: string) {
    const cleanText = message.replace(/<\/?[^>]+(>|$)/g, '');
    const x = document.createElement('TEXTAREA') as HTMLTextAreaElement;
    x.value = cleanText;
    document.body.appendChild(x);
    x.select();
    document.execCommand('copy');
    document.body.removeChild(x);
  }

export function getFileExtension(filename:string) {
  //return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) : undefined;
  return filename.split('.').pop();
}

export function markAllDirty(form:any) {
  for (const key in form.controls) {
    if (Object.prototype.hasOwnProperty.call(form.controls, key)) {
      form.controls[key].markAsDirty(); 
    }
  }
}

export function scrollToTop() {
  (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
  })();
}

export function emailValidator(email= '') {
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(email) return emailRegex.test(email);
  return false;
}