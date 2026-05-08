import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Project } from './project.model';
import { getProjectBySlug, projectCategoryEyebrow } from './projects.data';

@Component({
  selector: 'app-project-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.page.html',
  styleUrls: ['./project-detail.page.scss']
})
export class ProjectDetailPageComponent implements OnInit {
  project: Project | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.project = getProjectBySlug(slug);
    if (!this.project) {
      void this.router.navigate(['/projects']);
    }
  }

  techStackLine(project: Project): string {
    return project.techStack.join(' · ');
  }

  descriptionParagraphs(project: Project): string[] {
    return this.splitDescriptionBlocks(project.longDescription);
  }

  postGalleryParagraphs(project: Project): string[] {
    if (!project.postGalleryLongDescription?.trim()) {
      return [];
    }
    return this.splitDescriptionBlocks(project.postGalleryLongDescription);
  }

  private splitDescriptionBlocks(text: string): string[] {
    return text
      .split(/\n\s*\n/)
      .map(p => p.trim())
      .filter(Boolean);
  }

  galleryImages(project: Project): string[] {
    const urls: string[] = [];
    if (project.screenshot) {
      urls.push(project.screenshot);
    }
    for (const url of project.gallery) {
      if (url && !urls.includes(url)) {
        urls.push(url);
      }
    }
    return urls;
  }

  hasExternalLink(project: Project): boolean {
    return !!project.link && project.link.startsWith('http');
  }

  categoryEyebrow(project: Project): string {
    return projectCategoryEyebrow(project);
  }
}
