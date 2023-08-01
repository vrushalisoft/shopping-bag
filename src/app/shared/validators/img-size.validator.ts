import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

export class UniqueEmailValidator{
  static uniqueEmail(control : AbstractControl) : Promise<ValidationErrors | null> | Observable<ValidationErrors | null>{
      return new Promise((resolve)=>{
          setTimeout(() => {
            return {
                scope: {
                    file: '='
                },
                require: 'ngModel',
                link(scope: any, el: any, attrs: any, ctrl: any) {

                    el.bind('change', (event: any) => {
                        var file = event.target.files[0];
                        var extn = file.name.split(".").pop().toLowerCase();

                        if (attrs.validExtensions != null) {
                            const extensions = attrs.validExtensions.split(',');
                            var validExtension = false;

                            extensions.forEach((x: any) => {
                                if (x === extn) {
                                    validExtension = true;
                                }
                            });

                            ctrl.$setValidity('type', validExtension);
                        }

                        if (attrs.maxSize != null) {
                            var maxSize = attrs.maxSize;

                            var valid = (file.size / 1024) <= maxSize;
                            ctrl.$setValidity('size', valid);
                        } else {
                            console.log('max size ScriptNotifyEvent set');
                        }

                        scope.file = file ? file : undefined;
                        scope.$apply();
                    });
                }
            };
          }, 2000);
      })
  }
}

