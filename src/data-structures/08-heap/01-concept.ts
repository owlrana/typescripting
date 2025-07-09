/**
 * ============================================
 * Heap – Concept & Basics
 * ============================================
 *
 * A binary heap is a complete binary tree that satisfies the heap property; it’s great for priority queues and HeapSort.
 *
 * Big‑O complexity (typical):
 * – Access:    depends
 * – Insert:    depends
 * – Delete:    depends
 *
 * Below is a minimal illustrative implementation.
 */
export class HeapConcept<T> {
    private data: T[] = [];
    size(): number { return this.data.length; }
    // Add your own basic methods…
}
