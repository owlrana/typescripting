/**
 * ============================================
 * Array – Concept & Basics
 * ============================================
 *
 * An array is a contiguous block of memory that stores elements of the same type. It offers O(1) indexed access but costly insertions/deletions inside the array.
 *
 * Big‑O complexity (typical):
 * – Access:    depends
 * – Insert:    depends
 * – Delete:    depends
 *
 * Below is a minimal illustrative implementation.
 */
export class ArrayConcept<T> {
    private data: T[] = [];
    size(): number { return this.data.length; }
    // Add your own basic methods…
}
