/**
 * ============================================
 * Hash Table – Concept & Basics
 * ============================================
 *
 * A hash table stores key–value pairs using a hash function to achieve average‑case O(1) look‑ups, inserts, and deletes.
 *
 * Big‑O complexity (typical):
 * – Access:    depends
 * – Insert:    depends
 * – Delete:    depends
 *
 * Below is a minimal illustrative implementation.
 */
export class HashTableConcept<T> {
    private data: T[] = [];
    size(): number { return this.data.length; }
    // Add your own basic methods…
}
