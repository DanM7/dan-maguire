import { Component } from '@angular/core';

@Component({
  selector: 'app-ai-section',
  standalone: true,
  template: `
    <div class="section-card p-6">
      <h4 class="text-xl font-semibold text-white">AI</h4>
      <p class="mt-3 text-slate-300">A dedicated section for AI-driven systems, agents, and intelligent tools that support creative and technical experiences.</p>
      <div class="mt-6 space-y-2 text-slate-400">
        <p>• Role: agent design, data orchestration, and intelligent workflow systems</p>
        <p>• Focus: practical AI experiences that augment creative and engineering work</p>
        <p>• Status: placeholder for the AI section display.</p>
      </div>
    </div>
  `
})
export class AISectionComponent {}