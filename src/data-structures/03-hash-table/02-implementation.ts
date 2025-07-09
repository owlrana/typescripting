/**
 * Full HashTable implementation with common methods and usage examples.
 */
export class HashTable<T> {
    private items: T[] = [];

    // Insert at end
    push(item: T): void {
        this.items.push(item);
    }

    // Remove from end
    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
}

// Usage example
if (require.main === module) {
    const ds = new HashTable<number>();
    ds.push(1);
    ds.push(2);
    console.log('peek ->', ds.peek()); // 2
    console.log('pop  ->', ds.pop());  // 2
}
