import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxEchartsModule } from 'ngx-echarts';
import { NbCardModule, NbButtonModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { MapsRoutingModule, routedComponents } from './maps-routing.module';

@NgModule({
    imports: [
        ThemeModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCpVhQiwAllg1RAFaxMWSpQruuGARy0Y1k',
            libraries: ['places'],
        }),
        LeafletModule.forRoot(),
        MapsRoutingModule,
        NgxEchartsModule,
        NbCardModule,
        AgmDirectionModule,
        NbButtonModule,
    ],
    exports: [],
    declarations: [
        ...routedComponents,
    ],
})
export class MapsModule { }
