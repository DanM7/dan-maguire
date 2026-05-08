import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppShellComponent } from './app-shell.component';
import { HomePageComponent } from '../home/home.page';
import { AboutPageComponent } from '../about/about.page';
import { ExperiencePageComponent } from '../experience/experience.page';
import { ProjectsPageComponent } from '../projects/projects.page';
import { ProjectDetailPageComponent } from '../projects/project-detail.page';
import { ContactPageComponent } from '../contact/contact.page';
import { EngineeringCulturesPageComponent } from '../projects/insights/engineering-cultures/engineering-cultures.page';
import { ProductEngineeringTeamsPageComponent } from '../projects/insights/28-product-engineering-teams/28-product-engineering-teams.page';
import { FrameworksPatternsProcessesPageComponent } from '../projects/insights/frameworks-patterns-processes/frameworks-patterns-processes.page';
import { CrossTeamEngineeringPracticesPageComponent } from '../projects/insights/cross-team-engineering-practices/cross-team-engineering-practices.page';
import { EngineeringAndCreativityPageComponent } from '../projects/insights/engineering-and-creativity/engineering-and-creativity.page';
import { ThingsThatFeelGoodToUsePageComponent } from '../projects/insights/things-that-feel-good-to-use/things-that-feel-good-to-use.page';
import { EngineeringStorytellingDesignPageComponent } from '../projects/insights/engineering-storytelling-design/engineering-storytelling-design.page';
import { EngineeringAsStorytellingPageComponent } from '../projects/insights/engineering-as-storytelling/engineering-as-storytelling.page';
import { PatternsThatHelpMeSucceedPageComponent } from '../projects/insights/patterns-that-help-me-succeed/patterns-that-help-me-succeed.page';
import { TinkeringWithASideProjectPageComponent } from '../projects/insights/tinkering-with-a-side-project/tinkering-with-a-side-project.page';
import { PersonalSdlcPageComponent } from '../projects/insights/personal-sdlc/personal-sdlc.page';

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
          { path: 'projects/insights/engineering-cultures', component: EngineeringCulturesPageComponent },
          { path: 'projects/insights/28-product-engineering-teams', component: ProductEngineeringTeamsPageComponent },
          { path: 'projects/insights/frameworks-patterns-processes', component: FrameworksPatternsProcessesPageComponent },
          { path: 'projects/insights/cross-team-engineering-practices', component: CrossTeamEngineeringPracticesPageComponent },
          { path: 'projects/insights/engineering-and-creativity', component: EngineeringAndCreativityPageComponent },
          { path: 'projects/insights/things-that-feel-good-to-use', component: ThingsThatFeelGoodToUsePageComponent },
          { path: 'projects/insights/engineering-as-storytelling', component: EngineeringAsStorytellingPageComponent },
          { path: 'projects/insights/engineering-storytelling-design', component: EngineeringStorytellingDesignPageComponent },
          { path: 'projects/insights/patterns-that-help-me-succeed', component: PatternsThatHelpMeSucceedPageComponent },
          { path: 'projects/insights/tinkering-with-a-side-project', component: TinkeringWithASideProjectPageComponent },
          { path: 'projects/insights/personal-sdlc', component: PersonalSdlcPageComponent },
          { path: 'projects/:slug', component: ProjectDetailPageComponent },
          { path: 'contact', component: ContactPageComponent },
          { path: '**', redirectTo: '' }
        ]
      }
    ])
  ]
})
export class AppShellModule {}
