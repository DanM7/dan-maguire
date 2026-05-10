import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
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
export class ProjectDetailPageComponent implements OnInit, OnDestroy {
  project: Project | undefined;

  /** Full-screen gallery viewer */
  lightboxOpen = false;
  lightboxIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.project = getProjectBySlug(slug);
    if (!this.project) {
      void this.router.navigate(['/projects']);
    }
  }

  ngOnDestroy(): void {
    this.unlockBodyScroll();
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent): void {
    if (!this.lightboxOpen || !this.project) {
      return;
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeLightbox();
      return;
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.lightboxPrev();
      return;
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.lightboxNext();
    }
  }

  openLightbox(project: Project, index: number): void {
    const images = this.galleryImages(project);
    if (images.length === 0 || index < 0 || index >= images.length) {
      return;
    }
    this.lightboxIndex = index;
    this.lightboxOpen = true;
    this.document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    this.unlockBodyScroll();
  }

  lightboxPrev(): void {
    if (!this.project || this.lightboxIndex <= 0) {
      return;
    }
    this.lightboxIndex--;
  }

  lightboxNext(): void {
    if (!this.project) {
      return;
    }
    const last = this.galleryImages(this.project).length - 1;
    if (this.lightboxIndex >= last) {
      return;
    }
    this.lightboxIndex++;
  }

  lightboxCanPrev(): boolean {
    return this.lightboxOpen && this.lightboxIndex > 0;
  }

  lightboxCanNext(): boolean {
    if (!this.project || !this.lightboxOpen) {
      return false;
    }
    return this.lightboxIndex < this.galleryImages(this.project).length - 1;
  }

  lightboxActiveSrc(): string {
    if (!this.project) {
      return '';
    }
    const urls = this.galleryImages(this.project);
    return urls[this.lightboxIndex] ?? '';
  }

  lightboxImageCount(): number {
    return this.project ? this.galleryImages(this.project).length : 0;
  }

  private unlockBodyScroll(): void {
    this.document.body.style.overflow = '';
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
