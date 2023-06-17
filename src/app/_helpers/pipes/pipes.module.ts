import { NgModule } from '@angular/core';
import { SafeurlPipe } from './safeurl/safeurl';
import { TolocaldatePipe } from './tolocaldate/tolocaldate.pipe';

@NgModule({
	declarations: [SafeurlPipe, TolocaldatePipe],
	imports: [],
	exports: [SafeurlPipe, TolocaldatePipe]
})
export class PipesModule { }
