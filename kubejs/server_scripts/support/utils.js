const seenRecipeIDs = new Set();

function safeAddRecipe(id, action) {
    if (seenRecipeIDs.has(id)) {
        console.warn(`[Duplicate skipped] ${id}`);
        return;
    }
    seenRecipeIDs.add(id);
    action();
}
