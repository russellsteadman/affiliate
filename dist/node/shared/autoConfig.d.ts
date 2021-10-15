declare const AutoConfig: () => {
    tags: {
        hosts: string[];
        query: Record<string, string>;
    }[];
} | undefined;
export default AutoConfig;
