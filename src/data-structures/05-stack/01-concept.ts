/**
 * ============================================
 * Stack – Concept & Basics
 * ============================================
 *
 * A stack is a LIFO (last‑in, first‑out) data structure supporting push and pop in O(1). It’s used in function call stacks, DFS, expression evaluation, etc.
 *
 * Big‑O complexity (typical):
 * – Access:    depends
 * – Insert:    depends
 * – Delete:    depends
 *
 * Below is a minimal illustrative implementation.
 */
export class StackConcept<T> {
    private data: T[] = [];
    size(): number { return this.data.length; }
    // Add your own basic methods…
}
