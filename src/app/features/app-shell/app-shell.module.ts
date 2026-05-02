import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppShellComponent } from './app-shell.component';
import { HomePageComponent } from '../home/home.page';
import { AboutPageComponent } from '../about/about.page';
import { ExperiencePageComponent } from '../experience/experience.page';
import { ProjectsPageComponent } from '../projects/projects.page';
import { ContactPageComponent } from '../contact/contact.page';
import { EngineeringCulturesPageComponent } from '../../blog/engineering-cultures/engineering-cultures.page';
import { ProductEngineeringTeamsPageComponent } from '../../blog/28-product-engineering-teams/28-product-engineering-teams.page';
import { FrameworksPatternsProcessesPageComponent } from '../../blog/frameworks-patterns-processes/frameworks-patterns-processes.page';
import { CrossTeamEngineeringPracticesPageComponent } from '../../blog/cross-team-engineering-practices/cross-team-engineering-practices.page';
import { EngineeringAndCreativityPageComponent } from '../../blog/engineering-and-creativity/engineering-and-creativity.page';
import { ThingsThatFeelGoodToUsePageComponent } from '../../blog/things-that-feel-good-to-use/things-that-feel-good-to-use.page';
import { EngineeringStorytellingDesignPageComponent } from '../../blog/engineering-storytelling-design/engineering-storytelling-design.page';
import { EngineeringAsStorytellingPageComponent } from '../../blog/engineering-as-storytelling/engineering-as-storytelling.page';
import { PatternsThatHelpMeSucceedPageComponent } from '../../blog/patterns-that-help-me-succeed/patterns-that-help-me-succeed.page';
import { TinkeringWithASideProjectPageComponent } from '../../blog/tinkering-with-a-side-project/tinkering-with-a-side-project.page';

@NgModule({
  imports: [
    AppShellComponent,
    HomePageComponent,
    AboutPageComponent,
    ExperiencePageComponent,
    ProjectsPageComponent,
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
          { path: 'contact', component: ContactPageComponent },
          { path: 'blog/engineering-cultures', component: EngineeringCulturesPageComponent },
          { path: 'blog/28-product-engineering-teams', component: ProductEngineeringTeamsPageComponent },
          { path: 'blog/frameworks-patterns-processes', component: FrameworksPatternsProcessesPageComponent },
          { path: 'blog/cross-team-engineering-practices', component: CrossTeamEngineeringPracticesPageComponent },
          { path: 'blog/engineering-and-creativity', component: EngineeringAndCreativityPageComponent },
          { path: 'blog/things-that-feel-good-to-use', component: ThingsThatFeelGoodToUsePageComponent },
          { path: 'blog/engineering-as-storytelling', component: EngineeringAsStorytellingPageComponent },
          { path: 'blog/engineering-storytelling-design', component: EngineeringStorytellingDesignPageComponent },
          { path: 'blog/patterns-that-help-me-succeed', component: PatternsThatHelpMeSucceedPageComponent },
          { path: 'blog/tinkering-with-a-side-project', component: TinkeringWithASideProjectPageComponent },
          { path: '**', redirectTo: '' }
        ]
      }
    ])
  ]
})
export class AppShellModule {}
