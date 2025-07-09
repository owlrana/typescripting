/**
 * ============================================
 * Linked List – Concept & Basics
 * ============================================
 *
 * A linked list is a linear collection of nodes where each node holds a value and a reference to the next node. It allows efficient insertions/deletions but no random access.
 *
 * Big‑O complexity (typical):
 * – Access:    depends
 * – Insert:    depends
 * – Delete:    depends
 *
 * Below is a minimal illustrative implementation.
 */
export class LinkedListConcept<T> {
    private data: T[] = [];
    size(): number { return this.data.length; }
    // Add your own basic methods…
}
