export function ErrorMessage({ error }: { error: Error | null | string }) {
    if (!error) return null;

    return (
        <div className="mb-4 rounded-md bg-red-50 -p3 text-red-600">
            {error instanceof Error ? error.message : error}
        </div>
    );
}