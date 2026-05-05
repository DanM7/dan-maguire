import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppShellComponent } from './app-shell.component';
import { HomePageComponent } from '../home/home.page';
import { AboutPageComponent } from '../about/about.page';
import { ExperiencePageComponent } from '../experience/experience.page';
import { ProjectsPageComponent } from '../projects/projects.page';
import { ProjectDetailPageComponent } from '../projects/project-detail.page';
import { ContactPageComponent } from '../contact/contact.page';
import { EngineeringCulturesPageComponent } from '../insights/engineering-cultures/engineering-cultures.page';
import { ProductEngineeringTeamsPageComponent } from '../insights/28-product-engineering-teams/28-product-engineering-teams.page';
import { FrameworksPatternsProcessesPageComponent } from '../insights/frameworks-patterns-processes/frameworks-patterns-processes.page';
import { CrossTeamEngineeringPracticesPageComponent } from '../insights/cross-team-engineering-practices/cross-team-engineering-practices.page';
import { EngineeringAndCreativityPageComponent } from '../insights/engineering-and-creativity/engineering-and-creativity.page';
import { ThingsThatFeelGoodToUsePageComponent } from '../insights/things-that-feel-good-to-use/things-that-feel-good-to-use.page';
import { EngineeringStorytellingDesignPageComponent } from '../insights/engineering-storytelling-design/engineering-storytelling-design.page';
import { EngineeringAsStorytellingPageComponent } from '../insights/engineering-as-storytelling/engineering-as-storytelling.page';
import { PatternsThatHelpMeSucceedPageComponent } from '../insights/patterns-that-help-me-succeed/patterns-that-help-me-succeed.page';
import { TinkeringWithASideProjectPageComponent } from '../insights/tinkering-with-a-side-project/tinkering-with-a-side-project.page';

@NgModule({
  imports: [
    AppShellComponent,
    HomePageComponent,
    AboutPageComponent,
    ExperiencePageComponent,
    ProjectsPageComponent,
    ProjectDetailPageComponent,
    ContactPageComponent,
    RouterModule.forChild([
      {
        path: '',
        component: AppShellComponent,
        children: [
          { path: '', component: HomePageComponent },
          { path: 'about', component: AboutPageComponent },
          { path: 'experience', component: ExperiencePageComponent },
          { path: 'projects', component: ProjectsPageComponent },
          { path: 'projects/:slug', component: ProjectDetailPageComponent },
          { path: 'contact', component: ContactPageComponent },
          { path: 'insights/engineering-cultures', component: EngineeringCulturesPageComponent },
          { path: 'insights/28-product-engineering-teams', component: ProductEngineeringTeamsPageComponent },
          { path: 'insights/frameworks-patterns-processes', component: FrameworksPatternsProcessesPageComponent },
          { path: 'insights/cross-team-engineering-practices', component: CrossTeamEngineeringPracticesPageComponent },
          { path: 'insights/engineering-and-creativity', component: EngineeringAndCreativityPageComponent },
          { path: 'insights/things-that-feel-good-to-use', component: ThingsThatFeelGoodToUsePageComponent },
          { path: 'insights/engineering-as-storytelling', component: EngineeringAsStorytellingPageComponent },
          { path: 'insights/engineering-storytelling-design', component: EngineeringStorytellingDesignPageComponent },
          { path: 'insights/patterns-that-help-me-succeed', component: PatternsThatHelpMeSucceedPageComponent },
          { path: 'insights/tinkering-with-a-side-project', component: TinkeringWithASideProjectPageComponent },
          { path: '**', redirectTo: '' }
        ]
      }
    ])
  ]
})
export class AppShellModule {}
