import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { AdctestSharedModule } from 'app/shared/shared.module';
import { AdctestCoreModule } from 'app/core/core.module';
import { AdctestAppRoutingModule } from './app-routing.module';
import { AdctestHomeModule } from './home/home.module';
import { AdctestEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    AdctestSharedModule,
    AdctestCoreModule,
    AdctestHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    AdctestEntityModule,
    AdctestAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class AdctestAppModule {}
