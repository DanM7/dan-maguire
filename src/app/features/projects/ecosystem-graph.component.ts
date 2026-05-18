import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ECOSYSTEM_EDGES, ECOSYSTEM_NODE_BOUNDS, ECOSYSTEM_NODES } from './projects.data';
import { EcosystemEdge, EcosystemNode, EcosystemNodeType } from './project.model';

@Component({
  selector: 'app-ecosystem-graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ecosystem-graph.component.html',
  styleUrl: './ecosystem-graph.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class EcosystemGraphComponent {
  /** Extra padding so product row and arrows are not clipped. */
  readonly viewBox = '0 0 1200 688';
  readonly nodes: EcosystemNode[] = ECOSYSTEM_NODES;
  readonly edges: EcosystemEdge[] = ECOSYSTEM_EDGES;

  readonly legendItems: { type: EcosystemNodeType; label: string }[] = [
    { type: 'product', label: 'Product' },
    { type: 'engine', label: 'Engine' },
    { type: 'framework', label: 'Framework' },
    { type: 'tool', label: 'Tool' },
    { type: 'pipeline', label: 'Pipeline' }
  ];

  /** Selected graph node id; click again to clear. */
  selectedId: string | null = null;

  private readonly adjacency = EcosystemGraphComponent.buildAdjacency(ECOSYSTEM_EDGES);

  private static buildAdjacency(edges: EcosystemEdge[]): Map<string, Set<string>> {
    const map = new Map<string, Set<string>>();
    const add = (a: string, b: string) => {
      if (!map.has(a)) {
        map.set(a, new Set());
      }
      map.get(a)!.add(b);
    };
    for (const e of edges) {
      add(e.from, e.to);
      add(e.to, e.from);
    }
    return map;
  }

  bounds(id: string) {
    return ECOSYSTEM_NODE_BOUNDS[id];
  }

  center(id: string): { cx: number; cy: number } {
    const b = ECOSYSTEM_NODE_BOUNDS[id];
    if (!b) {
      return { cx: 0, cy: 0 };
    }
    return { cx: b.x + b.w / 2, cy: b.y + b.h / 2 };
  }

  edgePath(edge: EcosystemEdge): string {
    const a = this.center(edge.from);
    const b = this.center(edge.to);
    return `M ${a.cx} ${a.cy} L ${b.cx} ${b.cy}`;
  }

  edgeTitle(edge: EcosystemEdge): string {
    const parts = [edge.from, edge.to];
    if (edge.label) {
      parts.push(edge.label);
    }
    return parts.join(' → ');
  }

  edgeKey(edge: EcosystemEdge): string {
    return `${edge.from}→${edge.to}`;
  }

  /** Selected node plus all undirected 1-hop neighbors. */
  highlightedNodeIds(): Set<string> {
    const out = new Set<string>();
    if (!this.selectedId) {
      return out;
    }
    out.add(this.selectedId);
    const nbr = this.adjacency.get(this.selectedId);
    if (nbr) {
      for (const id of nbr) {
        out.add(id);
      }
    }
    return out;
  }

  isNodeHighlighted(id: string): boolean {
    return this.highlightedNodeIds().has(id);
  }

  /** Edge lies inside the highlight subgraph (both endpoints highlighted). */
  isEdgeHighlighted(edge: EcosystemEdge): boolean {
    if (!this.selectedId) {
      return false;
    }
    const H = this.highlightedNodeIds();
    return H.has(edge.from) && H.has(edge.to);
  }

  isEdgeDimmed(edge: EcosystemEdge): boolean {
    return !!this.selectedId && !this.isEdgeHighlighted(edge);
  }

  isNodeDimmed(id: string): boolean {
    return !!this.selectedId && !this.isNodeHighlighted(id);
  }

  markerEnd(edge: EcosystemEdge): string {
    if (!this.selectedId) {
      return 'url(#ecosystem-arrow)';
    }
    return this.isEdgeHighlighted(edge) ? 'url(#ecosystem-arrow-active)' : 'url(#ecosystem-arrow-dim)';
  }

  onNodeActivate(id: string, ev: Event): void {
    ev.stopPropagation();
    ev.preventDefault();
    this.selectedId = this.selectedId === id ? null : id;
  }

  clearSelection(): void {
    this.selectedId = null;
  }
}
